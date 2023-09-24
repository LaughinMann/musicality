import logo from "../musicality_logo.svg";
import Image from "next/image";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={`bg-white rounded-lg shadow dark:bg-gray-900`}>
      <div className={`${styles.footer} w-full mx-auto p-4 md:py-8`}>
        <div className="sm:flex sm:justify-between">
          <a
            href="https://laughinmann.github.io"
            className="flex items-center mb-4 sm:mb-0"
          >
            <Image
              src={logo}
              width={30}
              className="h-8 mr-3"
              alt="Musicality Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Musicality
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="/privacy" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://laughinmann.github.io"
                className="hover:underline"
              >
                Portfolio
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://laughinmann.github.io/" className="hover:underline">
            Kelvin Dhoman
          </a>
          . All Rights Reserved. Spotify and Spotify Logo are intellectual property of their
          respective owners.
        </span>
      </div>
    </footer>
  );
}
