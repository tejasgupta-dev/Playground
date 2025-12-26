import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./globals.css";

export const metadata = {
  title: "The Playground",
  description: "Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer imgSrc="/images/Logo.png" />
      </body>
    </html>
  );
}