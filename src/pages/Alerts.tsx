
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Share2, MapPin, ArrowLeft, Search, AlertTriangle, Bell } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { getAllMissingChildren, MissingChild } from "@/services/missingChildrenData";

const Alerts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Get all alerts from our data service
  const allAlerts = getAllMissingChildren();

  // Languages
  const [language, setLanguage] = useState("english");
  const lang = language === "english" ? "english" : language === "hindi" ? "hindi" : "kannada";

  const [filters, setFilters] = useState({
    state: "all",
    gender: "all",
    ageGroup: "all",
  });

  const filteredAlerts = allAlerts.filter(alert => {
    // Search query filter
    if (searchQuery && 
      !alert.name[lang].toLowerCase().includes(searchQuery.toLowerCase()) &&
      !alert.location[lang].toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Gender filter
    if (filters.gender !== "all" && 
        alert.gender[lang].toLowerCase() !== filters.gender.toLowerCase()) {
      return false;
    }
    
    // Age group filter
    if (filters.ageGroup !== "all") {
      if (filters.ageGroup === "0-5" && (alert.age < 0 || alert.age > 5)) return false;
      if (filters.ageGroup === "6-10" && (alert.age < 6 || alert.age > 10)) return false;
      if (filters.ageGroup === "11-17" && (alert.age < 11 || alert.age > 17)) return false;
    }
    
    return true;
  });

  const handleShare = (id: number, name: string, location: string) => {
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
    
    // Localized toast messages
    const toastTitles = {
      "english": "Alert Shared",
      "hindi": "अलर्ट साझा किया गया",
      "kannada": "ಎಚ್ಚರಿಕೆ ಹಂಚಿಕೊಳ್ಳಲಾಗಿದೆ"
    };
    
    const toastMessages = {
      "english": "Alert has been shared with your contacts",
      "hindi": "अलर्ट आपके संपर्कों के साथ साझा किया गया है",
      "kannada": "ಎಚ್ಚರಿಕೆಯನ್ನು ನಿಮ್ಮ ಸಂಪರ್ಕಗಳೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳಲಾಗಿದೆ"
    };
    
    toast({
      title: toastTitles[lang],
      description: toastMessages[lang],
    });
  };

  // Translations for UI elements
  const translations = {
    english: {
      backToHome: "Back to Home",
      searchPlaceholder: "Search by name or location",
      alertsTitle: "Missing Children Alerts",
      subscribeButton: "Subscribe to Alerts",
      filterAlerts: "Filter Alerts",
      language: "Language",
      gender: "Gender",
      allGenders: "All Genders",
      male: "Male",
      female: "Female",
      ageGroup: "Age Group",
      allAges: "All Ages", 
      share: "Share",
      viewDetails: "View Details",
      noAlertsFound: "No alerts found",
      changeCriteria: "Try changing your search criteria or check back later.",
      urgent: "URGENT"
    },
    hindi: {
      backToHome: "होम पेज पर वापस जाएं",
      searchPlaceholder: "नाम या स्थान से खोजें",
      alertsTitle: "लापता बच्चों के अलर्ट",
      subscribeButton: "अलर्ट सब्सक्राइब करें",
      filterAlerts: "अलर्ट फ़िल्टर करें",
      language: "भाषा",
      gender: "लिंग",
      allGenders: "सभी लिंग",
      male: "पुरुष",
      female: "महिला",
      ageGroup: "आयु समूह",
      allAges: "सभी आयु",
      share: "साझा करें",
      viewDetails: "विवरण देखें",
      noAlertsFound: "कोई अलर्ट नहीं मिला",
      changeCriteria: "अपने खोज मानदंड बदलें या बाद में फिर से देखें।",
      urgent: "जरूरी"
    },
    kannada: {
      backToHome: "ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ",
      searchPlaceholder: "ಹೆಸರು ಅಥವಾ ಸ್ಥಳದ ಮೂಲಕ ಹುಡುಕಿ",
      alertsTitle: "ಕಾಣೆಯಾದ ಮಕ್ಕಳ ಎಚ್ಚರಿಕೆಗಳು",
      subscribeButton: "ಎಚ್ಚರಿಕೆಗಳಿಗೆ ಚಂದಾದಾರರಾಗಿ",
      filterAlerts: "ಎಚ್ಚರಿಕೆಗಳನ್ನು ಫಿಲ್ಟರ್ ಮಾಡಿ",
      language: "ಭಾಷೆ",
      gender: "ಲಿಂಗ",
      allGenders: "ಎಲ್ಲಾ ಲಿಂಗಗಳು",
      male: "ಪುರುಷ",
      female: "ಹೆಣ್ಣು",
      ageGroup: "ವಯಸ್ಸಿನ ಗುಂಪು",
      allAges: "ಎಲ್ಲಾ ವಯಸ್ಸುಗಳು",
      share: "ಹಂಚಿಕೊಳ್ಳಿ",
      viewDetails: "ವಿವರಗಳನ್ನು ನೋಡಿ",
      noAlertsFound: "ಯಾವುದೇ ಎಚ್ಚರಿಕೆಗಳು ಕಂಡುಬಂದಿಲ್ಲ",
      changeCriteria: "ನಿಮ್ಮ ಹುಡುಕಾಟ ಮಾನದಂಡವನ್ನು ಬದಲಾಯಿಸಲು ಪ್ರಯತ್ನಿಸಿ ಅಥವಾ ನಂತರ ಮತ್ತೆ ಪರಿಶೀಲಿಸಿ.",
      urgent: "ತುರ್ತು"
    }
  };

  const text = translations[lang];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto p-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-2">
              <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80">
                <ArrowLeft className="h-4 w-4" />
                <span>{text.backToHome}</span>
              </Link>
            </div>
            <div className="w-full md:w-auto flex items-center gap-2">
              <div className="relative flex-1 md:min-w-[300px]">
                <Input
                  type="search"
                  placeholder={text.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-10"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-red-600" />
            <h1 className="text-2xl font-bold">{text.alertsTitle}</h1>
          </div>
          <Button className="bg-red-600 hover:bg-red-700 flex items-center gap-2">
            <Bell className="h-4 w-4" /> 
            {text.subscribeButton}
          </Button>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-4 mb-8">
          <h3 className="text-lg font-semibold mb-3">{text.filterAlerts}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
                {text.language}
              </label>
              <select 
                id="language" 
                className="border border-gray-300 rounded-md w-full p-2"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="english">English</option>
                <option value="hindi">हिंदी (Hindi)</option>
                <option value="kannada">ಕನ್ನಡ (Kannada)</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                {text.gender}
              </label>
              <select 
                id="gender" 
                className="border border-gray-300 rounded-md w-full p-2"
                value={filters.gender}
                onChange={(e) => setFilters({...filters, gender: e.target.value})}
              >
                <option value="all">{text.allGenders}</option>
                <option value="male">{text.male}</option>
                <option value="female">{text.female}</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="ageGroup" className="block text-sm font-medium text-gray-700 mb-1">
                {text.ageGroup}
              </label>
              <select 
                id="ageGroup" 
                className="border border-gray-300 rounded-md w-full p-2"
                value={filters.ageGroup}
                onChange={(e) => setFilters({...filters, ageGroup: e.target.value})}
              >
                <option value="all">{text.allAges}</option>
                <option value="0-5">0-5 {language === "english" ? "years" : language === "hindi" ? "साल" : "ವರ್ಷಗಳು"}</option>
                <option value="6-10">6-10 {language === "english" ? "years" : language === "hindi" ? "साल" : "ವರ್ಷಗಳು"}</option>
                <option value="11-17">11-17 {language === "english" ? "years" : language === "hindi" ? "साल" : "ವರ್ಷಗಳು"}</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlerts.length > 0 ? (
            filteredAlerts.map((alert) => (
              <Card key={alert.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={alert.image} 
                    alt={alert.name[lang]} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs">
                    {text.urgent}
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
                      {language === "english" ? "Missing since:" : language === "hindi" ? "गुमशुदगी की तारीख:" : "ನಾಪತ್ತೆಯಾದ ದಿನಾಂಕ:"}
                    </span> {alert.date[lang]}
                  </p>
                  <p className="text-sm line-clamp-3">
                    {alert.description[lang]}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleShare(alert.id, alert.name[lang], alert.location[lang])}
                    className="flex gap-1 items-center"
                  >
                    <Share2 className="h-4 w-4" />
                    {text.share}
                  </Button>
                  <Link to={`/alerts/${alert.id}`}>
                    <Button size="sm">
                      {text.viewDetails}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <AlertTriangle className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <h3 className="text-lg font-medium text-gray-900">{text.noAlertsFound}</h3>
              <p className="mt-1 text-sm text-gray-500">
                {text.changeCriteria}
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Alerts;
