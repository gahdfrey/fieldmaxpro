import React, { useState, useEffect } from "react";
import { FeaturedPostCard } from "../components";
import useGetPosts from "../config/hooks/useGetPosts";
import { getFeaturedPosts } from "../services";



const FeaturedPosts = () => {
  const {data} = useGetPosts(200)
  
  return (
    <div className="mb-8 flex flex-col">
       <h3 className="text-xl mb-8 font-semibold border-b pb-4">
       All Posts
      </h3>
          {data?.data.reverse().map((post, index) => (
            <FeaturedPostCard key={index} post={post} />
          ))}
    </div>
  );
};

export default FeaturedPosts;
