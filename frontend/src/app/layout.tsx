import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { LoaderProvider } from './components/context/LoaderProvider';
import StoreProvider from './StoreProvider';
import Image from 'next/image';

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Talent Filter',
  description: 'Talent Filter Application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='min-h-screen'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <div className='header flex flex-row px-2 py-1 items-center'>
          <Image src='/logo.webp' width={42} height={5} alt='' />
          <div className='header-text'>Talent Filter</div>
        </div>
        <StoreProvider>
          <LoaderProvider>{children}</LoaderProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
