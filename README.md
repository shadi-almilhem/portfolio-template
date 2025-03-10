# Modern Portfolio Website

![Portfolio Preview](https://i.imgur.com/1V2oaMf.png)

A customizable portfolio website built with Next.js 15.2, TypeScript, Tailwind CSS v4, and Sanity CMS. Perfect for developers, designers, and creatives looking to showcase their work in a modern, responsive format.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Sanity Setup](#sanity-setup)
- [Configuration](#configuration)
  - [Basic Information](#basic-information)
  - [Content Management](#content-management)
- [Available Sections](#available-sections)
- [Deployment](#deployment)
  - [Deploying to Vercel](#deploying-to-vercel)
  - [Deploying with GitHub](#deploying-with-github)
- [Customization](#customization)
  - [Styling](#styling)
  - [Sections](#sections)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Responsive Design**: Looks great on all devices
- **TypeScript Integration**: Type-safe code for robust development
- **Headless CMS**: Content management with Sanity
- **Modular Sections**: Enable/disable different portfolio sections
- **Blog Platform**: Integrated blog with Sanity management
- **Project Showcase**: Highlight your best work with detailed project pages
- **SEO Optimized**: Built-in SEO components for better discoverability
- **Fast Performance**: Optimized for speed with Next.js 15.2
- **Dark/Light Mode**: Built-in theme toggle for user preference
- **Integrated Sanity Studio**: Edit your content directly from your portfolio site
- **Portable Text Support**: Rich text editing for your blog posts and project descriptions

## Demo

View the demo: [https://modern-portfolio-demo.vercel.app](https://your-demo-link.com)

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher): [Download Node.js](https://nodejs.org/)
- **npm** (v8.0.0 or higher, comes with Node.js) or **yarn** (v1.22.0 or higher): [Install Yarn](https://yarnpkg.com/getting-started/install)
- **Git** (for version control): [Download Git](https://git-scm.com/downloads)

You'll also need:

- A **Sanity account** (free tier available): [Sign up for Sanity](https://www.sanity.io/signup)
- A **Vercel account** (for deployment, free tier available): [Sign up for Vercel](https://vercel.com/signup)

## Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/modern-portfolio.git
cd modern-portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-03-09
```

### Sanity Setup

1. Create a Sanity account at [sanity.io](https://www.sanity.io/signup) if you don't have one already.

2. Create a new Sanity project from the [Sanity dashboard](https://www.sanity.io/manage).

3. Copy your Sanity project ID from the dashboard.

4. Update your `.env.local` file with the project ID:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-03-09
```

5. The project already includes Sanity Studio at the route `/studio`. After setting up your environment variables, you can access your studio at `http://localhost:3000/studio`.

6. Log in with your Sanity account credentials and start adding content.

## Configuration

### Basic Information

Edit the `content.json` file located in the `app/content` directory to update your personal information:

```json
{
  "name": "Your Name",
  "roleDescription": "Your role description",
  "hero": {
    "jobTitle": "Your Job Title",
    "about": "Brief description about yourself",
    "X": "https://www.x.com/yourusername",
    "Instagram": "https://www.instagram.com/yourusername",
    "GitHub": "https://www.github.com/yourusername",
    "LinkedIn": "https://www.linkedin.com/in/yourusername",
    "email": "your.email@example.com"
  },
  "about": {
    "heading": "Your about heading",
    "paragraph": {
      "paragraph1": "First paragraph about yourself",
      "paragraph2": "Second paragraph about yourself",
      "paragraph3": "Third paragraph about yourself",
      "paragraph4": "Fourth paragraph about yourself"
    }
  },
  "skills": ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5", "Skill 6"],
  "enableSections": {
    "enableBlog": true,
    "enableProjects": true,
    "enableCertifications": true,
    "enableExperience": true,
    "enableSkills": true
  }
}
```

### Content Management

Use Sanity Studio to manage the following content types:

1. **Projects**: Add your portfolio projects with details, images, and technologies used
2. **Blog Posts**: Write and publish blog articles
3. **Certifications**: Add your professional certifications
4. **Experience**: Add your work experience

#### Schema Types

The project includes the following schema types in Sanity:

- **Project**: Projects you've worked on

  - Title, description, slug, thumbnail, body (Portable Text), technologies, external link

- **Blog**: Blog posts

  - Title, slug, date, tags, body (Portable Text)

- **Certification**: Your professional certifications

  - Name, issuer, description, date, credential link

- **Experience**: Your work history
  - Company, job title, description, start date, end date, current position flag

## Available Sections

The portfolio includes the following main sections:

- **Main Page**: Featuring your hero section, skills, and featured projects
- **About Page**: Detailed information about you and your background
- **Projects Page**: Showcase of all your projects with filtering options
- **Blog Page**: Your articles and thoughts
- **Studio**: Built-in Sanity Studio for content management

Each section can be enabled or disabled through the `enableSections` property in `content.json`.

## Deployment

### Deploying to Vercel

1. Create a [Vercel account](https://vercel.com/signup) if you don't have one
2. Install the Vercel CLI:

```bash
npm install -g vercel
```

3. Log in to Vercel:

```bash
vercel login
```

4. Deploy your project:

```bash
vercel
```

5. Add your environment variables in the Vercel project settings:
   - Go to your project on the Vercel dashboard
   - Navigate to Settings > Environment Variables
   - Add the same variables from your `.env.local` file

### Deploying with GitHub

1. Push your project to a GitHub repository
2. Log in to [Vercel](https://vercel.com/)
3. Click "New Project" and import your GitHub repository
4. Add your environment variables under the Environment Variables section
5. Click "Deploy"

## Customization

### Styling

This project uses Tailwind CSS v4 for styling. You can customize the theme by editing the `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          // Add your custom colors here
        },
        // Add more custom colors
      },
      fontFamily: {
        // Add custom fonts
      },
      // Add other theme customizations
    },
  },
  // Other config options
};
```

### Adding Your Resume/CV

To add your resume or CV:

1. Replace the `cv.pdf` file in the `public` directory with your own resume/CV file
2. If you use a different filename, update the reference in the relevant component

### Replacing Avatar/Portrait

To customize your profile picture:

1. Replace the `avatar.png`, `portrait.jpg`, and `portrait.webp` files in the `public` directory with your own images
2. Keep the same filenames or update the references in the components

### Sections

To enable or disable sections, update the `enableSections` object in `content.json`:

```json
"enableSections": {
  "enableBlog": true,
  "enableProjects": true,
  "enableCertifications": true,
  "enableExperience": true,
  "enableSkills": true
}
```

## Project Structure

```
portfolio/
└─ my-project/
   ├─ app/                      # Next.js app directory
   │  ├─ about/                 # About page
   │  ├─ blog/                  # Blog pages
   │  │  ├─ [slug]/             # Dynamic blog post pages
   │  │  └─ page.tsx            # Blog listing page
   │  ├─ components/            # React components
   │  │  ├─ ArticleLayout.tsx   # Layout for articles
   │  │  ├─ Avatar.tsx          # Profile avatar component
   │  │  ├─ blog-card.tsx       # Card for blog posts
   │  │  ├─ Button.tsx          # Reusable button component
   │  │  ├─ CertificationItem.tsx # Single certification item
   │  │  ├─ Certifications.tsx  # Certifications section
   │  │  ├─ Footer.tsx          # Site footer
   │  │  ├─ Header.tsx          # Site header
   │  │  ├─ ThemeToggle.tsx     # Dark/light mode toggle
   │  │  └─ ... other components
   │  ├─ content/               # Static content
   │  │  └─ content.json        # Basic information
   │  ├─ projects/              # Projects pages
   │  │  ├─ [slug]/             # Dynamic project pages
   │  │  └─ page.tsx            # Projects listing page
   │  ├─ studio/                # Embedded Sanity Studio
   │  │  └─ [[...tool]]/        # Catch-all route for Studio
   │  ├─ globals.css            # Global styles
   │  ├─ layout.tsx             # Root layout
   │  └─ page.tsx               # Home page
   ├─ public/                   # Static files
   │  ├─ avatar.png             # Profile avatar
   │  ├─ cv.pdf                 # Your resume/CV
   │  ├─ portrait.jpg           # Profile portrait
   │  └─ ... other assets
   ├─ sanity/                   # Sanity configuration
   │  ├─ lib/                   # Sanity utility functions
   │  │  ├─ client.ts           # Sanity client setup
   │  │  └─ image.ts            # Image handling utilities
   │  ├─ schemaTypes/           # Sanity schema definitions
   │  │  ├─ blog.ts             # Blog schema
   │  │  ├─ certification.ts    # Certification schema
   │  │  ├─ experience.ts       # Experience schema
   │  │  ├─ project.ts          # Project schema
   │  │  └─ index.ts            # Schema exports
   │  └─ ... other Sanity files
   ├─ utils/                    # Utility functions
   │  ├─ cn.ts                  # Class name utility
   │  ├─ formatDate.js          # Date formatting
   │  └─ sanity-queries.ts      # Sanity query helpers
   ├─ .env.local                # Environment variables
   ├─ next.config.ts            # Next.js configuration
   ├─ package.json              # Project dependencies
   ├─ tailwind.config.js        # Tailwind CSS configuration
   └─ ... other config files
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Shadi Al Milhem - [almilhemshadi@gmail.com](mailto:almilhemshadi@gmail.com)

Project Link: [https://github.com/yourusername/modern-portfolio](https://github.com/yourusername/modern-portfolio)

---

Made with ❤️ by [Shadi Al Milhem](https://github.com/shadi_m02)
