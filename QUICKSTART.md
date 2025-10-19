# 🚀 Quick Start Guide

## Getting Started in 3 Steps

### 1️⃣ Dependencies Already Installed ✅

The project dependencies are already installed, but if you need to reinstall them:

```bash
npm install
```

### 2️⃣ Start the Development Server

The server is currently running! If you need to restart it:

```bash
npm run dev
```

### 3️⃣ Open in Browser

Navigate to: **http://localhost:5173**

---

## 🎮 How to Use

1. **Click any sound button** to play a CS 1.6 radio command
2. **Buttons will animate** and glow while playing
3. **Organized by category**:
   - 📻 **Radio Commands** - Cover me, Need backup, etc.
   - 🎯 **Team Commands** - Go go go, Follow me, etc.
   - 💬 **Responses** - Roger, Affirmative, Negative
   - 🎪 **Events** - Enemy spotted, Bomb planted, Win sounds

---

## 📁 Project Structure

```
cs-soundboard/
├── public/
│   └── audio/        ← CS 1.6 sound files (45+ files)
├── src/
│   ├── components/   ← React components
│   ├── hooks/        ← Custom hooks (audio player)
│   ├── constants/    ← Sound definitions
│   └── types/        ← TypeScript types
```

---

## 🛠️ Available Commands

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start dev server (http://localhost:5173) |
| `npm run build`   | Build for production                     |
| `npm run preview` | Preview production build                 |
| `npm run lint`    | Check code quality                       |

---

## ✨ Features

- ✅ **24+ CS 1.6 Sounds** from radio commands to event sounds
- ✅ **Beautiful UI** with dark CS 1.6 theme
- ✅ **Smooth Animations** powered by Framer Motion
- ✅ **Responsive Design** works on all devices
- ✅ **Type-Safe** strict TypeScript
- ✅ **Modern Stack** React 18 + Vite + Tailwind

---

## 🎨 Customization

### Add a New Sound

1. **Add file** to `public/audio/your-sound.wav`
2. **Edit** `src/constants/sounds.ts`:
   ```typescript
   {
     id: 'my-sound',
     name: 'My Sound',
     file: '/audio/your-sound.wav',
     category: 'radio',
     label: 'Play My Sound'
   }
   ```
3. **Reload** the page - that's it!

---

## 🐛 Troubleshooting

### Port already in use?

```bash
# Kill process on port 5173
npx kill-port 5173
npm run dev
```

### Sounds not playing?

- Check browser console for errors
- Ensure audio files exist in `public/audio/`
- Check file paths in `src/constants/sounds.ts`

### Build errors?

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

---

## 🎯 Next Steps

- [ ] Try all the sounds
- [ ] Add your own custom sounds
- [ ] Customize the colors (see `src/index.css`)
- [ ] Build for production (`npm run build`)
- [ ] Deploy to Vercel/Netlify

---

**Enjoy your CS 1.6 Soundboard! 🎮**
