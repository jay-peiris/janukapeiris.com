# Januka Peiris - Portfolio Website

<div align="center">

  <h3>A modern, interactive 3D portfolio website built with React, Three.js, and TailwindCSS</h3>

  <p>
    <a href="https://www.janukapeiris.com">View Live Demo</a>
  </p>
</div>

<br />

## 🌟 Features

- **3D Interactive Elements** - Built with Three.js and React Three Fiber
- **Modern UI/UX** - Clean, responsive design with TailwindCSS
- **Smooth Animations** - Powered by Framer Motion
- **Multiple Sections**:
  - Hero section with 3D elements
  - About & Overview
  - Key Achievements
  - Work Experience timeline
  - Projects showcase
  - Tech Stack visualization
  - Leadership competencies
  - Expertise areas
  - Contact form
- **Fully Customizable** - Easy to modify content, colors, and sections

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Email**: EmailJS
- **Icons**: Tabler Icons

## 📁 Project Structure

```
janukapeiris.com/
├── public/
│   ├── desktop_pc/          # 3D model assets
│   ├── planet/              # 3D model assets
│   └── favicon.svg
├── src/
│   ├── assets/              # Images and icons
│   │   ├── company/         # Company logos
│   │   └── tech/            # Technology icons
│   ├── components/          # React components
│   │   ├── canvas/          # Three.js 3D components
│   │   └── ui/              # UI components
│   ├── constants/           # Data and configuration
│   ├── hoc/                 # Higher-order components
│   ├── utils/               # Utility functions
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── package.json
├── vite.config.js
└── tailwind.config.cjs
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/janukapeiris/janukapeiris.com.git
   cd janukapeiris.com
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Building for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization Guide

### Updating Content

Most content is stored in `src/constants/index.js`. You can update:

- **Personal Information**: Edit the `experiences`, `projects`, `achievements` arrays
- **Tech Stack**: Modify `techCategories` and `technologies` arrays
- **Navigation Links**: Update the `navLinks` array

### Changing Colors

Edit `tailwind.config.cjs` to customize the color scheme. The portfolio uses a custom color palette defined in the Tailwind config.

### Adding/Removing Sections

1. Create or modify components in `src/components/`
2. Import and add them to `src/App.jsx` in the `HomePage` component
3. Add navigation links in `src/constants/index.js` if needed

### 3D Models

3D models are located in `public/desktop_pc/` and `public/planet/`. You can replace these with your own GLTF models.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Live Demo

Visit the live website at: **[www.janukapeiris.com](https://www.janukapeiris.com)**

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this repository and customize it for your own portfolio!

If you'd like to contribute improvements:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

Januka Peiris - [www.janukapeiris.com](https://www.janukapeiris.com)

Project Link: [https://github.com/janukapeiris/janukapeiris.com](https://github.com/janukapeiris/janukapeiris.com)

## 🙏 Acknowledgments

- [Three.js](https://threejs.org/) - 3D graphics library
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) - React renderer for Three.js
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [EmailJS](https://www.emailjs.com/) - Email service
- [Vite](https://vitejs.dev/) - Build tool

---

<p align="center">
  Made with ❤️ by Januka Peiris
</p>
