import { ReactNode } from "react";
import "./globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TechCrunch",
    template: "%s TechCrunch",
  },
  description:
    "Stay informed with real-time news on politics, tech, sports, and more.",
};

interface RootLayoutPropsType {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutPropsType) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} overflow-x-hidden overflow-y-auto antialiased`}
      >
        <Header />
        <main className="bg-white">{children}</main>
        <Footer />
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            className: "",
            duration: 2500,
          }}
        />
      </body>
    </html>
  );
}
