# Images Directory

## Adding Images to Your Platform

### For Public Images (accessible via URL)
Place images in this folder: `/public/images/`

**Usage in components:**
```jsx
<img src="/images/your-image.jpg" alt="Description" />
```

### For Asset Images (imported in code)
Place images in: `/src/assets/images/`

**Usage in components:**
```jsx
import heroImage from '../assets/images/hero-image.jpg';
<img src={heroImage} alt="Description" />
```

## Recommended Image Types

### For the About Page
- **Personal photo**: `about-creator.jpg` - Your photo for the personal story section
- **Enlightenment journey**: `journey-image.jpg` - Visual representation of your path
- **Wisdom tradition**: `wisdom-masters.jpg` - Image representing timeless wisdom

### For Articles
- **Article headers**: Individual images for each article category
- **Meditation/contemplation**: Images that support the bodhisattva path articles
- **Philosophical concepts**: Visual aids for complex topics

### For Home Page
- **Hero section**: `hero-background.jpg` - Main visual for the landing page
- **Features**: Icons or images for the key features section

## Image Guidelines

### Optimization
- **Format**: Use WebP for best compression, JPG for photos, PNG for graphics with transparency
- **Size**: Optimize for web (under 500KB for most images)
- **Dimensions**: 
  - Hero images: 1920x1080px or 1600x900px
  - Article images: 800x600px or 1200x800px
  - Profile images: 400x400px (square)

### Naming Convention
- Use descriptive, lowercase names with hyphens
- Examples: `about-personal-photo.jpg`, `bodhisattva-path-header.jpg`, `hero-wisdom-background.jpg`

## Next Steps

1. **Copy your images** from desktop to these folders
2. **Update components** to use the new images
3. **Test locally** to ensure images display correctly
4. **Deploy** to see changes live

## Current Components Ready for Images

- `/src/pages/About.js` - Personal story section
- `/src/pages/Home.js` - Hero section and features
- `/src/pages/Articles.js` - Category headers
- Individual article pages - Header images

Would you like help implementing specific images in any of these components?