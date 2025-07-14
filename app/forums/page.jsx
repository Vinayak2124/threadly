import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const page = () => {
  const topics = [
    {
      title: "JavaScript",
      img: "/javascript.png",
      page: "Javascript-Discussion",
      des: "Discusses JS core concepts (variables, data types, functions, control flow), web development role, ES6+ features, and asynchronous programming (Promises, async/await)."
    },
    {
      title: "React",
      img: "/react.png",
      page: "React-Discussion",
      des: "Covers React fundamentals: components, props, state, Virtual DOM, building UIs, managing state with hooks, and understanding the component lifecycle."
    },
    {
      title: "Node.js",
      img: "/node.png",
      page: "Nodejs-Discussion",
      des: "Focuses on Node.js server-side capabilities, event-driven architecture, non-blocking I/O. Explores building RESTful APIs, file systems, and database integration for scalable applications."
    },
    {
      title: "Next.js",
      img: "/next.png", // Assuming a placeholder image path
      page: "Nextjs-Discussion",
      des: "Delves into Next.js for full-stack React: SSR, SSG, API routes. Discusses performance enhancement and developer experience for modern web development."
    },
    {
      title: "Java",
      img: "/java.png", // Assuming a placeholder image path
      page: "Java-Discussion",
      des: "Covers Java's object-oriented principles, platform independence, and ecosystem. Discusses data structures, algorithms, multithreading, and applications in enterprise, Android, and big data."
    },
    {
      title: "Python",
      img: "/python.png",
      page: "Python-Discussion",
      des: "Highlights Python's versatility in web development (Django/Flask), data science, and automation. Covers fundamental programming, data structures, OOP, and practical applications."
    },
 
  ];
  
  return (
    <div className=' mt-15 mx-auto  '>
        <h2 className='text-4xl font-semibold text-center'>Discussion Pages</h2>
      <div className='w-full flex justify-center items-center my-10  flex-wrap gap-5'>
        {topics.map((topic, index) => {
          return <div key={index} className=' w-1/4 p-10 border rounded-4xl shadow-md flex-col justify-between items-center hover:shadow-2xl transition duration-400  bg-slate-100 '>
           <div className='flex  items-center my-3 gap-2'> <Image src={topic.img} alt={topic.title} width={60} height={50}  />
           <h2 className='font-semibold text-2xl my-3 text-center'>{topic.title}</h2></div>
            <p className='text-gray-600 text-sm'>{topic.des}</p>
            <Link href={`/forum/${topic.page}`} ><Button className="bg-teal-700 rounded-2xl hover:bg-teal-900 hover:scale-95 mt-4 cursor-pointer text-center ">Discuss Now</Button></Link>
          </div>
        })}
        </div>
    </div>
  )
}

export default page