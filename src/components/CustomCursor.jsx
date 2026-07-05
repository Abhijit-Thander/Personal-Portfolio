import React, { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Custom Cursor
 * -------------
 * Drop this ONCE at the root of your app (in App.jsx, outside your routes/pages),
 * so it renders on every page.
 *
 * - A small solid dot follows the mouse instantly.
 * - A larger ring trails slightly behind (smooth lag via gsap.quickTo).
 * - Ring grows + fills bronze when hovering any element marked as interactive.
 * - Automatically disables itself on touch devices (no mouse = no custom cursor).
 *
 * MARKING ELEMENTS AS "HOVERABLE"
 * Add data-cursor="hover" to any element you want to trigger the grow effect:
 *   <a data-cursor="hover" href="...">Link</a>
 *   <button data-cursor="hover">Click</button>
 * By default it also auto-applies to all <a> and <button> tags, so you usually
 * don't need to add it manually — only use data-cursor="hover" for custom
 * elements like project cards (divs) that should also trigger it.
 */

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Skip entirely on touch devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.documentElement.classList.add("custom-cursor-active");

    // Dot: instant follow
    const setDotX = gsap.quickTo(dot, "x", { duration: 0.01 });
    const setDotY = gsap.quickTo(dot, "y", { duration: 0.01 });

    // Ring: slight lag for a smooth trailing feel
    const setRingX = gsap.quickTo(ring, "x", {
      duration: 0.35,
      ease: "power3.out",
    });
    const setRingY = gsap.quickTo(ring, "y", {
      duration: 0.35,
      ease: "power3.out",
    });

    const moveHandler = (e) => {
      setDotX(e.clientX);
      setDotY(e.clientY);
      setRingX(e.clientX);
      setRingY(e.clientY);
    };

    const growCursor = () => ring.classList.add("cursor-hover");
    const shrinkCursor = () => ring.classList.remove("cursor-hover");

    const hideCursor = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.2 });
    };
    const showCursor = () => {
      gsap.to([dot, ring], { opacity: 1, duration: 0.2 });
    };

    window.addEventListener("mousemove", moveHandler);
    document.addEventListener("mouseleave", hideCursor);
    document.addEventListener("mouseenter", showCursor);

    // Auto-detect interactive elements + anything explicitly marked
    const attachHoverListeners = () => {
      const targets = document.querySelectorAll(
        'a, button, [data-cursor="hover"]',
      );
      targets.forEach((el) => {
        el.addEventListener("mouseenter", growCursor);
        el.addEventListener("mouseleave", shrinkCursor);
      });
      return targets;
    };

    let targets = attachHoverListeners();

    // Re-scan when DOM changes (route changes, dynamic cards, etc.)
    const observer = new MutationObserver(() => {
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", growCursor);
        el.removeEventListener("mouseleave", shrinkCursor);
      });
      targets = attachHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      document.removeEventListener("mouseleave", hideCursor);
      document.removeEventListener("mouseenter", showCursor);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", growCursor);
        el.removeEventListener("mouseleave", shrinkCursor);
      });
      observer.disconnect();
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
};

export default CustomCursor;
