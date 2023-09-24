"use client";

import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./header.module.css";
import Image from "next/image";
import Logo from "../musicality_logo.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

interface HeaderType {
  dashboardHeader: boolean;
}

export default function Header(props: HeaderType) {
  // Session control for Spotify API
  const session = useSession();
  // State for mobile menu control
  const [showMenu, setShowMenu] = useState(false);
  // Router
  const router = useRouter();

  const redirectToDashboard = () => {
    router.push("/dashboard");
  };

  const redirectToIndex = () => {
    router.push("/");
  };

  return (
    <nav>
      {/** Logo div **/}
      <div
        className={`flex mx-auto justify-around items-center  ${styles.header}`}
      >
        <a href={"/"} className="flex items-center">
          <Image className={styles.Logo} src={Logo} width={40} alt="Logo" />
          <h1 className="text-white select-none">Musicality</h1>
        </a>
        {/** Center Menu **/}
        {props.dashboardHeader ? (
          <div></div>
        ) : (
          <div
            className={`${styles.centerList} hidden lg:ml-32 md:block md:space-x-8 lg:space-x-32`}
          >
            <a href="/#about">About</a>
            <a href="https://laughinmann.github.io/">Portfolio</a>
          </div>
        )}

        {/** Spotify login **/}
        <div className={`hidden md:block ${styles.loginContainer}`}>
          {props.dashboardHeader ? (
            <button
              type="button"
              className={`p-2 rounded-full ${styles.exitBtn}`}
              onClick={() => {
                signOut({ callbackUrl: "/" });
              }}
              disabled={session.status === "loading"}
            >
              End Session
            </button>
          ) : (
            <button
              type="button"
              className={`p-2 rounded-full ${styles.loginBtn}`}
              onClick={() => {
                session.status === "authenticated"
                  ? redirectToDashboard()
                  : signIn("spotify", { callbackUrl: "/dashboard" });
              }}
              disabled={session.status === "loading"}
            >
              <FontAwesomeIcon icon={faSpotify} size={"xl"} className="mr-3" />
              {session.status === "authenticated"
                ? `Generate Playlists`
                : `Connect Spotify`}
            </button>
          )}
        </div>
        {/** Mobile Hamburger Button **/}
        <div
          className="md:hidden text-white"
          onClick={() => {
            setShowMenu((prevState) => !prevState);
          }}
        >
          <FontAwesomeIcon icon={faBars} size={"xl"} />
        </div>
      </div>
      {/** Mobile Menu **/}
      <div className={`md:hidden relative z-10 ${showMenu ? "" : "hidden"}`}>
        <a
          href="#about"
          className={`block py-4 px-4 text-sm ${styles.mobileMenu}`}
        >
          About
        </a>
        <a
          href="https://laughinmann.github.io/"
          className={`block py-4 px-4 text-sm ${styles.mobileMenu}`}
        >
          Portfolio
        </a>
        {props.dashboardHeader ? (
          <a
            className={`block py-4 px-4 text-sm ${styles.mobileMenu} ${styles.mobileMenuRed}`}
            onClick={() => {
              signOut({ callbackUrl: "/" });
            }}
          >
            <FontAwesomeIcon icon={faSpotify} size={"xl"} className="mr-3" />
            Sign Out
          </a>
        ) : (
          <a
            className={`block py-4 px-4 text-sm ${styles.mobileMenuRed}`}
            onClick={() => {
              session.status === "authenticated"
                ? redirectToDashboard()
                : signIn("spotify", { callbackUrl: "/dashboard" });
            }}
          >
            <FontAwesomeIcon icon={faSpotify} size={"xl"} className="mr-3" />
            {session.status === "authenticated"
              ? `Generate Playlists`
              : `Connect Spotify`}
          </a>
        )}
      </div>
    </nav>
  );
}
