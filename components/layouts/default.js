import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DefaultLayout({ children }) {
  const { route, pathname } = useRouter();

  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    if (/^\/$/i.test(route)) {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  });

  return (
    <>
      <header className="d-container d-section">
        <nav>
          <ul
            className={`${
              isHomePage && "text-white"
            } flex flex-row flex-wrap gap-4 items-center capitalize justify-center`}
          >
            <li className={`${pathname === "/" ? "active-link" : ""}`}>
              <Link href="/">
                <a>home</a>
              </Link>
            </li>

            <li className={`${pathname === "/movies" ? "active-link" : ""}`}>
              <Link href="/movies">
                <a>movies</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="d-container d-section">{children}</main>

      <footer className="d-container d-section"></footer>
    </>
  );
}
