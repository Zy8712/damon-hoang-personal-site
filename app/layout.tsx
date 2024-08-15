import "./globals.css";
import { Inter } from "next/font/google";
import { Header, Footer, ThemeSwitch } from "@/utils/pageComponents";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Damon Hoang | Personal Portfolio",
  description: "Damon is a Communications & Digital Marketing Specialist.",
  openGraph: {
    locale: "en_CA",
    type: "website",
    title: "Damon's Personal Site",
    description: "",
    url: "https://damon-hoang-personal-site.vercel.app/",
    images: [
      {
        url: "/undraw_developer-avatar_f6ac.svg",
        secureUrl: "/undraw_developer-avatar_f6ac.svg",
        width: 676,
        height: 676,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    url: "https://damon-hoang-personal-site.vercel.app/",
    title: "Damon's Personal Site",
    description: "",
    image: "/undraw_developer-avatar_f6ac.svg",
  },
  icons: {
    icon: "/undraw_developer-avatar_f6ac.svg",
    type: "image/svg+xml",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} relative bg-gray-50 pt-28 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 sm:pt-36`}
      >
        <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#946263] sm:w-[68.75rem]"></div>
        <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
