import { BackgroundGrid } from '@/components/common/BackgroundGrid';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { company } from '@/data/company';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space-grotesk',
    display: 'swap',
});

export const metadata = {
    metadataBase: new URL('https://orbeetal.com'),
    title: {
        default: company.metadataTitle,
        template: '%s | Orbeetal',
    },
    description: company.metadataDescription,
    openGraph: {
        title: company.metadataTitle,
        description: company.metadataDescription,
        type: 'website',
        locale: 'en_US',
        siteName: 'Orbeetal',
        images: [
            {
                url: '/logo.png',
                width: 1200,
                height: 630,
                alt: 'Orbeetal',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: company.metadataTitle,
        description: company.metadataDescription,
    },
    icons: {
        icon: '/logo.png',
        apple: '/logo.png',
    },
    manifest: company.manifest,
};

export const viewport = {
    themeColor: company.themeColor,
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="h-full">
            <body
                className={`${inter.variable} ${spaceGrotesk.variable} flex min-h-screen flex-col bg-bg-dark font-sans antialiased`}
            >
                <BackgroundGrid />
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
