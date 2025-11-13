import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead: React.FC = () => {
  const siteUrl = 'https://golivegram.com';
  const title = 'GoLiveGram - Stream, Connect & Monetize Your Passion | Live Streaming App';
  const description = 'Join 2.5M+ creators earning ₹500-₹5000/month on GoLiveGram. Go live, build community, and turn your passion into profit with multiple monetization streams. Download now!';
  const keywords = 'live streaming app, monetize streaming, creator economy, go live, earn money streaming, social media app, content creator, video streaming, live broadcast, influencer marketing';
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "GoLiveGram",
    "operatingSystem": ["iOS", "Android", "Web"],
    "applicationCategory": "SocialNetworkingApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "15000"
    },
    "description": description,
    "url": siteUrl,
    "downloadUrl": [
      "https://apps.apple.com/app/golivegram",
      "https://play.google.com/store/apps/details?id=com.golivegram"
    ],
    "creator": {
      "@type": "Organization",
      "name": "GoLiveGram Inc.",
      "url": siteUrl
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={siteUrl} />
      
      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}/og-image.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="GoLiveGram" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}/twitter-image.png`} />
      <meta name="twitter:creator" content="@golivegram" />
      <meta name="twitter:site" content="@golivegram" />
      
      {/* App Links */}
      <meta property="al:ios:app_name" content="GoLiveGram" />
      <meta property="al:ios:app_store_id" content="123456789" />
      <meta property="al:android:app_name" content="GoLiveGram" />
      <meta property="al:android:package" content="com.golivegram.app" />
      <meta property="al:web:url" content={`${siteUrl}/app`} />
      
      {/* Mobile Web App Meta Tags */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="mobile-mobile-web-app-capable" content="yes" />
      <meta name="mobile-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="mobile-mobile-web-app-title" content="GoLiveGram" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#ee3a3a" />
      <meta name="msapplication-TileColor" content="#ee3a3a" />
      
      {/* Favicon */}
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Android Chrome Icons */}
      <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
      <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Language */}
      <meta httpEquiv="Content-Language" content="en" />
      <html lang="en" />
    </Helmet>
  );
};

export default SEOHead;