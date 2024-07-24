import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 flex items-center gap-x-10 xl:px-20 py-4 bg-neutral-900/90 hover:bg-neutral-900 text-neutral-50">
      <Link href="/" className="capitalize">
        latin steps dance studio
      </Link>
      <nav className="ml-auto">
        <ul className="flex gap-x-3">
          <li>
            <a href="/">Quienes somos</a>
          </li>
          <li>
            <a href="/">Clases Grupales</a>
          </li>
          <li>
            <a href="/">Clases Privadas</a>
          </li>
          <li>
            <a href="/">Rueda de Casino</a>
          </li>
        </ul>
      </nav>
      <Link href="/">Admin</Link>
    </header>
  );
}
