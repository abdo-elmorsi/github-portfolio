import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import Footer from "./components/footer";
import "@/css/card.scss";
import "@/css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Abdelrahman (Abdo) Elmorsi | عبده المرسي | Full Stack Developer",
    description:
        "Full Stack Developer specializing in React, React Native, and Node.js | عبده المرسي - مطور فول ستاك متخصص في تطوير الويب والتطبيقات.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
                    {children}
                </main>
                <Footer />

                <Analytics />
            </body>
        </html>
    );
}
