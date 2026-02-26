"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealParent, RevealChild } from "../../components/fadein"; 
import { useLanguage } from "../../context/languagecontext"; 

import Typewriter from "../../components/typewriter";
import Magnetic from "../../components/magnetic";
import TextMask from "../../components/textmask";

// Componente local para aplicar Scroll Zoom a cada imagen de forma independiente
function ImageWithParallax({ src, alt }: { src: string, alt: string }) {
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  // Zoom sutil de 1 a 1.15
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <div ref={imgRef} style={{ overflow: 'hidden', width: '100%', height: '100%' }}>
      <motion.img 
        src={src} 
        alt={alt} 
        className="full-width-img"
        style={{ scale, transformOrigin: "center center", willChange: "transform" }}
      />
    </div>
  );
}

function NosotrosContent() {
  const { t } = useLanguage();

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* 1. HERO CON PARALLAX Y TYPEWRITER */}
      <section ref={heroRef} className="banner-hero-section" style={{ position: 'relative', overflow: 'hidden', backgroundImage: "url('/assets/img/hero nosotros.jpg')" }}>
        <div className="banner-hero-overlay" style={{ zIndex: 1 }}></div>
        <motion.div className="container" style={{ position: 'relative', zIndex: 2, y: heroY, opacity: heroOpacity }}>
           <Typewriter text={t("header.about").toUpperCase()} className="banner-hero-title" />
        </motion.div>
      </section>

      {/* 2. QUIÉNES SOMOS */}
      <section className="about-img-section">
        <RevealParent>
          <RevealChild>
            <ImageWithParallax src={t("about.section1.img")} alt="Quiénes Somos" />
          </RevealChild>
        </RevealParent>
      </section>

      {/* 3. MÉTODO */}
      <section className="about-img-section">
        <RevealParent>
          <RevealChild>
             <ImageWithParallax src={t("about.section2.img")} alt="Método ECONOS" />
          </RevealChild>
        </RevealParent>
      </section>

      {/* 4. POR QUÉ CONFÍAN */}
      <section className="about-img-section">
        <RevealParent>
          <RevealChild>
            <ImageWithParallax src={t("about.section3.img")} alt="Por qué confían en nosotros" />
          </RevealChild>
        </RevealParent>
      </section>

      {/* 5. CTA FINAL */}
      <section className="home-section section-digital-cta" style={{ backgroundImage: `url(${t("home.cta_digital.bg")})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container cta-container">
          <RevealParent className="cta-box" staggerDelay={0.2}>
            <TextMask><h2 className="cta-heading" style={{ margin: 0 }}>{t("home.cta_digital.line1")}</h2></TextMask>
            <RevealChild><p className="cta-subheading" style={{ marginTop: '15px' }}>{t("home.cta_digital.line2")}</p></RevealChild>
            <RevealChild>
              <div className="cta-action" style={{ marginTop: '30px' }}>
                <Magnetic strength={0.4}>
                  <Link href="/contacto" className="btn-white-expert" style={{ display: 'inline-block' }}>{t("home.cta_digital.btn")}</Link>
                </Magnetic>
              </div>
            </RevealChild>
          </RevealParent>
        </div>
      </section>
    </>
  );
}

// Wrapper Anti-Errores de Hidratación
export default function Nosotros() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <main style={{ minHeight: '100vh', background: 'transparent' }} />;
  return <NosotrosContent />;
}