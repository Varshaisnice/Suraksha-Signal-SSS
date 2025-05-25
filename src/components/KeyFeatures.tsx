
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, MapPin, User, Search, AlertCircle, Share2 } from "lucide-react";

interface KeyFeaturesProps {
  language: string;
}

const KeyFeatures = ({ language }: KeyFeaturesProps) => {
  const translations = {
    english: {
      title: "Key Features",
      feature1: "Real-time Alerts",
      feature1Desc: "Get instant notifications about missing children in your area",
      feature2: "Report Sightings",
      feature2Desc: "Help reunite families by reporting sightings with photos",
      feature3: "Community Network",
      feature3Desc: "Connect with NGOs, law enforcement and concerned citizens",
      feature4: "Quick Search",
      feature4Desc: "Search based on location, age, or physical characteristics",
      feature5: "Artificial Intelligence",
      feature5Desc: "AI-powered face recognition to match missing children reports",
      feature6: "Easy Sharing",
      feature6Desc: "Share alerts instantly on social media and messaging apps"
    },
    hindi: {
      title: "मुख्य विशेषताएँ",
      feature1: "तत्काल अलर्ट",
      feature1Desc: "अपने क्षेत्र में लापता बच्चों के बारे में तुरंत सूचनाएँ प्राप्त करें",
      feature2: "देखे जाने की सूचना दें",
      feature2Desc: "फोटो के साथ देखे जाने की रिपोर्ट करके परिवारों को फिर से मिलाने में मदद करें",
      feature3: "सामुदायिक नेटवर्क",
      feature3Desc: "NGO, कानून प्रवर्तन और संबंधित नागरिकों से जुड़ें",
      feature4: "त्वरित खोज",
      feature4Desc: "स्थान, आयु या शारीरिक विशेषताओं के आधार पर खोजें",
      feature5: "कृत्रिम बुद्धिमत्ता",
      feature5Desc: "लापता बच्चों की रिपोर्ट मिलान के लिए AI संचालित चेहरे की पहचान",
      feature6: "आसान साझाकरण",
      feature6Desc: "अलर्ट को सोशल मीडिया और मैसेजिंग ऐप पर तुरंत साझा करें"
    },
    kannada: {
      title: "ಪ್ರಮುಖ ವೈಶಿಷ್ಟ್ಯಗಳು",
      feature1: "ರಿಯಲ್-ಟೈಮ್ ಅಲರ್ಟ್‌ಗಳು",
      feature1Desc: "ನಿಮ್ಮ ಪ್ರದೇಶದಲ್ಲಿ ಕಾಣೆಯಾದ ಮಕ್ಕಳ ಬಗ್ಗೆ ತಕ್ಷಣದ ಸೂಚನೆಗಳನ್ನು ಪಡೆಯಿರಿ",
      feature2: "ನೋಡಿದ ವರದಿಗಳು",
      feature2Desc: "ಫೋಟೋಗಳೊಂದಿಗೆ ನೋಡಿದ ವರದಿಗಳನ್ನು ಮಾಡುವ ಮೂಲಕ ಕುಟುಂಬಗಳನ್ನು ಮರು ಸೇರಿಸಲು ಸಹಾಯ ಮಾಡಿ",
      feature3: "ಸಮುದಾಯ ನೆಟ್‌ವರ್ಕ್",
      feature3Desc: "NGO, ಕಾನೂನು ಜಾರಿ ಮತ್ತು ಆಸಕ್ತ ನಾಗರಿಕರೊಂದಿಗೆ ಸಂಪರ್ಕ ಹೊಂದಿ",
      feature4: "ತ್ವರಿತ ಹುಡುಕಾಟ",
      feature4Desc: "ಸ್ಥಳ, ವಯಸ್ಸು ಅಥವಾ ದೈಹಿಕ ಗುಣಲಕ್ಷಣಗಳ ಆಧಾರದ ಮೇಲೆ ಹುಡುಕಿ",
      feature5: "ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ",
      feature5Desc: "ಕಾಣೆಯಾದ ಮಕ್ಕಳ ವರದಿಗಳನ್ನು ಹೊಂದಿಸಲು AI ಆಧಾರಿತ ಮುಖ ಗುರುತಿಸುವಿಕೆ",
      feature6: "ಸುಲಭ ಹಂಚಿಕೆ",
      feature6Desc: "ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ ಮತ್ತು ಮೆಸೇಜಿಂಗ್ ಅಪ್ಲಿಕೇಶನ್‌ಗಳಲ್ಲಿ ಅಲರ್ಟ್‌ಗಳನ್ನು ತಕ್ಷಣವೇ ಹಂಚಿಕೊಳ್ಳಿ"
    }
  };

  const text = translations[language === "english" ? "english" : language === "hindi" ? "hindi" : "kannada"];

  const features = [
    { title: text.feature1, desc: text.feature1Desc, icon: Bell, color: "text-red-500" },
    { title: text.feature2, desc: text.feature2Desc, icon: MapPin, color: "text-amber-500" },
    { title: text.feature3, desc: text.feature3Desc, icon: User, color: "text-blue-500" },
    { title: text.feature4, desc: text.feature4Desc, icon: Search, color: "text-green-500" },
    { title: text.feature5, desc: text.feature5Desc, icon: AlertCircle, color: "text-purple-500" },
    { title: text.feature6, desc: text.feature6Desc, icon: Share2, color: "text-pink-500" },
  ];

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-center mb-6">{text.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <feature.icon className={`h-5 w-5 ${feature.color}`} />
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.desc}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
