import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { useState } from "react";

const Dyamic = () => {
  const [uuid, setUuid] = useState();

  const handleClick = async () => {
    const { v4: uuidv4 } = await import("uuid");
    const generatedUuid = uuidv4();
    setUuid(generatedUuid);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Dynamic uuid: {uuid}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>
          Dynamic uuid: <code className={styles.code}>{uuid}</code>
        </p>

        <button style={{ fontSize: "30px" }} onClick={handleClick}>
          Click me!
        </button>
      </main>
    </div>
  );
};

export default Dyamic;
