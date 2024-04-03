import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import { APP_NAME, APP_DESCRIPTION, CREATOR, GOOGLE_VERIFICATION } from './config';

const NotoSansJP = Noto_Sans_JP({ subsets: ['latin'], variable: '--font-noto-sans-jp' });
import './globals.css';

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  openGraph: {
    title: APP_NAME,
    description: APP_DESCRIPTION,
    type: 'website',
    locale: 'ja_JP',
    url: 'https://example.com',
    siteName: APP_NAME,
  },
  twitter: {
    card: 'summary',
    title: APP_NAME,
    description: APP_DESCRIPTION,
    creator: CREATOR,
  },
  verification: {
    google: GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${NotoSansJP.className} ${NotoSansJP.variable}`}>{children}</body>
    </html>
  );
}
