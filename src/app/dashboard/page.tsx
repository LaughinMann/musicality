"use client";

import Header from "@/app/components/header/header";
import styles from "./dashboard.module.css";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import Footer from "@/app/components/footer/footer";
import Center from "@/app/components/center/center";

export default function Home() {
    // Session control for Spotify API
    const session = useSession();

    return (
        <main
            className={`${styles.main} scroll-smooth leading-relaxed relative antialiased`}
        >
            <Header dashboardHeader={true}/>
            <Center />
            <Footer />
        </main>
    );
}