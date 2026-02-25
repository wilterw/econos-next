import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="global-footer">
      <div className="footer-wrapper">
        
        {/* COLUMNA 1: Slogan y Logo */}
        <div className="footer-col col-1">
          <h2 className="footer-tagline">
            Tu partner<br />tecnológico<br />inmobiliario
          </h2>
          <div className="footer-bottom-element">
            <img 
              src="/assets/img/logo-econos-blanco.png" 
              alt="ECONOS" 
              className="footer-logo" 
            />
          </div>
        </div>

        {/* COLUMNA 2: Contacto */}
        <div className="footer-col col-2">
          <div className="top-content">
            <h3 className="footer-label">Contacto</h3>
            <div className="underlined-links">
              <a href="tel:+34652436599" className="link-item">+34 652 436 599</a>
              <a href="mailto:info@econos.io" className="link-item">info@econos.io</a>
            </div>
          </div>
          
          <div className="footer-bottom-element">
            <p className="copyright">2025 All Rights Reserved</p>
          </div>
        </div>

        {/* COLUMNA 3: Redes y Legales */}
        <div className="footer-col col-3">
          <div className="top-content">
            <h4 className="footer-label">Nuestras Redes</h4>
            <div className="underlined-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="link-item">Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="link-item">Linkedin</a>
            </div>
          </div>

          <div className="footer-bottom-element">
            <div className="legal-links">
              <Link href="#" className="link-item">Privacy Policy</Link>
              <Link href="#" className="link-item">Terms of Use</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}