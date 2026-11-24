import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/config";
import styles from "./founder-section.module.css";

export function FounderSection() {
  return (
    <section id="about" className={styles.section} aria-labelledby="founder-title">
      <div className={`page-wrap ${styles.layout}`}>
        <figure className={styles.portrait}>
          <Image src="/WhatsApp%20Image%202026-10-08%20at%2012.09.53%20AM.jpeg" alt="Patkar Infotech founder holding a certificate at his workspace" fill sizes="(max-width: 760px) 100vw, 44vw" />
          <figcaption><span aria-hidden="true" />Building with purpose</figcaption>
        </figure>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Meet the founder</p>
          <h2 id="founder-title">The vision behind<br />Patkar Infotech</h2>
          <p className={styles.role}>Websites, apps &amp; software · {siteConfig.city}, {siteConfig.state}</p>
          <div className={styles.story}>
            <p>At Patkar Infotech, our focus is simple — make technology practical, accessible and useful for your business.</p>
            <p>We work with businesses, founders and entrepreneurs to turn ideas into <strong>professional websites, mobile applications and custom software</strong> built around the way they work.</p>
            <p>For us, a project is more than a launch. It is an opportunity to understand your goals, solve everyday challenges and create something your team and customers can rely on.</p>
            <p>Our approach brings together <strong>thoughtful design, clear communication and dependable development.</strong></p>
          </div>
          <blockquote>Our goal is simple — to help your business move forward with technology that works for you.</blockquote>
          <div className={styles.actions}>
            <Link href="/work" className={styles.primary}>Explore our work <ArrowRight size={17} aria-hidden="true" /></Link>
            <Link href="/contact" className={styles.secondary}>Talk to us</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
