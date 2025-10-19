# CS 1.6 Soundboard 🎮

A beautiful and modern Counter-Strike 1.6 soundboard built with React, TypeScript, Tailwind CSS, and Framer Motion. Experience the classic radio commands from CS 1.6 with a sleek, professional interface.

![CS 1.6 Soundboard](https://img.shields.io/badge/React-18.3-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-blue?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.11-blue)

## ✨ Features

- 🎯 **Classic CS 1.6 Sounds** - All the iconic radio commands and event sounds
- 🎨 **Modern UI** - Beautiful dark theme with CS 1.6 aesthetic
- ⚡ **Smooth Animations** - Powered by Framer Motion for fluid interactions
- 📱 **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- 🎵 **Multiple Categories** - Organized into Radio Commands, Team Commands, Responses, and Events
- 🔊 **Audio Playback** - Custom audio player hook with visual feedback
- 💪 **Type-Safe** - Built with strict TypeScript for reliability
- 🎭 **Visual Feedback** - Animated buttons and playing indicators

## 🚀 Tech Stack

- **React 18.3** - Latest React with hooks
- **TypeScript 5.6** - Strict type checking
- **Vite 6.0** - Lightning-fast build tool
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Framer Motion 11.11** - Production-ready motion library
- **Lucide React** - Beautiful icon library

## 📦 Installation

1. **Clone the repository** (if applicable):

   ```bash
   git clone <your-repo-url>
   cd cs-soundboard
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:5173` (or the URL shown in terminal)

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
cs-soundboard/
├── public/
│   └── audio/           # CS 1.6 sound files (45+ WAV files)
├── src/
│   ├── components/
│   │   ├── common/      # Reusable UI components
│   │   │   ├── Header.tsx
│   │   │   ├── SoundButton.tsx
│   │   │   └── CategorySection.tsx
│   │   └── soundboard/  # Soundboard-specific components
│   │       └── Soundboard.tsx
│   ├── hooks/           # Custom React hooks
│   │   └── useAudioPlayer.ts
│   ├── types/           # TypeScript type definitions
│   │   └── index.ts
│   ├── constants/       # App constants and data
│   │   └── sounds.ts
│   ├── lib/             # Utility functions
│   │   └── utils.ts
│   ├── App.tsx          # Main App component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## 🎮 Features Breakdown

### Audio System

- Custom `useAudioPlayer` hook for managing audio playback
- Handles multiple sounds seamlessly
- Visual feedback during playback
- Error handling for missing audio files

### Components

- **Header** - Animated header with CS 1.6 branding
- **SoundButton** - Interactive button with play animations
- **CategorySection** - Organized sound categories with staggered animations
- **Soundboard** - Main component orchestrating the entire app

### Styling

- Dark theme inspired by CS 1.6 aesthetics
- Custom color palette with orange/amber primary colors
- Responsive grid layout
- Smooth hover and active states
- Animated borders and glowing effects

### Animations

- Fast, professional entrance animations (0.2-0.3s)
- Snappy button hover and press effects (150ms)
- Smooth pulse animation on playing sounds (no rotation)
- Subtle background ambient animations
- Optimized staggered list animations (0.03s delay)

## 🎨 Color Scheme

The app uses a dark theme inspired by Counter-Strike 1.6:

- **Background**: Deep slate grays (`slate-950`, `slate-900`)
- **Primary**: Orange/amber (`#ff8800`)
- **Borders**: Lighter slate (`slate-700`)
- **Text**: Light foreground with muted secondary text

## 🔧 Customization

### Adding New Sounds

1. Add your `.wav` file to `public/audio/`
2. Update `src/constants/sounds.ts`:

```typescript
{
  id: 'your-sound-id',
  name: 'Your Sound Name',
  file: '/audio/your-sound.wav',
  category: 'radio', // or 'commands', 'responses', 'events'
  label: 'Display Label'
}
```

### Changing Colors

Edit `src/index.css` to modify the CSS custom properties:

```css
:root {
  --primary: 28 100% 50%; /* HSL values */
  --background: 222.2 84% 4.9%;
  /* ... other colors */
}
```

## 📝 Code Standards

- **TypeScript strict mode** enabled
- **ESLint** configured for code quality
- **No `any` types** - fully typed codebase
- **Functional components** with hooks
- **Clear component structure** with single responsibility
- **Comprehensive comments** for complex logic

## 🚀 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

## 📄 License

See [LICENSE](LICENSE) file for details.

## 🙏 Credits

- Counter-Strike 1.6 © Valve Corporation
- Sound files from CS 1.6 game assets
- Built with modern web technologies

---

**Enjoy the nostalgia! 🎮**
