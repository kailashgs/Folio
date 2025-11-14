# Portfolio Website

A modern developer portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Showcasing projects, skills, and professional experience.

## Features

- **Homepage**: Hero section with headline, intro, and call-to-action buttons
- **Projects Page**: Featured projects including Troubleshooting Assistant Tool (30% impact), Scientific Calculator, and Email Template work
- **About Page**: Professional story, skills visualization, education, and certificates
- **Responsive Design**: Mobile-first approach with smooth animations
- **Dark Mode**: Automatic dark mode support
- **Modern UI**: Clean, professional design with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Homepage (/)
│   ├── projects/
│   │   └── page.tsx        # Projects page (/projects)
│   ├── about/
│   │   └── page.tsx        # About page (/about)
│   └── globals.css         # Global styles + Tailwind
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Hero.tsx            # Hero section component
│   ├── ProjectCard.tsx     # Project card component
│   ├── SkillsVisualization.tsx  # Skills section component
│   ├── CTAButtons.tsx      # Call-to-action buttons
│   └── Footer.tsx          # Footer component
└── public/                 # Static assets (images, etc.)
```

## Deployment to Vercel

The easiest way to deploy this Next.js portfolio is to use [Vercel](https://vercel.com):

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI globally:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment.

### Option 2: Deploy via GitHub

1. Push your code to a GitHub repository.

2. Import your repository to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and configure settings

3. Click "Deploy" - your site will be live in minutes!

### Option 3: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Either:
   - Connect your Git provider (GitHub, GitLab, Bitbucket) and select your repository
   - Or drag and drop your project folder
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

### Environment Variables

If you need to add environment variables (e.g., API keys), add them in the Vercel dashboard under:
- Project Settings → Environment Variables

### Custom Domain

1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Customization

### Update Content

- **Homepage**: Edit `app/page.tsx` to update hero section and intro
- **Projects**: Modify `app/projects/page.tsx` to add/update projects
- **About**: Update `app/about/page.tsx` for story, skills, education, and certificates
- **Skills**: Edit the skills array in `app/about/page.tsx`

### Add Profile Photo

1. Place your profile photo in the `public/` directory
2. Update the `imageSrc` prop in `app/page.tsx` Hero component

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Inline Tailwind classes in component files

## Build for Production

```bash
npm run build
# or
yarn build
```

Then start the production server:

```bash
npm start
# or
yarn start
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment Documentation](https://vercel.com/docs)

## License

This project is open source and available under the [MIT License](LICENSE).

