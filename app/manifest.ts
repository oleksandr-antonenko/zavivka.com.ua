import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Студія завивок – Завивка волосся у Києві на Хрещатику',
    short_name: 'Жіноча та чоловіча завивка',
    description:
      'Салон на Хрещатику: завивка, карвінг, стрижка та лікування кучерявого волосся. Індивідуальний підхід, дбайливість і досвід.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    orientation: 'portrait',
    prefer_related_applications: false,
  };
}
