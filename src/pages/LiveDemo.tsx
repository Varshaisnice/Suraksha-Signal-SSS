import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Play, Pause, RotateCcw, AlertTriangle, MapPin, Phone, Bell, Users, Video, Upload } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { sendTwilioAlert, playEmergencySound } from "@/utils/twilioService";
import { getAllMissingChildren } from "@/services/missingChildrenData";

const LiveDemo = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [videoUrl, setVideoUrl] = useState("");
  const [uploadedVideo, setUploadedVideo] = useState<File | null>(null);
  const [videoObjectUrl, setVideoObjectUrl] = useState<string | null>(null);
  const [isVideoValid, setIsVideoValid] = useState(false);
  const [demoData, setDemoData] = useState({
    alertsSent: 0,
    smsSent: 0,
    citizenReports: 0,
    childrenFound: 0
  });

  const demoSteps = [
    {
      title: "Child Reported Missing",
      description: "A parent reports their child missing through the platform",
      icon: AlertTriangle,
      color: "text-red-600",
      duration: 3000
    },
    {
      title: "Emergency Alert System Activated",
      description: "System generates emergency alerts with audio notifications",
      icon: Bell,
      color: "text-orange-600",
      duration: 2000
    },
    {
      title: "SMS Alerts Sent",
      description: "Emergency SMS sent to registered contacts and authorities",
      icon: Phone,
      color: "text-blue-600",
      duration: 2500
    },
    {
      title: "Citizen Reports Incoming",
      description: "Community members start reporting sightings and information",
      icon: Users,
      color: "text-purple-600",
      duration: 4000
    },
    {
      title: "Location Update",
      description: "Real-time location updates from citizen reports",
      icon: MapPin,
      color: "text-green-600",
      duration: 2000
    },
    {
      title: "Child Found Safe",
      description: "Successful recovery - child reunited with family",
      icon: AlertTriangle,
      color: "text-green-600",
      duration: 3000
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isRunning) {
      interval = setInterval(() => {
        if (currentStep < demoSteps.length - 1) {
          setCurrentStep(prev => prev + 1);
          handleStepAction(currentStep + 1);
        } else {
          setIsRunning(false);
          setCurrentStep(0);
          toast({
            title: "🎉 Demo Complete!",
            description: "Live demo simulation completed successfully.",
            variant: "default"
          });
        }
      }, demoSteps[currentStep]?.duration || 3000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, currentStep]);

  const handleStepAction = async (step: number) => {
    const alerts = getAllMissingChildren();
    const demoAlert = alerts[0];
    
    switch (step) {
      case 0:
        setDemoData(prev => ({ ...prev, alertsSent: prev.alertsSent + 1 }));
        toast({
          title: "🚨 MISSING CHILD ALERT",
          description: `${demoAlert.name.english}, age ${demoAlert.age}, reported missing at ${demoAlert.location.english}`,
          variant: "destructive"
        });
        break;
        
      case 1:
        playEmergencySound();
        toast({
          title: "🔊 Emergency Alert System",
          description: "Audio alert activated - Emergency broadcast tone playing",
          variant: "destructive"
        });
        break;
        
      case 2:
        try {
          await sendTwilioAlert(
            {
              name: demoAlert.name.english,
              age: demoAlert.age,
              location: demoAlert.location.english,
              date: demoAlert.date.english,
              urgencyLevel: "high"
            },
            ["7411353272", "8861140778", "7795934477"],
            false
          );
          setDemoData(prev => ({ ...prev, smsSent: prev.smsSent + 3 }));
        } catch (error) {
          console.error("Demo SMS error:", error);
        }
        break;
        
      case 3:
        setDemoData(prev => ({ ...prev, citizenReports: prev.citizenReports + Math.floor(Math.random() * 3) + 1 }));
        toast({
          title: "📱 Citizen Reports",
          description: "Community members are reporting sightings and providing information",
        });
        break;
        
      case 4:
        toast({
          title: "📍 Location Update",
          description: "New sighting reported: Child spotted near Central Park - authorities notified",
        });
        break;
        
      case 5:
        setDemoData(prev => ({ ...prev, childrenFound: prev.childrenFound + 1 }));
        toast({
          title: "✅ SUCCESS: Child Found Safe!",
          description: "Child has been safely recovered and reunited with family",
        });
        break;
    }
  };

  const handleVideoUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setVideoUrl(url);
    
    // Clear uploaded video when URL is entered
    if (url && uploadedVideo) {
      handleClearVideo();
    }
    
    // Basic URL validation for common video formats
    const isValid = url && (
      url.includes('youtube.com/watch') ||
      url.includes('youtu.be/') ||
      url.includes('vimeo.com/') ||
      url.endsWith('.mp4') ||
      url.endsWith('.webm') ||
      url.endsWith('.ogg')
    );
    setIsVideoValid(isValid);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check if it's a video file
      if (file.type.startsWith('video/')) {
        // Clear URL when file is uploaded
        if (videoUrl) {
          setVideoUrl("");
        }
        
        // Clean up previous object URL
        if (videoObjectUrl) {
          URL.revokeObjectURL(videoObjectUrl);
        }
        
        setUploadedVideo(file);
        const objectUrl = URL.createObjectURL(file);
        setVideoObjectUrl(objectUrl);
        setIsVideoValid(true);
        
        toast({
          title: "Video uploaded successfully",
          description: `${file.name} is ready to play`,
        });
      } else {
        toast({
          title: "Invalid file type",
          description: "Please select a video file (.mp4, .webm, .ogg, etc.)",
          variant: "destructive"
        });
      }
    }
  };

  const handleClearVideo = () => {
    setVideoUrl("");
    setUploadedVideo(null);
    setIsVideoValid(false);
    
    if (videoObjectUrl) {
      URL.revokeObjectURL(videoObjectUrl);
      setVideoObjectUrl(null);
    }
  };

  // Clean up object URL on component unmount
  useEffect(() => {
    return () => {
      if (videoObjectUrl) {
        URL.revokeObjectURL(videoObjectUrl);
      }
    };
  }, [videoObjectUrl]);

  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch')) {
      const videoId = url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes('vimeo.com/')) {
      const videoId = url.split('vimeo.com/')[1]?.split('?')[0];
      return `https://player.vimeo.com/video/${videoId}`;
    }
    return url; // For direct video files
  };

  const startDemo = () => {
    setIsRunning(true);
    setCurrentStep(0);
    handleStepAction(0);
  };

  const pauseDemo = () => {
    setIsRunning(false);
  };

  const resetDemo = () => {
    setIsRunning(false);
    setCurrentStep(0);
    setDemoData({
      alertsSent: 0,
      smsSent: 0,
      citizenReports: 0,
      childrenFound: 0
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-xl font-bold">Live Demo - Real-Time Alert System</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Custom Video Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Video className="h-5 w-5" />
              Custom Video Demo
            </CardTitle>
            <CardDescription>
              Add your own video to showcase the alert system in action
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              {/* URL Input Section */}
              <div className="space-y-2">
                <Label htmlFor="video-url">Video URL</Label>
                <div className="flex gap-2">
                  <Input
                    id="video-url"
                    type="url"
                    placeholder="Paste YouTube, Vimeo, or direct video URL here..."
                    value={videoUrl}
                    onChange={handleVideoUrlChange}
                    className="flex-1"
                    disabled={!!uploadedVideo}
                  />
                </div>
                <p className="text-sm text-gray-600">
                  Supports YouTube, Vimeo, and direct video file URLs (.mp4, .webm, .ogg)
                </p>
              </div>

              {/* File Upload Section */}
              <div className="space-y-2">
                <Label htmlFor="video-file">Or Upload Video File</Label>
                <div className="flex gap-2">
                  <Input
                    id="video-file"
                    type="file"
                    accept="video/*"
                    onChange={handleFileUpload}
                    className="flex-1"
                    disabled={!!videoUrl}
                  />
                </div>
                <p className="text-sm text-gray-600">
                  Upload video files from your computer (.mp4, .webm, .ogg, .mov, .avi, etc.)
                </p>
              </div>

              {/* Clear Button */}
              {(videoUrl || uploadedVideo) && (
                <Button
                  variant="outline"
                  onClick={handleClearVideo}
                  className="w-full"
                >
                  Clear Video
                </Button>
              )}
            </div>
            
            {/* Video Display */}
            {(videoUrl || uploadedVideo) && (
              <div className="mt-4">
                {isVideoValid ? (
                  <div className="aspect-video bg-black rounded-lg overflow-hidden">
                    {uploadedVideo && videoObjectUrl ? (
                      <video
                        src={videoObjectUrl}
                        className="w-full h-full"
                        controls
                        preload="metadata"
                      />
                    ) : videoUrl && (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be') || videoUrl.includes('vimeo.com')) ? (
                      <iframe
                        src={getEmbedUrl(videoUrl)}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <video
                        src={videoUrl}
                        className="w-full h-full"
                        controls
                        preload="metadata"
                      />
                    )}
                  </div>
                ) : (
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <Upload className="h-8 w-8 mx-auto mb-2" />
                      <p>Invalid video format</p>
                      <p className="text-sm">Please check the file or URL and try again</p>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {/* No Video State */}
            {!videoUrl && !uploadedVideo && (
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Video className="h-12 w-12 mx-auto mb-4" />
                  <p className="text-lg font-medium">No video selected</p>
                  <p className="text-sm">Add a video URL or upload a file to preview your demo video</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Demo Controls */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  Demo Controls
                </CardTitle>
                <CardDescription>
                  Simulate a real-time missing child alert and recovery process
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Button 
                    onClick={startDemo} 
                    disabled={isRunning}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Start Demo
                  </Button>
                  <Button 
                    onClick={pauseDemo} 
                    disabled={!isRunning}
                    variant="outline"
                  >
                    <Pause className="h-4 w-4 mr-2" />
                    Pause
                  </Button>
                  <Button 
                    onClick={resetDemo}
                    variant="outline"
                  >
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reset
                  </Button>
                </div>

                {/* Real-time Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">{demoData.alertsSent}</div>
                    <div className="text-sm text-gray-600">Alerts Sent</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{demoData.smsSent}</div>
                    <div className="text-sm text-gray-600">SMS Sent</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{demoData.citizenReports}</div>
                    <div className="text-sm text-gray-600">Citizen Reports</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{demoData.childrenFound}</div>
                    <div className="text-sm text-gray-600">Children Found</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Demo Timeline */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Live Demo Timeline</CardTitle>
                <CardDescription>
                  Watch the real-time flow of our emergency alert system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {demoSteps.map((step, index) => {
                    const Icon = step.icon;
                    const isActive = index === currentStep && isRunning;
                    const isCompleted = index < currentStep;
                    
                    return (
                      <div 
                        key={index}
                        className={`flex items-center gap-4 p-4 rounded-lg transition-all ${
                          isActive ? 'bg-blue-50 border-2 border-blue-300 shadow-md' :
                          isCompleted ? 'bg-green-50 border border-green-200' :
                          'bg-gray-50 border border-gray-200'
                        }`}
                      >
                        <div className={`p-2 rounded-full ${
                          isActive ? 'bg-blue-100' :
                          isCompleted ? 'bg-green-100' :
                          'bg-gray-100'
                        }`}>
                          <Icon className={`h-5 w-5 ${
                            isActive ? 'text-blue-600' :
                            isCompleted ? 'text-green-600' :
                            step.color
                          }`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{step.title}</h3>
                            {isActive && (
                              <Badge variant="secondary" className="animate-pulse">
                                In Progress
                              </Badge>
                            )}
                            {isCompleted && (
                              <Badge variant="default" className="bg-green-600">
                                Completed
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Demo Information */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Demo Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <h3 className="font-semibold">Real-Time Alerts</h3>
                <p className="text-sm text-gray-600">Instant notifications when child goes missing</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Phone className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold">SMS Integration</h3>
                <p className="text-sm text-gray-600">Emergency SMS to registered contacts</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold">Community Reports</h3>
                <p className="text-sm text-gray-600">Citizen sighting reports and updates</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <MapPin className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold">Location Tracking</h3>
                <p className="text-sm text-gray-600">Real-time location updates and mapping</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default LiveDemo;
