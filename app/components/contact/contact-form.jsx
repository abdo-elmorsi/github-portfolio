"use client";
import React, { useState } from "react";
import Button from "../ui/button";
import { BsSendFill } from "react-icons/bs";
import { handleSendEmail } from "@/app/actions";

export default function ContactForm() {
	const [message, setMessage] = useState({ msg: "", success: true });
	const [loading, setLoading] = useState(false);

	const formAction = async (formData) => {
		setLoading(true);
		try {
			const response = await handleSendEmail(message, formData);

			setMessage({ msg: "Message sent successfully!", success: true });
		} catch (error) {
			setMessage({ msg: "Failed to send message. Please try again.", success: false });
		} finally {
			setLoading(false);
		}
	};

	return (
		<form
			onSubmit={async (e) => {
				e.preventDefault();
				const formData = new FormData(e.target);
				await formAction(formData);
			}}
			className="w-full max-w-xl p-8 rounded-lg shadow-md flex flex-wrap justify-between"
			aria-label="Contact form"
		>
			<div className="mb-6 w-full md:w-[48%]">
				<label htmlFor="name" className="block text-gray-300 font-bold mb-2">
					Your Name
				</label>
				<input
					type="text"
					id="name"
					name="name"
					placeholder="What's your good name?"
					className="w-full px-3 py-2 border rounded-md shadow-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
					required
					aria-required="true"
				/>
			</div>
			<div className="mb-6 w-full md:w-[48%]">
				<label htmlFor="email" className="block text-gray-300 font-bold mb-2">
					Your email
				</label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="What's your email address?"
					className="w-full px-3 py-2 border rounded-md shadow-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
					required
					aria-required="true"
				/>
			</div>
			<div className="w-[100%]">
				<label htmlFor="message" className="block text-gray-300 font-bold mb-2">
					Your Message
				</label>
				<textarea
					id="message"
					name="message"
					placeholder="What you want to say?"
					className="w-full px-3 py-2 border rounded-md shadow-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
					required
					aria-required="true"
				/>
			</div>
			<div
				role="status"
				aria-live="polite"
				className={`text-center w-full mt-2 ${message.success ? "text-green-500" : "text-red-500"}`}
			>
				{message.msg}
			</div>
			<div className="w-full justify-center flex items-center gap-3 mt-6">
				<Button 
					title={loading ? "Sending..." : "Send"} 
					disabled={loading}
					aria-label={loading ? "Sending message" : "Send message"}
				>
					<BsSendFill size={16} aria-hidden="true" />
				</Button>
			</div>
		</form>
	);
}
