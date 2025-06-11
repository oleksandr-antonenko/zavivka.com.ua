import { masters } from '@/lib/masters';
import { routing } from '@/i18n/routing';

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL; //заменить на валидный домен
  const locales = routing.locales;
  const currentDate = new Date();

  // Основные страницы
  const mainPages = [
    '',
    'carving',
    'strizhka-kucheriv',
    'cholovicha-zavivka',
    'korektsiya-zavivki',
    'likuvannya-kucheriv',
    'plyazhna-khvylia',
    'gallery',
    'team',
    'cholovicha-zavivka/team-men',
  ];

  // Генерируем URL для всех локалей и страниц
  const urls = locales.flatMap((locale) =>
    mainPages.map((page) => ({
      url: `${baseUrl}/${locale}/${page}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: page === '' ? 1 : 0.8,
    })),
  );

  const masterUrls = locales.flatMap((locale) =>
    masters.map((master) => ({
      url: `${baseUrl}/${locale}/team/${master}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    })),
  );

  // Добавляем страницы мастеров мужской завивки
  const menMastersUrls = locales.flatMap((locale) =>
    masters.map((master) => ({
      url: `${baseUrl}/${locale}/cholovicha-zavivka/team-men/${master}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    })),
  );

  return [...urls, ...masterUrls, ...menMastersUrls];
}
