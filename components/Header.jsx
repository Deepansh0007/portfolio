"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import list from "../public/list.svg"
import close from "../public/x.svg"
const Header = () => {
	const [showModal, setShowModal] = useState(false);
		const handleCLick = () =>{
			setShowModal(!showModal);
		}
	return (
		
        <header>
		<div className="flex justify-between py-5 font-bold px-10 bg">
			<div className="grid justify-center text-xl text-white">
				<p>DEEPANSH</p>
			</div>
			<nav>
				<ul className=" hidden sm:flex sm:justify-center gap-8 text-lg text-white header_links">
					<li>
						<Link href="/">HOME</Link>
					</li>
					<li>
						<Link href="#about">ABOUT</Link>
					</li>
					<li>
						<Link href="#projects">PROJECTS</Link>
					</li>
					<li>
						<Link href="#contact">CONTACT</Link>
					</li>
				</ul>
			</nav>
			<Image src = {showModal?close:list} alt = "list" height = {30} width = {30} onClick = {handleCLick} className="absolute right-5 top-5 sm:hidden "/>
			{
				showModal &&
			<div className="h-40 w-screen px-10 absolute z-10 sm:hidden mt-12 bg-white right-0">
				<nav>
					<ul className="grid gap-5 place-content-end">
					<li>
						<Link href="/">HOME</Link>
					</li>
					<li>
						<Link href="#about">ABOUT</Link>
					</li>
					<li>
						<Link href="#projects">PROJECTS</Link>
					</li>
					<li>
						<Link href="#contact">CONTACT</Link>
					</li>
					</ul>
				</nav>

			</div>
}
        </div>
		</header>
       
	);
};

export default Header;
