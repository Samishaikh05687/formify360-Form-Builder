import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import NextTopLoader from "nextjs-toploader";
import DesignerContextProvider from "@/components/context/DesignerContext";
import { dark, neobrutalism, shadesOfPurple } from '@clerk/themes';

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Formify360",
  description: " Craft Dynamic Forms Effortlessly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: [dark, neobrutalism],
        variables: { colorPrimary: 'red' },
        signIn: { 
          baseTheme: [shadesOfPurple], 
          variables: { colorPrimary: 'blue' }
        }
      }}
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en">
      <body className={inter.className}>
        <NextTopLoader/>
          <DesignerContextProvider>
          
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
         </DesignerContextProvider>
         </body>
    </html>
    </ClerkProvider>
  );
}
