import React, { useState, useEffect } from "react";

import moment from "moment";
import Link from "next/link";
import Image from 'next/image';

import { getSimilarPosts, getRecentPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <div>
            <Image
          unoptimized
          alt={post.title}
          height="70px"
          width="70px"
          className="align-middle drop-shadow-lg rounded-full"
          src={post.featuredImage.url}
        /> 
          {/* <img
          src={post.featuredImage.url}
          alt={post.title}
        /> */}
        </div>
            {/* <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline mr-2"
            >
              <path
                d="M16 8C15.0111 8 14.0444 8.29325 13.2221 8.84265C12.3999 9.39206 11.759 10.173 11.3806 11.0866C11.0022 12.0002 10.9031 13.0055 11.0961 13.9755C11.289 14.9454 11.7652 15.8363 12.4645 16.5355C13.1637 17.2348 14.0546 17.711 15.0245 17.9039C15.9945 18.0969 16.9998 17.9978 17.9134 17.6194C18.827 17.241 19.6079 16.6001 20.1573 15.7779C20.7068 14.9556 21 13.9889 21 13C21 11.6739 20.4732 10.4021 19.5355 9.46447C18.5979 8.52678 17.3261 8 16 8ZM16 16C15.4067 16 14.8266 15.8241 14.3333 15.4944C13.8399 15.1648 13.4554 14.6962 13.2284 14.1481C13.0013 13.5999 12.9419 12.9967 13.0576 12.4147C13.1734 11.8328 13.4591 11.2982 13.8787 10.8787C14.2982 10.4591 14.8328 10.1734 15.4147 10.0576C15.9967 9.94189 16.5999 10.0013 17.1481 10.2284C17.6962 10.4554 18.1648 10.8399 18.4944 11.3333C18.8241 11.8266 19 12.4067 19 13C18.9992 13.7954 18.6829 14.558 18.1204 15.1204C17.558 15.6829 16.7954 15.9992 16 16Z"
                fill="#FF6047"
              />
              <path
                d="M16 2C13.2311 2 10.5243 2.82109 8.22202 4.35943C5.91973 5.89777 4.12531 8.08427 3.06569 10.6424C2.00606 13.2006 1.72881 16.0155 2.26901 18.7313C2.8092 21.447 4.14257 23.9416 6.1005 25.8995C8.05844 27.8574 10.553 29.1908 13.2687 29.731C15.9845 30.2712 18.7994 29.9939 21.3576 28.9343C23.9157 27.8747 26.1022 26.0803 27.6406 23.778C29.1789 21.4757 30 18.7689 30 16C29.9958 12.2883 28.5194 8.72977 25.8948 6.10518C23.2702 3.48059 19.7117 2.00423 16 2V2ZM10 26.377V25C10.0008 24.2046 10.3171 23.442 10.8796 22.8796C11.442 22.3171 12.2046 22.0008 13 22H19C19.7954 22.0008 20.558 22.3171 21.1204 22.8796C21.6829 23.442 21.9992 24.2046 22 25V26.377C20.1792 27.4402 18.1085 28.0005 16 28.0005C13.8915 28.0005 11.8208 27.4402 10 26.377V26.377ZM23.992 24.926C23.9721 23.6143 23.4377 22.363 22.5039 21.4416C21.5702 20.5202 20.3118 20.0025 19 20H13C11.6882 20.0025 10.4298 20.5202 9.49609 21.4416C8.56234 22.363 8.02793 23.6143 8.008 24.926C6.19456 23.3067 4.91573 21.1749 4.34083 18.8127C3.76594 16.4505 3.9221 13.9693 4.78864 11.6979C5.65518 9.42637 7.19122 7.47167 9.19337 6.09257C11.1955 4.71347 13.5693 3.97503 16.0005 3.97503C18.4317 3.97503 20.8055 4.71347 22.8076 6.09257C24.8098 7.47167 26.3458 9.42637 27.2124 11.6979C28.0789 13.9693 28.2351 16.4505 27.6602 18.8127C27.0853 21.1749 25.8064 23.3067 23.993 24.926H23.992Z"
                fill="#FF6047"
              />
            </svg> */}
            {/* <p className="inline align-middle text-gray-700 text-[12px]">
              {post.author.name}
            </p>  */}


            {/* <img
              alt={post.title}
              height="60px"
              width="60px"
             
              className="align-middle rounded-full"
              src={post.featuredImage.url}
            />  */}
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link href={`/post/${post.slug}`} className="text-md" key={index}>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;