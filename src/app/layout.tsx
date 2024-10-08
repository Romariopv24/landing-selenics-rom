import type { Metadata } from "next";
import { DM_Sans, Raleway } from "next/font/google";
import "./globals.css";
import { responsiveTheme } from "@/theme/theme";
import { ThemeProvider } from "@mui/material";
import Head from "next/head";
import { rootImages } from "./core/rootImages";
import { Navbar } from "./components/navigation/navbar/Navbar";


const raleway = Raleway({
  subsets: ['latin'],
  style: ['normal'],
  weight:["100",'200','300', '400', '500', '600', "700", "800","900"]
})

const dmSans = DM_Sans({
    subsets: [ "latin"],
    style: ["normal"],
    weight:["100","1000","200","300","400","500","600","700","800","900"]
})

export const metadata: Metadata = {
  title: "Selenics",
  description: "Selenics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className} ${dmSans.className}`}>
         <ThemeProvider theme={responsiveTheme} >
              {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
