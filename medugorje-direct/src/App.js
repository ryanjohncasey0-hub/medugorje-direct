import React from 'react';

const LOGO_SRC = '/assets/logo.png';

const PRODUCTS = [
  {
    id: 'rosary-001',
    title: 'Classic Blue Rosary — Handmade in Medugorje',
    short: 'Beads hand-strung by local artisans in Medugorje.',
    price: '$24.99',
    image: '/assets/rosary-blue.jpg',
    amazonUrl: 'https://www.amazon.com/dp/REPLACE_ASIN?tag=YOUR_ASSOCIATE_ID',
  },
  {
    id: 'bracelet-001',
    title: 'Rosary Bracelet — Beige String',
    short: 'Compact, prayer-ready bracelet from Medugorje craftsmen.',
    price: '$14.99',
    image: '/assets/bracelet-beige.jpg',
    amazonUrl: 'https://www.amazon.com/dp/REPLACE_ASIN?tag=YOUR_ASSOCIATE_ID',
  },
  {
    id: 'special-001',
    title: 'Pilgrim Rosary — Limited Edition',
    short: 'From the streets of Medugorje — directly sourced.',
    price: '$29.99',
    image: '/assets/rosary-special.jpg',
    amazonUrl: 'https://www.amazon.com/dp/REPLACE_ASIN?tag=YOUR_ASSOCIATE_ID',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#FEF8F2] text-slate-800">
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={LOGO_SRC} alt="Medugorje Direct" className="h-14 w-auto" />
          <div>
            <h1 className="text-xl font-semibold">Medugorje Direct</h1>
            <p className="text-xs tracking-widest">Handcrafted in Medugorje by Local Artisans</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#products" className="hover:underline">Products</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a
            href="#"
            className="px-4 py-2 border rounded-md text-sm"
            onClick={(e) => {
              e.preventDefault();
              alert('Link to Amazon storefront or login can go here.');
            }}
          >
            Amazon Store
          </a>
        </nav>
        <button
          className="md:hidden p-2 rounded-md border"
          onClick={() => alert('Mobile menu placeholder')}
        >
          ☰
        </button>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif">Rosaries & Bracelets from Medugorje</h2>
            <p className="mt-4 text-lg text-slate-600">
              Authentic, locally made rosaries and prayer bracelets — sourced directly from the streets and artisans of Medugorje.
              Each piece carries the care and faith of the person who made it.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#products"
                className="px-5 py-3 bg-slate-800 text-white rounded-md shadow-sm"
              >
                Shop Now
              </a>
              <a
                href="#about"
                className="px-5 py-3 border rounded-md"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md flex items-center justify-center">
            <img src={LOGO_SRC} alt="Medugorje Direct - logo big" className="h-48 w-auto" />
          </div>
        </section>

        <section id="products" className="py-8">
          <h3 className="text-2xl font-semibold mb-6">Featured Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p) => (
              <article key={p.id} className="bg-white rounded-lg shadow p-4 flex flex-col">
                <img src={p.image} alt={p.title} className="h-44 w-full object-cover rounded-md" />
                <div className="mt-4 flex-1">
                  <h4 className="font-medium">{p.title}</h4>
                  <p className="text-sm text-slate-500 mt-1">{p.short}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-lg font-semibold">{p.price}</div>
                  <a
                    href={p.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-md bg-[#114B6C] text-white text-sm"
                  >
                    Buy on Amazon
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 text-xs text-slate-500">Note: Each item is sourced directly from Medugorje artisans. Links open on Amazon where the purchase is fulfilled.</p>
        </section>

        <section id="about" className="py-12">
          <div className="bg-white rounded-lg p-6 shadow">
            <h3 className="text-2xl font-semibold mb-3">About Our Sourcing</h3>
            <p className="text-slate-600">
              Medugorje Direct partners with local artisans who craft rosaries and prayer bracelets using traditional methods.
              We travel directly to Medugorje to purchase items at their source so you receive authentic, meaningful pieces.
            </p>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li>• Directly purchased from Medugorje artisans</li>
              <li>• Hand-strung beads and natural materials</li>
              <li>• Limited edition and seasonal runs</li>
            </ul>
          </div>
        </section>

        <section id="contact" className="py-12">
          <div className="bg-white rounded-lg p-6 shadow">
            <h4 className="text-xl font-semibold mb-3">Contact & Wholesale</h4>
            <p className="text-slate-600">For wholesale inquiries, Amazon link setup, or to provide artisan stories and photos, email us at <a href="mailto:hello@medugorjedirect.com" className="underline">hello@medugorjedirect.com</a>.</p>
          </div>
        </section>

        <footer className="py-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} MedugorjeDirect.com — Handcrafted in Medugorje by Local Artisans</p>
          <p className="mt-2">Built with care • Links lead to Amazon for payment & fulfillment</p>
        </footer>
      </main>
    </div>
  );
}
