import React from "react";
import Image from "next/image";
import metaverse from "../public/metaverse.png";
import promedia from "../public/promedia.png"

const Project = ({ title, description, image, link }) => {
  return (
      <div className="grid lg:grid-cols-2 my-10 lg:gap-10">
        <div data-aos = "fade-right" className="h-full w-full">
          <a href = {link}>
          <Image src = {image} alt = "project"/>
          </a>
        </div>
        <div data-aos = "fade-right" className="lg:mt-10 mt-5">
          <h1 className="font-semibold text-3xl lg:text-left text-center">{title}</h1>
          <div className="leading-8 text-lg mb-8 mt-5">{description}</div>
          <a href={link} className="px-8 bg-primary rounded-xl text-white py-3">Live link</a>
        </div>
      </div>
  );
};
const Projects = () => {
	return (
		<div id="projects" className="bg-[#fafafa] lg:p-10 p-5">
			<div className="flex items-center justify-center flex-col">
				<h1 className="text-3xl font-bold">
					PROJECTS
				</h1>
				<Project title="Metaverse" image={metaverse} description="I re-created a Metaverse concept website landing page using Next.js and Framer Motion. It was a great experience for me to build this project." link= "https://multiversemadness.netlify.app" />
        <Project title="Promedia" image={promedia} description="Promedia is a platform that lets the users to effortlessly showcase their projects online." link= "https://promedia.vercel.app" />
			</div>
		</div>
	);
};

export default Projects;
