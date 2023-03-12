import React from "react";
import { projects } from "../data";

var display = 0;

function displayProjects(display) {
  if (display == 0)
  {
  return (<React.Fragment>
          {projects.filter((project) => project.type === "Mobile") .map((project) => (


  
             <a href={project.link} key={project.image} className="sm:w-1/4 sm:h-1/4 p-2">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}     
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
              <p>{project.title}</p>
            </a>

          )
          
          )}

  </React.Fragment>)
  }
  else {
    return (<p>Nope</p>)
  }
}

export default function Projects() {
  return (
    <section id="projects" className="text-gray-900 bg-white-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray">
            Select Projects
          </h1>

          <div className="flex flex-row w-full">
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4	flex flex-wrap items-center  text-gray justify-center">
        <a href="#skills" className="mr-5 hover:text-white">
        <p>Front End</p>
          </a>
          <a href="#projects" className="mr-5 hover:text-white">
          <p>Back End</p>
          </a>
          <a
          href="#contact"
          className="mr-5 hover:text-white">
        <p>Full Stack</p>
        </a>
        <a
          href=""
          className="mr-5 hover:text-white">
        <p>Mobile</p>
        </a>
        <a
          href=""
          className="mr-5 hover:text-white">
        <p>Show All</p>
        </a>
        </nav>

        </div>

        </div>


        
        return <div className="flex flex-wrap -m-4">
        {displayProjects(display)}

        </div>


      </div>
    </section>
  );
}
