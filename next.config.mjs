/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ignora comprobaciones lentas en producción para ahorrar RAM en el VPS
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Optimiza la salida para contenedores Docker (Easypanel)
  output: 'standalone',
};

export default nextConfig;