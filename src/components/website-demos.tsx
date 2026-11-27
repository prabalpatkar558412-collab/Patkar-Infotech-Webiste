import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { websiteDemos } from "@/lib/website-demos";
import { ShowcaseVideo } from "./showcase-video";
import styles from "./website-demos.module.css";

export function WebsiteDemos({ showHeader = true }: { showHeader?: boolean }) {
  const hasVideos = websiteDemos.some((demo) => demo.video);
  return (
    <section className={styles.section} aria-label={showHeader ? undefined : "Website video demos"} aria-labelledby={showHeader ? "website-demos-title" : undefined}>
      {showHeader && <div className="page-wrap">
        <header className={styles.header}>
          <p className={styles.eyebrow}>{hasVideos ? "Our Website Videos" : "Our Website Showcase"}</p>
          <h2 id="website-demos-title">See Our Websites <span>In Action</span></h2>
          <p>{hasVideos ? "Watch short videos of some of our recent websites." : "A closer look at our recent client websites."}</p>
        </header>
      </div>}
      <div className={styles.gallery} role="region" aria-label="Client website previews">
        {websiteDemos.map((demo, index) => {
          const project = projects.find((item) => item.slug === demo.slug);
          if (!project && !demo.video) return null;
          return (
            <figure className={styles.item} key={demo.slug}>
              <div className={styles.phone}>
                <span className={styles.speaker} aria-hidden="true" />
                <div className={styles.screen}>
                  {demo.video ? (
                    <ShowcaseVideo src={demo.video} poster={project?.previewImage} label={project ? `${project.clientOrBrand} website demo` : `Website showcase demo ${index + 1}`} />
                  ) : project ? (
                    <Link href={`/projects/${project.slug}`} className={styles.preview} aria-label={`Explore ${project.clientOrBrand}`}>
                      <div className={styles.image}>
                        <Image src={project.previewImage} alt={`${project.clientOrBrand} website preview`} fill sizes="(max-width: 640px) 220px, 250px" />
                      </div>
                    </Link>
                  ) : null}
                </div>
                <span className={styles.homeBar} aria-hidden="true" />
              </div>
              <figcaption>{project ? <Link href={`/projects/${project.slug}`}>Explore {project.clientOrBrand}</Link> : `Website demo ${index + 1}`}</figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
