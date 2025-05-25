
/**
 * A utility service for sending SMS alerts to emergency contacts
 */

import { toast } from "@/components/ui/use-toast";


// Default emergency contact numbers - replace with actual test numbers
// Format should match your country's phone number format (e.g., "1234567890" for US)
const DEFAULT_EMERGENCY_CONTACTS = ["+917411353272", "+918861140778", "+917795934477"];

// SMS sending service using the Twilio service
export const sendSMSAlert = async (
  alertDetails: {
    name: string;
    age: number;
    location: string;
    date: string;
  },
  phoneNumbers: string[] = DEFAULT_EMERGENCY_CONTACTS
) => {
  console.log("Sending SMS alerts to:", phoneNumbers);
  
  try {
    // Use our Twilio service to send the actual SMS - not playing sound in app
    const result = await sendTwilioAlert(
      {
        name: alertDetails.name,
        age: alertDetails.age,
        location: alertDetails.location,
        date: alertDetails.date,
        urgencyLevel: "high" // Default to high urgency for missing child alerts
      },
      phoneNumbers,
      false // Don't play the emergency sound in app
    );
    
    return result;
  } catch (error) {
    console.error("Error in sendSMSAlert:", error);
    toast({
      title: "Error",
      description: "Failed to send alerts due to a system error.",
      variant: "destructive",
    });
    return {
      success: false,
      totalSent: 0,
      totalFailed: phoneNumbers.length,
      message: "Failed to send alerts due to a system error"
    };
  }
};

// Function to add a new emergency contact
export const addEmergencyContact = (phoneNumber: string) => {
  // In a real app, this would save to a database or localStorage
  // For demonstration, we'll just save to localStorage
  console.log(`Added new emergency contact: ${phoneNumber}`);
  localStorage.setItem("emergencyContacts", JSON.stringify([
    ...getEmergencyContacts(),
    phoneNumber
  ]));
  
  return { success: true };
};

// Function to get all emergency contacts
export const getEmergencyContacts = () => {
  const contacts = localStorage.getItem("emergencyContacts");
  return contacts ? JSON.parse(contacts) : DEFAULT_EMERGENCY_CONTACTS;
};
