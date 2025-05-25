
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Bell, MapPin, User, Info, LogOut, Play } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import LanguageSelector from "./LanguageSelector";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavbarProps {
  language: string;
  onLanguageChange: (language: string) => void;
}

const Navbar = ({ language, onLanguageChange }: NavbarProps) => {
  const { isAuthenticated, user, logout } = useAuth();
  
  const translations = {
    english: {
      alerts: "Alerts",
      report: "Report Missing",
      map: "Map View",
      register: "Register",
      login: "Login",
      about: "About",
      logout: "Logout",
      demo: "Live Demo"
    },
    hindi: {
      alerts: "अलर्ट",
      report: "गुमशुदगी दर्ज करें",
      map: "मानचित्र देखें",
      register: "रजिस्टर करें",
      login: "लॉगिन करें",
      about: "जानकारी",
      logout: "लॉगआउट",
      demo: "लाइव डेमो"
    },
    kannada: {
      alerts: "ಎಚ್ಚರಿಕೆಗಳು",
      report: "ಕಾಣೆಯಾದವರ ವರದಿ",
      map: "ನಕ್ಷೆ ನೋಟ",
      register: "ನೋಂದಣಿ",
      login: "ಲಾಗಿನ್",
      about: "ನಮ್ಮ ಬಗ್ಗೆ",
      logout: "ಲಾಗ್ಔಟ್",
      demo: "ಲೈವ್ ಡೆಮೊ"
    }
  };

  const text = translations[language === "english" ? "english" : language === "hindi" ? "hindi" : "kannada"];

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-red-600" />
              <h1 className="text-2xl font-bold text-primary">Suraksha Signal</h1>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/alerts" className="flex items-center gap-1 text-gray-700 hover:text-primary">
              <Bell className="h-4 w-4" />
              {text.alerts}
            </Link>
            <Link to="/report" className="flex items-center gap-1 text-gray-700 hover:text-primary">
              <AlertTriangle className="h-4 w-4" />
              {text.report}
            </Link>
            <Link to="/map" className="flex items-center gap-1 text-gray-700 hover:text-primary">
              <MapPin className="h-4 w-4" />
              {text.map}
            </Link>
            <Link to="/demo" className="flex items-center gap-1 text-gray-700 hover:text-primary">
              <Play className="h-4 w-4" />
              {text.demo}
            </Link>
            <Link to="/about" className="flex items-center gap-1 text-gray-700 hover:text-primary">
              <Info className="h-4 w-4" />
              {text.about}
            </Link>
          </nav>
          
          <div className="flex gap-2 items-center">
            <LanguageSelector
              language={language}
              onChange={onLanguageChange}
            />
            
            {isAuthenticated && user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {user.name}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                    <LogOut className="h-4 w-4 mr-2" />
                    {text.logout}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link to="/register">
                  <Button variant="outline" size="sm">{text.register}</Button>
                </Link>
                <Link to="/login">
                  <Button size="sm">{text.login}</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
