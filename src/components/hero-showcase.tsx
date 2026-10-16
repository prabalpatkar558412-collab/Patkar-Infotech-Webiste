import Image from "next/image";

export function HeroShowcase() {
  return (
    <figure className="hero-product-showcase">
      <div className="hero-product-image-frame">
        <Image
          src="/images/projects/careon24-responsive.svg"
          alt="CareOn24 home healthcare website shown on desktop and mobile screens"
          width={820}
          height={500}
          priority
          className="hero-product-image"
        />
      </div>
      <figcaption className="hero-product-caption">
        <span className="hero-product-caption-mark" aria-hidden="true">C</span>
        <span>
          <strong>CareOn24</strong>
          <small>Home healthcare platform · Client project</small>
        </span>
      </figcaption>
    </figure>
  );
}
