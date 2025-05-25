
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { AlertCircle, CheckCircle, Phone, Plus } from "lucide-react";

interface EmergencyContactsManagerProps {
  language: string;
}

const EmergencyContactsManager = ({ language }: EmergencyContactsManagerProps) => {
  const [newContact, setNewContact] = useState("");
  const [contacts, setContacts] = useState<string[]>(["7411353272", "8861140778", "7795934477"]);

  const translations = {
    english: {
      title: "Emergency Contacts",
      description: "Add emergency contacts to receive SMS alerts",
      addButton: "Add Contact",
      placeholder: "Enter phone number",
      addSuccess: "Emergency contact added successfully",
      addError: "Please enter a valid phone number",
      contactsList: "Current emergency contacts",
      removeButton: "Remove"
    },
    hindi: {
      title: "आपातकालीन संपर्क",
      description: "एसएमएस अलर्ट प्राप्त करने के लिए आपातकालीन संपर्क जोड़ें",
      addButton: "संपर्क जोड़ें",
      placeholder: "फोन नंबर दर्ज करें",
      addSuccess: "आपातकालीन संपर्क सफलतापूर्वक जोड़ा गया",
      addError: "कृपया एक मान्य फोन नंबर दर्ज करें",
      contactsList: "वर्तमान आपातकालीन संपर्क",
      removeButton: "हटाएं"
    },
    kannada: {
      title: "ತುರ್ತು ಸಂಪರ್ಕಗಳು",
      description: "SMS ಎಚ್ಚರಿಕೆಗಳನ್ನು ಸ್ವೀಕರಿಸಲು ತುರ್ತು ಸಂಪರ್ಕಗಳನ್ನು ಸೇರಿಸಿ",
      addButton: "ಸಂಪರ್ಕ ಸೇರಿಸಿ",
      placeholder: "ಫೋನ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ",
      addSuccess: "ತುರ್ತು ಸಂಪರ್ಕ ಯಶಸ್ವಿಯಾಗಿ ಸೇರಿಸಲಾಗಿದೆ",
      addError: "ದಯವಿಟ್ಟು ಮಾನ್ಯವಾದ ಫೋನ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ",
      contactsList: "ಪ್ರಸ್ತುತ ತುರ್ತು ಸಂಪರ್ಕಗಳು",
      removeButton: "ತೆಗೆದುಹಾಕಿ"
    }
  };

  const text = translations[language === "english" ? "english" : language === "hindi" ? "hindi" : "kannada"];

  const handleAddContact = () => {
    // Simple validation for phone number
    if (newContact && /^\d{10}$/.test(newContact)) {
      setContacts([...contacts, newContact]);
      setNewContact("");
      toast({
        title: text.addSuccess,
        description: (
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            {newContact}
          </div>
        ),
      });
    } else {
      toast({
        title: text.addError,
        description: (
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-red-500" />
            Format: 10 digits
          </div>
        ),
        variant: "destructive",
      });
    }
  };

  const handleRemoveContact = (contactToRemove: string) => {
    setContacts(contacts.filter(contact => contact !== contactToRemove));
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Phone className="h-5 w-5 text-primary" />
          {text.title}
        </CardTitle>
        <CardDescription>{text.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2 mb-4">
          <Input
            type="tel"
            placeholder={text.placeholder}
            value={newContact}
            onChange={(e) => setNewContact(e.target.value)}
            className="flex-1"
            maxLength={10}
          />
          <Button onClick={handleAddContact} size="sm">
            <Plus className="h-4 w-4 mr-1" />
            {text.addButton}
          </Button>
        </div>
        
        <div className="space-y-2 mt-4">
          <h4 className="text-sm font-medium">{text.contactsList}</h4>
          {contacts.map(contact => (
            <div key={contact} className="flex justify-between items-center p-2 bg-muted rounded-md">
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                {contact}
              </span>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => handleRemoveContact(contact)}
                className="text-xs h-7"
              >
                {text.removeButton}
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default EmergencyContactsManager;
