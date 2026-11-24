import Link from "next/link";
import { Footer, Header } from "@/components/site";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="section not-found-page">
        <div className="page-wrap">
          <p className="section-eyebrow">PAGE NOT FOUND</p>
          <h1 className="section-title">Let’s Get You Back on Track</h1>
          <p>This page may have moved, or the address may be incorrect.</p>
          <div className="not-found-actions">
            <Link href="/" className="button button-blue">Go to Homepage</Link>
            <Link href="/services" className="button button-outline">Explore Services</Link>
            <Link href="/contact" className="button button-outline">Contact Us</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
