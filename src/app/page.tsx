"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealParent, RevealChild } from "../components/fadein"; 
import { useLanguage } from "../context/languagecontext";

import Magnetic from "../components/magnetic";
import TextMask from "../components/textmask";
import TiltCard from "../components/tiltcard";

// Separamos la lógica y animación en este sub-componente
function HomeContent() {
  const { t } = useLanguage();

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ 
    target: heroRef, 
    offset: ["start start", "end start"] 
  });
  const heroY = useTransform(heroProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);

  const methodRef = useRef<HTMLElement>(null);
  const { scrollYProgress: methodProgress } = useScroll({ 
    target: methodRef, 
    offset: ["start end", "end start"] 
  });
  const methodScale = useTransform(methodProgress, [0, 1], [0.9, 1.05]);

  return (
    <>
      {/* 1. HERO SECTION */}
      <section ref={heroRef} className="home-hero" style={{ position: 'relative', overflow: 'hidden', background: 'transparent' }}>
        <div className="hero-overlay" style={{ zIndex: 1, background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }}></div>
        <motion.div className="container hero-bottom-layout" style={{ position: 'relative', zIndex: 2, y: heroY, opacity: heroOpacity }}>
          <RevealParent className="hero-col-left">
            <TextMask delay={0.1}>
              <h1 dangerouslySetInnerHTML={{ __html: t("home.hero.title") }} style={{ textShadow: '0 4px 30px rgba(0,0,0,0.9)', margin: 0 }} />
            </TextMask>
          </RevealParent>
          
          <RevealParent className="hero-col-right" staggerDelay={0.3}>
            <div className="hero-right-content">
               <RevealChild>
                  <p className="hero-desc" dangerouslySetInnerHTML={{ __html: t("home.hero.desc") }} style={{ textShadow: '0 2px 10px rgba(0,0,0,0.9)' }} />
               </RevealChild>
               <RevealChild>
                <div style={{ marginTop: '30px' }}>
                  <Magnetic strength={0.3}>
                    <Link href="/contacto" className="btn-primary btn-hero-white">
                      {t("home.hero.cta")}
                    </Link>
                  </Magnetic>
                </div>
               </RevealChild>
            </div>
          </RevealParent>
        </motion.div>
      </section>

      {/* 2. IDENTITY SECTION */}
      <section className="home-section section-identity">
        <RevealParent className="container identity-grid" staggerDelay={0.2}>
          <div className="identity-left">
             <TextMask delay={0.2}><h2 className="big-title" dangerouslySetInnerHTML={{ __html: t("home.identity.title") }} style={{ margin: 0 }} /></TextMask>
          </div>
          <RevealChild className="identity-right"><p dangerouslySetInnerHTML={{ __html: t("home.identity.desc") }} /></RevealChild>
        </RevealParent>
      </section>

      {/* 3. GAP SECTION (IMAGEN CON FLIP 3D) */}
      <section className="home-section section-gap">
        <RevealParent className="container gap-layout">
          <RevealChild className="gap-col-image">
            <div className="gap-image-container" style={{ perspective: 1000 }}>
              <motion.img 
                src="/assets/img/ramon.jpg" 
                alt="Experto IA" 
                className="ramon-img" 
                initial={{ rotateY: 90, opacity: 0, scale: 0.8 }}
                whileInView={{ rotateY: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                style={{ transformStyle: "preserve-3d" }}
              />
            </div>
          </RevealChild>

          <div className="gap-col-content">
            <TextMask><h2 className="gap-title" dangerouslySetInnerHTML={{ __html: t("home.gap.title") }} style={{ margin: 0, paddingBottom: '20px' }} /></TextMask>
            <RevealParent className="gap-text-block" staggerDelay={0.15}>
                <RevealChild><p dangerouslySetInnerHTML={{ __html: t("home.gap.p1") }} /></RevealChild>
                <RevealChild><p dangerouslySetInnerHTML={{ __html: t("home.gap.p2") }} /></RevealChild>
                <RevealChild><p><span dangerouslySetInnerHTML={{ __html: t("home.gap.p3") }} /><br /><span className="gap-final-bold" dangerouslySetInnerHTML={{ __html: t("home.gap.p4") }} /></p></RevealChild>
            </RevealParent>
          </div>
        </RevealParent>
      </section>

      {/* 4. ECOSYSTEM SECTION (TARJETAS HOLOGRAMA 3D) */}
      <section className="home-section section-ecosystem">
        <div className="container">
          <RevealParent className="eco-header">
            <TextMask><h2 className="eco-main-title" style={{ margin: 0 }}>{t("home.eco.title")}</h2></TextMask>
            <RevealChild><p className="eco-header-desc" style={{ marginTop: '20px' }}>{t("home.eco.desc")}</p></RevealChild>
          </RevealParent>

          <RevealParent className="eco-grid" staggerDelay={0.2}>
            {[
              { img: "leadkeeper.jpg", title: "home.eco.card1.title", desc: "home.eco.card1.desc" },
              { img: "videomaker.jpg", title: "home.eco.card2.title", desc: "home.eco.card2.desc" },
              { img: "smm.jpg", title: "home.eco.card3.title", desc: "home.eco.card3.desc" },
              { img: "after.jpg", title: "home.eco.card4.title", desc: "home.eco.card4.desc" }
            ].map((card, index) => (
              <RevealChild key={index} className="eco-item">
                <TiltCard>
                  <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '15px', height: '100%', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <div className="eco-img-box"><img src={`/assets/img/${card.img}`} alt={t(card.title)} style={{ borderRadius: '8px' }} /></div>
                    <div className="eco-divider" style={{ margin: '15px 0' }}></div>
                    <h3 className="eco-title">{t(card.title)}</h3>
                    <p className="eco-desc">{t(card.desc)}</p>
                  </div>
                </TiltCard>
              </RevealChild>
            ))}
          </RevealParent>
        </div>
      </section>

      {/* 5. RESULTS SECTION */}
      <section className="home-section section-results">
        <RevealParent className="container results-layout">
          <div className="results-left">
            <TextMask delay={0.1}>
                <h2 className="results-main-title" dangerouslySetInnerHTML={{ __html: t("home.results.title") }} style={{ margin: 0 }} />
            </TextMask>
          </div>
          <div className="results-right">
            <RevealParent className="results-list" staggerDelay={0.1}>
              <RevealChild><li>{t("home.results.list1")}</li></RevealChild>
              <RevealChild><li>{t("home.results.list2")}</li></RevealChild>
              <RevealChild><li>{t("home.results.list3")}</li></RevealChild>
              <RevealChild><li>{t("home.results.list4")}</li></RevealChild>
              <RevealChild><li>{t("home.results.list5")}</li></RevealChild>
            </RevealParent>
            <RevealChild>
                <p className="results-footer-text" dangerouslySetInnerHTML={{ __html: t("home.results.footer") }} style={{ marginTop: '30px' }} />
            </RevealChild>
          </div>
        </RevealParent>
      </section>

      {/* 6. METHODOLOGY SECTION */}
      <section ref={methodRef} className="home-section section-methodology" style={{ overflow: 'hidden' }}>
        <div className="container">
          <RevealParent>
            <RevealChild>
              <motion.img 
                  src={t("home.method.img")} 
                  alt="Metodología ECONOS" 
                  className="methodology-full-img" 
                  style={{ scale: methodScale, transformOrigin: "center center", willChange: "transform" }}
              />
            </RevealChild>
          </RevealParent>
        </div>
      </section>

      {/* 7. CTA FINAL */}
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

// Componente principal que maneja el montaje seguro
export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Si no estamos en el cliente, mostramos una estructura base invisible para que Next.js no colapse
  if (!mounted) {
    return <main style={{ minHeight: '100vh', background: 'transparent' }} />;
  }

  // Una vez en el cliente, montamos toda la magia interactiva
  return <HomeContent />;
}