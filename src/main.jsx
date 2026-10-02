import React, { useLayoutEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.css";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    number: "94%",
    text: "Digital experiences built for real people",
  },
  {
    number: "3.2×",
    text: "Faster journeys through smart interaction",
  },
  {
    number: "48+",
    text: "Ideas transformed into usable products",
  },
];

function Main() {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const statsRef = useRef(null);
  const progressRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      const letters = headingRef.current.querySelectorAll(".letter");

      gsap.fromTo(
        letters,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.06,
          ease: "power3.out",
        }
      );

      // Statistics animation
      const statItems = statsRef.current.querySelectorAll(".stat");

      gsap.fromTo(
        statItems,
        {
          y: 25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          delay: 0.5,
          ease: "power2.out",
        }
      );

      // Scroll based animation
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=1500",
          scrub: 1,
          pin: true,
          anticipatePin: 1,

          onUpdate: (self) => {
            gsap.set(progressRef.current, {
              scaleX: self.progress,
            });
          },
        },
      });

      timeline
        .to(
          ".main-object",
          {
            scale: 1.12,
            rotate: 8,
            y: -40,
            ease: "none",
          },
          0
        )
        .to(
          ".object-circle",
          {
            rotate: -20,
            scale: 0.94,
            ease: "none",
          },
          0
        )
        .to(
          ".outer-circle",
          {
            rotate: 40,
            scale: 1.08,
            ease: "none",
          },
          0
        )
        .to(
          ".hero-content",
          {
            y: -100,
            opacity: 0.3,
            ease: "none",
          },
          0
        )
        .to(
          ".stats",
          {
            y: 70,
            opacity: 0.3,
            ease: "none",
          },
          0
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="page">
      {/* Hero Section */}
      <section ref={heroRef} className="hero">
        <div className="background-glow"></div>

        {/* Header */}
        <header className="header">
          <div className="logo">ITZFIZZ</div>

          <div className="header-right">
            DIGITAL EXPERIENCE
          </div>
        </header>

        {/* Top Label */}
        <div className="top-label">
          SCROLL TO EXPLORE
        </div>

        {/* Heading */}
        <div className="hero-content">
          <p className="subtitle">
            WE CREATE WHAT MOVES PEOPLE
          </p>

          <h1 ref={headingRef}>
            <span className="letter">W</span>
            <span className="letter">E</span>
            <span className="letter">L</span>
            <span className="letter">C</span>
            <span className="letter">O</span>
            <span className="letter">M</span>
            <span className="letter">E</span>

            <span className="word-space"></span>

            <span className="letter">I</span>
            <span className="letter">T</span>
            <span className="letter">Z</span>
            <span className="letter">F</span>
            <span className="letter">I</span>
            <span className="letter">Z</span>
            <span className="letter">Z</span>
          </h1>
        </div>

        {/* Main Visual */}
        <div className="main-object">
          <div className="object-glow"></div>

          <div className="object-circle">
            <div className="inner-circle"></div>
            <div className="highlight"></div>
          </div>

          <div className="outer-circle"></div>

          <span className="dot dot-one"></span>
          <span className="dot dot-two"></span>
        </div>

        {/* Statistics */}
        <div ref={statsRef} className="stats">
          {stats.map((item) => (
            <div className="stat" key={item.number}>
              <div className="stat-number">
                {item.number}
              </div>

              <div className="stat-text">
                {item.text}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <span>SCROLL</span>
          <div className="scroll-line"></div>
        </div>

        {/* Scroll Progress */}
        <div
          ref={progressRef}
          className="progress-bar"
        ></div>
      </section>

      {/* Second Section */}
      <section className="next-section">
        <p>BEYOND THE FIRST SCREEN</p>

        <h2>
          Built to move
          <br />
          with the user.
        </h2>
      </section>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);