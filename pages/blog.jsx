import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';
import { FeaturedPosts } from '../sections';
import useGetPosts from '../config/hooks/useGetPosts'

export default function Home({ posts }) {
  const {data} = useGetPosts()
  return (
    // <div className="container px-10 mx-auto mb-8">
    <div className="container px-10 mx-auto py-[120px] lg:grid lg:grid-cols-[1fr_5fr] lg:gap-6 min-h-[40vh]">
    <div className="hidden lg:grid pt-6 overflow-y-scroll h-[80vh]">
      <FeaturedPosts />
    </div>
    <div className="grid lg:grid-cols-[3fr_1fr] lg:gap-6  ">
      <div className="max-w-[61rem]">
        {data?.data.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
      <div className="">
        <div className="relative lg:sticky top-8">
          <PostWidget />
          {/* <Categories /> */}
        </div>
      </div>
    </div>
  </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
