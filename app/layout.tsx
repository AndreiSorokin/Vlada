import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vlada Morozoova | Digital Designer',
  description: 'Portfolio site for Vlada Morozoova — junior digital designer focused on visual storytelling.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
