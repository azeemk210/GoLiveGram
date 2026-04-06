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

  const baseClasses = "inline-flex items-center justify-center gap-3 px-8 py-4 bg-black text-white border border-white font-semibold rounded-xl transition-all duration-300 hover:bg-white hover:text-black focus:outline-none focus:ring-2";
  const baseStyle = { outlineColor: '#ee3a3a' };

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${className}`}
      style={baseStyle}
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