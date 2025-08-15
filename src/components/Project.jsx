import React from 'react'

export default function Project() {

    const data = [
        {
            id: 1,
            title: "Book Store",
            description: "A full-stack book store application built with React, Node.js, and MongoDB.",
            image: "/Bookstore.png",
        },
        {
            id: 2,
            title: "Calculator",
            description: "A simple calculator application built with React, showcasing basic arithmetic operations.",
            image: "/calculator.jpg",
        }
    ]

    return (
        <section  id="" className='py-5 scroll-mt-16 rounded-lg m-4 w-auto min-h-screen auto md:px-2 px-4 bg-blue-50 dark:bg-black flex-col md:flex-row dark:text-white'>
            <h1 className='text-3xl font-bold text-center  text-blue-800'>Projects</h1>
            <div className='flex justify-center  items-center '>
                <div className="grid grid-cols-1 gap-x-5 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white dark:bg-black shadow-md rounded-lg overflow-hidden shadow-amber-100 transform hover:scale-105 dark:text-amber-50  hover:shadow-xl transition-shadow"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4  ">
                                <h2 className="text-xl font-bold  mb-2">{item.title}</h2>
                                <p className=" mb-4">{item.description}</p>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
