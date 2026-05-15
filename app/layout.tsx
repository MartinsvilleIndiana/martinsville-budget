import './globals.css';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'City of Martinsville Financial Transparency',
  description: 'Public rollup financial dashboard for the City of Martinsville, Indiana.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <header className="bg-white border-b shadow-sm">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Image
                src="/brand/martinsville-seal.jpg"
                alt="City seal"
                width={54}
                height={54}
                className="rounded-full border bg-white"
                priority
              />
              <div className="leading-tight">
                <div className="text-lg font-bold tracking-tight text-civic-navy">City of Martinsville, Indiana</div>
                <div className="text-sm text-gray-600">Financial Transparency Portal</div>
              </div>
            </div>
            <nav className="flex gap-6 text-sm font-semibold text-gray-700">
              <Link href="/" className="hover:underline underline-offset-4">Home</Link>
              <Link href="/budget" className="hover:underline underline-offset-4">Budget</Link>
              <Link href="/capital" className="hover:underline underline-offset-4">Capital</Link>
              <Link href="/documents" className="hover:underline underline-offset-4">Documents</Link>
              <Link href="/glossary" className="hover:underline underline-offset-4">Glossary</Link>
            </nav>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-6 py-8">{children}</main>

        <footer className="border-t bg-white mt-10">
          <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-gray-600 space-y-2">
            <p className="font-medium">City of Martinsville, Indiana</p>
            <p>
              This portal provides totals for transparency and public understanding. Official financial records are
              maintained by the Clerk‑Treasurer and are the controlling documents.
            </p>
            <p className="text-xs text-gray-500">Updated monthly following fiscal close.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
