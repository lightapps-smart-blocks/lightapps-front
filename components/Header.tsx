import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  return (
    <header className="flex justify-between items-center p-6 bg-blue-500 text-white">
      <nav>
        <ul className="flex space-x-4">
          <li className={router.pathname === "/" ? "text-yellow-300" : ""}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={router.pathname === "/showcase" ? "text-yellow-300" : ""}>
            <Link href="/showcase">
              <a>Showcase</a>
            </Link>
          </li>
          <li className={router.pathname === "/contact" ? "text-yellow-300" : ""}>
            <Link href="/contact">
              <a>Contact Us</a>
            </Link>
          </li>
        </ul>
      </nav>
      <Link href="/">
        <a className="text-2xl font-bold">Lightapps</a>
      </Link>
    </header>
  );
}