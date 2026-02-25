"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealParent, RevealChild } from "../../components/FadeIn"; 
import { useLanguage } from "../../context/LanguageContext"; 

import Typewriter from "../../components/Typewriter";
import Magnetic from "../../components/Magnetic";
import TextMask from "../../components/TextMask";
import TiltCard from "../../components/TiltCard";

function ServiciosContent() {
  const { t } = useLanguage();

  // Físicas de Parallax para el Hero
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* 1. HERO CON PARALLAX Y TYPEWRITER */}
      <section ref={heroRef} className="banner-hero-section" style={{ position: 'relative', overflow: 'hidden', backgroundImage: "url('/assets/img/hero service.jpg')" }}>
        <div className="banner-hero-overlay" style={{ zIndex: 1 }}></div>
        <motion.div className="container" style={{ position: 'relative', zIndex: 2, y: heroY, opacity: heroOpacity }}>
           <Typewriter text={t("services.hero.eyebrow")} className="banner-hero-title" />
        </motion.div>
      </section>

      {/* 2. SECCIÓN PRINCIPAL */}
      <section className="services-main-section section-pad-btm">
        <RevealParent className="container">
          
          <div className="services-intro-layout">
            <RevealChild className="intro-col-left">
              <TextMask delay={0.1}>
                <h1 className="intro-title" dangerouslySetInnerHTML={{ __html: t("services.hero.title") }} style={{ margin: 0 }} />
              </TextMask>
            </RevealChild>
            
            <RevealChild className="intro-col-right">
              <p className="intro-desc" dangerouslySetInnerHTML={{ __html: t("services.hero.desc") }} />
            </RevealChild>
          </div>

          <RevealParent className="grid-4-col" staggerDelay={0.15}>
            {[
              { img: "leadkeeper.jpg", title: "services.card1.title", desc: "services.card1.desc" },
              { img: "videomaker.jpg", title: "services.card2.title", desc: "services.card2.desc" },
              { img: "smm.jpg", title: "services.card3.title", desc: "services.card3.desc" },
              { img: "after.jpg", title: "services.card4.title", desc: "services.card4.desc" }
            ].map((card, index) => (
              <RevealChild key={index} className="service-card">
                <TiltCard>
                  <div style={{ height: '100%' }}>
                    <div className="service-img-container">
                      <img src={`/assets/img/${card.img}`} alt={t(card.title)} className="service-img" />
                    </div>
                    <div className="service-info">
                      <div className="service-line"></div>
                      <h3 className="service-title">{t(card.title)}</h3>
                      <p className="service-desc" dangerouslySetInnerHTML={{ __html: t(card.desc) }} />
                    </div>
                  </div>
                </TiltCard>
              </RevealChild>
            ))}
          </RevealParent>

        </RevealParent>
      </section>

      {/* 3. SECCIÓN CORPORATIVA */}
      <section className="corp-services-section section-pad">
        <div className="container">
          <RevealParent className="corp-content-wrapper">
            <RevealChild>
              <TextMask>
                <h2 className="corp-section-title" dangerouslySetInnerHTML={{ __html: t("services.corp.title") }} style={{ margin: 0 }} />
              </TextMask>
            </RevealChild>
            
            <RevealParent className="grid-3-col" staggerDelay={0.2}>
              {[
                { img: "col1.jpg", title: "services.corp1.title", desc: "services.corp1.desc" },
                { img: "col2.jpg", title: "services.corp2.title", desc: "services.corp2.desc" },
                { img: "col3.jpg", title: "services.corp3.title", desc: "services.corp3.desc" }
              ].map((card, index) => (
                <RevealChild key={index} className="corp-card">
                  <TiltCard>
                    <div style={{ height: '100%' }}>
                      <div className="corp-img-container">
                        <img src={`/assets/img/${card.img}`} alt={t(card.title)} className="corp-img" />
                      </div>
                      <h3 className="corp-card-title">{t(card.title)}</h3>
                      <p className="corp-card-desc" dangerouslySetInnerHTML={{ __html: t(card.desc) }} />
                    </div>
                  </TiltCard>
                </RevealChild>
              ))}
            </RevealParent>
          </RevealParent>
        </div>
      </section>

      {/* 4. CTA FINAL */}
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
export default function Servicios() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <main style={{ minHeight: '100vh', background: 'transparent' }} />;
  return <ServiciosContent />;
}