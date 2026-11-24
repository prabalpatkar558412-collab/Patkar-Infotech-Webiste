"use client";

import { useEffect, useRef, useState } from "react";

export function ShowcaseVideo({ src, poster, label }: { src: string; poster?: string; label: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [load, setLoad] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(preference.matches);
    updateMotion();
    preference.addEventListener("change", updateMotion);
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
      if (entry.isIntersecting) setLoad(true);
    }, { threshold: 0.15 });
    observer.observe(video);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", updateMotion);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (load && visible && !reducedMotion) {
      void video.play().catch(() => { /* Native controls remain available if autoplay is blocked. */ });
    } else {
      video.pause();
    }
  }, [load, visible, reducedMotion]);

  return (
    <video ref={videoRef} src={load ? src : undefined} muted loop playsInline controls preload="none" poster={poster} aria-label={label}>
      Your browser does not support video playback. <a href={src}>Download this website demo.</a>
    </video>
  );
}
