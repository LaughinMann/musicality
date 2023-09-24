import styles from "@/app/app.module.css";
import Image from "next/image";
import blob from "@/app/blobanimation.svg";
import Header from "@/app/components/header/header";
import hero_browser from "@/app/website.svg";
import Footer from "@/app/components/footer/footer";

export default function Home() {
  return (
    <main
      className={`${styles.main}scroll-smooth leading-relaxed relative antialiased`}
    >
      <Header dashboardHeader={false}/>
      <div className={`py-12 px-12 text-xl bg-white`}>
        <h1>Privacy Policy for Musicality</h1>
        <h2>Last updated: 08/10/2023</h2>
        <p className={``}>
          <br />
          This Privacy Policy explains how Musicality ("we," "our," or "us")
          collects, uses, and discloses information about you when you use the
          Musicality website ("Website") and its services, which include
          accessing and listening to music through the Spotify API ("Services").
          By using our Website and Services, you agree to the terms of this
          Privacy Policy.
          <br />
          <br />
          <strong>Information We Collect</strong>
        </p>
          <ol className={`list-decimal`}>
            <li>
              Account Information: When you connect your Spotify account to
              Musicality, we collect information from your Spotify account, such
              as your username, display name, profile picture, and email
              address.
            </li>

            <li>
              Usage Information: We collect information about your interactions
              with the Website and Services, including the music you listen to,
              playlists you create, and other activities on the platform.
            </li>

            <li>
              Device and Log Information: We may automatically collect device
              information, such as your IP address, browser type, operating
              system, and log data, to improve the performance and security of
              our Services.
            </li>
          </ol>

          <br />
          <br />
          <strong>How We Use Your Information</strong>
          <ol className={`list-decimal`}>
            <li>
              Providing and Personalizing Services: We use the information
              collected to provide, maintain, and improve our Services,
              including customizing your music recommendations and playlist
              suggestions.
            </li>

            <li>
              Communication: We may use your email address to send you important
              updates, announcements, and other communications related to the
              Services.
            </li>

            <li>
              Analytics and Research: We may analyze aggregated and anonymized
              data to understand user behavior, improve our Services, and
              conduct research.
            </li>
          </ol>
          <p>
          <br />
          <strong>Security</strong>
          <br />
          We take reasonable measures to protect your information from
          unauthorized access, loss, misuse, and alteration. However, no data
          transmission over the internet or electronic storage system is
          completely secure. Changes to this Privacy Policy We may update this
          Privacy Policy from time to time. We will notify you of any changes by
          posting the new Privacy Policy on this page.
          <br />
          <br /> <strong>Contact Us</strong> <br />
          If you have any questions about this Privacy Policy, please contact us
          at mandohgames@gmail.com.
          <br />
          <br />
          By using the Musicality Website and Services, you acknowledge that you
          have read and understood this Privacy Policy and consent to the
          collection, use, and sharing of your information as described herein.
        </p>
      </div>
      <Footer />
    </main>
  );
}
