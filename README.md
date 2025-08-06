# KGM Mobility Navbar Clone

A responsive navbar component built with Next.js 14, TypeScript, TailwindCSS, and Framer Motion, inspired by the KGM Mobility website.

## Features

- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Scroll Behavior**: Transparent background initially, solid background on scroll
- **Smooth Animations**: Powered by Framer Motion for fluid transitions
- **Hover Effects**: Underline animations for menu items
- **Mobile Menu**: Collapsible hamburger menu with slide animations
- **Modern Styling**: Clean, professional design with TailwindCSS
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Google Fonts** - Inter font family

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kgm-navbar
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main page with demo content
├── components/
│   ├── Layout.tsx          # Layout wrapper component
│   └── Navbar.tsx          # Main navbar component
├── styles/
│   └── globals.css         # Global styles and Tailwind directives
└── utils/
    └── scrollUtils.ts      # Scroll utility functions
```

## Navbar Features

### Desktop Features
- **Transparent to Solid**: Background changes from transparent to `#2c294e` on scroll
- **Menu Items**: MODELS, GLOBAL NETWORK, BRAND-NEWS, SUPPORT
- **Center Logo**: KGM logo with hover scale effect
- **Search**: SEARCH text with magnifying glass icon
- **Hover Animations**: Underline effect on menu items

### Mobile Features
- **Hamburger Menu**: Collapsible menu with smooth slide animation
- **Responsive Layout**: Optimized for mobile screens
- **Touch-Friendly**: Large touch targets for mobile interaction

### Scroll Behavior
- **Initial State**: Transparent background with white text
- **Scrolled State**: Solid `#2c294e` background with shadow
- **Smooth Transitions**: 0.3s ease-in-out transitions

## Customization

### Colors
The navbar uses a custom color defined in `tailwind.config.js`:
```javascript
colors: {
  'kgm-purple': '#2c294e',
}
```

### Fonts
The project uses Inter font from Google Fonts, configured in `globals.css`.

### Animations
Custom animations are defined in `tailwind.config.js`:
- `fade-in`: Fade in animation
- `slide-down`: Slide down animation

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- **Optimized Animations**: Using Framer Motion for 60fps animations
- **Debounced Scroll**: Efficient scroll event handling
- **Responsive Images**: Optimized for different screen sizes
- **Code Splitting**: Automatic code splitting with Next.js

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the ISC License. # KGM
