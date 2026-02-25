# ClawFriend Presentation App

A full-screen, presentation-style slide deck web app built with React and Tailwind CSS, optimized for live presentation and verbal narration.

## Features

- **Full-screen presentation mode** with smooth transitions
- **Video backgrounds** using HLS.js for all slides
- **Keyboard navigation**: Arrow keys, Spacebar, F for fullscreen
- **Auto-hiding controls** that appear on mouse movement
- **Liquid glass aesthetic** UI with backdrop blur effects
- **Responsive design** using clamp() for fonts and percentage-based spacing

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Usage

### Navigation

- **Arrow Right / Arrow Down / Spacebar**: Next slide
- **Arrow Left / Arrow Up**: Previous slide
- **F**: Toggle fullscreen
- **Escape**: Exit fullscreen

### Controls

- Controls automatically hide after 3 seconds of inactivity
- Move mouse to show controls
- Bottom navigation bar shows:
  - Slide counter (left)
  - Progress dots (center)
  - Navigation buttons (right)

## Slide Structure

1. **Cover Slide**: Introduction with title and subtitle
2. **Intro Slide**: Project description
3. **Competitor Slide**: Competitive landscape with competitor cards

## Design System

- **Font**: Plus Jakarta Sans (Google Fonts)
- **Theme**: Dark/black with white text
- **Responsive**: All sizes use `clamp()` for viewport-based scaling
- **Spacing**: Percentage-based for full responsiveness
- **UI Style**: Liquid glass aesthetic with:
  - Backdrop blur (24px) with saturation
  - Translucent white gradients
  - Semi-transparent borders
  - Subtle radial highlights

## Video Backgrounds

All slides use HLS video backgrounds via Mux streams. The VideoBackground component:
- Uses HLS.js for HLS support
- Falls back to native Safari HLS
- Auto-plays, loops, and is muted
- Full coverage with no overlays

## Adding New Slides

1. Create a new component in `src/components/slides/`
2. Import and use `VideoBackground` if needed
3. Import and use `Logo` for header
4. Add the component to the `slides` array in `App.jsx`

Example:

```jsx
import VideoBackground from '../VideoBackground'
import Logo from '../Logo'

export default function MyNewSlide() {
  return (
    <div className="relative w-full h-full">
      <VideoBackground src="YOUR_MUX_URL.m3u8" />
      <div className="relative z-10">
        {/* Your content */}
      </div>
    </div>
  )
}
```
