import Image from "next/image";
import { ExternalLink, ShieldCheck } from "lucide-react";

export function HeroShowcase() {
  return (
    <figure className="hero-product-showcase">
      {/* Chrome Window Header */}
      <div className="hero-product-chrome">
        <div className="chrome-dots" aria-hidden="true">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <div className="chrome-url-bar">
          <span className="chrome-url-icon" aria-hidden="true">🔒</span>
          <span className="chrome-url-text">careon24.com</span>
        </div>
        <div className="chrome-status-tag">
          <span className="live-pulse-dot" />
          <span>LIVE CLIENT DELIVERY</span>
        </div>
      </div>

      <div className="hero-product-image-frame">
        <Image
          src="/images/projects/careon24-responsive.svg"
          alt="CareOn24 home healthcare website shown on desktop and mobile screens"
          width={820}
          height={500}
          preload
          className="hero-product-image"
        />
      </div>

      <figcaption className="hero-product-caption">
        <div className="caption-brand-lockup">
          <span className="hero-product-caption-mark" aria-hidden="true">C</span>
          <div className="caption-text-block">
            <strong>CareOn24 Healthcare Platform</strong>
            <small>Home healthcare platform &middot; Client project &middot; Live Production</small>
          </div>
        </div>
        <a
          href="https://www.careon24.com/"
          target="_blank"
          rel="noreferrer"
          className="caption-live-link"
          aria-label="Visit CareOn24 live website (opens in new tab)"
        >
          <span>Live Site</span>
          <ExternalLink size={12} aria-hidden="true" />
        </a>
      </figcaption>
    </figure>
  );
}
