import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers/providers";
import Nav from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"], weight: ['100', '200', '400', '300', '600', '500', '700', '800', '900'] });

export const metadata: Metadata = {
  title: "Mahmoud Sayed | Home",
  keywords: ['mahmovdsayed', 'MO', 'Mahmoud Sayed', 'mahmoudsayed', 'محمود سيد'],
  description: "I am a skilled MERN Stack developer with a passion for crafting innovative and robust web applications. My technical expertise lies in building and developing both the front-end and back-end of applications using React.js, Node.js, Express.js, and MongoDB. I am constantly striving to enhance user experience and performance by implementing best practices in UI design, state management, and performance optimization.With my broad knowledge of web development technologies, I am able to efficiently achieve project goals. My capabilities also extend to building and implementing efficient and secure databases tailored to the application's needs, as well as testing and ensuring the quality of applications to ensure their compatibility and optimal performance.",
  icons: {
    icon: "https://res.cloudinary.com/dxvpvtcbg/image/upload/v1713853708/b9esspm0u8jykxkmrwyb.jpg",
    apple:
      "https://res.cloudinary.com/dxvpvtcbg/image/upload/v1713853708/b9esspm0u8jykxkmrwyb.jpg",
  },
  creator: "Mahmoud Sayed",
  openGraph: {
    images: [
      "https://res.cloudinary.com/dxvpvtcbg/image/upload/v1715114007/oczye8csanxxzg9ksxqz.png",
    ],
    title: "Mahmoud Sayed",
    description: "I am a skilled MERN Stack developer with a passion for crafting innovative and robust web applications. My technical expertise lies in building and developing both the front-end and back-end of applications using React.js, Node.js, Express.js, and MongoDB. I am constantly striving to enhance user experience and performance by implementing best practices in UI design, state management, and performance optimization.With my broad knowledge of web development technologies, I am able to efficiently achieve project goals. My capabilities also extend to building and implementing efficient and secure databases tailored to the application's needs, as well as testing and ensuring the quality of applications to ensure their compatibility and optimal performance.",
    countryName: "Egypt",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahmoud Sayed",
    description: "I am a skilled MERN Stack developer with a passion for crafting innovative and robust web applications. My technical expertise lies in building and developing both the front-end and back-end of applications using React.js, Node.js, Express.js, and MongoDB. I am constantly striving to enhance user experience and performance by implementing best practices in UI design, state management, and performance optimization.With my broad knowledge of web development technologies, I am able to efficiently achieve project goals. My capabilities also extend to building and implementing efficient and secure databases tailored to the application's needs, as well as testing and ensuring the quality of applications to ensure their compatibility and optimal performance.",
    images: [
      "https://res.cloudinary.com/dxvpvtcbg/image/upload/v1715114007/oczye8csanxxzg9ksxqz.png",
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className}`}>
        <Providers>
          <Analytics />
          <main className="overflow-hidden">
            <Nav />
            {children}
            <Footer />
          </main>
        </Providers>

      </body>
    </html>
  );
}
