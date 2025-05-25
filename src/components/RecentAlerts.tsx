
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2, MapPin, ArrowRight, AlertTriangle } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import { getAllMissingChildren } from "@/services/missingChildrenData";
import { testEmergencyAlert } from "@/utils/twilioService";

interface AlertProps {
  language: string;
}

const RecentAlerts = ({ language }: AlertProps) => {
  // Get alerts from our data service
  const allAlerts = getAllMissingChildren();
  // Display the 10 most recent alerts (increased from 8)
  const alerts = allAlerts.slice(0, 10);

  const viewMoreText = {
    english: "View More Details",
    hindi: "अधिक विवरण देखें",
    kannada: "ಹೆಚ್ಚಿನ ವಿವರಗಳನ್ನು ನೋಡಿ"
  };

  const shareText = {
    english: "Share",
    hindi: "साझा करें",
    kannada: "ಹಂಚಿಕೊಳ್ಳಿ"
  };

  const emergencyText = {
    english: "Emergency",
    hindi: "आपातकालीन",
    kannada: "ತುರ್ತು"
  };

  const urgentText = {
    english: "URGENT",
    hindi: "जरूरी",
    kannada: "ತುರ್ತು"
  };

  const missingSinceText = {
    english: "Missing since:",
    hindi: "गुमशुदगी की तारीख:",
    kannada: "ನಾಪತ್ತೆಯಾದ ದಿನಾಂಕ:"
  };

  const handleShare = (id: number, name: string, location: string, lang: string) => {
    const messages = {
      english: "Alert has been shared with your contacts",
      hindi: "अलर्ट आपके संपर्कों के साथ साझा किया गया है",
      kannada: "ಎಚ್ಚರಿಕೆಯನ್ನು ನಿಮ್ಮ ಸಂಪರ್ಕಗಳೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳಲಾಗಿದೆ"
    };

    const titles = {
      english: "Alert Shared",
      hindi: "अलर्ट साझा किया गया",
      kannada: "ಎಚ್ಚರಿಕೆ ಹಂಚಿಕೊಳ್ಳಲಾಗಿದೆ"
    };

    // Create WhatsApp sharing URL
    const alertName = name;
    const alertLocation = location;
    const alertUrl = `${window.location.origin}/alerts/${id}`;
    
    const whatsappText = encodeURIComponent(
      `URGENT: Missing Child Alert!\n\n${alertName} has been reported missing at ${alertLocation}.\n\nView details and help: ${alertUrl}`
    );
    const whatsappUrl = `https://wa.me/?text=${whatsappText}`;
    
    // Open WhatsApp sharing in new window
    window.open(whatsappUrl, '_blank');

    toast({
      title: titles[lang === "english" ? "english" : lang === "hindi" ? "hindi" : "kannada"],
      description: messages[lang === "english" ? "english" : lang === "hindi" ? "hindi" : "kannada"],
    });
  };

  const handleTestEmergencyAlert = () => {
    testEmergencyAlert();
  };

  const lang = language === "english" ? "english" : language === "hindi" ? "hindi" : "kannada";

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold">
          {language === "english" ? "Recent Alerts" : language === "hindi" ? "हालिया अलर्ट्स" : "ಇತ್ತೀಚಿನ ಎಚ್ಚರಿಕೆಗಳು"}
        </h2>
        <Button 
          variant="outline" 
          className="flex items-center gap-1 border-red-300 text-red-600 hover:bg-red-50"
          onClick={handleTestEmergencyAlert}
        >
          <AlertTriangle className="h-4 w-4" />
          {emergencyText[lang]}
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {alerts.map((alert) => (
          <Card key={alert.id} className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={alert.image} 
                alt={alert.name[lang]} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs">
                {urgentText[lang]}
              </div>
            </div>
            <CardHeader>
              <CardTitle>
                <div className="flex justify-between">
                  <span>{alert.name[lang]}, {alert.age}</span>
                  <span className="text-sm text-gray-500">{alert.gender[lang]}</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-2 mb-2">
                <MapPin className="h-4 w-4 text-red-600 mt-1 flex-shrink-0" />
                <p className="text-gray-600 text-sm">
                  {alert.location[lang]}
                </p>
              </div>
              <p className="text-sm mb-2">
                <span className="font-medium">
                  {missingSinceText[lang]}
                </span> {alert.date[lang]}
              </p>
              <p className="text-sm line-clamp-2">
                {alert.description[lang]}
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleShare(alert.id, alert.name[lang], alert.location[lang], lang)}
                  className="flex gap-1 items-center"
                >
                  <Share2 className="h-4 w-4" />
                  {shareText[lang]}
                </Button>
              </div>
              <Link to={`/alerts/${alert.id}`}>
                <Button 
                  size="sm"
                  className="flex gap-1 items-center"
                >
                  {viewMoreText[lang]}
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      {allAlerts.length > 10 && (
        <div className="mt-6 text-center">
          <Link to="/alerts">
            <Button variant="outline">
              View All Alerts ({allAlerts.length})
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default RecentAlerts;
