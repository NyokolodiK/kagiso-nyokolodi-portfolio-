import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header, Footer } from '@/components/Shell';

export const metadata: Metadata = {
  title: {
    default: 'Kagiso Nyokolodi — Principal Software Engineer',
    template: '%s — Kagiso Nyokolodi',
  },
  description:
    'Principal Software Engineer and Frontend Lead. Frontend architecture, complex product experiences and AI-enabled applications.',
};

export const viewport: Viewport = {
  themeColor: '#08090a',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
