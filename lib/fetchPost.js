import moment from "moment";

const fetchPost = slug =>
  new Promise(resolve =>
    setTimeout(() => {
      console.log(`Fetched new data for ${slug}...`);
      resolve({ slug: `${slug} ${moment().format("LTS")}` });
    }, 70)
  );

export default fetchPost;
