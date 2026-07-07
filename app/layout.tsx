import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css'; 
import Navbar from '@/components/layout/Navbar';

// import Footer from '@/components/layout/Footer';
// import ChatbotWidget from '@/components/ui/ChatbotWidget';

// Font configuration
const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '600', '700', '800'], variable: '--font-poppins' });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-inter' });

// Global  Metadata for Geministudio
export const metadata: Metadata = {
  title: 'Geministudio - Professional Digital Marketing Agency',
  description: 'Transform your business with our professional digital marketing solutions. Award-winning web design, SEO, and performance marketing to drive measurable results.',
  keywords: 'digital agency, web development, SEO, digital marketing, PPC advertising',
  openGraph: {
    title: 'Geministudio - Professional Digital Marketing Agency',
    description: 'Transform your business with award-winning web design, SEO, and performance marketing.',
    url: 'https://geministudio.agency/',
    siteName: 'Geministudio',
    images: [
      {
        url: 'https://geministudio.agency/Preview-homepage.png',
        width: 1200,
        height: 630,
        alt: "Geministudio — Digital Agency hero image",
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Geministudioacy',
    title: 'Geministudio - Professional Digital Marketing Agency',
    description: 'Transform your business with award-winning web design, SEO, and performance marketing.',
    images: ['https://geministudio.agency/Preview-homepage.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" className={`scroll-smooth ${poppins.variable} ${inter.variable} dark`}>
      {/* NOTE: I added 'dark' as a default class to the html tag.
         The Navbar toggle will remove/add this 'dark' class.
      */}
      <body className={`${inter.className} bg-white dark:bg-obsidian text-black dark:text-white antialiased selection:bg-emerald selection:text-black flex flex-col min-h-screen transition-colors duration-500`}>
        
        <Navbar />
        
        <main className="flex-1 relative z-10 w-full">
          {children}
          
        </main>

        {/* You can uncomment these as you build them */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}