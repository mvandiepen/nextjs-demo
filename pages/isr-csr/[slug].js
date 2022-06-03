import fetchPost from "../../lib/fetchPost";
import Post from "../../components/Post";
import { useEffect, useState } from "react";

//runs on server
export async function getStaticPaths() {
  const renderPaths = () => [
    { params: { slug: "post" } },
    { params: { slug: "another_post" } }
  ];

  return {
    paths: renderPaths(),
    fallback: false
  };
}

//runs on server
export async function getStaticProps({ params }) {
  const post = await fetchPost(params.slug);

  return {
    props: {
      post,
      author: "[author name here]"
    },
    revalidate: 5
  };
}

const IsrCsr = ({ post, author: initialAuthor }) => {
  const [author, setAuthor] = useState(initialAuthor);

  useEffect(() => {
    setTimeout(() => {
      setAuthor("Henk");
    }, 500);
  }, []);

  return <Post {...{ post, author }} />;
};

export default IsrCsr;
