import React ,{useState,useEffect} from 'react'
import Link from 'next/link'

import { getCategories } from '../services'
import useGetPostCategories from '../config/hooks/useGetPostCategories';

const Categories = () => {
  const {data}  = useGetPostCategories()
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8 ">
    <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
    {data?.data.map((category, index) => (
        <Link key={index} href={`/category/${category.id}`}>
          <span className='cursor-pointer block border-b pb-3 mb-3'>{category.category_name}</span>
        </Link>
      ))}
    </div>
  )
}

export default Categories