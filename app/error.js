"use client";

import { useEffect } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import Button from "./components/ui/button";

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#0d1224] text-white p-4">
            <div className="max-w-2xl w-full text-center">
                <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600 mb-4">
                    Oops!
                </h1>

                <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                    Something went wrong
                </h2>

                <p className="text-gray-300 mb-8">
                    {error.message ||
                        "An unexpected error occurred. Please try again later."}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button
                        onClick={() => reset()}
                        title="Try Again"
                        aria-label="Try loading the page again"
                    >
                        <FaArrowLeft size={16} />
                    </Button>

                    <Link
                        href="/"
                        className="text-primary-icon hover:text-primary-icon/80 transition-colors"
                    >
                        Back to Home
                    </Link>
                </div>

                <div className="mt-12 p-6 rounded-lg bg-primary-bg border border-[#2a2e5a]">
                    <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
                    <p className="text-gray-300 mb-4">
                        If the problem persists, you can report it on GitHub.
                    </p>
                    <Link
                        href="https://github.com/abdo-elmorsi/github-portfolio/issues"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-icon hover:text-primary-icon/80 transition-colors"
                    >
                        Report an Issue
                    </Link>
                </div>
            </div>
        </div>
    );
}
