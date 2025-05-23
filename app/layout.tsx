import Providers from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = { title: "Music Recommender MVP" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-900 text-gray-100">
        <Providers>
          <Navbar />
          <main className="p-6">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}