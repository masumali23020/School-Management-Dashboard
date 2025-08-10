/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.pexels.com',
           
            
          },
        ],
      },
      experimental: {
        serverComponentsExternalPackages: ['@prisma/client'],
      },
};

export default nextConfig;
