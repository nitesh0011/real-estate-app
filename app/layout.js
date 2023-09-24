import "./globals.css";
// import { Inter ,Poppins} from 'next/font/google'

// const Poppins_font = Poppins({ subsets: ['latin'] ,weight:'600'})

export const metadata = {
  title: "real estate App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body >{children}</body>
    </html>
  );
}
