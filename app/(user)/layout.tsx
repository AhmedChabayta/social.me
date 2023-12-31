import { Navbar, Sidebar } from "@src/components";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import { Provider } from "@src/components";
import { ProfileQuickView } from "@src/components/ProfileQuickView";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <>
          <Provider>
            <Navbar />
            <div className="flex">
              <div className="absolute z-50 lg:relative">
                <Sidebar />
              </div>
              <div className="flex-1 p-2">{children}</div>
              <div>
                <ProfileQuickView />
              </div>
            </div>
          </Provider>
        </>
      </body>
    </html>
  );
}
