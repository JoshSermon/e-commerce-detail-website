import Link from "next/link";

export const Navbar = () => {
  return (
  <nav>
    <div className="div">
        <Link href="/" className="flex items-center space-x-2">
            Arvo
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/">Home</Link>
          <Link href="/products" className="hover:text-blue-600">
            Products
          </Link>
          <Link href="/checkout" className="hover:text-blue-600">
            Checkout
          </Link>
        </div>
    </div>
  </nav>
    );
};