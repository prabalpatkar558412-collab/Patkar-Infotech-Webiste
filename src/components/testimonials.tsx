import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials, type Testimonial } from "@/lib/testimonials";
import styles from "./testimonials.module.css";

function ReviewCard({ review }: { review: Testimonial }) {
  const initials = review.name.split(" ").map((part) => part[0]).slice(0, 2).join("");
  return (
    <li className={styles.card}>
      <div className={styles.avatar}>
        {review.image ? (
          <Image src={review.image} alt={`Sample profile portrait for ${review.name}`} width={66} height={66} sizes="(max-width: 640px) 52px, 66px" />
        ) : <span aria-hidden="true">{initials}</span>}
      </div>
      <div className={styles.body}>
        <div className={styles.byline}>
          <span className={styles.name}>{review.name}</span>
          <span className={styles.rating} role="img" aria-label={`${review.rating} out of 5 stars`}>
            {Array.from({ length: 5 }, (_, index) => (
              <Star key={index} size={13} aria-hidden="true" fill={index < review.rating ? "currentColor" : "none"} />
            ))}
          </span>
        </div>
        <blockquote className={styles.quote}>{review.review}</blockquote>
      </div>
    </li>
  );
}

export function Testimonials() {
  const rows = [testimonials.slice(0, 6), testimonials.slice(6)];
  return (
    <section className={styles.section} aria-labelledby="testimonials-title">
      <div className={`page-wrap ${styles.header}`}>
        <h2 id="testimonials-title" className="section-title">Our Clients Trust Us</h2>
        <p className={styles.subtitle}>Rated 4.8 Stars by Businesses Across India</p>
        <p className={styles.sample}>Sample testimonials, profile photos &amp; illustrative rating</p>
      </div>
      <input className={styles.pauseInput} type="checkbox" id="testimonials-pause" />
      <label className={styles.pauseLabel} htmlFor="testimonials-pause">Pause animation</label>
      <div className={styles.rows}>
        {rows.map((reviews, row) => (
          <div className={styles.viewport} key={row}>
            <div className={`${styles.track} ${row === 1 ? styles.reverse : ""}`}>
              {[false, true].map((duplicate) => (
                <ul className={styles.group} key={String(duplicate)} aria-label={duplicate ? undefined : `Client reviews, row ${row + 1}`} aria-hidden={duplicate || undefined}>
                  {reviews.map((review) => <ReviewCard key={review.id} review={review} />)}
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
