
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Megaphone } from "lucide-react";
import { getEmergencyContacts } from "@/utils/smsService";
import { sendTwilioAlert } from "@/utils/twilioService";
import { MissingChild } from "@/services/missingChildrenData";
import { toast } from "@/components/ui/use-toast";
import { alertTranslations, LanguageOption } from "./translations";
import AlertSoundToggle from "./AlertSoundToggle";
import UrgencyLevelSelector from "./UrgencyLevelSelector";
import SendResultAlert from "./SendResultAlert";
import ActionButtons from "./ActionButtons";
import NoAlertSelected from "./NoAlertSelected";

interface EmergencyAlertSenderProps {
  language: string;
  selectedAlert?: MissingChild;
}

const EmergencyAlertSender = ({ language, selectedAlert }: EmergencyAlertSenderProps) => {
  const [isSending, setIsSending] = useState(false);
  const [playSound, setPlaySound] = useState(false); // Default to false - don't play sound
  const [urgencyLevel, setUrgencyLevel] = useState<"high" | "medium" | "low">("high");
  const [lastSendResult, setLastSendResult] = useState<{
    success: boolean;
    totalSent: number;
    totalFailed: number;
  } | null>(null);
  
  const currentLanguage = language as LanguageOption;
  const text = alertTranslations[currentLanguage];
  const contacts = getEmergencyContacts();

  const handleSendAlert = async () => {
    if (!selectedAlert) return;
    
    setIsSending(true);
    setLastSendResult(null);
    
    try {
      const lang = language === "english" ? "english" : language === "hindi" ? "hindi" : "kannada";
      
      const result = await sendTwilioAlert(
        {
          name: selectedAlert.name[lang],
          age: selectedAlert.age,
          location: selectedAlert.location[lang],
          date: selectedAlert.date[lang],
          urgencyLevel
        },
        contacts,
        playSound // This will be false by default now
      );
      
      setLastSendResult({
        success: result.success,
        totalSent: result.totalSent,
        totalFailed: result.totalFailed
      });
      
      // Show a status toast
      if (result.success) {
        toast({
          title: "Alert Sent Successfully",
          description: `${result.totalSent} SMS alerts sent to emergency contacts.`,
        });
      } else {
        toast({
          title: "Alert Sending Failed",
          description: `Failed to send SMS alerts. ${result.message}`,
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Error sending emergency alert:", error);
      setLastSendResult({
        success: false,
        totalSent: 0,
        totalFailed: contacts.length
      });
      toast({
        title: "Error",
        description: "An unexpected error occurred while sending alerts.",
        variant: "destructive"
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Card className="border-red-200 hover:shadow-md transition-shadow">
      <CardHeader className="bg-gradient-to-r from-red-50 to-red-100 rounded-t-lg">
        <Badge variant="destructive" className="w-fit mb-2">Emergency</Badge>
        <CardTitle className="flex items-center gap-2">
          <Megaphone className="h-5 w-5 text-red-600" />
          {text.title}
        </CardTitle>
        <CardDescription>{text.description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        {selectedAlert ? (
          <>
            <div className="space-y-4">
              <AlertSoundToggle 
                playSound={playSound}
                setPlaySound={setPlaySound}
                language={currentLanguage}
              />
              
              <UrgencyLevelSelector 
                urgencyLevel={urgencyLevel}
                setUrgencyLevel={setUrgencyLevel}
                language={currentLanguage}
              />
              
              {lastSendResult && (
                <SendResultAlert result={lastSendResult} />
              )}
              
              <ActionButtons 
                isSending={isSending}
                handleSendAlert={handleSendAlert}
                language={currentLanguage}
              />
              
              <p className="text-sm text-muted-foreground mt-2">
                Alert will be sent to {contacts.length} {text.contacts}
              </p>
            </div>
          </>
        ) : (
          <NoAlertSelected language={currentLanguage} />
        )}
      </CardContent>
    </Card>
  );
};

export default EmergencyAlertSender;
