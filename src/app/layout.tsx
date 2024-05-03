import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";

const inter = Inter({subsets: ["latin"], variable: "--inter"});

export const metadata: Metadata = {
    title: {
        template: '%s | Ahmad Charis Elyasa Hafidianto',
        default: 'Ahmad Charis Elyasa Hafidianto', // a default is required when creating a template
    },
    description: "Ahmad Charis Elyasa Hafidianto's is a mid-level full-stack developer with a passion for building beautiful and functional websites.",
    applicationName: "portfolio",
    keywords: ["portfolio", "web developer", "full-stack developer", "software engineer"],
    authors: [{name: "Ahmad Charis Elyasa Hafidianto", url: "www.linkedin.com/in/charis-elyasa"}],
    formatDetection: {
        email: true,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: {
            template: '%s | Ahmad Charis Elyasa Hafidianto',
            default: 'Ahmad Charis Elyasa Hafidianto',
        },
        locale: "id_ID",
        siteName: "Ahmad Charis Elyasa Hafidianto",
        description: "Ahmad Charis Elyasa Hafidianto's is a mid-level full-stack developer with a passion for building beautiful and functional websites.",
        url: "https://elyanur.com",
        type: "website",
        images: [
            {
                url: "https://elyanur.com/og-image.png",
                width: 1200,
                height: 630,
                alt: "Ahmad Charis Elyasa Hafidianto's portfolio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@aceh_charis",
        creator: "@aceh_charis",
        title: {
            template: '%s | Ahmad Charis Elyasa Hafidianto',
            default: 'Ahmad Charis Elyasa Hafidianto',
        },
    }
};

export default function RootLayout(
    {children,}: Readonly<{ children: React.ReactNode; }>
) {
    return (
        <html lang="en" suppressHydrationWarning className={inter.variable}>
        <body
            className="leading-relaxed dark:bg-[#020817] bg-slate-300 text-slate-900 dark:text-slate-400 antialiased selection:bg-teal-900 dark:selection:bg-teal-300 selection:text-teal-300 dark:selection:text-teal-900">
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            {/*<div className="absolute right-2 top-2">*/}
            {/*    <ModeToggle/>*/}
            {/*</div>*/}
            <div
                className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 font-inter"
            >
                <div className="lg:flex lg:justify-between lg:gap-4">
                    {children}
                </div>
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}
