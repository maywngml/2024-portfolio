import type { Metadata } from 'next';
import Provider from './provider';
import './globals.css';

export const metadata: Metadata = {
  title: `Juhee's Portfolio`,
  description:
    '코드로 그림 그리는 것을 좋아하는 프론트엔드 개발자 서주희입니다.',
  openGraph: {
    title: `Juhee's Portfolio`,
    description:
      '코드로 그림 그리는 것을 좋아하는 프론트엔드 개발자 서주희입니다.',
    images: [
      {
        url: 'https://i.ibb.co/mhYXpyW/og-thumbnail.png',
        width: 1200,
        height: 630,
        alt: '포트폴리오 메인 이미지',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
