import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-blue-500 text-white">
      <Link href="/">
        <a className="text-2xl font-bold">My Business</a>
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/showcase">
              <a>Showcase</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Fale Conosco</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}