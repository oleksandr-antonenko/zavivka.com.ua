'use client';

import { usePathname, useRouter, Locale } from '@/i18n/routing';
import { useParams } from 'next/navigation';

const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const currentLocale = params.locale as Locale;

  const locales: Locale[] = ['en', 'uk'];

  const onLocaleChange = (nextLocale: Locale) => {
    if (nextLocale === currentLocale) return;

    router.replace(
      // @ts-expect-error — корректный маршрут
      { pathname, params },
      { locale: nextLocale },
    );
  };

  const localeLabels: Record<Locale, string> = {
    en: 'ENG',
    uk: 'УКР',
  };

  return (
    <div className="flex items-center gap-2 text-white text-sm font-medium">
      {locales.map((locale, index) => (
        <div key={locale} className="flex items-center">
          <button
            onClick={() => onLocaleChange(locale)}
            className={`transition-colors ${
              currentLocale === locale ? 'text-white' : 'text-gray-400'
            } hover:text-white`}
          >
            {localeLabels[locale]}
          </button>
          {index < locales.length - 1 && (
            <span className="mx-2 text-gray-500">|</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default LocaleSwitcher;
