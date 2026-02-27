# 🌐 Raka Rendra Fayanto — Portfolio

Personal portfolio website built with React, TypeScript, and TailwindCSS.

🔗 **Live:** [ums-l200224246.github.io](https://ums-l200224246.github.io)

## ✨ Features

- ⚡ **Typing Effect** — Animated role cycling on hero section
- 🎨 **Dark/Light Mode** — Theme toggle with localStorage persistence
- 📊 **Tech Stack** — Skill visualization with gradient icons
- 🎓 **Education Timeline** — Animated academic history
- 🔗 **GitHub Integration** — Live repository fetch with caching
- 📝 **Blog** — Article system with Indonesian content
- 📬 **Contact Form** — Mailto-based contact form
- 🔍 **SEO Ready** — Meta tags, Open Graph, Google Fonts
- 📱 **Responsive** — Mobile-first design

## 🛠️ Tech Stack

| Tech | Usage |
|------|-------|
| React 18 | UI Framework |
| TypeScript | Type Safety |
| Vite | Build Tool |
| TailwindCSS | Styling |
| React Router | SPA Navigation |
| Lucide React | Icons |
| GitHub Pages | Hosting |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 📁 Project Structure

```
src/
├── components/    # Reusable UI components
│   ├── Introduction.tsx   # Hero section with typing effect
│   ├── Skills.tsx         # Tech stack grid
│   ├── Education.tsx      # Education timeline
│   ├── Projects.tsx       # Project cards
│   ├── LatestPosts.tsx    # Blog preview
│   ├── Navbar.tsx         # Navigation with scroll blur
│   ├── Footer.tsx         # Site footer
│   └── Layout.tsx         # Page layout wrapper
├── pages/         # Route pages
│   ├── Home.tsx
│   ├── Projects.tsx
│   ├── Blog.tsx
│   ├── BlogPost.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
├── data/          # Static data
│   └── posts.ts   # Blog post content
├── hooks/         # Custom React hooks
│   └── useGitHubRepos.ts
├── contexts/      # React contexts
│   └── ThemeContext.tsx
├── routes/        # Router configuration
├── styles/        # CSS files
└── types/         # TypeScript interfaces
```

## 📝 Customization

Search for `TODO` comments in the codebase to find sections that need personalization:

```bash
# Find all TODO items
grep -r "TODO" src/
```

Key files to customize:
- `src/components/Introduction.tsx` — Bio, roles, social links
- `src/components/Skills.tsx` — Tech stack
- `src/components/Education.tsx` — Academic history
- `src/pages/Contact.tsx` — Email, location
- `src/data/posts.ts` — Blog content

## 📄 License

MIT © Raka Rendra Fayanto