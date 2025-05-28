export default function sitemap() {
  const baseUrl = 'https://zavivka.vercel.app/'; //заменить на валидный домен

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ];
}
