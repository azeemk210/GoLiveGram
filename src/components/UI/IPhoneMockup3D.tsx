import React, { useRef } from 'react';

interface PhoneProps {
  backgroundImage: string;
  tiltStyle: React.CSSProperties;
  zIndex: number;
  children: React.ReactNode;
}

const PhoneShell: React.FC<PhoneProps> = ({ backgroundImage, tiltStyle, zIndex, children }) => (
  <div
    className="absolute phone-3d"
    style={{
      ...tiltStyle,
      zIndex,
      transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
    }}
  >
    <div
      className="relative"
      style={{
        width: '234px',
        aspectRatio: '9 / 19.5',
        borderRadius: '39.6px',
        background: 'linear-gradient(160deg, #8a8a8a 0%, #6b6b6b 30%, #5a5a5a 60%, #787878 100%)',
        padding: '3px',
      }}
    >
      <div style={{
        position: 'absolute', left: '-3px', top: '90px',
        width: '3px', height: '32px',
        background: 'linear-gradient(to right, #4a4a4a, #6a6a6a)',
        borderRadius: '2px 0 0 2px',
      }} />
      <div style={{
        position: 'absolute', left: '-3px', top: '132px',
        width: '3px', height: '56px',
        background: 'linear-gradient(to right, #4a4a4a, #6a6a6a)',
        borderRadius: '2px 0 0 2px',
      }} />
      <div style={{
        position: 'absolute', left: '-3px', top: '198px',
        width: '3px', height: '56px',
        background: 'linear-gradient(to right, #4a4a4a, #6a6a6a)',
        borderRadius: '2px 0 0 2px',
      }} />
      <div style={{
        position: 'absolute', right: '-3px', top: '140px',
        width: '3px', height: '72px',
        background: 'linear-gradient(to left, #4a4a4a, #6a6a6a)',
        borderRadius: '0 2px 2px 0',
      }} />

      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '42px',
          background: '#111',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url('${backgroundImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            filter: 'saturate(1.05) contrast(1.02)',
          }}
        />

        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 100% 80% at 50% 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.5) 100%)',
          pointerEvents: 'none',
          zIndex: 2,
        }} />

        <div style={{
          position: 'absolute', top: '10px',
          left: '50%', transform: 'translateX(-50%)',
          width: '120px', height: '35px',
          background: '#000',
          borderRadius: '18px',
          zIndex: 10,
        }} />

        <div style={{ position: 'relative', zIndex: 5, width: '100%', height: '100%' }}>
          {children}
        </div>

      <div style={{ position: 'absolute', inset: 0, zIndex: 20,
          background: 'linear-gradient(135deg, rgba(238,58,58,0.05) 0%, transparent 50%)',
          borderRadius: '42px',
          pointerEvents: 'none',
        }} />
      </div>
    </div>
  </div>
);

const LeftScreenContent: React.FC = () => (
  <>
    <div style={{
      position: 'absolute', top: '54px', left: '12px', right: '12px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 6,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '6px',
          padding: '5px 10px', borderRadius: '20px',
          background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}>
          <div style={{
            width: '8px', height: '8px', borderRadius: '50%',
            background: '#ee3a3a',
            boxShadow: '0 0 0 3px rgba(238,58,58,0.25)',
          }} />
          <span style={{ color: '#fff', fontSize: '11px', fontWeight: 700 }}>LIVE</span>
          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px' }}>04:32</span>
        </div>
      </div>
      <div style={{
        display: 'flex', alignItems: 'center', gap: '5px',
        padding: '5px 10px', borderRadius: '20px',
        background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255,255,255,0.08)',
        color: '#fff', fontSize: '11px',
      }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
        1,284
      </div>
    </div>

    <div style={{
      position: 'absolute', bottom: '120px', left: '10px', right: '10px',
      display: 'flex', flexDirection: 'column', gap: '5px', zIndex: 6,
    }}>
      {[
        { av: 'A', handle: '@arjun', msg: 'Sound is super clear!' },
        { av: 'P', handle: '@priya', msg: 'Love this so much 🔥' },
        { av: 'R', handle: '@rahul', msg: 'Where is this place?' },
      ].map((c, i) => (
        <div key={i} style={{
          display: 'grid', gridTemplateColumns: '22px 1fr', gap: '7px',
          background: 'rgba(0,0,0,0.38)', backdropFilter: 'blur(6px)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '10px', padding: '5px 8px',
        }}>
          <div style={{
            width: '22px', height: '22px', borderRadius: '50%',
        background: 'linear-gradient(135deg, #ee3a3a, #cc2f2f)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontSize: '10px', fontWeight: 700,
          }}>{c.av}</div>
          <div style={{ color: '#fff', fontSize: '11px' }}>
            <span style={{ fontWeight: 700, marginRight: '4px' }}>{c.handle}</span>
            {c.msg}
          </div>
        </div>
      ))}
    </div>

    <div style={{
      position: 'absolute', bottom: '62px', left: '10px', right: '10px',
      display: 'flex', gap: '6px', zIndex: 6,
    }}>
      <div style={{
        flex: 1, background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '20px', padding: '9px 14px',
        color: 'rgba(255,255,255,0.5)', fontSize: '12px',
      }}>Add a comment...</div>
      <div style={{
        width: '38px', height: '38px', borderRadius: '12px',
        background: '#ee3a3a', display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M22 2 11 13M22 2 15 22l-4-9-9-4 20-7Z"/>
        </svg>
      </div>
    </div>

    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0, height: '56px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-around',
      background: 'linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.2))',
      backdropFilter: 'blur(10px)',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      zIndex: 6,
    }}>
      {[
        <path key="h" d="M3 10.5l9-7 9 7M5 10v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8"/>,
        <><circle key="sc" cx="11" cy="11" r="7"/><path key="sl" d="M21 21l-4.35-4.35"/></>,
        <path key="p" d="M12 5v14M5 12h14"/>,
        <><rect key="r" x="3" y="5" width="18" height="14" rx="3"/><path key="rp" d="M10 9l5 3-5 3z"/></>,
        <><circle key="u" cx="12" cy="8" r="4"/><path key="ul" d="M4 20a8 8 0 0 1 16 0"/></>,
      ].map((icon, i) => (
        <div key={i} style={{
          width: '40px', height: '40px', borderRadius: '10px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: i === 0 ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.2)',
          border: `1px solid ${i === 0 ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.06)'}`,
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">{icon}</svg>
        </div>
      ))}
    </div>
  </>
);

const RightScreenContent: React.FC = () => (
  <>
    <div style={{
      position: 'absolute', top: '54px', left: '12px', right: '12px',
      display: 'flex', alignItems: 'center', gap: '8px', zIndex: 6,
    }}>
      <div style={{
        width: '28px', height: '28px', borderRadius: '50%',
        background: 'linear-gradient(135deg, #ee3a3a, #f59e0b)',
        border: '2px solid rgba(255,255,255,0.3)',
      }} />
      <div style={{
        padding: '5px 10px', borderRadius: '20px',
        background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)',
        color: '#fff', fontSize: '11px', fontWeight: 600,
      }}>@naturephotographer</div>
      <div style={{
        padding: '4px 10px', borderRadius: '20px',
        background: 'rgba(255,255,255,0.18)',
        border: '1px solid rgba(255,255,255,0.2)',
        color: '#fff', fontSize: '10px', fontWeight: 600,
      }}>Follow</div>
    </div>

    <div style={{
      position: 'absolute', bottom: '120px', left: '10px', right: '10px',
      display: 'flex', flexDirection: 'column', gap: '5px', zIndex: 6,
    }}>
      {[
        { av: 'A', handle: '@ananya', msg: 'Amazing shot!', color: '#3b82f6' },
        { av: 'S', handle: '@sidharth', msg: 'How close were you?', color: '#8b5cf6' },
      ].map((c, i) => (
        <div key={i} style={{
          display: 'grid', gridTemplateColumns: '22px 1fr', gap: '7px',
          background: 'rgba(0,0,0,0.32)', backdropFilter: 'blur(6px)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '10px', padding: '5px 8px',
        }}>
          <div style={{
            width: '22px', height: '22px', borderRadius: '50%',
            background: `linear-gradient(135deg, ${c.color}, #ec4899)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontSize: '10px', fontWeight: 700,
          }}>{c.av}</div>
          <div style={{ color: '#fff', fontSize: '11px' }}>
            <span style={{ fontWeight: 700, marginRight: '4px' }}>{c.handle}</span>
            {c.msg}
          </div>
        </div>
      ))}
      <div style={{
        display: 'grid', gridTemplateColumns: '22px 1fr', gap: '7px',
        background: 'rgba(0,0,0,0.38)', backdropFilter: 'blur(6px)',
        border: '1px solid rgba(255,255,255,0.09)',
        borderRadius: '10px', padding: '5px 8px',
      }}>
        <div style={{
          width: '22px', height: '22px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #10b981, #06b6d4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontSize: '10px', fontWeight: 700,
        }}>D</div>
        <div style={{ color: '#fff', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontWeight: 700 }}>@deepika</span>
          <span style={{ color: 'rgba(255,255,255,0.5)' }}>is typing</span>
          <span style={{ display: 'flex', gap: '3px' }}>
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                width: '4px', height: '4px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.6)',
                display: 'inline-block',
                animation: 'pulse 1.2s infinite',
                animationDelay: `${i * 0.2}s`,
              }} />
            ))}
          </span>
        </div>
      </div>
    </div>

    <div style={{
      position: 'absolute', bottom: '62px', left: '10px', right: '10px',
      display: 'flex', gap: '6px', zIndex: 6,
    }}>
      <div style={{
        flex: 1, background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '20px', padding: '9px 14px',
        color: 'rgba(255,255,255,0.5)', fontSize: '12px',
      }}>Add a comment...</div>
      <div style={{
        width: '38px', height: '38px', borderRadius: '12px',
        background: '#ee3a3a', display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M22 2 11 13M22 2 15 22l-4-9-9-4 20-7Z"/>
        </svg>
      </div>
    </div>

    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0, height: '56px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-around',
      background: 'linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.2))',
      backdropFilter: 'blur(10px)',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      zIndex: 6,
    }}>
      {[0,1,2,3,4].map(i => (
        <div key={i} style={{
          width: '40px', height: '40px', borderRadius: '10px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: i === 3 ? 'rgba(238,58,58,0.25)' : 'rgba(0,0,0,0.2)',
          border: `1px solid ${i === 3 ? 'rgba(238,58,58,0.4)' : 'rgba(255,255,255,0.06)'}`,
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={i === 3 ? '#ee3a3a' : 'white'} strokeWidth="1.8">
            {i === 0 && <path d="M3 10.5l9-7 9 7M5 10v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8"/>}
            {i === 1 && <><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></>}
            {i === 2 && <path d="M12 5v14M5 12h14"/>}
            {i === 3 && <><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M10 9l5 3-5 3z"/></>}
            {i === 4 && <><circle cx="12" cy="8" r="4"/><path d="M4 20a8 8 0 0 1 16 0"/></>}
          </svg>
        </div>
      ))}
    </div>
  </>
);

interface IPhoneMockup3DProps {
  leftScreen?: string;
  rightScreen?: string;
}

const IPhoneMockup3D: React.FC<IPhoneMockup3DProps> = ({
  leftScreen = 'https://img.freepik.com/premium-photo/selfie-taken-by-fan-front-row-capturing-their-excitement-stage_891336-49344.jpg',
  rightScreen = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = wrapperRef.current?.getBoundingClientRect();
    if (!rect) return;

    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / rect.width;
    const dy = (e.clientY - cy) / rect.height;

    const phones = wrapperRef.current?.querySelectorAll<HTMLElement>('.phone-3d');

    if (!phones || phones.length < 2) return;

    phones[0].style.transform = `rotateY(${16 - dx * 8}deg) rotateX(${4 + dy * 6}deg) rotate(-6deg) translateX(-140px) translateY(18px) translateZ(54px)`;
    phones[1].style.transform = `rotateY(${-16 + dx * 8}deg) rotateX(${4 + dy * 6}deg) rotate(6deg) translateX(140px) translateY(-18px) translateZ(-36px)`;
  };

  const handleMouseLeave = () => {
    const phones = wrapperRef.current?.querySelectorAll<HTMLElement>('.phone-3d');

    if (!phones || phones.length < 2) return;

    phones[0].style.transform = 'rotateY(16deg) rotateX(4deg) rotate(-6deg) translateX(-140px) translateY(18px) translateZ(54px)';
    phones[1].style.transform = 'rotateY(-16deg) rotateX(4deg) rotate(6deg) translateX(140px) translateY(-18px) translateZ(-36px)';
  };

  return (
    <div
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        width: '100%',
        height: '468px',
        perspective: '1800px',
        transformStyle: 'preserve-3d',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(238,58,58,0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
      }} />

      <PhoneShell
        backgroundImage={leftScreen}
        zIndex={2}
        tiltStyle={{
          transform: 'rotateY(16deg) rotateX(4deg) rotate(-6deg) translateX(-140px) translateY(18px) translateZ(54px)',
        }}
      >
        <LeftScreenContent />
      </PhoneShell>

      <PhoneShell
        backgroundImage={rightScreen}
        zIndex={3}
        tiltStyle={{
          transform: 'rotateY(-16deg) rotateX(4deg) rotate(6deg) translateX(140px) translateY(-18px) translateZ(-36px)',
        }}
      >
        <RightScreenContent />
      </PhoneShell>
    </div>
  );
};

export default IPhoneMockup3D;