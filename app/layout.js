import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";

import { Inter } from "next/font/google";
import Footer from "./components/footer";
import "@/css/card.scss";
import "@/css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="google-site-verification"
                    content="x3lb8KGwipadQnoT80mEZi86HD_vCO2VMWUc4LR6Nw8"
                />
            </head>
            <body className={inter.className}>
                <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
                    {children}
                </main>
                <Footer />
                <Analytics />
            </body>
            {process.env.NEXT_PUBLIC_GTM && (
                <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
            )}
        </html>
    );
}
