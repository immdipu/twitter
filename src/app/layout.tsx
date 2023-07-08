import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/context/GlobalProvider";
import { ToastContainer } from "react-toastify";
import GlobalApp from "./GlobalApp";
import ProgressBar from "./componets/progressbar/Progressbar";
const inter = Inter({ subsets: ["latin"] });
import "react-toastify/dist/ReactToastify.css";
export const metadata = {
  title: "Fake Twiiter",
  description: "Twitter clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProgressBar />
        <Providers>
          <ToastContainer />
          <GlobalApp>{children}</GlobalApp>
        </Providers>
      </body>
    </html>
  );
}
