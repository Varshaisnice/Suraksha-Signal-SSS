
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Bell, Calendar, Map, MapPin, Share2, User } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const AlertDetail = () => {
  const { id } = useParams();
  const alertId = parseInt(id || "1");
  
  // Mock data - this would come from an API in a real application
  const alerts = [
    {
      id: 1,
      name: "Aarav Sharma",
      age: 7,
      gender: "Male",
      dateOfBirth: "March 15, 2018",
      missingDate: "May 19, 2025",
      lastSeenTime: "Around 5:30 PM",
      location: "Near Gandhi Park, Delhi",
      landmark: "Close to the south entrance fountain",
      description: "Aarav was last seen wearing a blue t-shirt and black shorts. He has a small scar on his right cheek and was carrying a Spider-Man backpack. He has short black hair and brown eyes.",
      distinguishingFeatures: "Small scar on right cheek, birthmark on left forearm",
      contactName: "Rahul Sharma (Father)",
      contactPhone: "9876543210",
      policeStation: "Connaught Place Police Station",
      fir: "FIR123456",
      image: "https://img.freepik.com/premium-photo/young-kid-with-indian-features-who-appears-be-shocked_731930-167270.jpg",
      status: "Active",
      updatedAt: "May 20, 2025"
    },
    {
      id: 2,
      name: "Priya Patel",
      age: 9,
      gender: "Female",
      dateOfBirth: "July 22, 2016",
      missingDate: "May 18, 2025",
      lastSeenTime: "Around 1:15 PM",
      location: "Sarojini Market, New Delhi",
      landmark: "Near the central fountain area",
      description: "Priya was wearing a pink dress with white flowers and carries a small purple backpack. She has shoulder-length dark hair with a red hair clip. She was shopping with her mother when she went missing.",
      distinguishingFeatures: "Has a small birthmark on her neck",
      contactName: "Meera Patel (Mother)",
      contactPhone: "9876543211",
      policeStation: "Sarojini Nagar Police Station",
      fir: "FIR123457",
      image: "https://th.bing.com/th/id/OIP.CAXZUbttCgTnM9bseud9awHaE7?w=244&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3",
      status: "Active",
      updatedAt: "May 19, 2025"
    },
    {
      id: 3,
      name: "Rahul Kumar",
      age: 11,
      gender: "Male",
      dateOfBirth: "October 10, 2014",
      missingDate: "May 17, 2025",
      lastSeenTime: "Around 3:45 PM",
      location: "Central Park, Jaipur",
      landmark: "Near the children's playground",
      description: "Rahul was wearing his school uniform (white shirt, navy blue pants). He has a birthmark on his left arm. He was last seen playing with friends after school hours.",
      distinguishingFeatures: "Birthmark on left arm, wears glasses",
      contactName: "Vikram Kumar (Father)",
      contactPhone: "9876543212",
      policeStation: "Jaipur Central Police Station",
      fir: "FIR123458",
      image: "https://th.bing.com/th/id/OIP.H3zlochaP7_YskhcPF33FQHaJl?cb=iwp2&pid=ImgDet&w=184&h=237&c=7&dpr=1.3",
      status: "Active",
      updatedAt: "May 18, 2025"
    },
  ];
  
  const alert = alerts.find(a => a.id === alertId) || alerts[0];
  
  const handleShare = () => {
    // Create WhatsApp sharing URL
    const alertName = alert.name;
    const alertLocation = alert.location;
    const alertUrl = window.location.href;
    
    const whatsappText = encodeURIComponent(
      `URGENT: Missing Child Alert!\n\n${alertName} (${alert.age}) has been reported missing at ${alertLocation}.\n\nLast seen: ${alert.missingDate} at ${alert.lastSeenTime}.\n\nDescription: ${alert.description}\n\nView details and help: ${alertUrl}`
    );
    const whatsappUrl = `https://wa.me/?text=${whatsappText}`;
    
    // Open WhatsApp sharing in new window
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Alert Shared",
      description: "This alert has been shared via WhatsApp",
    });
  };
  
  const handleReportSighting = () => {
    toast({
      title: "Report Sighting",
      description: "Thank you for helping. Please provide details about your sighting.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto p-4">
          <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-red-600 p-4 text-white flex items-center justify-between">
            <h1 className="text-xl md:text-2xl font-bold flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Missing Child Alert
            </h1>
            <div className="bg-white text-red-600 px-3 py-1 rounded-full text-xs font-bold">
              URGENT
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            <div className="md:col-span-1">
              <div className="rounded-lg overflow-hidden border-4 border-red-100 shadow-md mb-4">
                <img 
                  src={alert.image} 
                  alt={alert.name} 
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
              
              <div className="flex gap-2 mb-6">
                <Button 
                  onClick={handleShare}
                  className="flex-1 gap-2"
                >
                  <Share2 className="h-4 w-4" /> Share on WhatsApp
                </Button>
                <Button 
                  onClick={handleReportSighting}
                  variant="outline"
                  className="flex-1 gap-2 border-red-300 text-red-600"
                >
                  <MapPin className="h-4 w-4" /> Report Sighting
                </Button>
              </div>
              
              <Card className="mb-6 bg-red-50 border-red-200">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-red-700 mb-2">Emergency Contacts</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Contact Person:</span> {alert.contactName}</p>
                    <p><span className="font-medium">Phone:</span> {alert.contactPhone}</p>
                    <p><span className="font-medium">Police Station:</span> {alert.policeStation}</p>
                    <p><span className="font-medium">FIR Number:</span> {alert.fir}</p>
                    <div className="mt-4">
                      <p className="font-medium">Helplines:</p>
                      <p>CHILDLINE: 1098</p>
                      <p>Police: 112</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Button variant="secondary" className="w-full" asChild>
                <Link to="/map">
                  <Map className="h-4 w-4 mr-2" /> View on Map
                </Link>
              </Button>
            </div>
            
            <div className="md:col-span-2">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">{alert.name}, {alert.age}</h2>
                <div className="flex gap-x-6 gap-y-2 flex-wrap text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4 text-gray-400" />
                    {alert.gender}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    Born: {alert.dateOfBirth}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-red-500" />
                    {alert.location}
                  </div>
                </div>
                
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                  <p className="text-amber-800">
                    <span className="font-semibold">Missing since:</span> {alert.missingDate} at {alert.lastSeenTime}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2 border-b pb-1">Description</h3>
                  <p className="text-gray-600">{alert.description}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2 border-b pb-1">Distinguishing Features</h3>
                  <p className="text-gray-600">{alert.distinguishingFeatures}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-2 border-b pb-1">Last Seen Location</h3>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Address:</span> {alert.location}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Landmark:</span> {alert.landmark}
                </p>
                
                <div className="mt-4 bg-gray-100 h-[200px] rounded-lg flex items-center justify-center">
                  <p className="text-gray-500 text-center">
                    <MapPin className="h-6 w-6 mx-auto mb-2" />
                    Location map would display here
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-2">How You Can Help</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Share this alert with your contacts, especially if they are in or around {alert.location}</li>
                  <li>Report any sightings immediately using the "Report Sighting" button</li>
                  <li>Contact the emergency numbers provided if you have any information</li>
                  <li>Look for this child in your area, especially around schools, parks, and bus stations</li>
                </ul>
              </div>
              
              <div className="mt-6 text-right text-sm text-gray-500">
                <p>Last updated: {alert.updatedAt}</p>
                <p>Alert ID: #{alert.id}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AlertDetail;
