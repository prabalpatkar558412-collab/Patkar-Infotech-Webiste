import React from "react";
import Image from "next/image";
import Link from "next/link";

export function BrandLogo({ invert = false }: { invert?: boolean }) {
  return (
    <Link className={`brand-container ${invert ? "is-inverted" : ""}`} href="/#home" aria-label="Patkar Infotech - Home">
      <div className="brand-logo-lockup">
        <Image
          className="brand-symbol-img"
          src="/WhatsApp_Image_2026-10-19_at_2.23.42_AM-removebg-preview.png"
          width={56}
          height={56}
          alt="Patkar Infotech logo"
          priority
        />
      </div>
    </Link>
  );
}
