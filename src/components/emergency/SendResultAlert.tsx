
import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

interface SendResultAlertProps {
  result: {
    success: boolean;
    totalSent: number;
    totalFailed: number;
  };
}

const SendResultAlert = ({ result }: SendResultAlertProps) => {
  return (
    <Alert className={result.success ? "bg-green-50 text-green-800 border-green-200" : "bg-red-50 text-red-800 border-red-200"}>
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>{result.success ? "Alert Sent Successfully" : "Alert Sending Failed"}</AlertTitle>
      <AlertDescription>
        {result.success 
          ? `${result.totalSent} of ${result.totalSent + result.totalFailed} SMS alerts sent successfully.`
          : `Failed to send ${result.totalFailed} SMS alerts. Please check your connection and try again.`
        }
      </AlertDescription>
    </Alert>
  );
};

export default SendResultAlert;
