
import Link from 'next/link';
import React from 'react';

const BlogDetails = async({params }) => {
    const { id } = params;
    const data = async()=>{
      const res = await  fetch(` https://jsonplaceholder.typicode.com/posts/${id}`)
      return res.json()
    }
    const news = await data()
    return (
        <div className='flex max-w-xl mx-auto flex-col items-center justify-center'>

         <div className='border-[1px] p-4 shadow-xl'>
         <h2 className='text-lg py-2 font-semibold '> Category: {news.id}</h2>
         <h2 className='text-sm text-gray-600'>PostId: {news.userId}</h2>
          <p className='text-2xl font-semibold py-2'> {news.title}</p>
          <p className='py-2 text-gray-700'>{news.body}</p>
         <button className='px-4 py-2 mt-2 capitalize font-sans italic font-semibold bg-red-100 rounded-sm'>  <Link href='/'>back to home</Link></button>
         </div>
            
        </div>
    );
};

export default BlogDetails;