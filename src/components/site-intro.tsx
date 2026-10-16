"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function SiteIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => setVisible(false), reducedMotion ? 500 : 3000);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="site-intro" role="status" aria-label="Loading Patkar Infotech">
      <div className="site-intro-content">
        <span className="site-intro-orbit site-intro-orbit-outer" aria-hidden="true" />
        <span className="site-intro-orbit site-intro-orbit-inner" aria-hidden="true" />
        <div className="site-intro-logo-frame">
          <Image src="/Final_Logo.jpeg" alt="Patkar Infotech" width={512} height={512} priority />
        </div>
      </div>
    </div>
  );
}
