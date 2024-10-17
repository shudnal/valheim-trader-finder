import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { Dropzone } from "../valheim/Dropzone";
import { Hint } from "../valheim/Hint";
import { WorldMap } from "../valheim/WorldMap";

export default function Home() {
  const [locationsHaldor, setLocationsHaldor] = useState([]);
  const [locationsHildir, setLocationsHildir] = useState([]);
  const [locationsWitch, setLocationsWitch] = useState([]);
  const [locationStart, setLocationStart] = useState([]);
  const [worldName, setWorldName] = useState("");
  const [showMap, setShowMap] = useState(false);
  return (
    <div className={styles.container}>
      <Head>
        <title>Valheim Traders Finder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Valheim Traders Finder</h1>

        <div className={styles.description}>
          <p>
            Provide your world database file if you're having trouble locating
          </p>
          <ul className={styles.ol}>
            <li>Haldor, the vendor of fine goods</li>
            <li>Hildir, the quest giver</li>
            <li>Bog Witch, the rumorous cook</li>
          </ul>
          <p>
            It is safe and you will get zero map spoilers
          </p>
          <ol className={styles.ol}>
              <li>Your data stays offline</li>
              <li>You can get roleplay-friendly directions to nearby merchants</li>
              <li>A spoiler-free map is available if you want to find the best spot where multiple merchants intersect</li>
            </ol>
          <p>
            Your local worlds can be found in:
            <br />
            <code className={styles.code}>
              %userprofile%\AppData\LocalLow\IronGate\Valheim\worlds
            </code>
          </p>
          <p>
            Your cloud saved remote worlds can be found in:
            <br />
            <code className={styles.code}>
              Steam\userdata\YOUR_NUMERIC_STEAM_ID\892970\remote\worlds
            </code>
          </p>
          <Dropzone
            onLocationsFound={([worldName, locationsHaldor, locationsHildir, locationsWitch, locationStart]) => {
              setLocationsHaldor(locationsHaldor);
              setLocationsHildir(locationsHildir);
              setLocationsWitch(locationsWitch);
              setLocationStart(locationStart);
              setWorldName(worldName);
            }}
          />
        </div>

        {worldName && (
          <div className={styles.description}>
            <p>I've heard rumors of traders in {worldName}…</p>
            <Hint start={locationStart} locations={locationsHaldor} name="Haldor" color="#965317" />
            <Hint start={locationStart} locations={locationsHildir} name="Hildir" color="#000078" />
            <Hint start={locationStart} locations={locationsWitch} name="Bog Witch" color="#559617" />
            {showMap ? (
              <p>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setShowMap(false);
                  }}
                  href="#"
                >
                  Hide Map ↑
                </a>
              </p>
            ) : (
              <p>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setShowMap(true);
                  }}
                  href="#"
                >
                  Show me a map please…
                </a>
              </p>
            )}
          </div>
        )}

        {showMap && (
          <div className={styles.map}>
            <WorldMap locationStart={locationStart} locationsHaldor={locationsHaldor} locationsHildir={locationsHildir} locationsWitch={locationsWitch} />
          </div>
        )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/shudnal/valheim-trader-finder"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code (Github)
        </a>&nbsp;&nbsp;|&nbsp;&nbsp;
        <a
          href="https://github.com/morinted/valheim-trader-finder"
          target="_blank"
          rel="noopener noreferrer"
        >
          Original Project (Github)
        </a>&nbsp;&nbsp;|&nbsp;&nbsp;
        <a
          href="https://jsfiddle.net/b7mjeuan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Adapted from (JSFiddle)
        </a>
      </footer>
    </div>
  );
}
