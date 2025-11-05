// Download utility functions for GoLiveGram app

// App Store URLs (replace with actual URLs when app is published)
export const APP_STORE_URLS = {
  ios: 'https://play.google.com/store/apps/details?id=com.golivegram.app',
  android: 'https://play.google.com/store/apps/details?id=com.golivegram.app',
  web: 'https://play.google.com/store/apps/details?id=com.golivegram.app', // Web app URL
};

// Temporary URLs for development/demo (remove when real app is ready)
export const DEMO_URLS = {
  ios: 'https://apps.apple.com/app/instagram/id389801252', // Instagram as placeholder
  android: 'https://play.google.com/store/apps/details?id=com.instagram.android', // Instagram as placeholder
  web: '#', // Will show coming soon message
};

// Check if we should use demo URLs (for development)
const USE_DEMO_URLS = false; // Set to false when real app URLs are ready

export const getDownloadUrl = (platform: 'ios' | 'android' | 'web'): string => {
  return USE_DEMO_URLS ? DEMO_URLS[platform] : APP_STORE_URLS[platform];
};

// Handle download click with analytics tracking
export const handleDownloadClick = (platform: 'ios' | 'android' | 'web') => {
  const url = getDownloadUrl(platform);
  
  // Track download attempt with Google Analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'app_download_attempt', {
      app_platform: platform,
      value: 1,
    });
  }
  
  // Track with Facebook Pixel
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead', {
      content_name: `GoLiveGram ${platform} Download`,
      value: 1.00,
      currency: 'USD'
    });
  }
  
  // Handle web app differently
  if (platform === 'web') {
    if (USE_DEMO_URLS) {
      alert('🚀 Web app coming soon! Download our mobile app for the full GoLiveGram experience.');
      return;
    }
    // Open web app in same tab
    window.location.href = url;
  } else {
    // Open app store in new tab
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};

// Get platform-specific download text
export const getDownloadText = (platform: 'ios' | 'android' | 'web'): string => {
  switch (platform) {
    case 'ios':
      return USE_DEMO_URLS ? 'View on App Store' : 'Download for iOS';
    case 'android':
      return USE_DEMO_URLS ? 'View on Google Play' : 'Download for Android';
    case 'web':
      return USE_DEMO_URLS ? 'Web App (Coming Soon)' : 'Launch Web App';
    default:
      return 'Download App';
  }
};

// Check if user is on mobile and suggest appropriate platform
export const getRecommendedPlatform = (): 'ios' | 'android' | 'web' => {
  if (typeof window === 'undefined') return 'web';
  
  const userAgent = window.navigator.userAgent.toLowerCase();
  
  if (userAgent.includes('iphone') || userAgent.includes('ipad')) {
    return 'ios';
  } else if (userAgent.includes('android')) {
    return 'android';
  } else {
    return 'web';
  }
};