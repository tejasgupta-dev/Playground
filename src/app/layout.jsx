import Navbar from "../components/Navbar/Navbar";
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
      </body>
    </html>
  );
}