import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import Button from "./components/ui/button";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#0d1224] text-white p-4">
            <div className="max-w-2xl w-full text-center">
                <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600 mb-4">
                    404
                </h1>

                <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                    Oops! Page Not Found
                </h2>

                <p className="text-gray-300 mb-8">
                    The page you are looking for might have been removed, had
                    its name changed, or is temporarily unavailable.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button
                        href="/"
                        title="Back to Home"
                        aria-label="Return to home page"
                    >
                        <FaArrowLeft size={16} />
                    </Button>

                    <Link
                        href="https://github.com/abdo-elmorsi/github-portfolio/issues"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-icon hover:text-primary-icon/80 transition-colors"
                    >
                        Report an Issue
                    </Link>
                </div>

                <div className="mt-12 p-6 rounded-lg bg-primary-bg border border-[#2a2e5a]">
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="https://elmorsi.vercel.app#statistics"
                                className="hover:text-primary-icon transition-colors"
                            >
                                Statistics
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://elmorsi.vercel.app#projects"
                                className="hover:text-primary-icon transition-colors"
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://elmorsi.vercel.app#contributions"
                                className="hover:text-primary-icon transition-colors"
                            >
                                Contributions
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://elmorsi.vercel.app#contact"
                                className="hover:text-primary-icon transition-colors"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
