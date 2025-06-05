import type { Metadata } from 'next';
import { Inter, Ubuntu, Mali } from 'next/font/google';
import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { StoreProvider } from '@/store/StoreProvider';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing, Locale } from '@/i18n/routing';
import { IntervalPopUp } from '@/components/pop-up';

const inter = Inter({
  subsets: ['cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

const ubuntu = Ubuntu({
  subsets: ['cyrillic'],
  variable: '--font-ubuntu',
  weight: ['400', '700'],
  display: 'swap',
});

const mali = Mali({
  subsets: ['latin'],
  variable: '--font-mali',
  weight: ['700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://zavivka.vercel.app/'), //изменить на реальный домен
  title: {
    default: 'Студія завивок – Завивка волосся у Києві на Хрещатику',
    template: `%s`,
  },
  description:
    'Zavivka Studio — салон краси у центрі Києва на Хрещатику. Спеціалізуємось на жіночій та чоловічій завивці, карвінгу, корекції та лікуванні кучерявого волосся. Індивідуальний підхід, все включено: консультація, стрижка, укладка, підбір засобів.',
  generator: 'Next.js',
  applicationName: 'Zavivka Studio – Професійна завивка у Києві',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'завивка волосся Київ',
    'карвінг Київ',
    'жіноча завивка',
    'чоловіча завивка',
    'корекція завивки',
    'стрижка кучерявого волосся',
    'лікування кучерів',
    'догляд за кучерями',
    'Zavivka Studio',
    'завивка Хрещатик',
    'завивка Київ центр',
    'салон краси завивка',
    'індивідуальний підхід волосся',
  ],
  authors: [
    {
      name: 'Zavivka Studio',
      url: 'https://zavivka.vercel.app/', //заменить на актуальный домен
    },
  ],
  creator: 'Zavivka Studio',
  publisher: 'Zavivka Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Zavivka Studio – Завивка, карвінг та догляд за кучерями у Києві',
    description:
      'Zavivka Studio — салон краси на Хрещатику. Жіноча та чоловіча завивка, карвінг, лікування кучерів, стрижка, консультація та підбір засобів догляду. Запишіться вже сьогодні!',
    images: [
      {
        url: '/openGraph.webp', // заміни на актуальний OG-файл
        width: 800,
        height: 600,
      },
    ],
    type: 'website',
    siteName: 'Zavivka Studio',
  },
  verification: {
    google: 'UA-XXXXX-Y', // якщо є Google verification code
  },
  icons: {
    apple: '/apple-touch-icon.png',
    icon: '/favicon.ico',
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();
  return (
    <html lang={locale || 'uk'} suppressHydrationWarning={true}>
      <body className={`${inter.variable} ${ubuntu.variable} ${mali.variable}`}>
        <StoreProvider>
          <NextIntlClientProvider messages={messages}>
            <main className="relative overflow-x-hidden">{children}</main>
            <IntervalPopUp />
          </NextIntlClientProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
