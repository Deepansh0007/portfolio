import React from "react";
import bg from "../public/dots.png"
import Image from "next/image";

const Card = ({text}) => {
	return (
		<div className="card card_bg px-5 py-3 font-semibold text-md rounded-md">
			{text}
		</div>
	);
};
const About = () => {
	return (
		<div id="about" className="py-10 relative">
			<div className="h-80 w-20 absolute inset-0 z-0">
                <Image src = {bg} alt= "bg" layout="fill" objectFit="cover"/>
            </div>
			<div className="flex items-center justify-center flex-col">
				<h1 className="text-3xl font-bold text-[#2B84EA]">
					ABOUT ME
				</h1>
				{/* <p data-aos= "fade-up" className='mt-10 md:text-xl md:px-10 px-5'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p> */}
			</div>
			<div className="grid md:grid-cols-2 md:gap-y-5 md:px-10 px-5 md:m-10 pb-10 z-10">
				<div className="md:mt-10 mt-5 border-2 rounded-xl md:p-10 p-5">
					<h2 className="text-2xl font-bold">Get to know me!</h2>
					<p className="md:text-lg mt-5 leading-7">
						I'm a Fullstack Web Developer building the Websites and Web
						Applications that leads to the success of the overall product. Check
						out some of my work in the{" "}
						<span className="font-bold">Projects</span> section.I'm open to Job
						opportunities where I can contribute, learn and grow. <br />
						If you have a good opportunity that matches my skills and experience
						then don't hesitate to{" "}
						<a href="#contact" className="text-blue-600 font-semibold">
							contact
						</a>{" "}
						me.
					</p>
				</div>
				<div className="md:ml-10 md:mt-10 mt-5 border-2 rounded-xl md:p-10 p-5">
					<h2 className="text-2xl font-bold">My skills</h2>
					<div className="flex mt-5 md:gap-3 gap-2 flex-wrap">
						<Card text="HTML" />
						<Card text="CSS" />
						<Card text="JAVASCRIPT" />
						<Card text="REACT" />
						<Card text="NEXTJS" />
						<Card text="TAILWINDCSS" />
						<Card text="NODEJS" />
						<Card text="RESPONSIVE DESIGN" />
						<Card text="SQL" />
						<Card text="MONGODB" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
