
// Helper function to load Google Maps API script
export const loadGoogleMapsScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Check if script is already loaded
    if (window.google && window.google.maps) {
      resolve();
      return;
    }

    // Create the script element
    const script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?v=weekly";
    script.async = true;
    script.defer = true;
    
    // Set up callbacks
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Google Maps script"));
    
    // Add to document
    document.head.appendChild(script);
  });
};

// Prevent loading Google Maps script multiple times by checking if it's already in the document
const isScriptAlreadyInDocument = (): boolean => {
  const scripts = document.getElementsByTagName('script');
  for (let i = 0; i < scripts.length; i++) {
    if (scripts[i].src.includes('maps.googleapis.com/maps/api/js')) {
      return true;
    }
  }
  return false;
};

// Load Google Maps script when the module is imported, but only if not already loading
if (!isScriptAlreadyInDocument()) {
  loadGoogleMapsScript().catch(error => {
    console.error("Error loading Google Maps:", error);
  });
}
