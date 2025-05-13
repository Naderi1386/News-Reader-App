import { ReactNode } from "react";
import "./globals.css";
import { Metadata } from "next";


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
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
