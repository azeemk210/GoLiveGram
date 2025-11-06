// Global type definitions for external libraries and analytics

declare global {
  interface Window {
    // Google Analytics
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date | object,
      config?: object
    ) => void;

    // Facebook Pixel
    fbq?: (
      command: 'track' | 'trackCustom' | 'init' | 'set',
      eventName: string,
      parameters?: object
    ) => void;

    // Custom download tracking functions
    trackDownload?: (
      platform: string,
      source?: string,
      campaign?: string
    ) => void;

    trackFBDownload?: (
      platform: string,
      source?: string,
      campaign?: string
    ) => void;
  }
}

// This empty export makes this file a module
export {};