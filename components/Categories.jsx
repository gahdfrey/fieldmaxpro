import React ,{useState,useEffect} from 'react'
import Link from 'next/link'

import { getCategories } from '../services'
import useGetPostCategories from '../config/hooks/useGetPostCategories';

const Categories = () => {
  const {data}  = useGetPostCategories()
  return (
    <div className="p-8 pb-12 mb-8 bg-white rounded-lg shadow-lg ">
    <h3 className="pb-4 mb-8 text-xl font-semibold border-b">Categories</h3>
    {data?.data.map((category, index) => (
        <Link key={index} href={`/category/${category.id}`}>
          <span className='block pb-3 mb-3 border-b cursor-pointer'>{category.category_name}</span>
        </Link>
      ))}
    </div>
  )
}

export default Categories