# XLN Advisors - Theme Switching Guide

## Two Design Versions Available

### 1. **Editorial/Magazine Style** (Bold, Energetic)
- Electric pink, cyan, yellow pop colors
- Heavy 4px black borders
- Comic book-style shadows
- Skewed text effects
- Uppercase bold typography
- High-energy, modern, editorial aesthetic

### 2. **Elegant Navy/Gold** (Sophisticated, Refined)
- Navy blue, gold, silver-grey palette
- Soft rounded corners
- Subtle gradients and shadows
- Refined typography with letter spacing
- Elegant animations and transitions
- Museum-quality whitespace

## How to Switch Themes

### To activate EDITORIAL/MAGAZINE theme:
1. Open `/src/styles/index.css`
2. Change line 3 to: `@import './theme-stylized.css';`
3. Open `/src/app/App.tsx` 
4. Ensure it imports the standard components (already default)

### To activate ELEGANT NAVY/GOLD theme:
1. Open `/src/styles/index.css`
2. Change line 3 to: `@import './theme-elegant.css';`
3. Rename `/src/app/App.tsx` to `/src/app/App-magazine.tsx`
4. Rename `/src/app/App-elegant.tsx` to `/src/app/App.tsx`

The elegant version uses special component variants (-elegant suffix) that have:
- Rounded corners and soft edges
- Gold gradient accents
- Refined hover states
- Smoother animations
- More sophisticated spacing

Both versions:
- Are fully responsive
- Have the same content structure
- Feature all four principals
- Include all seven sections
- Reflect inclusive, sophisticated design
