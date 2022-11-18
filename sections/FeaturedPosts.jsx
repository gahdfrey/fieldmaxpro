import React, { useState, useEffect } from "react";
import { FeaturedPostCard } from "../components";
import { getFeaturedPosts } from "../services";



const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result);
      setDataLoaded(true);
    });
  }, []);

  

  return (
    <div className="mb-8 flex flex-col">
       <h3 className="text-xl mb-8 font-semibold border-b pb-4">
       All Posts
      </h3>
        {dataLoaded &&
          featuredPosts.map((post, index) => (
            <FeaturedPostCard key={index} post={post} />
          ))}
    </div>
  );
};

export default FeaturedPosts;
