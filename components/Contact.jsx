"use client"
import React, { useState } from "react";

const Contact = () => {
	const [form, setForm] = useState({
		name:'',
		email:'',
		message: '',
	})
	const handleChange = (e) => {
	}
	return (
		<div data-aos="zoom-in" className="min-h-screen pt-10 px-5 pb-20" id="contact">
			<div className="flex items-center justify-center flex-col">
				<h1 className="text-3xl font-bold">CONTACT ME</h1>
				<p className="mt-5 text-center text-lg">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible.</p>
				<div className="form-control w-full max-w-lg mt-10 bg-[#e8e8e8] p-10 rounded-lg shadow-lg">
					<label className="label">
						<span className="label-text">Name</span>
					</label>
					<input
						type="text"
						placeholder="Type here"
						className="input input-bordered w-full max-w-md"
					/>
                    <label className="label">
						<span className="label-text">Email</span>
					</label>
					<input
						type="text"
						placeholder="Type here"
						className="input input-bordered w-full max-w-md"
					/>
                    <label className="label">
						<span className="label-text">Message</span>
					</label>
					<textarea placeholder="Type here" className="textarea textarea-bordered h-32 w-full max-w-md text-base" ></textarea>
                    <button className="btn w-40 mx-auto mt-10 bg-primary text-white hover:bg-[#6d38f3]">Submit</button>
				</div>
			</div>
		</div>
	);
};

export default Contact;
