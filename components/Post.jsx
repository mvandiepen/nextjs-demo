import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";

const Post = ({ post, author }) => (
  <div className={styles.container}>
    <Head>
      <title>Post {post.slug}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>
        {post.slug} {author && `by ${author}`}
      </h1>

      <div className={styles.grid}>
        <Link href="/">
          <div className={styles.card}>
            <h2>&larr; Back</h2>
          </div>
        </Link>
      </div>
    </main>
  </div>
);

export default Post;
