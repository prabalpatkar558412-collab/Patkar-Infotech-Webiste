import React from "react";

interface IllustrationProps {
  className?: string;
}

export function StepIllustration({
  id,
  className = "",
}: {
  id: string;
  className?: string;
}) {
  switch (id) {
    case "discuss":
      return <DiscussIllustration className={className} />;
    case "plan":
      return <PlanIllustration className={className} />;
    case "design":
      return <DesignIllustration className={className} />;
    case "develop":
      return <DevelopIllustration className={className} />;
    case "test":
      return <TestIllustration className={className} />;
    case "launch":
      return <LaunchIllustration className={className} />;
    case "support":
      return <SupportIllustration className={className} />;
    case "grow":
      return <GrowIllustration className={className} />;
    default:
      return <DiscussIllustration className={className} />;
  }
}

export function DiscussIllustration({ className = "" }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 280 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="280" height="180" rx="8" fill="#F8FAFC" />
      <rect x="16" y="16" width="248" height="148" rx="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
      {/* Background blueprint grid */}
      <path d="M16 50H264M16 90H264M16 130H264M80 16V164M140 16V164M200 16V164" stroke="#F1F5F9" strokeWidth="1" />
      
      {/* Client bubble */}
      <rect x="36" y="38" width="130" height="46" rx="8" fill="#EDF5FB" stroke="#BAE0F8" strokeWidth="1.5" />
      <circle cx="54" cy="61" r="10" fill="#0879C9" />
      <path d="M50 61L53 64L58 58" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="72" y="52" width="76" height="6" rx="3" fill="#102F70" />
      <rect x="72" y="64" width="52" height="5" rx="2.5" fill="#64748B" />

      {/* Team response bubble */}
      <rect x="114" y="96" width="130" height="46" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
      <circle cx="132" cy="119" r="10" fill="#102F70" />
      <circle cx="132" cy="119" r="4" fill="#38BDF8" />
      <rect x="150" y="110" width="76" height="6" rx="3" fill="#0879C9" />
      <rect x="150" y="122" width="58" height="5" rx="2.5" fill="#94A3B8" />

      {/* Badge */}
      <rect x="194" y="28" width="54" height="20" rx="4" fill="#E0F2FE" />
      <text x="221" y="42" fill="#0369A1" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
        DISCUSS
      </text>
    </svg>
  );
}

export function PlanIllustration({ className = "" }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 280 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="280" height="180" rx="8" fill="#F8FAFC" />
      <rect x="16" y="16" width="248" height="148" rx="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
      
      {/* Scope card left */}
      <rect x="32" y="34" width="96" height="112" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
      <rect x="42" y="44" width="50" height="7" rx="3" fill="#102F70" />
      <path d="M42 64H116M42 84H116M42 104H116" stroke="#E2E8F0" strokeWidth="1" />
      <rect x="42" y="60" width="14" height="6" rx="2" fill="#38BDF8" />
      <rect x="62" y="61" width="46" height="4" rx="2" fill="#64748B" />
      <rect x="42" y="80" width="14" height="6" rx="2" fill="#0879C9" />
      <rect x="62" y="81" width="40" height="4" rx="2" fill="#64748B" />
      <rect x="42" y="100" width="14" height="6" rx="2" fill="#102F70" />
      <rect x="62" y="101" width="50" height="4" rx="2" fill="#64748B" />

      {/* Roadmap timeline right */}
      <rect x="138" y="34" width="110" height="112" rx="6" fill="#EDF5FB" stroke="#BAE0F8" strokeWidth="1.5" />
      <rect x="150" y="44" width="42" height="7" rx="3" fill="#0879C9" />
      
      {/* Timeline nodes */}
      <line x1="154" y1="68" x2="154" y2="126" stroke="#94A3B8" strokeWidth="2" strokeDasharray="3 3" />
      <circle cx="154" cy="70" r="5" fill="#0879C9" />
      <rect x="166" y="67" width="66" height="6" rx="3" fill="#102F70" />
      
      <circle cx="154" cy="98" r="5" fill="#38BDF8" />
      <rect x="166" y="95" width="54" height="6" rx="3" fill="#64748B" />

      <circle cx="154" cy="126" r="5" fill="#102F70" />
      <rect x="166" y="123" width="60" height="6" rx="3" fill="#64748B" />
    </svg>
  );
}

export function DesignIllustration({ className = "" }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 280 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="280" height="180" rx="8" fill="#F8FAFC" />
      <rect x="16" y="16" width="248" height="148" rx="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
      
      {/* Desktop artboard */}
      <rect x="32" y="34" width="144" height="96" rx="5" fill="#FFFFFF" stroke="#0879C9" strokeWidth="1.5" />
      <rect x="32" y="34" width="144" height="16" fill="#F1F5F9" />
      <circle cx="42" cy="42" r="2.5" fill="#EF4444" />
      <circle cx="49" cy="42" r="2.5" fill="#F59E0B" />
      <circle cx="56" cy="42" r="2.5" fill="#10B981" />
      <rect x="70" y="39" width="60" height="6" rx="3" fill="#CBD5E1" />

      {/* Layout elements */}
      <rect x="42" y="58" width="60" height="18" rx="3" fill="#EDF5FB" stroke="#BAE0F8" />
      <rect x="48" y="64" width="34" height="6" rx="2" fill="#0879C9" />
      
      <rect x="110" y="58" width="56" height="58" rx="3" fill="#F8FAFC" stroke="#E2E8F0" />
      <rect x="118" y="68" width="40" height="4" rx="2" fill="#94A3B8" />
      <rect x="118" y="78" width="32" height="4" rx="2" fill="#CBD5E1" />
      <rect x="118" y="96" width="28" height="10" rx="2" fill="#102F70" />

      {/* Mobile artboard */}
      <rect x="188" y="44" width="58" height="104" rx="8" fill="#FFFFFF" stroke="#102F70" strokeWidth="2" />
      <rect x="206" y="48" width="22" height="3" rx="1.5" fill="#94A3B8" />
      <rect x="194" y="56" width="46" height="24" rx="3" fill="#EDF5FB" />
      <rect x="198" y="62" width="26" height="4" rx="2" fill="#0879C9" />
      <rect x="194" y="86" width="46" height="44" rx="3" fill="#F8FAFC" stroke="#E2E8F0" />
      <circle cx="217" cy="142" r="3" fill="#CBD5E1" />

      {/* Pen tool cursor */}
      <path d="M120 128L126 148L132 142L142 146L146 138L136 134L142 128H120Z" fill="#0879C9" stroke="#FFFFFF" strokeWidth="1" />
    </svg>
  );
}

export function DevelopIllustration({ className = "" }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 280 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="280" height="180" rx="8" fill="#F8FAFC" />
      <rect x="16" y="16" width="248" height="148" rx="6" fill="#102F70" stroke="#1E3A8A" strokeWidth="1.5" />
      
      {/* Code window titlebar */}
      <rect x="16" y="16" width="248" height="22" rx="6" fill="#0B2356" />
      <circle cx="32" cy="27" r="3" fill="#EF4444" />
      <circle cx="42" cy="27" r="3" fill="#F59E0B" />
      <circle cx="52" cy="27" r="3" fill="#10B981" />
      <text x="140" y="30" fill="#94A3B8" fontSize="8" fontFamily="monospace" textAnchor="middle">
        src/app/backend-api.ts
      </text>

      {/* Code lines */}
      <text x="32" y="58" fill="#38BDF8" fontSize="9" fontFamily="monospace">import</text>
      <text x="74" y="58" fill="#FFFFFF" fontSize="9" fontFamily="monospace">&#123; db &#125;</text>
      <text x="106" y="58" fill="#38BDF8" fontSize="9" fontFamily="monospace">from</text>
      <text x="136" y="58" fill="#A7F3D0" fontSize="9" fontFamily="monospace">"@/lib/database";</text>

      <text x="32" y="78" fill="#FCD34D" fontSize="9" fontFamily="monospace">export async function</text>
      <text x="168" y="78" fill="#67E8F9" fontSize="9" fontFamily="monospace">handleSync() &#123;</text>

      <text x="46" y="96" fill="#38BDF8" fontSize="9" fontFamily="monospace">const</text>
      <text x="82" y="96" fill="#FFFFFF" fontSize="9" fontFamily="monospace">records =</text>
      <text x="144" y="96" fill="#F472B6" fontSize="9" fontFamily="monospace">await</text>
      <text x="180" y="96" fill="#FFFFFF" fontSize="9" fontFamily="monospace">db.query();</text>

      <text x="46" y="114" fill="#38BDF8" fontSize="9" fontFamily="monospace">return</text>
      <text x="88" y="114" fill="#A7F3D0" fontSize="9" fontFamily="monospace">Response.json(records);</text>

      <text x="32" y="132" fill="#67E8F9" fontSize="9" fontFamily="monospace">&#125;</text>

      {/* Terminal status box */}
      <rect x="32" y="142" width="216" height="14" rx="3" fill="#07193F" />
      <circle cx="42" cy="149" r="2.5" fill="#10B981" />
      <text x="50" y="152" fill="#10B981" fontSize="7.5" fontFamily="monospace">
        [LIVE] Ready on https://patkarinfotech.com — Compiled in 18ms
      </text>
    </svg>
  );
}

export function TestIllustration({ className = "" }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 280 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="280" height="180" rx="8" fill="#F8FAFC" />
      <rect x="16" y="16" width="248" height="148" rx="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
      
      {/* Test checklist card left */}
      <rect x="32" y="32" width="124" height="116" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
      <rect x="42" y="42" width="68" height="7" rx="3" fill="#102F70" />
      
      {/* Item 1 Passed */}
      <circle cx="48" cy="64" r="7" fill="#E0F2FE" stroke="#0879C9" strokeWidth="1.5" />
      <path d="M45 64L47 66L51 62" stroke="#0879C9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="62" y="61" width="76" height="5" rx="2.5" fill="#334155" />

      {/* Item 2 Passed */}
      <circle cx="48" cy="86" r="7" fill="#E0F2FE" stroke="#0879C9" strokeWidth="1.5" />
      <path d="M45 86L47 88L51 84" stroke="#0879C9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="62" y="83" width="64" height="5" rx="2.5" fill="#334155" />

      {/* Item 3 Passed */}
      <circle cx="48" cy="108" r="7" fill="#E0F2FE" stroke="#0879C9" strokeWidth="1.5" />
      <path d="M45 108L47 110L51 106" stroke="#0879C9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="62" y="105" width="80" height="5" rx="2.5" fill="#334155" />

      {/* Item 4 Passed */}
      <circle cx="48" cy="130" r="7" fill="#E0F2FE" stroke="#0879C9" strokeWidth="1.5" />
      <path d="M45 130L47 132L51 128" stroke="#0879C9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="62" y="127" width="56" height="5" rx="2.5" fill="#334155" />

      {/* Device matrix badge right */}
      <rect x="166" y="32" width="82" height="52" rx="6" fill="#EDF5FB" stroke="#BAE0F8" strokeWidth="1.5" />
      <text x="207" y="50" fill="#0879C9" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
        DEVICES PASS
      </text>
      <text x="207" y="68" fill="#102F70" fontSize="16" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">
        100%
      </text>

      {/* Performance Meter badge right */}
      <rect x="166" y="94" width="82" height="54" rx="6" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
      <text x="207" y="112" fill="#64748B" fontSize="8" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">
        AUDIT SCORE
      </text>
      <rect x="176" y="124" width="62" height="8" rx="4" fill="#E2E8F0" />
      <rect x="176" y="124" width="58" height="8" rx="4" fill="#0879C9" />
    </svg>
  );
}

export function LaunchIllustration({ className = "" }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 280 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="280" height="180" rx="8" fill="#F8FAFC" />
      <rect x="16" y="16" width="248" height="148" rx="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
      
      {/* Cloud server plate */}
      <rect x="36" y="104" width="208" height="42" rx="6" fill="#102F70" />
      <circle cx="52" cy="125" r="4" fill="#38BDF8" />
      <circle cx="66" cy="125" r="4" fill="#38BDF8" />
      <line x1="84" y1="120" x2="160" y2="120" stroke="#334E85" strokeWidth="2" />
      <line x1="84" y1="130" x2="140" y2="130" stroke="#334E85" strokeWidth="2" />
      <rect x="180" y="116" width="50" height="18" rx="4" fill="#0879C9" />
      <text x="205" y="128" fill="#FFFFFF" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
        ONLINE
      </text>

      {/* Rocket lifting off */}
      <g transform="translate(140, 68) rotate(-45)">
        <path d="M0 -30C10 -25 15 -10 15 15H-15C-15 -10 -10 -25 0 -30Z" fill="#0879C9" />
        <circle cx="0" cy="-5" r="5" fill="#FFFFFF" />
        <path d="M-15 10L-25 22L-15 20Z" fill="#102F70" />
        <path d="M15 10L25 22L15 20Z" fill="#102F70" />
        {/* Exhaust flame */}
        <path d="M-8 15C-6 28 0 36 0 36C0 36 6 28 8 15Z" fill="#38BDF8" />
      </g>

      {/* SSL Lock badge */}
      <rect x="44" y="34" width="108" height="26" rx="5" fill="#EDF5FB" stroke="#BAE0F8" strokeWidth="1.5" />
      <circle cx="58" cy="47" r="4" fill="#0879C9" />
      <text x="108" y="50" fill="#102F70" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="monospace">
        HTTPS://LIVE.APP
      </text>
    </svg>
  );
}

export function SupportIllustration({ className = "" }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 280 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="280" height="180" rx="8" fill="#F8FAFC" />
      <rect x="16" y="16" width="248" height="148" rx="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
      
      {/* Uptime pulse monitor */}
      <rect x="32" y="34" width="216" height="64" rx="6" fill="#EDF5FB" stroke="#BAE0F8" strokeWidth="1.5" />
      <text x="46" y="50" fill="#0879C9" fontSize="8.5" fontWeight="700" fontFamily="sans-serif">
        SYSTEM HEALTH &amp; TELEMETRY
      </text>
      <text x="216" y="50" fill="#059669" fontSize="8.5" fontWeight="700" fontFamily="monospace">
        99.9% UP
      </text>
      
      {/* Heartbeat pulse wave */}
      <path
        d="M46 72H88L96 58L104 88L112 64L118 76L126 72H234"
        stroke="#0879C9"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Support card left */}
      <rect x="32" y="108" width="102" height="42" rx="5" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
      <rect x="42" y="118" width="56" height="6" rx="3" fill="#102F70" />
      <rect x="42" y="130" width="76" height="5" rx="2.5" fill="#94A3B8" />

      {/* Guarantee badge right */}
      <rect x="146" y="108" width="102" height="42" rx="5" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
      <circle cx="164" cy="129" r="10" fill="#102F70" />
      <path d="M161 129L163 131L167 127" stroke="#38BDF8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <text x="180" y="126" fill="#102F70" fontSize="8" fontWeight="700" fontFamily="sans-serif">
        BUG FIXES
      </text>
      <text x="180" y="136" fill="#64748B" fontSize="7.5" fontFamily="sans-serif">
        Guaranteed
      </text>
    </svg>
  );
}

export function GrowIllustration({ className = "" }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 280 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="280" height="180" rx="8" fill="#F8FAFC" />
      <rect x="16" y="16" width="248" height="148" rx="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
      
      {/* Ascending scale chart */}
      <rect x="32" y="32" width="216" height="116" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
      
      {/* Grid lines */}
      <line x1="44" y1="124" x2="236" y2="124" stroke="#CBD5E1" strokeWidth="1" />
      <line x1="44" y1="96" x2="236" y2="96" stroke="#F1F5F9" strokeWidth="1" />
      <line x1="44" y1="68" x2="236" y2="68" stroke="#F1F5F9" strokeWidth="1" />

      {/* Bar charts growing */}
      <rect x="60" y="98" width="24" height="26" rx="3" fill="#BAE6FD" />
      <rect x="100" y="80" width="24" height="44" rx="3" fill="#7DD3FC" />
      <rect x="140" y="62" width="24" height="62" rx="3" fill="#38BDF8" />
      <rect x="180" y="44" width="24" height="80" rx="3" fill="#0879C9" />

      {/* Trend upward curve */}
      <path
        d="M72 90C110 80 150 56 192 38"
        stroke="#102F70"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="192" cy="38" r="5" fill="#102F70" />
      <circle cx="192" cy="38" r="2.5" fill="#38BDF8" />

      {/* Feature label */}
      <rect x="44" y="40" width="68" height="20" rx="4" fill="#FFFFFF" stroke="#CBD5E1" />
      <text x="78" y="53" fill="#0369A1" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
        SCALE &amp; v2.0
      </text>
    </svg>
  );
}
