import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-blue-500 text-white p-4">
      <nav>
        <ul className="flex justify-center space-x-4">
          <li>
            <Link href="/privacy-policy">
              <a>Privacy Policy</a>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}