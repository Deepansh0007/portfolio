"use client"
import React, { useState } from "react";
import Image from "next/image";
import list from "../public/list.svg";
import close from "../public/x.svg";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCLick = () => {
    setShowModal(!showModal);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <div className="flex justify-between py-5 font-bold px-10 bg">
        <div className="grid justify-center text-xl text-white">
          <p>DEEPANSH</p>
        </div>
        <nav>
          <ul className="hidden sm:flex sm:justify-center gap-8 text-lg text-white header_links">
            <li>
              <button onClick={() => scrollToSection("hero")}>HOME</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("about")}> ABOUT</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("projects")}> PROJECTS</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")}> CONTACT</button>
            </li>
          </ul>
        </nav>
        <Image
          src={showModal ? close : list}
          alt="list"
          height={30}
          width={30}
          onClick={handleCLick}
          className="absolute right-5 top-5 sm:hidden "
        />
        {showModal && (
          <div className="h-40 w-screen px-10 absolute z-10 sm:hidden mt-12 bg-white right-0">
            <nav>
              <ul className="grid gap-5 place-content-end">
			  <li>
              <button onClick={() => scrollToSection("hero")}>HOME</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("about")}> ABOUT</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("projects")}> PROJECTS</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")}> CONTACT</button>
            </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
