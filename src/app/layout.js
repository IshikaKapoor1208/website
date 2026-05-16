import "./globals.css";

export const metadata = {
  title: "Maakamakhya Exports",
  description:
    "Premium Indian agricultural exports with quality sourcing, reliable logistics, and global standards."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
