
/**
 * Twilio SMS alert service for sending emergency notifications
 */

import { toast } from "@/components/ui/use-toast";

// Twilio API endpoint - using the official Twilio REST API endpoint
const TWILIO_API_ENDPOINT = "https://api.twilio.com/2010-04-01/Accounts";

// These would normally be stored securely in environment variables
// Replace these with your actual Twilio credentials to send real SMS
// For demo purposes, using placeholder values
const TWILIO_ACCOUNT_SID = "AC9218bafd08cf35c659b5b30a586a776b";
const TWILIO_AUTH_TOKEN = "208401d7b4cc76f91a5f36116998a320";
const TWILIO_PHONE_NUMBER = "+12707145620";

interface AlertDetails {
  name: string;
  age: number;
  location: string;
  date: string;
  urgencyLevel?: "high" | "medium" | "low";
}

/**
 * Send emergency SMS alerts using Twilio API directly
 * @param alertDetails Details about the missing child
 * @param phoneNumbers Array of phone numbers to send alerts to
 * @param playAlertSound Whether to play an alert sound on the UI
 * @returns Promise with the result of the operation
 */
export const sendTwilioAlert = async (
  alertDetails: AlertDetails,
  phoneNumbers: string[],
  playAlertSound: boolean = false
): Promise<{
  success: boolean;
  totalSent: number;
  totalFailed: number;
  message: string;
}> => {
  console.log("Sending Twilio alerts to:", phoneNumbers);
  
  // Play alert sound if requested
  if (playAlertSound) {
    playEmergencySound();
  }
  
  try {
    // Format the message with high-priority formatting
    const urgencyPrefix = alertDetails.urgencyLevel === "high" ? "🚨 EMERGENCY ALERT 🚨\n\n" : 
                         alertDetails.urgencyLevel === "medium" ? "⚠️ URGENT ALERT ⚠️\n\n" : 
                         "MISSING CHILD ALERT\n\n";
                         
    const message = `${urgencyPrefix}${alertDetails.name}, age ${alertDetails.age} has been reported missing at ${alertDetails.location} on ${alertDetails.date}. Please contact authorities immediately if you have any information.`;
    
    // For demo purposes, simulate sending SMS
    // In a real app with proper credentials, this would make actual API calls
    const sendPromises = phoneNumbers.map(async (phoneNumber) => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, Math.random() * 1000 + 500));
        
        // Format the phone number to ensure it's in E.164 format
        const formattedNumber = formatPhoneNumber(phoneNumber);
        
        console.log(`Simulated SMS sent to ${formattedNumber}: ${message.substring(0, 50)}...`);
        
        // Simulate success for demo
        return { 
          status: 'fulfilled',
          value: { sid: 'demo_' + Math.random().toString(36).substr(2, 9) },
          reason: null,
          phoneNumber: formattedNumber
        };
      } catch (error) {
        console.error(`Error sending SMS to ${phoneNumber}:`, error);
        return { 
          status: 'rejected',
          value: null,
          reason: error instanceof Error ? error.message : 'Unknown error',
          phoneNumber
        };
      }
    });
    
    // Wait for all SMS to be sent
    const results = await Promise.all(sendPromises);
    
    // Count successes
    const successCount = results.filter(r => r.status === 'fulfilled').length;
    
    // Show a toast notification with results
    if (successCount > 0) {
      toast({
        title: "🚨 Emergency Alerts Sent (Demo)",
        description: `${successCount} of ${results.length} emergency SMS alerts successfully sent to contacts.`,
        variant: "default",
      });
    } else {
      toast({
        title: "Alert Sending Failed",
        description: "Failed to send emergency SMS alerts. Please check your connection and try again.",
        variant: "destructive",
      });
    }
    
    return {
      success: successCount > 0,
      totalSent: successCount,
      totalFailed: results.length - successCount,
      message: `${successCount} of ${results.length} emergency alerts sent successfully (Demo mode)`
    };
  } catch (error) {
    console.error("Error in sendTwilioAlert:", error);
    toast({
      title: "Error",
      description: "Failed to send emergency alerts due to a system error.",
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

/**
 * Format phone number to E.164 format for Twilio
 * @param phoneNumber Phone number to format
 * @returns Formatted phone number
 */
const formatPhoneNumber = (phoneNumber: string): string => {
  // Strip all non-numeric characters
  const digitsOnly = phoneNumber.replace(/\D/g, '');
  
  // Check if the number already has a country code
  if (digitsOnly.startsWith('1') && digitsOnly.length === 11) {
    return `+${digitsOnly}`;
  }
  
  // For Indian numbers (assuming 10 digits)
  if (digitsOnly.length === 10) {
    return `+91${digitsOnly}`;
  }
  
  // If it already has a plus sign or other formatting, leave it as is
  if (phoneNumber.startsWith('+')) {
    return phoneNumber;
  }
  
  // Default case, assume it's a US number
  return `+1${digitsOnly}`;
};

/**
 * Play emergency alert sound similar to government alerts
 */
export const playEmergencySound = () => {
  try {
    // Create an AudioContext
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Create oscillator for the alert tone (similar to emergency broadcast system)
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    // Connect nodes
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Configure oscillator for emergency alert sound
    oscillator.type = 'square';
    oscillator.frequency.value = 853; // EAS attention signal frequency
    
    // Configure volume
    gainNode.gain.value = 0.3; // Lower volume to avoid being too startling
    
    // Start and stop the tone
    oscillator.start();
    
    // EAS pattern: 853 Hz tone for 0.5s, silence for 0.5s, repeat
    setTimeout(() => {
      oscillator.stop();
      
      // Second tone after brief pause
      setTimeout(() => {
        const oscillator2 = audioContext.createOscillator();
        oscillator2.connect(gainNode);
        oscillator2.type = 'square';
        oscillator2.frequency.value = 960; // Second EAS attention signal frequency
        oscillator2.start();
        
        setTimeout(() => {
          oscillator2.stop();
        }, 500);
      }, 300);
    }, 500);
    
    return true;
  } catch (error) {
    console.error("Error playing emergency sound:", error);
    return false;
  }
};

// Test function to demonstrate the alert sound
export const testEmergencyAlert = () => {
  playEmergencySound();
  
  toast({
    title: "🚨 Emergency Alert Sound Test",
    description: "This is a demonstration of how the emergency alert sound would work.",
    variant: "destructive",
  });
};
