# CCPL Construction ERP - React + Vite + Tailwind CSS

This project is a **React + Vite + Tailwind CSS** conversion of the original HTML/CSS login page. The UI has been preserved exactly as it was in the original design.

## 🚀 What Was Converted

### Original Stack:
- Plain HTML
- Vanilla CSS
- JavaScript

### New Stack:
- ⚛️ **React** - Component-based UI
- ⚡ **Vite** - Fast build tool and dev server
- 🎨 **Tailwind CSS** - Utility-first CSS framework

## 📁 Project Structure

```
react-erp/
├── src/
│   ├── components/
│   │   └── Login.jsx          # Login component (converted from index.html)
│   ├── App.jsx                # Main app component
│   ├── index.css              # Tailwind + custom styles (converted from login.css + main.css)
│   └── main.jsx               # Entry point
├── index.html                 # HTML template with Font Awesome CDN
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
└── package.json               # Dependencies
```

## 🎯 Features Preserved

✅ **Exact same UI/UX** - All visual elements match the original design  
✅ **Gradient background** - Purple gradient login page background  
✅ **Login form** - Username and password inputs with validation  
✅ **Demo account buttons** - Three demo login buttons (Super Admin, Admin, Site Engineer)  
✅ **Font Awesome icons** - All icons preserved  
✅ **Responsive design** - Mobile-friendly layout  
✅ **Animations** - Slide-up animation on page load  
✅ **Hover effects** - All button hover states preserved  

## 🛠️ Installation & Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

The app will be available at: **http://localhost:5173**

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

## 📝 Key Changes from Original

### HTML → React Components
- `index.html` → `Login.jsx` component
- Form elements now use React state management
- Event handlers converted to React onClick/onChange

### CSS → Tailwind CSS
- CSS variables converted to Tailwind theme configuration
- Custom classes preserved using `@layer components`
- Utility classes used where appropriate
- All original styles maintained

### JavaScript → React Hooks
- Form handling uses `useState` hook
- Demo login buttons use React event handlers
- Console logging preserved for debugging

## 🎨 Styling Approach

The project uses a **hybrid approach**:
- **Tailwind utilities** for layout and spacing
- **Custom CSS classes** for complex components (login card, buttons, etc.)
- **CSS-in-JS** avoided to maintain familiarity with original CSS

## 🔧 Configuration

### Tailwind Config (`tailwind.config.js`)
- Custom colors matching original design
- Primary color: `#2563eb`
- Custom font family: Inter

### Vite Config
- Default React + Vite configuration
- Fast HMR (Hot Module Replacement)
- Optimized build output

## 📦 Dependencies

### Production
- `react` - UI library
- `react-dom` - React DOM renderer

### Development
- `vite` - Build tool
- `@vitejs/plugin-react` - React plugin for Vite
- `tailwindcss` - CSS framework
- `postcss` - CSS processor
- `autoprefixer` - CSS vendor prefixing

### External (CDN)
- Font Awesome 6.0.0 - Icons

## 🎯 Next Steps

You can now:
1. Add routing with React Router
2. Implement authentication logic
3. Create dashboard components
4. Add state management (Redux, Zustand, etc.)
5. Connect to backend API

## 📸 UI Comparison

The converted React app maintains **100% visual parity** with the original HTML/CSS version:
- Same gradient background
- Same card design with shadow
- Same form styling
- Same button styles and hover effects
- Same responsive behavior

## 🚀 Running the App

Simply run:
```bash
npm run dev
```

Then open your browser to **http://localhost:5173** to see the login page!

---

**Note**: The UI is identical to the original. All functionality has been preserved and enhanced with React's component-based architecture.

---

Maintained by MONARCH.

---

## Large files & Deployment

- **Git LFS:** This repository uses Git LFS for one large binary (`Git-2.53.0-64-bit.exe`). If you clone the repo, install Git LFS first and fetch LFS objects:

```bash
# Install Git LFS (one-time)
git lfs install

# Clone the repo (LFS files will be pulled automatically after clone)
git clone https://github.com/Subashav/monarch-Const.git

# If you cloned before installing LFS, run:
git lfs fetch --all
git lfs checkout
```

- **Why LFS?** Large binaries exceed GitHub's recommended size and bloat Git history. We migrated the big file to LFS so history is smaller and pushes are efficient.

- **Vercel deployment (recommended):** To host the frontend on Vercel:

1. Sign up at https://vercel.com and connect your GitHub account.
2. Import the repository `Subashav/monarch-Const` in Vercel (New Project → Import Git Repository).
3. Use the following settings:
	- Framework Preset: `Vite` (or `Other`)
	- Build Command: `npm run build`
	- Output Directory: `dist`
4. Add any environment variables in the Vercel dashboard if your app needs them.
5. Deploy — Vercel will run the build and host the site on a generated URL.

Alternatively, you can deploy with the Vercel CLI:

```bash
npm i -g vercel
vercel login
vercel --prod
```

If you want, I can create a small `vercel.json` or GitHub Action to auto-deploy on push.
