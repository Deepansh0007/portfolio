import React from "react";
import Link from "next/link";
const Header = () => {
	return (
        <header className="mx-auto bg-slate-200 px-10">
		<div className="place-items-center p-2 md:flex md:justify-between md:py-5 max-w-[1448px] font-bold">
			<div className="grid justify-center text-lg text-secondary">
				<p>DEEPANSH</p>
			</div>
			<nav>
				<ul className="flex justify-center lg:gap-8 gap-5 text-md text-secondary lg:text-md header_links">
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
		</header>
       
	);
};

export default Header;
