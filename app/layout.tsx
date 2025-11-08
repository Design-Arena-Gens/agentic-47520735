import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dandruff Slides Prompts',
  description: '11 clean visual prompts for slides/shorts',
  icons: [{ rel: 'icon', url: '/favicon.ico' }]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header className="topbar">
            <div className="brand">Dandruff Slides</div>
            <nav className="actions">
              <a className="action" href="/api/prompts" target="_blank" rel="noreferrer">API</a>
            </nav>
          </header>
          <main>{children}</main>
          <footer className="footer">? {new Date().getFullYear()} Dandruff Slides</footer>
        </div>
      </body>
    </html>
  );
}
