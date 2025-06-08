export default function sitemap() {
  const baseUrl = 'https://zavivka.vercel.app/'; //заменить на валидный домен
  const locales = ['uk', 'en'];
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
    'team',
    'cholovicha-zavivka/team-men',
  ];

  // Генерируем URL для всех локалей и страниц
  const urls = locales.flatMap((locale) =>
    mainPages.map((page) => ({
      url: `${baseUrl}${locale}/${page}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: page === '' ? 1 : 0.8,
    })),
  );

  // Добавляем страницы мастеров
  const masters = [
    'valentina-antonenko',
    'sabo-artem',
    'anastasia-kuzmenko',
    'viktoriya-omelchenko',
    'viktoriya-salyi',
    'yulia-brovarkchuk',
    'valeria-melnichenko',
    'anastasiya-malchik',
    'diana-lekanceva',
    'olga-kolle',
    'yaroslava-gurbik',
  ];

  const masterUrls = locales.flatMap((locale) =>
    masters.map((master) => ({
      url: `${baseUrl}${locale}/team/${master}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    })),
  );

  // Добавляем страницы мастеров мужской завивки
  const menMastersUrls = locales.flatMap((locale) =>
    masters.map((master) => ({
      url: `${baseUrl}${locale}/cholovicha-zavivka/team-men/${master}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    })),
  );

  return [...urls, ...masterUrls, ...menMastersUrls];
}
