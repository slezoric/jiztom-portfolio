# Jiztom's Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, showcasing research, projects, and professional experience in AI and Digital Agriculture.

## Project info

**URL**: https://lovable.dev/projects/c527b580-741e-4f90-bcb6-d5ca5b374071

## Features

- 🎨 Modern, responsive design with smooth animations
- 📱 Mobile-first approach
- 🌓 Semantic color system for easy theming
- 📝 Contact form integration with FormOwl
- 🎯 SEO optimized
- ⚡ Fast performance with Vite
- 🎨 Shadcn UI components
- 📊 Interactive project showcases
- 📄 Publications and research display
- 🎓 Education and experience timelines

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design tokens
- **UI Components**: Shadcn UI
- **Routing**: React Router v6
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Animations**: Tailwind CSS animations

## Local Development

### Prerequisites

- Node.js 18+ and npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Setup

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Step 3: Install dependencies
npm install

# Step 4: Start the development server
npm run dev
```

The application will be available at `http://localhost:8080`

## Configuration

All portfolio content can be easily customized by editing the configuration file:

**`src/config/portfolio-config.ts`**

This file contains:
- Personal information (name, email, social links)
- About section content
- Skills and languages
- Work experience
- Projects
- Publications
- Education
- Testimonials
- Hobbies
- Navigation links
- Color schemes and gradients

Simply update the values in this file to customize your portfolio content.

## Deployment Options

### Option 1: Deploy with Lovable (Easiest)

1. Open [Lovable](https://lovable.dev/projects/c527b580-741e-4f90-bcb6-d5ca5b374071)
2. Click on Share → Publish
3. Your site will be live at `*.lovable.app`

### Option 2: Deploy to Cloudflare Pages (Recommended for Custom Domains)

#### Prerequisites
- A Cloudflare account (free tier is sufficient)
- GitHub repository connected to your project

#### Deployment Steps

1. **Push your code to GitHub**
   ```sh
   git push origin main
   ```

2. **Connect to Cloudflare Pages**
   - Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to **Workers & Pages** → **Pages**
   - Click **Create a project** → **Connect to Git**
   - Select your GitHub repository
   - Authorize Cloudflare to access your repository

3. **Configure Build Settings**
   ```
   Project name:        jiztom-portfolio (or your choice)
   Production branch:   main
   Build command:       npm run build
   Build output:        dist
   ```

4. **Environment Variables** (if needed)
   - Click **Add environment variable**
   - Add any necessary environment variables for your forms or APIs

5. **Deploy**
   - Click **Save and Deploy**
   - Your site will be built and deployed automatically
   - Cloudflare will provide a `*.pages.dev` URL

#### Automatic Deployments

- Every push to your `main` branch will trigger a new deployment
- Pull requests will generate preview deployments
- Deployment typically takes 1-2 minutes

#### Custom Domain Setup (Optional)

1. In your Cloudflare Pages project, go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain (e.g., `jiztom.com`)
4. Follow Cloudflare's DNS configuration instructions
5. SSL certificate will be automatically provisioned

#### Build Configuration Details

The project uses Vite as the build tool. The build process:
- Optimizes all assets (JS, CSS, images)
- Generates a production-ready `dist` folder
- Automatically handles code splitting and lazy loading
- Minifies code for optimal performance

**Build output structure:**
```
dist/
├── assets/        # Compiled JS, CSS, and images
├── index.html     # Entry point
└── ...           # Other static assets
```

### Option 3: Other Hosting Platforms

The built `dist` folder can be deployed to any static hosting service:

**Netlify**
```sh
npm run build
# Drag and drop the dist folder to Netlify
```

**Vercel**
```sh
npm run build
vercel --prod
```

**GitHub Pages**
```sh
npm run build
# Use GitHub Actions or manual deployment
```

## How to Edit This Project

### Use Lovable (AI-Powered)

Visit the [Lovable Project](https://lovable.dev/projects/c527b580-741e-4f90-bcb6-d5ca5b374071) and start prompting. Changes made via Lovable will be committed automatically to this repo.

### Use Your Preferred IDE

Clone the repo and push changes. Changes will be reflected in Lovable automatically.

### Edit Directly in GitHub

- Navigate to the desired file(s)
- Click the "Edit" button (pencil icon)
- Make your changes and commit

### Use GitHub Codespaces

- Click on "Code" button → "Codespaces" tab
- Click "New codespace"
- Edit files directly and commit changes

## Contact Form Setup

The contact form uses [FormOwl](https://formowl.dev) to handle form submissions. Emails are sent to: `jiztom@gmail.com`

To change the recipient email:
1. Edit `src/components/Contact.tsx`
2. Update the hidden input field: `<input type="hidden" name="_to" value="your-email@example.com" />`

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components (shadcn)
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form
│   ├── Education.tsx   # Education timeline
│   ├── Experience.tsx  # Work experience
│   ├── Hero.tsx        # Hero section
│   ├── Hobbies.tsx     # Hobbies section
│   ├── Navbar.tsx      # Navigation
│   ├── Projects.tsx    # Projects showcase
│   ├── Publications.tsx # Research publications
│   ├── Skills.tsx      # Skills display
│   └── Testimonials.tsx # Testimonials
├── config/             # Configuration files
│   └── portfolio-config.ts  # Main content configuration
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
│   └── Index.tsx       # Main landing page
├── index.css           # Global styles and design tokens
└── main.tsx            # Application entry point
```

## Design System

The project uses a semantic color system defined in `src/index.css` and `tailwind.config.ts`. All colors use HSL values for easy theming:

- `--primary`: Main brand color
- `--secondary`: Secondary brand color  
- `--accent`: Accent color
- `--background`: Background color
- `--foreground`: Text color
- And more semantic tokens...

To customize the theme, edit the CSS variables in `src/index.css`.

## Scripts

```sh
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for personal portfolio use.

## Contact

**Jiztom Kavalakkatt Francis**
- Email: jiztom@iastate.edu
- LinkedIn: [linkedin.com/in/jiztom](https://linkedin.com/in/jiztom)
- GitHub: [github.com/jiztom](https://github.com/jiztom)

---

Built with ❤️ using [Lovable](https://lovable.dev)