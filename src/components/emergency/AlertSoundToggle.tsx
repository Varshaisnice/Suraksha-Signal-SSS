
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Volume2, VolumeX } from "lucide-react";
import { alertTranslations, LanguageOption } from "./translations";

interface AlertSoundToggleProps {
  playSound: boolean;
  setPlaySound: (value: boolean) => void;
  language: LanguageOption;
}

const AlertSoundToggle = ({ playSound, setPlaySound, language }: AlertSoundToggleProps) => {
  const text = alertTranslations[language];
  
  return (
    <div className="flex items-center space-x-2">
      <Checkbox 
        id="play-sound" 
        checked={playSound} 
        onCheckedChange={(checked) => setPlaySound(checked === true)} 
      />
      <Label htmlFor="play-sound" className="flex items-center gap-2">
        {text.playSoundLabel}
        {playSound ? <Volume2 className="h-4 w-4 text-red-600" /> : <VolumeX className="h-4 w-4" />}
      </Label>
    </div>
  );
};

export default AlertSoundToggle;
