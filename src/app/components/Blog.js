



import Link from 'next/link';
import React from 'react';

const Blog =async () => {

 const myData = async()=>{
  const res =await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json()
 }
const users = await myData()


  return (
    <>
    <h2 className='text-4xl font-semibold italic my-4  py-2 border-b-[1px] text-center' >our lastes news</h2>
   
  <div className='grid grid-cols-1 w-11/12 md:w-full
   mx-auto md:grid-cols-3 lg:grid-cols-4  gap-3'>
  {users.map(data=> <div key={data.id}>
    <div className='flex border-[1px] p-2 md:p-4 shadow-md flex-col h-full'>
    <div className='flex-grow'><h2 className=' text-lg font-semibold font-sans pb-3'> {data.title}</h2>
     <p className='text-sm text-gray-500 leading-6 pt-4'>
      {data.body}
     </p></div>
   <div>  <button className='px-4  py-2 rounded-sm font-semibold italic bg-red-200 mt-2'><Link href={`/blog/${data.id}`}>see Details</Link></button></div>
    </div>
  </div>)}
  </div>
      
    </>
  );
};

export default Blog;
