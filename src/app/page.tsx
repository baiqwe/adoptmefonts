import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import HomeHeader from "@/components/Home/HomeHeader";
import HomeStaticContent from "@/components/Home/HomeStaticContent";

export const metadata: Metadata = {
    alternates: {
        canonical: "https://adoptmefont.com/",
    },
};

export default function Home() {
    return (
        <main className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12">
            <HomeHeader />
            <HomeClient />
            <HomeStaticContent />
        </main>
    );
}
