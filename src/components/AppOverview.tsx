
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Bell, MapPin, Search, Share2, User } from "lucide-react";

interface AppOverviewProps {
  language: string;
}

const AppOverview = ({ language }: AppOverviewProps) => {
  const translations = {
    english: {
      title: "About Suraksha Signal",
      description: "A unified alert system for missing children in India",
      usage: "How It Works",
      usageSteps: [
        "Report a missing child with details and photos",
        "Alerts are sent to registered users in the area",
        "Community members report sightings of the child",
        "Authorities are notified to investigate sightings",
        "Real-time updates are shared with all stakeholders"
      ],
      impact: "Our Impact",
      statistics: {
        alerts: "12,000+",
        found: "8,500+",
        users: "500,000+",
        response: "15 min"
      },
      statisticsLabels: {
        alerts: "Missing Children Reported",
        found: "Children Successfully Found",
        users: "Active Community Members",
        response: "Average Response Time"
      }
    },
    hindi: {
      title: "सुरक्षा सिग्नल के बारे में",
      description: "भारत में लापता बच्चों के लिए एक एकीकृत अलर्ट सिस्टम",
      usage: "यह कैसे काम करता है",
      usageSteps: [
        "विवरण और तस्वीरों के साथ लापता बच्चे की रिपोर्ट करें",
        "क्षेत्र में पंजीकृत उपयोगकर्ताओं को अलर्ट भेजे जाते हैं",
        "समुदाय के सदस्य बच्चे को देखने की सूचना देते हैं",
        "सूचनाओं की जांच के लिए अधिकारियों को सूचित किया जाता है",
        "सभी हितधारकों के साथ रीयल-टाइम अपडेट साझा किए जाते हैं"
      ],
      impact: "हमारा प्रभाव",
      statistics: {
        alerts: "12,000+",
        found: "8,500+",
        users: "500,000+",
        response: "15 मिनट"
      },
      statisticsLabels: {
        alerts: "लापता बच्चों की रिपोर्ट",
        found: "सफलतापूर्वक मिले बच्चे",
        users: "सक्रिय समुदाय सदस्य",
        response: "औसत प्रतिक्रिया समय"
      }
    },
    kannada: {
      title: "ಸುರಕ್ಷಾ ಸಿಗ್ನಲ್ ಬಗ್ಗೆ",
      description: "ಭಾರತದಲ್ಲಿ ಕಾಣೆಯಾದ ಮಕ್ಕಳಿಗಾಗಿ ಏಕೀಕೃತ ಎಚ್ಚರಿಕೆ ವ್ಯವಸ್ಥೆ",
      usage: "ಇದು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ",
      usageSteps: [
        "ವಿವರಗಳು ಮತ್ತು ಫೋಟೋಗಳೊಂದಿಗೆ ಕಾಣೆಯಾದ ಮಗುವನ್ನು ವರದಿ ಮಾಡಿ",
        "ಪ್ರದೇಶದಲ್ಲಿ ನೋಂದಾಯಿತ ಬಳಕೆದಾರರಿಗೆ ಎಚ್ಚರಿಕೆಗಳನ್ನು ಕಳುಹಿಸಲಾಗುತ್ತದೆ",
        "ಸಮುದಾಯದ ಸದಸ್ಯರು ಮಗುವನ್ನು ನೋಡಿದ ಬಗ್ಗೆ ವರದಿ ಮಾಡುತ್ತಾರೆ",
        "ನೋಡಿದ್ದನ್ನು ತನಿಖೆ ಮಾಡಲು ಅಧಿಕಾರಿಗಳಿಗೆ ತಿಳಿಸಲಾಗುತ್ತದೆ",
        "ಎಲ್ಲಾ ಪಾಲುದಾರರೊಂದಿಗೆ ರಿಯಲ್-ಟೈಮ್ ಅಪ್ಡೇಟ್‌ಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಲಾಗುತ್ತದೆ"
      ],
      impact: "ನಮ್ಮ ಪರಿಣಾಮ",
      statistics: {
        alerts: "12,000+",
        found: "8,500+",
        users: "500,000+",
        response: "15 ನಿಮಿಷ"
      },
      statisticsLabels: {
        alerts: "ಕಾಣೆಯಾದ ಮಕ್ಕಳ ವರದಿ",
        found: "ಯಶಸ್ವಿಯಾಗಿ ಪತ್ತೆಯಾದ ಮಕ್ಕಳು",
        users: "ಸಕ್ರಿಯ ಸಮುದಾಯ ಸದಸ್ಯರು",
        response: "ಸರಾಸರಿ ಪ್ರತಿಕ್ರಿಯೆ ಸಮಯ"
      }
    }
  };

  const text = translations[language === "english" ? "english" : language === "hindi" ? "hindi" : "kannada"];

  return (
    <section className="mt-12 mb-16">
      <h2 className="text-2xl font-bold mb-6">{text.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* How it works */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-red-500" />
              {text.usage}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2">
              {text.usageSteps.map((step, index) => (
                <li key={index} className="text-sm text-gray-600">{step}</li>
              ))}
            </ol>
          </CardContent>
        </Card>

        {/* Statistics */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Share2 className="h-5 w-5 text-blue-500" />
              {text.impact}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/10 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-primary">{text.statistics.alerts}</p>
                <p className="text-xs text-gray-600">{text.statisticsLabels.alerts}</p>
              </div>
              <div className="bg-green-100 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-green-600">{text.statistics.found}</p>
                <p className="text-xs text-gray-600">{text.statisticsLabels.found}</p>
              </div>
              <div className="bg-amber-100 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-amber-600">{text.statistics.users}</p>
                <p className="text-xs text-gray-600">{text.statisticsLabels.users}</p>
              </div>
              <div className="bg-purple-100 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-purple-600">{text.statistics.response}</p>
                <p className="text-xs text-gray-600">{text.statisticsLabels.response}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AppOverview;
