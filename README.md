# 🚀 GitHub Portfolio

> **Showcase Your Skills, Inspire Your Next Opportunity**

A modern, responsive portfolio website built with Next.js that automatically displays your GitHub profile, projects, statistics, and contributions. Perfect for developers looking to showcase their work and skills in an elegant, professional manner.

[![Last Commit](https://img.shields.io/github/last-commit/abdo-elmorsi/github-portfolio?style=flat&logo=git&logoColor=white&color=0080ff)](https://github.com/abdo-elmorsi/github-portfolio)
[![Top Language](https://img.shields.io/github/languages/top/abdo-elmorsi/github-portfolio?style=flat&color=0080ff)](https://github.com/abdo-elmorsi/github-portfolio)
[![Language Count](https://img.shields.io/github/languages/count/abdo-elmorsi/github-portfolio?style=flat&color=0080ff)](https://github.com/abdo-elmorsi/github-portfolio)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## ✨ Features

- **🚀 Modern Tech Stack**: Built with Next.js 14, React 18, and Tailwind CSS
- **📊 GitHub Integration**: Real-time GitHub profile data, statistics, and project showcase
- **🎨 Beautiful UI**: Responsive design with smooth animations and modern aesthetics
- **📱 Mobile First**: Fully responsive design that works on all devices
- **🔍 SEO Optimized**: Built-in SEO with structured data and metadata generation
- **📧 Contact Form**: Functional contact form with email integration
- **🌙 Dark Theme**: Elegant dark theme with glowing card effects
- **⚡ Performance**: Optimized with Next.js features and lazy loading
- **🎯 Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML

## 🛠️ Built With

### Frontend
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat&logo=sass&logoColor=white)

### Backend & Tools
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat&logo=node.js&logoColor=white)
![Nodemailer](https://img.shields.io/badge/Nodemailer-6.9.13-4A90E2?style=flat)
![Sharp](https://img.shields.io/badge/Sharp-0.33.4-99CC00?style=flat&logo=sharp&logoColor=white)

### Development Tools
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white)
![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A?style=flat&logo=postcss&logoColor=white)
![Autoprefixer](https://img.shields.io/badge/Autoprefixer-DD3735?style=flat&logo=autoprefixer&logoColor=white)
![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=flat&logo=yarn&logoColor=white)

## 📱 Screenshots

*[Add screenshots of your portfolio here]*

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ 
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abdo-elmorsi/github-portfolio.git
   cd github-portfolio
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install
   
   # Using yarn
   yarn install
   ```

3. **Configure your data**
   
   Edit `app/assets/user-data.js` with your information:
   ```javascript
   export const userData = {
       githubUser: "your-github-username",
       devUsername: "Your Name",
       email: "your-email@example.com",
       github: "https://github.com/your-username",
       linkedIn: "https://linkedin.com/in/your-profile",
       // ... other social links
   };
   ```

4. **Run the development server**
   ```bash
   # Using npm
   npm run dev
   
   # Using yarn
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
github-portfolio/
├── app/                          # Next.js 14 app directory
│   ├── actions.js               # Server actions for GitHub API calls
│   ├── assets/                  # Static assets and user data
│   ├── components/              # React components
│   │   ├── contact/            # Contact form component
│   │   ├── contributions/      # GitHub contributions calendar
│   │   ├── footer/             # Footer component
│   │   ├── hero-section/       # Hero section with profile
│   │   ├── language/           # Programming language stats
│   │   ├── navbar/             # Navigation component
│   │   ├── projects/           # GitHub projects showcase
│   │   ├── rank/               # GitHub ranking stats
│   │   ├── stats/              # GitHub statistics
│   │   ├── helper/             # Reusable helper components
│   │   └── ui/                 # UI components (buttons, etc.)
│   ├── layout.js               # Root layout component
│   └── page.js                 # Home page component
├── css/                        # Global styles and SCSS files
├── public/                     # Static public assets
├── utils/                      # Utility functions
└── middleware.js               # Next.js middleware
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Email configuration (for contact form)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# GitHub API (optional, for higher rate limits)
GITHUB_TOKEN=your-github-token
```

### Customization

- **Colors**: Modify `app/assets/colors.js` for theme customization
- **Styling**: Edit `css/globals.scss` and `tailwind.config.js`
- **Components**: Customize components in `app/components/`
- **Data**: Update `app/assets/user-data.js` with your information

## 📊 Features in Detail

### GitHub Integration
- **Profile Display**: Shows your GitHub avatar, bio, and social links
- **Statistics**: GitHub stats, contribution graphs, and language breakdown
- **Projects**: Automatically fetches and displays your public repositories
- **Contributions**: Visual contribution calendar with streak tracking

### Performance Features
- **Image Optimization**: Next.js Image component with Sharp for optimization
- **Lazy Loading**: Efficient loading of GitHub stats and images
- **Caching**: 24-hour revalidation for GitHub data
- **SEO**: Structured data and metadata generation

### Accessibility
- **ARIA Labels**: Proper labeling for screen readers
- **Semantic HTML**: Meaningful HTML structure
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG compliant color schemes

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [GitHub Readme Stats](https://github.com/anuraghazra/github-readme-stats) for beautiful GitHub statistics
- [React Icons](https://react-icons.github.io/react-icons/) for the icon library
- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

## 📞 Contact

**Abdo Elmorsi** - [abdelrahmandiv@gmail.com](mailto:abdelrahmandiv@gmail.com)

Project Link: [https://github.com/abdo-elmorsi/github-portfolio](https://github.com/abdo-elmorsi/github-portfolio)

---

⭐ **Star this repository if you found it helpful!**
