import React from "react";
import Image from "next/image";
import Link from "next/link";

export function BrandLogo({ invert = false }: { invert?: boolean }) {
  return (
    <Link className={`brand-container ${invert ? "is-inverted" : ""}`} href="/#home" aria-label="Patkar Infotech - Home">
      <div className="brand-logo-lockup">
        <Image
          className="brand-symbol-img"
          src="/brand-symbol.png"
          width={44}
          height={38}
          alt="Patkar Infotech Symbol"
          priority
        />
        <div className="brand-text-block">
          <span className="brand-name">PATKAR INFOTECH</span>
          <span className="brand-tagline">SOLUTIONS THAT EMPOWER</span>
        </div>
      </div>
    </Link>
  );
}
