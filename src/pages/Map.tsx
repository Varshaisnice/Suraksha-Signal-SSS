import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertTriangle, ArrowLeft, MapPin, Search, Send } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { sendSMSAlert } from "@/utils/smsService";
import EmergencyContactsManager from "@/components/EmergencyContactsManager";
import EmergencyAlertSender from "@/components/EmergencyAlertSender";
import SimpleGoogleMap from "@/components/SimpleGoogleMap";
import { getAllMissingChildren, MissingChild } from "@/services/missingChildrenData";

const Map = () => {
  const [selectedAlert, setSelectedAlert] = useState<MissingChild | null>(null);
  const [isSendingAlert, setIsSendingAlert] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>("english");

  // Get all missing children data
  const alerts = getAllMissingChildren();

  // Prepare markers for the map
  const mapMarkers = alerts.map(alert => ({
    position: alert.coordinates,
    title: `${alert.name.english}, ${alert.age}`
  }));

  const handleSendSMSAlert = async (alertId: number) => {
    const alert = alerts.find(a => a.id === alertId);
    if (!alert) return;
    
    setIsSendingAlert(true);
    
    try {
      const result = await sendSMSAlert({
        name: alert.name.english,
        age: alert.age,
        location: alert.location.english,
        date: alert.date.english
      });
      
      if (result.success) {
        toast({
          title: "Alert Sent Successfully",
          description: result.message,
        });
      } else {
        toast({
          title: "Failed to Send Alert",
          description: result.message,
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Error sending SMS alert:", error);
      toast({
        title: "Error",
        description: "Failed to send SMS alert. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSendingAlert(false);
    }
  };

  const handleSelectAlert = (alert: MissingChild) => {
    setSelectedAlert(alert);
  };

  // Language selection options
  const languageOptions = [
    { value: "english", label: "English" },
    { value: "hindi", label: "हिंदी (Hindi)" },
    { value: "kannada", label: "ಕನ್ನಡ (Kannada)" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center gap-2">
              <label htmlFor="language-select" className="text-sm font-medium mr-2">
                Language:
              </label>
              <select
                id="language-select"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="border rounded px-2 py-1 text-sm"
              >
                {languageOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-6">
          <MapPin className="h-6 w-6 text-red-600" />
          <h1 className="text-2xl font-bold">Missing Children Map</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Search Area</CardTitle>
                <CardDescription>Find alerts in specific locations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="relative">
                    <Input
                      type="search"
                      placeholder="Search for a location"
                      className="pr-10"
                    />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                  
                  <div>
                    <label htmlFor="radius" className="block text-sm font-medium text-gray-700 mb-1">
                      Search Radius (km)
                    </label>
                    <Input
                      id="radius"
                      type="number"
                      defaultValue={10}
                      min={1}
                      max={100}
                    />
                  </div>
                  
                  <Button className="w-full">
                    Apply Filters
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <EmergencyAlertSender 
              language={language}
              selectedAlert={selectedAlert || undefined}
            />
            
            <EmergencyContactsManager language={language} />
            
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Alerts in View</h2>
              {alerts.slice(0, 5).map((alert) => (
                <Card 
                  key={alert.id} 
                  className={`cursor-pointer hover:shadow-md transition-shadow ${
                    selectedAlert?.id === alert.id ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => handleSelectAlert(alert)}
                >
                  <div className="flex p-4">
                    <div className="h-16 w-16 rounded-md overflow-hidden flex-shrink-0 mr-4">
                      <img 
                        src={alert.image} 
                        alt={alert.name.english}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{alert.name[language]}, {alert.age}</h3>
                      <p className="text-sm text-gray-500">{alert.location[language]}</p>
                      <p className="text-xs text-gray-400">
                        {language === "english" ? "Missing since" : 
                         language === "hindi" ? "गुमशुदगी की तारीख" : 
                         "ನಾಪತ್ತೆಯಾದ ದಿನಾಂಕ"} {alert.date[language]}
                      </p>
                      
                      <Button 
                        variant="secondary" 
                        size="sm" 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSendSMSAlert(alert.id);
                        }}
                        disabled={isSendingAlert && selectedAlert?.id === alert.id}
                        className="mt-2 w-full flex items-center justify-center gap-1"
                      >
                        <Send className="h-3 w-3" />
                        {isSendingAlert && selectedAlert?.id === alert.id ? "Sending..." : "Send SMS Alert"}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
              {alerts.length > 5 && (
                <div className="w-full">
                  <Link to="/alerts">
                    <Button 
                      variant="outline" 
                      className="w-full"
                    >
                      View All Alerts ({alerts.length})
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <Card className="h-full">
              <SimpleGoogleMap 
                markers={mapMarkers}
                height="600px"
              />
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Map;
