
declare interface Window {
  google: typeof google;
}

declare namespace google {
  namespace maps {
    class Map {
      constructor(mapDiv: Element, opts?: MapOptions);
      setCenter(latLng: LatLng | LatLngLiteral): void;
      setZoom(zoom: number): void;
      setOptions(options: MapOptions): void;
      panTo(latLng: LatLng | LatLngLiteral): void;
      panBy(x: number, y: number): void;
      getCenter(): LatLng;
      getZoom(): number;
      getBounds(): LatLngBounds | undefined;
      setFog(options: FogOptions): void;
      addControl(control: any, position?: ControlPosition): void;
      controls: any[][];
      scrollZoom: {
        disable(): void;
        enable(): void;
      };
      markers: any[];
      on(eventName: string, handler: () => void): void;
      addListener(eventName: string, handler: () => void): MapsEventListener;
      easeTo(options: any): void;
      getMap(): Map;
    }
    
    interface MapOptions {
      center?: LatLng | LatLngLiteral;
      zoom?: number;
      mapTypeId?: string;
      mapTypeControl?: boolean;
      streetViewControl?: boolean;
      fullscreenControl?: boolean;
      zoomControl?: boolean;
      mapId?: string;
      [key: string]: any;
    }
    
    interface LatLngLiteral {
      lat: number;
      lng: number;
    }
    
    class LatLng {
      constructor(lat: number, lng: number);
      lat(): number;
      lng(): number;
      toString(): string;
    }
    
    class LatLngBounds {
      constructor(sw?: LatLng | LatLngLiteral, ne?: LatLng | LatLngLiteral);
      extend(latLng: LatLng | LatLngLiteral): this;
      contains(latLng: LatLng | LatLngLiteral): boolean;
      getCenter(): LatLng;
    }
    
    class Marker {
      constructor(opts?: MarkerOptions);
      setPosition(latLng: LatLng | LatLngLiteral): void;
      setMap(map: Map | null): void;
      setTitle(title: string): void;
      getPosition(): LatLng;
      addListener(event: string, callback: Function): MapsEventListener;
    }
    
    interface MarkerOptions {
      position?: LatLng | LatLngLiteral;
      map?: Map;
      title?: string;
      animation?: Animation;
      [key: string]: any;
    }
    
    class InfoWindow {
      constructor(opts?: InfoWindowOptions);
      setContent(content: string | Node): void;
      setPosition(latLng: LatLng | LatLngLiteral): void;
      open(map?: Map, anchor?: Marker): void;
      close(): void;
      addListener(event: string, callback: Function): MapsEventListener;
    }
    
    interface InfoWindowOptions {
      content?: string | Node;
      position?: LatLng | LatLngLiteral;
      maxWidth?: number;
      [key: string]: any;
    }
    
    interface FogOptions {
      color?: string;
      'high-color'?: string;
      'horizon-blend'?: number;
      [key: string]: any;
    }
    
    enum Animation {
      DROP,
      BOUNCE
    }
    
    enum ControlPosition {
      TOP_LEFT,
      TOP_CENTER,
      TOP_RIGHT,
      LEFT_TOP,
      LEFT_CENTER,
      LEFT_BOTTOM,
      RIGHT_TOP,
      RIGHT_CENTER,
      RIGHT_BOTTOM,
      BOTTOM_LEFT,
      BOTTOM_CENTER,
      BOTTOM_RIGHT
    }
    
    class NavigationControl {
      constructor(options?: { visualizePitch?: boolean });
    }
    
    class StreetViewPanorama {
      constructor(container: Element, opts?: StreetViewPanoramaOptions);
    }
    
    interface StreetViewPanoramaOptions {
      position?: LatLng | LatLngLiteral;
      pov?: StreetViewPov;
      zoom?: number;
      [key: string]: any;
    }
    
    interface StreetViewPov {
      heading?: number;
      pitch?: number;
    }
    
    interface MapsEventListener {
      remove(): void;
    }
    
    namespace places {}
    namespace drawing {}
    namespace geometry {}
    namespace visualization {}
  }
}
