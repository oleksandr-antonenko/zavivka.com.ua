import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  // Handle root path
  if (req.nextUrl.pathname === '/') {
    return NextResponse.redirect(
      new URL(`/${routing.defaultLocale}`, req.url),
      {
        status: 301,
      },
    );
  }

  // Handle paths without locale prefix
  const pathname = req.nextUrl.pathname;
  const pathnameIsMissingLocale = routing.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  if (pathnameIsMissingLocale) {
    const locale = routing.defaultLocale;
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url), {
      status: 301,
    });
  }

  const intlMiddleware = createMiddleware({
    locales: routing.locales,
    defaultLocale: routing.defaultLocale,
    localeDetection: false,
    localePrefix: 'always',
  });

  const response = intlMiddleware(req);

  // Convert any temporary redirects to permanent
  if (response.status === 302 || response.status === 307) {
    const location = response.headers.get('location');
    if (location) {
      return NextResponse.redirect(location, { status: 301 });
    }
  }

  return response;
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
