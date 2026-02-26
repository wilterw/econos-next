"use client"; // Necesario porque usamos usePathname
import { usePathname } from 'next/navigation';

export default function GlobalBackground() {
  const pathname = usePathname();

  // 1. Definimos qué video cargar según la página actual
  let videoSrc = "/assets/video/hero-es-fondo.mp4"; // Video por defecto (Home)

  if (pathname === '/servicios') {
    videoSrc = "/assets/video/servicios-fondo.mp4"; // <-- Pon el nombre exacto de tu video de servicios
  } else if (pathname === '/nosotros') {
    videoSrc = "/assets/video/nosotros-fondo.mp4"; // <-- Pon el nombre exacto de tu video de nosotros
  }

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh',
        zIndex: -1, 
        backgroundColor: '#000', 
        overflow: 'hidden'
      }}
    >
      {/* REPRODUCTOR DE VIDEO */}
      <video
        // IMPORTANTE: La propiedad 'key' obliga a React a recargar el video cuando cambias de página
        key={videoSrc} 
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}