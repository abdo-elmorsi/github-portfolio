const path = require("path");

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    images: {
        // Configure remotePatterns
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                pathname: "**", // Match any path under the specified hostname
            },
            {
                protocol: "https",
                hostname: "github-readme-stats.vercel.app",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "github-readme-streak-stats.herokuapp.com",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "stardev.io",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "github-profile-summary-cards.vercel.app",
                pathname: "**",
            },
        ],
        dangerouslyAllowSVG: true,
    },
};
