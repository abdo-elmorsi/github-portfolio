"use server";
import nodemailer from "nodemailer";

import { userData } from "@/app/assets/user-data";
import { template } from "@/app/assets/email-template";

export async function sendEmail({ name, email, message }) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    try {
        const body = template(name, message);
        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL,
            subject: `A new message from ${email}`,
            html: body,
        });
        return { success: true };
    } catch (error) {
        return {
            success: false,
            error: "Failed to send email. Please try again later.",
        };
    }
}

export async function handleSendEmail(currentState, formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    try {
        if (!name || !email || !message) {
            throw new Error("All fields are required.");
        }
        await sendEmail({ name, email, message });
        return { success: true, msg: "Message sent successfully" };
    } catch (error) {
        return { success: false, msg: error.message };
    }
}

const BASE_URL = "https://api.github.com";

async function fetchFromGitHub(endpoint) {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
        headers: { "Content-Type": "application/json" },
    });

    if (!res.ok)
        throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
    return res.json();
}

export async function getGitProfile(username) {
    return await fetchFromGitHub(`/users/${username}`);
}

export async function getGitProjects(username, perPage = 10) {
    return await fetchFromGitHub(
        `/search/repositories?q=user:${username}+fork:false&sort=updated&per_page=${perPage}&type=Repositories`
    );
}
