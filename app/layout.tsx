import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/navbar";
import { AuthProvider } from "@/components/auth-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
            <body className={inter.className}>
                <AuthProvider>
                    <main className="flex flex-col items-center h-screen w-screen bg-slate-800 pt-40">
                        <NavBar></NavBar>
                        {children}
                    </main>
                </AuthProvider>
            </body>
        </html>
    );
}
