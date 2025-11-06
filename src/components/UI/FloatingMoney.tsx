import React from 'react';

const FloatingMoney: React.FC = () => {
  const moneyEmojis = ['💸', '🪙', '💵', '💰', '⚡'];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {moneyEmojis.map((emoji, index) => (
        <span
          key={index}
          className={`
            absolute text-2xl opacity-60
            motion-safe:animate-bounce
            ${index === 0 ? 'top-20 left-16 motion-safe:animate-pulse' : ''}
            ${index === 1 ? 'top-32 right-20 motion-safe:animate-bounce delay-300' : ''}
            ${index === 2 ? 'bottom-40 left-20 motion-safe:animate-pulse delay-700' : ''}
            ${index === 3 ? 'bottom-20 right-16 motion-safe:animate-bounce delay-1000' : ''}
            ${index === 4 ? 'top-1/2 left-1/3 motion-safe:animate-pulse delay-500' : ''}
          `}
          aria-hidden="true"
        >
          {emoji}
        </span>
      ))}
    </div>
  );
};

export default FloatingMoney;