const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 1499,
    oldPrice: 2499,
    discount: "40% OFF",
    emoji: "🎧",
  },
  {
    id: 2,
    name: "Smart Watch Series 8",
    price: 1999,
    oldPrice: 3499,
    discount: "43% OFF",
    emoji: "⌚",
  },
  {
    id: 3,
    name: "Premium Running Shoes",
    price: 1799,
    oldPrice: 2999,
    discount: "40% OFF",
    emoji: "👟",
  },
  {
    id: 4,
    name: "Portable Bluetooth Speaker",
    price: 999,
    oldPrice: 1599,
    discount: "38% OFF",
    emoji: "🔊",
  },
];

const categories = [
  { name: "Electronics", emoji: "📱" },
  { name: "Fashion", emoji: "👕" },
  { name: "Shoes", emoji: "👟" },
  { name: "Home", emoji: "🏠" },
  { name: "Beauty", emoji: "💄" },
  { name: "Accessories", emoji: "👜" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      {/* TOP BAR */}
      <div className="bg-black px-4 py-2 text-center text-sm text-white">
        🚚 Free shipping on orders above ₹999
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-4">

          <a href="/" className="text-2xl font-black">
            E-STORE Banglore Fashions
          </a>

          {/* SEARCH */}
          <div className="hidden flex-1 md:block">
            <div className="flex overflow-hidden rounded-lg border">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-3 outline-none"
              />
              <button className="bg-orange-500 px-6 text-white">
                Search
              </button>
            </div>
          </div>

          {/* HEADER ACTIONS */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block">
              👤 Account
            </button>

            <button>
              ❤️
            </button>

            <button className="relative">
              🛒
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs text-white">
                0
              </span>
            </button>
          </div>
        </div>

        {/* MOBILE SEARCH */}
        <div className="px-4 pb-4 md:hidden">
          <div className="flex overflow-hidden rounded-lg border">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 outline-none"
            />
            <button className="bg-orange-500 px-4 text-white">
              🔍
            </button>
          </div>
        </div>

        {/* NAVIGATION */}
        <nav className="hidden border-t md:block">
          <div className="mx-auto flex max-w-7xl gap-8 px-4 py-3 text-sm font-medium">
            <a href="#">Home</a>
            <a href="#categories">Categories</a>
            <a href="#products">All Products</a>
            <a href="#deals">Deals</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 py-16 md:flex-row md:py-24">

          <div className="max-w-xl text-center text-white md:text-left">
            <p className="mb-3 font-semibold uppercase tracking-widest">
              Limited Time Offer
            </p>

            <h1 className="text-4xl font-black md:text-6xl">
              Shop Smart.
              <br />
              Save More.
            </h1>

            <p className="mt-5 text-lg text-orange-100">
              Discover amazing products at unbeatable prices.
            </p>

            <button className="mt-8 rounded-lg bg-white px-8 py-4 font-bold text-orange-600 shadow-lg hover:bg-gray-100">
              Shop Now →
            </button>
          </div>

          <div className="flex h-64 w-64 items-center justify-center rounded-full bg-white/20 text-9xl">
            🛍️
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="mx-auto max-w-7xl px-4 py-14">

        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="font-semibold text-orange-500">
              SHOP BY CATEGORY
            </p>
            <h2 className="text-3xl font-black">
              Explore Categories
            </h2>
          </div>

          <button className="hidden text-sm font-semibold text-orange-500 md:block">
            View All →
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <button
              key={category.name}
              className="rounded-xl border bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-orange-400 hover:shadow-md"
            >
              <div className="text-5xl">{category.emoji}</div>
              <p className="mt-3 font-semibold">{category.name}</p>
            </button>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="mx-auto max-w-7xl px-4 py-14">

        <div className="mb-8">
          <p className="font-semibold text-orange-500">
            TRENDING NOW
          </p>

          <h2 className="text-3xl font-black">
            Popular Products
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* IMAGE */}
              <div className="relative flex h-52 items-center justify-center bg-gray-100 text-8xl">
                {product.emoji}

                <span className="absolute left-3 top-3 rounded bg-red-500 px-2 py-1 text-xs font-bold text-white">
                  {product.discount}
                </span>

                <button className="absolute right-3 top-3 rounded-full bg-white p-2 shadow">
                  ♡
                </button>
              </div>

              {/* DETAILS */}
              <div className="p-4">

                <p className="mb-2 text-xs text-gray-500">
                  Bestseller
                </p>

                <h3 className="line-clamp-2 min-h-12 font-semibold">
                  {product.name}
                </h3>

                <div className="mt-3 flex items-center gap-2">
                  <span className="text-xl font-black">
                    ₹{product.price}
                  </span>

                  <span className="text-sm text-gray-400 line-through">
                    ₹{product.oldPrice}
                  </span>
                </div>

                <div className="mt-2 text-sm text-yellow-500">
                  ⭐⭐⭐⭐⭐
                </div>

                <button className="mt-4 w-full rounded-lg bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DEAL BANNER */}
      <section id="deals" className="mx-auto max-w-7xl px-4 py-8">
        <div className="overflow-hidden rounded-2xl bg-black px-6 py-12 text-center text-white md:px-16">

          <p className="font-semibold text-orange-400">
            MEGA DEAL
          </p>

          <h2 className="mt-2 text-3xl font-black md:text-5xl">
            Up to 70% OFF
          </h2>

          <p className="mt-4 text-gray-300">
            Grab your favorite products before they're gone.
          </p>

          <button className="mt-6 rounded-lg bg-orange-500 px-8 py-3 font-bold hover:bg-orange-600">
            Explore Deals
          </button>
        </div>
      </section>

      {/* WHY US */}
      <section id="about" className="mx-auto max-w-7xl px-4 py-16">

        <div className="mb-10 text-center">
          <p className="font-semibold text-orange-500">
            WHY CHOOSE US
          </p>

          <h2 className="text-3xl font-black">
            Shopping Made Easy
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-4">

          {[
            ["🚚", "Fast Delivery", "Quick and reliable delivery"],
            ["🔒", "Secure Payment", "Your payment is protected"],
            ["↩️", "Easy Returns", "Simple return process"],
            ["💬", "24/7 Support", "We're here to help"],
          ].map(([icon, title, description]) => (
            <div
              key={title}
              className="rounded-xl bg-white p-6 text-center shadow-sm"
            >
              <div className="text-4xl">{icon}</div>

              <h3 className="mt-4 font-bold">
                {title}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                {description}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-orange-500 px-4 py-14 text-white">

        <div className="mx-auto max-w-3xl text-center">

          <h2 className="text-3xl font-black">
            Get Special Offers
          </h2>

          <p className="mt-3 text-orange-100">
            Subscribe to receive discounts and new product updates.
          </p>

          <div className="mx-auto mt-6 flex max-w-xl overflow-hidden rounded-lg bg-white">
            <input
              type="email"
              placeholder="Enter your email"
              className="min-w-0 flex-1 px-4 py-3 text-black outline-none"
            />

            <button className="bg-black px-6 font-semibold text-white">
              Subscribe
            </button>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-gray-950 px-4 py-12 text-gray-300">

        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">

          <div>
            <h3 className="text-2xl font-black text-white">
              E-STORE_Gireesh_Design_Fashions
            </h3>

            <p className="mt-4 text-sm leading-6">
              Your one-stop destination for quality products at great prices.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white">
              Quick Links
            </h4>

            <div className="mt-4 space-y-3 text-sm">
              <p>Home</p>
              <p>Products</p>
              <p>Categories</p>
              <p>Deals</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white">
              Customer Service
            </h4>

            <div className="mt-4 space-y-3 text-sm">
              <p>Contact Us</p>
              <p>Shipping Policy</p>
              <p>Return Policy</p>
              <p>Privacy Policy</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white">
              Contact
            </h4>

            <div className="mt-4 space-y-3 text-sm">
              <p>📧 support@example.com</p>
              <p>📞 +91 00000 00000</p>
              <p>📍 India</p>
            </div>
          </div>

        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-gray-800 pt-6 text-center text-sm">
          © 2026 E-STORE. All rights reserved.
        </div>

      </footer>

    </main>
  );
}

