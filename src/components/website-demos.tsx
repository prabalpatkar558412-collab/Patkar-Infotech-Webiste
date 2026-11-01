import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { websiteDemos } from "@/lib/website-demos";
import styles from "./website-demos.module.css";

export function WebsiteDemos() {
  const hasVideos = websiteDemos.some((demo) => demo.video);
  return (
    <section className={styles.section} aria-labelledby="website-demos-title">
      <div className="page-wrap">
        <header className={styles.header}>
          <p className={styles.eyebrow}>{hasVideos ? "Our Website Videos" : "Our Website Showcase"}</p>
          <h2 id="website-demos-title">See Our Websites <span>In Action</span></h2>
          <p>{hasVideos ? "Watch short videos of some of our recent websites." : "A closer look at our recent client websites."}</p>
        </header>
      </div>
      <div className={styles.gallery} tabIndex={0} role="region" aria-label="Client website previews. Scroll horizontally to explore.">
        {websiteDemos.map((demo) => {
          const project = projects.find((item) => item.slug === demo.slug);
          if (!project) return null;
          return (
            <figure className={styles.item} key={demo.slug}>
              <div className={styles.phone}>
                <span className={styles.speaker} aria-hidden="true" />
                <div className={styles.screen}>
                  {demo.video ? (
                    <video controls playsInline preload="none" poster={project.previewImage} aria-label={`${project.clientOrBrand} website demo`}>
                      <source src={demo.video} />
                      Your browser does not support video playback.
                    </video>
                  ) : (
                    <Link href={`/projects/${project.slug}`} className={styles.preview} aria-label={`Explore ${project.clientOrBrand}`}>
                      <div className={styles.image}>
                        <Image src={project.previewImage} alt={`${project.clientOrBrand} website preview`} fill sizes="(max-width: 640px) 220px, 250px" />
                      </div>
                    </Link>
                  )}
                </div>
                <span className={styles.homeBar} aria-hidden="true" />
              </div>
              <figcaption><Link href={`/projects/${project.slug}`}>{project.clientOrBrand} <ArrowUpRight size={14} aria-hidden="true" /></Link></figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
