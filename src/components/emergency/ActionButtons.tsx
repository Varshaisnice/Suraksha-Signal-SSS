
import React from "react";
import { Button } from "@/components/ui/button";
import { Bell, Loader2, SendHorizontal } from "lucide-react";
import { testEmergencyAlert } from "@/utils/twilioService";
import { alertTranslations, LanguageOption } from "./translations";

interface ActionButtonsProps {
  isSending: boolean;
  handleSendAlert: () => void;
  language: LanguageOption;
}

const ActionButtons = ({ isSending, handleSendAlert, language }: ActionButtonsProps) => {
  const text = alertTranslations[language];
  
  return (
    <div className="pt-2 flex flex-wrap gap-3">
      <Button 
        onClick={handleSendAlert}
        disabled={isSending}
        className="bg-red-600 hover:bg-red-700 flex items-center gap-2"
      >
        {isSending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <SendHorizontal className="h-4 w-4" />
            {text.sendButton}
          </>
        )}
      </Button>
      
      <Button 
        variant="outline" 
        onClick={testEmergencyAlert}
        className="border-red-300 text-red-600"
      >
        <Bell className="h-4 w-4 mr-1" />
        {text.testButton}
      </Button>
    </div>
  );
};

export default ActionButtons;
