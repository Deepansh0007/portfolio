import React from "react";
import Image from "next/image";
import metaverse from "../public/metaverse.png";

const Project = ({ title, description, image, link }) => {
  return (
      <div className="grid lg:grid-cols-2 my-10 lg:gap-10">
        <div data-aos = "fade-right" className="h-full w-full">
          <Image src = {image} alt = "project"/>
        </div>
        <div data-aos = "fade-right" className="lg:mt-10 mt-5">
          <h1 className="font-semibold text-3xl lg:text-left text-center">{title}</h1>
          <div className="leading-8 text-lg my-8">{description}</div>
          <a href={link} className="px-8 bg-primary rounded-xl text-white py-3">Live link</a>
        </div>
      </div>
  );
};
const Projects = () => {
	return (
		<div id="projects" className="bg-slate-50 lg:p-10 p-5">
			<div className="flex items-center justify-center flex-col">
				<h1 data-aos="zoom-in" className="text-3xl font-bold">
					PROJECTS
				</h1>
				<Project title="Metaverse" image={metaverse} description="fdscbsadkverfkkfvbaukrbkvbauhtf tf tyyyyyyyyy yyyyy yyyyyyyy yycdtydtyhhhhhhhhh
        hhhhhhhhhhhhhhhhhhhhhhhzzzzzh kuhuibgigyy ugyugbyufoyy ygygyofyfyf iuguing8norf" link= "https://multiversemadness.netlify.app" />
        <Project title="Metaverse" image={metaverse} description="fdscbsadkverfkkfvbaukrbkvbauhtf tf tyyyyyyyyy yyyyy yyyyyyyy yycdtydtyhhhhhhhhh
        hhhhhhhhhhhhhhhhhhhhhhhzzzzzh kuhuibgigyy ugyugbyufoyy ygygyofyfyf iuguing8norf" link= "https://multiversemadness.netlify.app" />
        <Project title="Metaverse" image={metaverse} description="fdscbsadkverfkkfvbaukrbkvbauhtf tf tyyyyyyyyy yyyyy yyyyyyyy yycdtydtyhhhhhhhhh
        hhhhhhhhhhhhhhhhhhhhhhhzzzzzh kuhuibgigyy ugyugbyufoyy ygygyofyfyf iuguing8norf" link= "https://multiversemadness.netlify.app" />
			</div>
		</div>
	);
};

export default Projects;
