
import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";
import { alertTranslations, LanguageOption } from "./translations";

interface NoAlertSelectedProps {
  language: LanguageOption;
}

const NoAlertSelected = ({ language }: NoAlertSelectedProps) => {
  const text = alertTranslations[language];
  
  return (
    <Alert>
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>{text.noAlertSelected}</AlertTitle>
      <AlertDescription>{text.selectAlertPrompt}</AlertDescription>
    </Alert>
  );
};

export default NoAlertSelected;
