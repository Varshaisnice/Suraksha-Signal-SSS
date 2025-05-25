
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Bell, AlertTriangle, Info } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import RecentAlerts from "@/components/RecentAlerts";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import EmergencyContacts from "@/components/EmergencyContacts";
import AppOverview from "@/components/AppOverview";

const Index = () => {
  const [language, setLanguage] = useState("english");

  const handleNotificationTest = () => {
    toast({
      title: language === "english" ? "Alert Notification" : 
             language === "hindi" ? "सतर्कता सूचना" : "ಎಚ್ಚರಿಕೆ ಅಧಿಸೂಚನೆ",
      description: language === "english" 
        ? "This is how alerts will appear on your device" 
        : language === "hindi"
        ? "आपके डिवाइस पर अलर्ट इस प्रकार दिखाई देंगे"
        : "ನಿಮ್ಮ ಸಾಧನದಲ್ಲಿ ಎಚ್ಚರಿಕೆಗಳು ಹೀಗೆ ಕಾಣಿಸುತ್ತವೆ",
      variant: "destructive",
    });
  };

  const translations = {
    english: {
      tagline: "Because every child deserves to come home",
      description: "A unified alert system for missing children in India",
      reportButton: "Report Missing",
      alertsButton: "View Alerts",
      registerButton: "Register",
      loginButton: "Login",
      recentAlertsTitle: "Recent Alerts",
    },
    hindi: {
      tagline: "क्योंकि हर बच्चा घर आने का हकदार है",
      description: "भारत में लापता बच्चों के लिए एक एकीकृत अलर्ट सिस्टम",
      reportButton: "गुमशुदगी दर्ज करें",
      alertsButton: "अलर्ट देखें",
      registerButton: "रजिस्टर करें",
      loginButton: "लॉगिन करें",
      recentAlertsTitle: "हालिया अलर्ट",
    },
    kannada: {
      tagline: "ಪ್ರತಿಯೊಬ್ಬ ಮಗು ಮನೆಗೆ ಬರಲು ಅರ್ಹವಾಗಿದೆ",
      description: "ಭಾರತದಲ್ಲಿ ಕಾಣೆಯಾದ ಮಕ್ಕಳಿಗಾಗಿ ಏಕೀಕೃತ ಎಚ್ಚರಿಕೆ ವ್ಯವಸ್ಥೆ",
      reportButton: "ನಾಪತ್ತೆ ವರದಿ ಮಾಡಿ",
      alertsButton: "ಎಚ್ಚರಿಕೆಗಳನ್ನು ನೋಡಿ",
      registerButton: "ನೋಂದಣಿ",
      loginButton: "ಲಾಗಿನ್",
      recentAlertsTitle: "ಇತ್ತೀಚಿನ ಎಚ್ಚರಿಕೆಗಳು",
    }
  };

  const text = translations[language === "english" ? "english" : language === "hindi" ? "hindi" : "kannada"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <Navbar language={language} onLanguageChange={setLanguage} />

      <main className="container mx-auto px-4 py-8">
        <div className="w-full">
          <HeroSection
            title="Suraksha Signal"
            tagline={text.tagline}
            description={text.description}
            onNotificationTest={handleNotificationTest}
          />
        </div>

        <section className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/report" className="block h-full">
              <Card className="h-full hover:shadow-lg transition-shadow hover:-translate-y-1 duration-300">
                <CardHeader className="bg-red-500 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    {text.reportButton}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p>Report a missing child with details and photos to alert the community.</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/alerts" className="block h-full">
              <Card className="h-full hover:shadow-lg transition-shadow hover:-translate-y-1 duration-300">
                <CardHeader className="bg-amber-500 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    {text.alertsButton}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p>View recent alerts and filter by location to help find missing children.</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/map" className="block h-full">
              <Card className="h-full hover:shadow-lg transition-shadow hover:-translate-y-1 duration-300">
                <CardHeader className="bg-blue-500 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Map View
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p>See the geographic distribution of alerts and reported sightings.</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/about" className="block h-full">
              <Card className="h-full hover:shadow-lg transition-shadow hover:-translate-y-1 duration-300">
                <CardHeader className="bg-green-500 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5" />
                    About Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p>Learn about how Suraksha Signal works and our impact on finding missing children.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">{text.recentAlertsTitle}</h2>
          <RecentAlerts language={language} />
        </section>

        <EmergencyContacts language={language} />
      </main>

      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Suraksha Signal</h3>
              <p>A unified alert system for missing children in India</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p>Email: help@surakshasignal.org</p>
              <p>Emergency Helpline: 1098</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Partners</h3>
              <p>National Commission for Protection of Child Rights</p>
              <p>Ministry of Women and Child Development</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2025 Suraksha Signal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
