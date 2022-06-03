import { useRouter } from "next/router";
import Post from "../../components/Post";
import fetchPost from "../../lib/fetchPost";
import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";

const Csr = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState();

  useEffect(
    () => {
      fetchPost(router.query.slug).then(post => {
        setLoading(false);
        setPost(post);
      });
    },
    [router]
  );
  return loading ? (
    <main className={styles.main}>
      <h1>loading...</h1>
    </main>
  ) : (
    <Post {...{ post }} />
  );
};

export default Csr;
