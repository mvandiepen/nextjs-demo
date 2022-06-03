import fetchPost from "../../lib/fetchPost";
import Post from "../../components/Post";

//runs on server
export async function getServerSideProps({ params }) {
  const post = await fetchPost(params.slug);

  return {
    props: {
      post
    }
  };
}

export default Post;
