/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
const withNextIntl = createNextIntlPlugin();
const isAnalyze = process.env.ANALYZE === 'true';

const nextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
      },
    ],
    minimumCacheTTL: 86400, // 24 часа в секундах
  },
  webpack(config, { isServer }) {
    if (!isServer && isAnalyze) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: 8888,
          openAnalyzer: true,
        }),
      );
    }
    return config;
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          // Скрываем информацию о сервере
          {
            key: 'Server',
            value: '',
          },
        ],
      },
      {
        // Для статических изображений только Cache-Control
        source: '/:all*(svg|jpg|jpeg|png|webp)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=31536000',
          },
        ],
      },
      {
        // Для оптимизированных изображений Next.js только Cache-Control
        source: '/_next/image/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=31536000',
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
