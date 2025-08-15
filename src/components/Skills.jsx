import React from 'react'

export default function Skills() {
    const skills = [
        { src: "/html.png", name: "HTML" },
        { src: "/css.png", name: "CSS" },
        { src: "/js.png", name: "JavaScript" },
        { src: "/react.jpeg", name: "React" },
        { src: "/node.png", name: "Node.js" },
        { src: "/mongodb.png", name: "MongoDB" },
    ];

    return (
        <section id="skills" className='m-4 rounded-lg scroll-smooth dark:bg-black md:flex-row mt-0 justify-center items-center h-auto dark:text-white'>
            <div className="flex justify-center">
                <label className='text-3xl font-bold'>Skills</label>
            </div>
            <div className='flex justify-center items-center mt-10 p-4'>
                <ul className='    flex flex-col md:flex-row gap-15  rounded-2xl  p-3'>
                    {skills.map((skill, index) => (

                        <li key={index} className='flex flex-col  transform hover:scale-115 shadow-sm dark:shadow-amber-50 h-35 w-25 items-center rounded-lg  dark:bg-black bg-blue-50 mx-2'>
                            <img
                                src={skill.src}
                                alt={skill.name}
                                className='h-16 w-16 mt-4 mb-2  transition shadow-lg duration-300 ' />
                            <span className='text-base font-medium  dark:text-white pt-2'>{skill.name}</span>
                        </li>

                    ))}
                </ul>
            </div>
        </section>
    )
}
