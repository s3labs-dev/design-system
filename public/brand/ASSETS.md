# S3 Labs Brand Assets

A comprehensive collection of brand assets for S3 Labs, following the Solarpunk design system.

## Directory Structure

```
brand/
├── logos/           # Logo variations
├── icons/           # Favicons and app icons
├── avatars/         # Profile pictures and avatars
├── banners/         # Social media and marketing banners
└── badges/          # Badges and labels
```

---

## Logos

### Primary Logos

| File | Description | Use Case |
|------|-------------|----------|
| `s3-logo-mark.svg` | Spectral Flow mark only | App icons, small spaces |
| `s3-logo-full.svg` | Mark + wordmark "s3·labs" | Primary brand representation |
| `s3-logo-wordmark.svg` | Wordmark only | When mark is displayed separately |

### Mono-Color Variants

| File | Color | Use Case |
|------|-------|----------|
| `s3-logo-mono-green.svg` | Bio-Green (#7ed957) | Favicons, monochrome contexts |
| `s3-logo-mono-cyan.svg` | Glow Cyan (#5ffbf1) | Alternative accent |
| `s3-logo-mono-gold.svg` | Bio-Gold (#d4a574) | Alternative accent |
| `s3-logo-mono-cream.svg` | Cream (#f5f1e8) | Dark backgrounds |
| `s3-logo-mono-void.svg` | Void (#0d100b) | Light backgrounds |

### Theme Variants

| File | Description |
|------|-------------|
| `s3-logo-full.svg` | Default (dark mode) |
| `s3-logo-full-light.svg` | Light mode variant |

---

## Icons

### Favicons

| File | Size | Use Case |
|------|------|----------|
| `favicon-16.svg` | 16x16 | Browser tab (small) |
| `favicon-32.svg` | 32x32 | Browser tab (standard) |
| `favicon-mono.svg` | 32x32 | Monochrome contexts |

### App Icons

| File | Size | Use Case |
|------|------|----------|
| `apple-touch-icon.svg` | 180x180 | iOS home screen |
| `icon-192.svg` | 192x192 | PWA icon (standard) |
| `icon-512.svg` | 512x512 | PWA icon (large), splash screens |

---

## Avatars

### Standard Avatars (400x400)

| File | Shape | Variant |
|------|-------|---------|
| `avatar-square.svg` | Square (40px radius) | Tri-color |
| `avatar-circle.svg` | Circle | Tri-color |
| `avatar-square-mono.svg` | Square | Mono-green |
| `avatar-circle-mono.svg` | Circle | Mono-green |

### Small Avatars (64x64)

| File | Shape | Use Case |
|------|-------|----------|
| `avatar-square-sm.svg` | Square | Comments, thumbnails |
| `avatar-circle-sm.svg` | Circle | Chat, profiles |

---

## Banners

### Social Media

| File | Dimensions | Platform |
|------|------------|----------|
| `og-image.svg` | 1200x630 | Open Graph (Facebook, LinkedIn posts) |
| `twitter-header.svg` | 1500x500 | Twitter/X header |
| `github-social.svg` | 1280x640 | GitHub repository social preview |
| `linkedin-banner.svg` | 1584x396 | LinkedIn company/profile banner |

### Other

| File | Dimensions | Use Case |
|------|------------|----------|
| `email-signature.svg` | 600x150 | Email signature blocks |

---

## Badges

| File | Color | Use Case |
|------|-------|----------|
| `badge-green.svg` | Bio-Green | Primary badge |
| `badge-cyan.svg` | Glow Cyan | Secondary badge |
| `badge-gold.svg` | Bio-Gold | Accent badge |
| `powered-by.svg` | Multi | Attribution badge |

---

## Brand Colors Reference

### Primary Palette

| Name | Hex | Usage |
|------|-----|-------|
| Bio-Green | `#7ed957` | Primary accent, CTAs |
| Glow Cyan | `#5ffbf1` | Secondary accent, links |
| Bio-Gold | `#d4a574` | Tertiary accent, warnings |

### Background Colors

| Name | Hex | Usage |
|------|-----|-------|
| Void | `#0d100b` | Primary dark background |
| Forest Base | `#242b1f` | Cards, panels |
| Cream | `#f5f1e8` | Light mode background |

### Text Colors

| Name | Hex | Usage |
|------|-----|-------|
| Cream | `#f5f1e8` | Primary text (dark mode) |
| Void | `#0d100b` | Primary text (light mode) |
| Moss | `#4a5942` | Muted/secondary text |

---

## Usage Guidelines

### Minimum Sizes

- **Digital:** 32px height minimum
- **Print:** 12mm height minimum
- **Clear space:** ~1/4 of mark height on all sides

### Logo Usage

1. **Tri-color mark** - Default, preferred version
2. **Mono-green** - Favicons, single-color contexts
3. **Mono-cream** - On very dark backgrounds
4. **Mono-void** - On light backgrounds

### Don'ts

- Don't rotate the logo
- Don't stretch or distort
- Don't add effects (drop shadows, outlines)
- Don't place on busy backgrounds
- Don't change the colors outside the defined palette

---

## File Formats

All assets are provided as SVG for:
- Infinite scalability
- Small file size
- Easy color customization via CSS
- Sharp rendering at any size

For raster formats (PNG, ICO), use a tool like `sharp` or export from a vector editor at the required resolution.
