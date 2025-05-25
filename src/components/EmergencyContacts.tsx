
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Info, Phone } from "lucide-react";

interface EmergencyContactsProps {
  language: string;
}

const EmergencyContacts = ({ language }: EmergencyContactsProps) => {
  const translations = {
    english: {
      title: "Emergency Contacts",
      childline: "CHILDLINE India",
      childlineDesc: "24/7 emergency helpline for children in distress",
      police: "Police Helpline",
      policeDesc: "For immediate police assistance",
      call: "Call",
      moreInfo: "More Information",
    },
    hindi: {
      title: "आपातकालीन संपर्क",
      childline: "चाइल्डलाइन इंडिया",
      childlineDesc: "संकट में बच्चों के लिए 24/7 आपातकालीन हेल्पलाइन",
      police: "पुलिस हेल्पलाइन",
      policeDesc: "तत्काल पुलिस सहायता के लिए",
      call: "कॉल करें",
      moreInfo: "अधिक जानकारी",
    },
    kannada: {
      title: "ತುರ್ತು ಸಂಪರ್ಕಗಳು",
      childline: "ಚೈಲ್ಡ್‌ಲೈನ್ ಇಂಡಿಯಾ",
      childlineDesc: "ಸಂಕಷ್ಟದಲ್ಲಿರುವ ಮಕ್ಕಳಿಗೆ 24/7 ತುರ್ತು ಸಹಾಯವಾಣಿ",
      police: "ಪೊಲೀಸ್ ಸಹಾಯವಾಣಿ",
      policeDesc: "ತಕ್ಷಣದ ಪೊಲೀಸ್ ಸಹಾಯಕ್ಕಾಗಿ",
      call: "ಕರೆ ಮಾಡಿ",
      moreInfo: "ಹೆಚ್ಚಿನ ಮಾಹಿತಿ",
    }
  };

  const text = translations[language === "english" ? "english" : language === "hindi" ? "hindi" : "kannada"];

  return (
    <section className="mt-12 mb-16">
      <h2 className="text-2xl font-bold mb-6">{text.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <Info className="h-5 w-5" />
              {text.childline}
            </CardTitle>
            <CardDescription>{text.childlineDesc}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600 mb-4">1098</div>
            <div className="flex flex-wrap gap-3">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Phone className="h-4 w-4 mr-1" /> {text.call}
              </Button>
              <Button size="sm" variant="outline" className="text-blue-600 border-blue-300">
                {text.moreInfo}
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-red-700">
              <Info className="h-5 w-5" />
              {text.police}
            </CardTitle>
            <CardDescription>{text.policeDesc}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-600 mb-4">112</div>
            <div className="flex flex-wrap gap-3">
              <Button size="sm" className="bg-red-600 hover:bg-red-700">
                <Phone className="h-4 w-4 mr-1" /> {text.call}
              </Button>
              <Button size="sm" variant="outline" className="text-red-600 border-red-300">
                {text.moreInfo}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EmergencyContacts;
