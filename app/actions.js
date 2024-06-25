"use server";
import nodemailer from "nodemailer";

import { userData } from "@/app/assets/user-data";
import { template } from "@/app/assets/email-template";

// Revalidate every 1 day (86400 seconds)
const REVALIDATE_PERIOD = 10;

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
        console.error("Error sending email:", error);
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

export async function getGitProfile() {
    try {
        const res = await fetch(
            `https://api.github.com/users/${userData.githubUser}`,
            {
                headers: { "Content-Type": "application/json" },
                next: { revalidate: REVALIDATE_PERIOD }
            }
        );
        if (!res.ok) {
            throw new Error(
                `Failed to fetch data: ${res.status} ${res.statusText}`
            );
        }
        return await res.json();
    } catch (error) {
        console.error("Error fetching GitHub profile:", error);
        throw error;
    }
}

export async function getGitProjects() {
    try {
        const res = await fetch(
            `https://api.github.com/search/repositories?q=user:${userData.githubUser}+fork:false&sort=updated&per_page=10&type=Repositories`,
            {
                headers: { "Content-Type": "application/json" },
                next: { revalidate: REVALIDATE_PERIOD }
            }
        );
        if (!res.ok) {
            throw new Error(
                `Failed to fetch data: ${res.status} ${res.statusText}`
            );
        }
        return await res.json();
    } catch (error) {
        console.error("Error fetching GitHub projects:", error);
        throw error;
    }
}
