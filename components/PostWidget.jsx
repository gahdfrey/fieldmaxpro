import React, { useState, useEffect } from "react";

import moment from "moment";
import Link from "next/link";
import Image from 'next/image';

import { getSimilarPosts, getRecentPosts } from "../services";
import useGetPosts from "../config/hooks/useGetPosts";

const PostWidget = ({ slug }) => {

  const {data} = useGetPosts(3)

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {data?.data.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <div>
            <Image
          unoptimized
          alt={post.title}
          height="70px"
          width="70px"
          className="align-middle drop-shadow-lg rounded-full"
          src={`https://dev.fieldmaxpro.com/upload/blog/${post?.thumb_banner_url}`}
        /> 
        </div>
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              {moment(post.createdat).format("MMM DD, YYYY")}
            </p>
            <Link href={`/post/${post.id}`} className="text-md" key={index}>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
