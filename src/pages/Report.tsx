import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/contexts/AuthContext";
import { 
  Form, 
  FormControl, 
  FormDescription,
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertTriangle, ArrowLeft, Info, Upload, User } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { sendSMSAlert, getEmergencyContacts } from "@/utils/smsService";
import { submitMissingChildReport } from "@/services/missingChildrenData";
import { supabase } from "@/integrations/supabase/client";

// Define the form schema
const formSchema = z.object({
  childName: z.string().min(2, "Name must be at least 2 characters"),
  age: z.string().refine((val) => !isNaN(parseInt(val)) && parseInt(val) > 0 && parseInt(val) < 18, {
    message: "Age must be a number between 1 and 17",
  }),
  gender: z.string().min(1, "Please select a gender"),
  lastSeen: z.string().min(1, "Last seen date is required"),
  lastSeenLocation: z.string().min(5, "Location details must be at least 5 characters"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  contactName: z.string().min(3, "Contact name must be at least 3 characters"),
  contactPhone: z.string().min(10, "Phone number must be at least 10 digits"),
  contactRelation: z.string().min(2, "Relation must be at least 2 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const Report = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user, profile } = useAuth();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isSending, setIsSending] = useState(false);
  
  // Check authentication on component mount
  useEffect(() => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please register or login to Suraksha Signal first before reporting a missing child.",
        variant: "destructive",
      });
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      childName: "",
      age: "",
      gender: "",
      lastSeen: "",
      lastSeenLocation: "",
      description: "",
      contactName: "",
      contactPhone: "",
      contactRelation: "",
    },
  });

  // If not authenticated, show a loading/redirect message
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <User className="h-12 w-12 text-primary mx-auto" />
              <h2 className="text-xl font-semibold">Authentication Required</h2>
              <p className="text-muted-foreground">
                You need to be logged in to report a missing child. Redirecting to login...
              </p>
              <div className="flex gap-2 justify-center">
                <Link to="/login">
                  <Button>Login</Button>
                </Link>
                <Link to="/register">
                  <Button variant="outline">Register</Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImage = async (file: File): Promise<string | null> => {
    // For now, skip upload (no storage configured), just return null
    return null;
  };

  const onSubmit = async (values: FormValues) => {
    setIsSending(true);
    try {
      let imageUrl: string | null = imagePreview;
      // Upload image to storage if you enable storage later
      // if (imageFile) imageUrl = await uploadImage(imageFile);

      if (!user) throw new Error("User is required.");

      const { error } = await supabase
        .from("missing_children_reports")
        .insert([
          {
            child_name: values.childName,
            age: parseInt(values.age),
            gender: values.gender,
            last_seen_date: values.lastSeen,
            last_seen_location: values.lastSeenLocation,
            description: values.description,
            contact_name: values.contactName,
            contact_phone: values.contactPhone,
            contact_relation: values.contactRelation,
            reporter_id: user.id,
            image_url:
              imageUrl ||
              "https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=300&h=300&auto=format&fit=crop",
            status: "active",
          },
        ]);
      if (error) throw error;

      toast({
        title: "Report Submitted",
        description: "Your report has been submitted successfully.",
      });

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      console.error("Error submitting report:", error);
      toast({
        title: "Error",
        description: "There was an error submitting your report. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-12">
      <div className="container max-w-3xl mx-auto px-4">
        <Link to="/" className="flex items-center gap-2 mb-6 text-primary hover:text-primary/80">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
        
        <Card>
          <CardHeader className="space-y-1">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-red-600" />
              <CardTitle className="text-2xl">Report Missing Child</CardTitle>
            </div>
            <CardDescription>
              Please provide as much detailed information as possible to help find the missing child
            </CardDescription>
            {user && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                <span>Reporting as: {user.name} ({user.email})</span>
              </div>
            )}
          </CardHeader>
          <CardContent>
            <Alert className="mb-6">
              <Info className="h-4 w-4" />
              <AlertTitle>Important</AlertTitle>
              <AlertDescription>
                Please also file an FIR at your nearest police station. This platform complements official procedures but does not replace them.
              </AlertDescription>
            </Alert>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Child Details</h3>
                    
                    <FormField
                      control={form.control}
                      name="childName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Child's Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="age"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Age</FormLabel>
                            <FormControl>
                              <Input placeholder="Age" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Gender</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                          Child's Photo
                        </label>
                        <div className="flex items-center">
                          <div className="relative border border-dashed border-gray-300 rounded-lg p-6 flex justify-center items-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer w-full">
                            <input
                              id="image"
                              type="file"
                              accept="image/*"
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                              onChange={handleImageChange}
                            />
                            <div className="text-center space-y-2">
                              <Upload className="mx-auto h-8 w-8 text-gray-400" />
                              <div className="text-sm text-gray-500">
                                <span className="font-medium text-primary">Click to upload</span> or drag and drop
                              </div>
                              <p className="text-xs text-gray-500">
                                PNG, JPG, GIF up to 10MB
                              </p>
                            </div>
                          </div>
                        </div>
                        {imagePreview && (
                          <div className="mt-2">
                            <img 
                              src={imagePreview} 
                              alt="Preview" 
                              className="h-40 rounded-lg object-cover"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Incident Details</h3>
                    
                    <FormField
                      control={form.control}
                      name="lastSeen"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Seen Date & Time</FormLabel>
                          <FormControl>
                            <Input type="datetime-local" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="lastSeenLocation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Seen Location</FormLabel>
                          <FormControl>
                            <Input placeholder="Address, landmarks, area" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Provide details about clothing, appearance, circumstances, any identifying marks, etc." 
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription>
                            Include details like clothing, height, weight, distinctive features
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                
                <div className="border-t pt-6 mt-6">
                  <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="contactName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contact Person</FormLabel>
                          <FormControl>
                            <Input placeholder="Full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="contactPhone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Mobile number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="contactRelation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Relation to Child</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. Parent, Guardian" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                
                <div className="border-t pt-6 flex justify-end">
                  <Button 
                    type="submit" 
                    className="bg-red-600 hover:bg-red-700"
                    disabled={isSending}
                  >
                    {isSending ? "Submitting & Sending Alerts..." : "Submit Report"}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Report;
