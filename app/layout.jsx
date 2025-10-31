export const metadata = { title: "Optimus Lead", description: "Direction commerciale externalisée & Assistant IA" };
import "./globals.css";
import Link from "next/link";
import AuthBridge from "@/components/auth/AuthBridge";

export default function RootLayout({ children }){
  return (
    <html lang="fr">
      <body>
        <header className="border-b bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-6">
            <Link href="/" className="font-semibold">Optimus Lead</Link>
            <nav className="text-sm flex gap-4">
              <Link href="/offres" className="hover:underline">Offres</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
              <span className="text-gray-300">|</span>
              <Link href="/dashboard" className="hover:underline">Accéder au Dashboard</Link>
            </nav>
            <div className="ml-auto text-xs text-gray-500">v0.3</div>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
        <footer className="border-t mt-16">
          <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-500">
            © {new Date().getFullYear()} Optimus Lead — Direction commerciale externalisée.
          </div>
        </footer>
        <AuthBridge />
      </body>
    </html>
  );
}
