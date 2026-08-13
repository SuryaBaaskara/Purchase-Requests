import "./globals.css";

export const metadata = {
  title: "Purchase Request | Aemome",
  description: "Purchase Request internal ordering page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
