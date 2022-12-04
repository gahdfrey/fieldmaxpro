import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getCategories, getCategoryPost } from '../../services';
import { PostCard, Categories, Loader } from '../../components';
import useQuery from '../../config/hooks/useQuery'
import useGetPosts from '../../config/hooks/useGetPosts'

const CategoryPost = () => {
  const id = useQuery('slug')
  const { data, filter, setFilter } = useGetPosts()

  useEffect(() => {
    setFilter({ ...filter, category_id: id })
  }, [id])

  const renderPosts = () => {
    if (typeof data === 'undefined') {
      return <div>Loading...</div>
    }
    return (
      <>
        {data?.data.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </>
    )
  }

  return (
    <div className="container mx-auto px-10 mb-8 py-[120px]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {renderPosts()}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryPost;