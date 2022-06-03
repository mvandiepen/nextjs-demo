import Image from "next/image";
import jorttLogo from "../../public/jortt-logo.png";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

const ImagePage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Image</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>&darr; Scroll down to see image... &darr;</h1>
        <div style={{ marginTop: "200vh", width: "100vw", height: "500px" }}>
          <Image
            alt={"logo"}
            placeholder={"blur"}
            layout={"responsive"}
            src={jorttLogo}
          />
        </div>
      </main>
    </div>
  );
};

export default ImagePage;
