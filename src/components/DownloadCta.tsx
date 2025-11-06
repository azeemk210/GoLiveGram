import React from 'react';
import { useDownload, type Platform } from '../lib/useDownload';

interface DownloadCtaProps {
  platform: Platform;
  label: string;
  className?: string;
  children?: React.ReactNode;
  source?: string;
  campaign?: string;
}

const DownloadCta: React.FC<DownloadCtaProps> = ({
  platform,
  label,
  className = '',
  children,
  source,
  campaign
}) => {
  const { handleDownload } = useDownload();

  const handleClick = () => {
    handleDownload({ platform, source, campaign });
  };

  const baseClasses = "inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25 focus:outline-none focus:ring-4 focus:ring-primary-500/50";

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${className}`}
      type="button"
      aria-label={`Download for ${platform}`}
    >
      {children && (
        <span className="flex items-center">
          {children}
        </span>
      )}
      <span>{label}</span>
    </button>
  );
};

export default DownloadCta;