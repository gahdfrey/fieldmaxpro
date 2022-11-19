import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';
import { FeaturedPosts } from '../sections';
import useGetPosts from '../config/hooks/useGetPosts'

export default function Home({ posts }) {
  const {data} = useGetPosts()
  console.log('data', data)
  return (
    // <div className="container px-10 mx-auto mb-8">
  <div className="container px-10 mx-auto py-[120px] lg:grid  lg:grid-cols-[1fr_4fr] lg:gap-12">
    <div className='hidden lg:grid'>
      <FeaturedPosts />
      </div>
      <div className="grid lg:grid-cols-[2fr_1fr] lg:gap-12 ">
        <div className="">
          {/* {posts.map((post) => <PostCard post={post} key={post.title}/>)} */}
           {posts.map((post, index) => 
            <PostCard key={index} post={post.node} />
          )} 
        </div>
        <div className="">
          <div className="relative lg:sticky top-8">
            <PostWidget />
            <Categories />
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





// import { Key } from 'react';
// import { PostCard, Categories, PostWidget } from '../components';
// import { getPosts } from '../services'; 
// import { useState,useEffect } from 'react';
// import { useRouter } from 'next/router';



// export default function Home({posts,message}) {
//   // const router=useRouter()

//   // if (router.isFallback) {
//   //   return <Loader />;
//   // }

//   const  [data, setData] = useState([])
 

//    useEffect(()=>{
//     console.log('localposts',posts)
//     console.log('message',message)
//     setData(posts)
//   },[posts])

//   return (
//     <div className="container px-10 mx-auto mb-8">
//       {/* {posts.map((el)=>(<div>{el.node.title}</div)>)} 
//        <div>{message}</div> */}
//       {/* <head>
//         <title>cms blog</title>
//       </head> */}
//       <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
//         <div className="col-span-1 lg:col-span-8">
//           {data.map((post) => (<PostCard key={post.node.title} post={post.node} />
//           ))}
//         </div>
//         <div className="col-span-1 lg:col-span-4">
//           <div className="relative lg:sticky top-8">
//             <PostWidget />
//             <Categories />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Fetch data at build time
// export async function getServerSideProps() {
//   const posts = (await getPosts()) || [];
//   console.log('posts',posts)
//   return {
//     props: {posts,message:'some message'},
//   };
// }