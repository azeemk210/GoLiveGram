import { useCallback } from 'react';

type Platform = 'ios' | 'android' | 'web';

interface DownloadOptions {
  platform: Platform;
  source?: string;
  campaign?: string;
}

// Platform URLs - these would typically come from your config
const PLATFORM_URLS = {
  ios: 'https://apps.apple.com/us/app/golivegram/id6755330284',
  android: 'https://play.google.com/store/apps/details?id=com.golivegram.app',
  web: 'https://app.golivegram.com',
} as const;

// Extend Window interface for tracking functions
declare global {
  interface Window {
    trackDownload?: (platform: string, source?: string, campaign?: string) => void;
    trackFBDownload?: (platform: string, source?: string, campaign?: string) => void;
  }
}

export const useDownload = () => {
  const handleDownload = useCallback(({ platform, source, campaign }: DownloadOptions) => {
    // Track download with analytics if available
    if (typeof window !== 'undefined') {
      // General download tracking
      if (window.trackDownload) {
        window.trackDownload(platform, source, campaign);
      }
      
      // Facebook pixel tracking if available
      if (window.trackFBDownload) {
        window.trackFBDownload(platform, source, campaign);
      }
    }

    // Navigate to platform URL
    const url = PLATFORM_URLS[platform];
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }, []);

  const downloadIOS = useCallback((source?: string, campaign?: string) => {
    handleDownload({ platform: 'ios', source, campaign });
  }, [handleDownload]);

  const downloadAndroid = useCallback((source?: string, campaign?: string) => {
    handleDownload({ platform: 'android', source, campaign });
  }, [handleDownload]);

  const downloadWeb = useCallback((source?: string, campaign?: string) => {
    handleDownload({ platform: 'web', source, campaign });
  }, [handleDownload]);

  return {
    handleDownload,
    downloadIOS,
    downloadAndroid,
    downloadWeb,
  };
};

export type { Platform, DownloadOptions };