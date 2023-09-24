"use client";

import Header from "@/app/components/header/header";
import styles from "@/app/app.module.css";
import hero_browser from "@/app/website.png";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import blob from "@/app//blobanimation.svg";
import Footer from "@/app/components/footer/footer";

export default function Home() {
  // Session control for Spotify API
  const session = useSession();

  return (
    <main
      className={`${styles.main} scroll-smooth leading-relaxed relative antialiased`}
    >
      <Image
        src={blob}
        className={styles.blob1}
        alt={"Browser image"}
        width={190}
      />
      <Image
        src={blob}
        className={styles.blob2}
        alt={"Browser image"}
        width={175}
      />
      <Image
        src={blob}
        className={styles.blob3}
        alt={"Browser image"}
        width={150}
      />
      <Header dashboardHeader={false} />
      <div
        className={`flex-col flex justify-center items-center ${styles.hero}`}
      >
        <div className="mt-36 flex-grow relative z-10">
          <h2 className="text-5xl text-center font-bold">
            Create your musical journey!
          </h2>
          <p className="mt-5 mx-5 max-w-3xl text-center">
            Musicality allows Spotify users to create their own smoothly
            transitioning musical journey throughout different music genres by
            utilizing the Spotify API.
          </p>
        </div>
        <div className="z-10">
          <Image
            src={hero_browser}
            alt={"Browser image"}
            width={750}
          />
        </div>
      </div>
      <div
        className={`flex flex-col lg:flex-row px-5 py-5 justify-around items-center ${styles.about}`}
      >
        <div>
          <div className=" bg-blue-950 py-8 mb-5 rounded-lg">
            <h2 className="text-5xl mx-5 text-center font-bold">
              First. Login with Spotify.
            </h2>
            <p className="mt-5 mx-5 max-w-3xl text-center">
              In order for Musicality to work, we need you to connect Spotify to
              Musicality. This will allow Musicality to stream music using your
              account.
            </p>
          </div>
          <div className=" bg-blue-950 py-8 mb-5 rounded-lg">
            <h2 className="text-5xl mx-5 text-center font-bold">
              Second. Select your journey.
            </h2>
            <p className="mt-5 mx-5 max-w-3xl text-center">
              Using Musicality's dashboard, select through the music genres you want to
              experience.
            </p>
          </div>{" "}
          <div className=" bg-blue-950 py-8 mb-5 rounded-lg">
            <h2 className="text-5xl mx-5 text-center font-bold">
              Third. Listen.
            </h2>
            <p className="mt-5 mx-5 max-w-3xl text-center">
              Listen to your finely-tuned journey through the genres with
              smoothly transitioning songs from one genre to another.
            </p>
          </div>
        </div>
        <div id="about" className="bg-white py-48 rounded-lg">
          <h2 className="text-5xl mx-5 text-black text-center font-bold">
            About Musicality and Myself.
          </h2>
          <p className="mt-5 mx-5 max-w-3xl text-black text-left">
            Hi there, my name is Kelvin Dhoman and this is a side project of
            mine called Musicality. Musicality is a simple app that was made for
            myself to learn more about API's, Next.js and overall website
            creation. Musicality utilizes Spotify's API and allows the user to
            select a string of genres to play in order smoothly. The website
            takes advantage of certain characteristics of songs and transitions
            from one genre to another, taking into account the user's preferred
            artists and listening habits. In return the user gets a smoothly
            transitioning playlist from a handful of artists from one genre to
            another.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
