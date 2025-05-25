
import React from "react";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { alertTranslations, LanguageOption } from "./translations";

interface UrgencyLevelSelectorProps {
  urgencyLevel: "high" | "medium" | "low";
  setUrgencyLevel: (value: "high" | "medium" | "low") => void;
  language: LanguageOption;
}

const UrgencyLevelSelector = ({ 
  urgencyLevel, 
  setUrgencyLevel, 
  language 
}: UrgencyLevelSelectorProps) => {
  const text = alertTranslations[language];
  
  return (
    <div className="space-y-2">
      <Label htmlFor="urgency-level">{text.urgencyLabel}</Label>
      <Select 
        value={urgencyLevel} 
        onValueChange={(value) => setUrgencyLevel(value as "high" | "medium" | "low")}
      >
        <SelectTrigger id="urgency-level">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="high">{text.highUrgency}</SelectItem>
          <SelectItem value="medium">{text.mediumUrgency}</SelectItem>
          <SelectItem value="low">{text.lowUrgency}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default UrgencyLevelSelector;
