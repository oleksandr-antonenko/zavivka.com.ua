import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function NotFound() {
  const t = useTranslations('NotFound');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-600 bg-[url('/images/banner.jpg')] bg-no-repeat bg-cover bg-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#D7A908] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">{t('title')}</h2>
        <p className="text-white mb-8">{t('description')}</p>
        <Link
          href="/"
          className="inline-block bg-[#D7A908] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          {t('backHome')}
        </Link>
      </div>
    </div>
  );
}
