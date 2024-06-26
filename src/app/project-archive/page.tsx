import type {Metadata} from "next";
import Title from "@/app/project-archive/components/title";
import Content from "@/app/project-archive/components/content";

export const metadata: Metadata = {
    title: 'Project Archive',
    openGraph: {
        title: 'Project Archive',
        url: 'https://www.elyanur.com/project-archive',
        locale: "id_ID",
        siteName: "Ahmad Charis Elyasa Hafidianto",
        description: "Ahmad Charis Elyasa Hafidianto's is a mid-level full-stack developer with a passion for building beautiful and functional websites.",
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
        title: 'Project Archive',
    }
}

const Page = () => {
    return (
        <div
            className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 font-inter"
        >
            <div className="lg:flex lg:justify-between lg:gap-4">
                <div className="lg:py-24">
                    <Title/>
                    <Content/>
                </div>
            </div>
        </div>
    );
};

export default Page;