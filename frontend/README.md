# NEOXIS TECH - Cinematic Freelancing Website

A visually stunning, cinematic, and high-trust freelancing studio website built with React, Framer Motion, and Tailwind CSS.

## 🎬 Features

- **Cinematic Animations**: Smooth Framer Motion animations throughout
- **Buttery Smooth Scrolling**: Lenis smooth scrolling implementation
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI/UX**: Award-worthy design with premium aesthetics
- **Interactive Components**: Hover effects, modals, and micro-interactions
- **Trust Building**: Professional founder profiles and testimonials
- **Portfolio Showcase**: Elegant project gallery with hover effects

## 🚀 Tech Stack

- **React 19** - Latest React with modern features
- **Vite** - Lightning fast build tool
- **Framer Motion** - Production-ready motion library
- **Lenis** - Smooth scrolling library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons

## 🎨 Design Language

- **Colors**: Charcoal Black/Deep Navy with Gold/Amber accents
- **Typography**: Poppins (body) + Playfair Display (headings)
- **Mood**: Premium, cinematic, calm confidence
- **Animations**: Smooth fade-ins, slides, and parallax effects

## 📱 Sections

1. **Hero Section** - Full-screen cinematic banner with animated CTAs
2. **Founders Section** - Trust-building profiles with hover effects
3. **Expertise Section** - Interactive service cards with modals
4. **Portfolio Showcase** - Masonry gallery with smooth animations
5. **Testimonials** - Client stories with trust indicators
6. **Contact Section** - Interactive form with location info
7. **Footer** - Elegant dark footer with social links

## 🛠️ Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 🎯 Customization

### Hero Background Options
The Hero section includes multiple background options in `src/utils/backgroundImages.js`:

**Tech & Digital:**
- `tech`: Digital/Technology theme (default)
- `abstract`: Abstract technology patterns  
- `circuit`: Circuit board designs

**Professional:**
- `workspace`: Modern office workspace
- `office`: Professional office environment

**Minimal & Clean:**
- `minimal`: Clean geometric design
- `geometric`: Abstract geometric patterns

**Urban & Modern:**
- `city`: Urban city lights
- `skyline`: City skyline views

**Creative & Artistic:**
- `creative`: Creative/artistic themes
- `artistic`: Abstract artistic designs

**Custom:**
- Add your own images in the `custom1`, `custom2` slots
- Set to `none` for pure gradient background

Simply change `selectedBackground = backgroundImages.tech` in `Hero.jsx` to your preferred option.

**Features:**
- Subtle parallax scrolling effect
- Smooth zoom-in animation on load
- Optimized image loading
- Mobile-responsive backgrounds

### Update Founder Information
Edit `src/components/Founders.jsx` to update:
- Names and roles
- Profile descriptions
- Avatar initials or images

### Modify Services
Update `src/components/Expertise.jsx` to:
- Add/remove service categories
- Customize service offerings in modals
- Update icons and descriptions

### Portfolio Projects
Edit `src/components/Portfolio.jsx` to:
- Add your actual project images
- Update project descriptions
- Modify project categories

### Contact Information
Update `src/components/Contact.jsx` with:
- Your actual contact details
- WhatsApp number
- Email address
- Location information

### Branding
- Update colors in Tailwind config
- Change fonts in `src/index.css`
- Modify logo/brand name in Navigation

## 🌟 Performance Features

- **Lazy Loading**: Images load as needed
- **Smooth Animations**: Optimized Framer Motion animations
- **Responsive Images**: Proper image sizing for all devices
- **SEO Optimized**: Meta tags and semantic HTML
- **Fast Loading**: Vite's optimized build process

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎨 Color Palette

```css
Primary: #0f172a (slate-900)
Secondary: #1e293b (slate-800)
Accent: #f59e0b (amber-500)
Highlight: #ea580c (orange-600)
Text: #ffffff (white)
Muted: #94a3b8 (slate-400)
```

## 📄 License

This project is created for demonstration purposes. Feel free to use and modify as needed.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

**Made with ❤️ in Pune, Maharashtra**