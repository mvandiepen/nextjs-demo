import fetchPost from "../../lib/fetchPost";
import Post from "../../components/Post";

//runs on server
export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "post" } }, { params: { slug: "another_post" } }],
    fallback: false
  };
}

//runs on server
export async function getStaticProps({ params }) {
  const post = await fetchPost(params.slug);

  return {
    props: {
      post
    }
  };
}

export default Post;
