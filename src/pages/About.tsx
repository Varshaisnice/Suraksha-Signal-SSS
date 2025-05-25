
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Bell, MapPin, User, Search, AlertCircle, Share2, Check } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">About Suraksha Signal</h1>
        
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">How It Works</CardTitle>
              <CardDescription>Our comprehensive approach to finding missing children</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <AlertCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Reporting</h3>
                      <p className="text-gray-600">Families can submit detailed reports of missing children, including photos and last seen information.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Bell className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Instant Alerts</h3>
                      <p className="text-gray-600">SMS alerts are automatically sent to registered emergency contacts when a child is reported missing.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Geolocation Tracking</h3>
                      <p className="text-gray-600">View missing children reports on an interactive map to coordinate search efforts efficiently.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Community Network</h3>
                      <p className="text-gray-600">Connect with NGOs, law enforcement, and concerned citizens to expand search efforts.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Search className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Advanced Search</h3>
                      <p className="text-gray-600">Find missing children using filters based on location, age, or physical characteristics.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Share2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Social Sharing</h3>
                      <p className="text-gray-600">Share alerts on social media platforms to increase visibility and chances of finding missing children.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-red-500" />
                  Real-time Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Get instant notifications about missing children in your area</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-amber-500" />
                  Report Sightings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Help reunite families by reporting sightings with photos</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-blue-500" />
                  Community Network
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Connect with NGOs, law enforcement and concerned citizens</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5 text-green-500" />
                  Quick Search
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Search based on location, age, or physical characteristics</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-purple-500" />
                  Artificial Intelligence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>AI-powered face recognition to match missing children reports</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Share2 className="h-5 w-5 text-pink-500" />
                  Easy Sharing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Share alerts instantly on social media and messaging apps</CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Our Impact</CardTitle>
              <CardDescription>Making a difference in the lives of children and families</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-primary/5 p-6 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">250+</div>
                  <p className="text-gray-700">Children successfully reunited with their families</p>
                </div>
                
                <div className="bg-primary/5 p-6 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">15,000+</div>
                  <p className="text-gray-700">Active community members helping in search efforts</p>
                </div>
                
                <div className="bg-primary/5 p-6 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <p className="text-gray-700">Success rate for cases reported within 24 hours</p>
                </div>
              </div>
              
              <div className="bg-green-50 border border-green-100 rounded-lg p-6">
                <h3 className="font-semibold text-lg flex items-center gap-2 mb-3">
                  <Check className="h-5 w-5 text-green-500" />
                  Our Commitment
                </h3>
                <p className="text-gray-700">
                  Suraksha Signal is committed to creating a safer environment for children across India. 
                  We work closely with law enforcement agencies, NGOs, and local communities to ensure 
                  that every missing child report is treated with the urgency it deserves. Our mission 
                  is to bring every missing child back home safely.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
