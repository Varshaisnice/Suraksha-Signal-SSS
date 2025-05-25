
import React, { useRef, useEffect } from "react";

interface SimpleMapProps {
  center?: { lat: number; lng: number };
  zoom?: number;
  markers?: Array<{
    position: { lat: number; lng: number };
    title: string;
  }>;
  height?: string;
}

const SimpleGoogleMap = ({ 
  center = { lat: 23.5937, lng: 78.9629 }, 
  zoom = 5,
  markers = [],
  height = "500px"
}: SimpleMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    // Only initialize if Google Maps script is loaded
    if (!window.google || !window.google.maps) {
      // Display fallback content if Google Maps isn't available
      if (mapRef.current) {
        mapRef.current.innerHTML = `
          <div style="height:100%; display:flex; align-items:center; justify-content:center; flex-direction:column; padding:20px; text-align:center; background:#f0f4f8;">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mb-4">
              <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
            </svg>
            <h3 style="margin-bottom:8px; font-weight:600;">Map visualization</h3>
            <p style="color:#64748b">Map displays locations of reported missing children</p>
          </div>
        `;
      }
      return;
    }

    const mapOptions: google.maps.MapOptions = {
      center: center,
      zoom: zoom,
      mapTypeControl: true,
      streetViewControl: true,
      fullscreenControl: true,
      mapId: "8e0a97af9386fef"  // Using a styled map ID for better visuals
    };

    // Initialize the map
    mapInstanceRef.current = new google.maps.Map(mapRef.current as HTMLElement, mapOptions);

    // Add markers if any
    if (markers.length > 0) {
      markers.forEach(markerData => {
        const marker = new google.maps.Marker({
          position: markerData.position,
          map: mapInstanceRef.current,
          title: markerData.title,
          animation: google.maps.Animation.DROP
        });

        // Add info window
        const infoWindow = new google.maps.InfoWindow({
          content: `<div><strong>${markerData.title}</strong></div>`
        });

        marker.addListener("click", () => {
          infoWindow.open(mapInstanceRef.current, marker);
        });
      });
    }

    // Cleanup function
    return () => {
      // No need to do anything, Google Maps handles cleanup
    };
  }, [center, zoom, markers]);

  return (
    <div 
      ref={mapRef} 
      style={{ width: "100%", height, borderRadius: "0.5rem" }}
      className="bg-gray-100"
    ></div>
  );
};

export default SimpleGoogleMap;
