"use client";
import { RevealParent, RevealChild } from "../../components/fadein"; 
import { useLanguage } from "../../context/languagecontext";

export default function Contacto() {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensaje enviado / Message sent");
  };

  return (
    <>
      {/* El fondo específico de contacto. Cubre toda la pantalla y se sobrepone 
        al video global que definimos en el layout principal.
      */}
      <section 
        className="contact-page-section" 
        style={{ 
          backgroundImage: "url('/assets/img/fondo contacto.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <RevealParent className="container contact-container">
          
          {/* COLUMNA IZQUIERDA: Textos y Botón Rojo */}
          <div className="contact-left">
            <RevealChild>
              {/* Usamos la traducción que ya dice "CONTACTO" */}
              <h1 className="contact-main-title">{t("contact.eyebrow")}</h1>
            </RevealChild>
            <RevealChild>
              <p className="contact-subtitle" dangerouslySetInnerHTML={{ __html: t("contact.title") }} />
            </RevealChild>
            <RevealChild>
              <div style={{ marginTop: '40px' }}>
                <a href="https://calendly.com/tu-enlace" target="_blank" rel="noopener noreferrer" className="btn-red-meeting">
                  {t("contact.btn.meeting")} &rarr;
                </a>
              </div>
            </RevealChild>
          </div>

          {/* COLUMNA DERECHA: Formulario Minimalista */}
          <RevealChild className="contact-right">
            <div className="minimal-form-wrapper">
              <span className="form-small-title">{t("contact.form.title")}</span>
              
              <form onSubmit={handleSubmit} className="minimal-form">
                <div className="minimal-group">
                  <input type="text" id="name" required placeholder={t("contact.form.name")} />
                </div>
                
                <div className="minimal-group">
                  <input type="email" id="email" required placeholder={t("contact.form.email")} />
                </div>
                
                <div className="minimal-group">
                  <input type="tel" id="phone" required placeholder={t("contact.form.phone")} />
                </div>
                
                <div className="minimal-group" style={{ marginTop: '20px' }}>
                  <span className="textarea-label">{t("contact.form.message")}</span>
                  <textarea id="message" rows={5} required></textarea>
                </div>
                
                <div style={{ marginTop: '20px' }}>
                  <button type="submit" className="btn-white-submit">
                    {t("contact.form.submit")} &rarr;
                  </button>
                </div>
              </form>
            </div>
          </RevealChild>

        </RevealParent>
      </section>
    </>
  );
}