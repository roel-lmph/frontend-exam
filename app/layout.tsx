import type { Metadata } from "next";
import "./styles/globals.css";
import "./styles/responsive.css";


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
