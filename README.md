# 3D Portfolio Website

A modern, interactive portfolio website built with React, Three.js, and Tailwind CSS. This portfolio features 3D models, smooth animations, and a responsive design to showcase your work and skills.

![Portfolio Preview](src/assets/herobg.png)

## Features

- 🎨 Modern and responsive design
- 🌐 3D models and animations using Three.js
- 📱 Mobile-friendly interface
- 📧 Contact form with EmailJS integration
- 🎭 Smooth page transitions and animations
- 🎯 Interactive sections for projects, skills, and experience

## Tech Stack

- React.js
- Three.js
- Tailwind CSS
- Framer Motion
- EmailJS
- Vite

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Anushka8178/Portfolio-website.git
```

2. Navigate to the project directory
```bash
cd Portfolio-website
```

3. Install dependencies
```bash
npm install
# or
yarn install
```

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## Project Structure

```
Portfolio-website/
├── public/              # Static assets and 3D models
├── src/
│   ├── assets/         # Images and icons
│   │   ├── canvas/     # Three.js components
│   │   └── ...         # Other components
│   ├── styles/         # Global styles
│   └── utils/          # Utility functions
├── package.json
└── vite.config.js
```

## Customization

### Personal Information
Update your personal information in the respective component files:
- `src/components/Hero.jsx` - Main hero section
- `src/components/About.jsx` - About section
- `src/components/Experience.jsx` - Experience section
- `src/components/Works.jsx` - Projects section

### Contact Form
To set up the contact form:
1. Create an account on [EmailJS](https://www.emailjs.com/)
2. Update the following in `src/components/Contact.jsx`:
   - Service ID
   - Template ID
   - Public Key

## Deployment

The project can be deployed to any static hosting service. For example, to deploy to Vercel:

1. Install Vercel CLI
```bash
npm install -g vercel
```

2. Deploy
```bash
vercel
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Three.js](https://threejs.org/) for 3D graphics
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [EmailJS](https://www.emailjs.com/) for email functionality
