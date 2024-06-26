import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chandan Pargi",
  description: "Hey There!👋 I'm Chandan Pargi , a Application developer with a passion for creating awesome digital experiences using ReactJS , React Native , Node js , Next js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className="bg-gradient-to-r from-gray-900 to-indigo-950">
      <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:px-48 sm:px-20 md:px-32">
        <div className="col-span-12 p-4 text-center bg-gray-950 lg:col-span-3 rounded-2xl">
          <Sidebar/>
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden text-white bg-gray-950 lg:col-span-9 rounded-2xl">
        <Navbar/>
          {children}
     </div>
      </div>
    </body>
  </html>
  );
}
