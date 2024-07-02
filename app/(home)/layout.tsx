import type { Metadata } from "next";
import "../globals.css";


export const metadata: Metadata = {
  title: "LegalMatch",
  description: "FIND THE RIGHT LAWYER",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'font-gothamMedium'}>
        <div className="main-container">
          {children}
        </div>
      </body>
    </html>
  );
}
