# S3 Labs Email Signature Setup Guide

## Available Signatures

| File | Theme | Best For |
|------|-------|----------|
| `email-signature.html` | Light | Standard professional emails |
| `email-signature-dark.html` | Dark (Solarpunk) | On-brand dark theme |

## Quick Setup

### Step 1: Host Your Logo

The signature needs a publicly accessible logo URL. Choose one method:

**Option A: Use your website**
```
Upload: public/brand/logos/png/s3-logo-mark.png
URL: https://s3labs.io/brand/logos/png/s3-logo-mark.png
```

**Option B: Google Drive**
1. Upload `s3-logo-mark.png` to Google Drive
2. Right-click → Share → Anyone with the link can view
3. Copy the link and convert it:
   - Original: `https://drive.google.com/file/d/FILE_ID/view`
   - Use: `https://drive.google.com/uc?export=view&id=FILE_ID`

**Option C: Imgur**
1. Go to [imgur.com](https://imgur.com)
2. Upload the PNG
3. Copy the direct image link (ends in `.png`)

### Step 2: Customize Your Details

Open the HTML file and replace:

| Placeholder | Your Info |
|-------------|-----------|
| `Your Name` | Your full name |
| `Your Title` | Your job title |
| `your.email@s3labs.io` | Your email address |
| `+1 (555) 123-4567` | Your phone number |
| `https://your-domain.com/brand/...` | Your hosted logo URL |

### Step 3: Add to Gmail

1. **Open the HTML file in a browser**
   - Double-click the file, or
   - Drag into Chrome/Safari/Firefox

2. **Select and copy the signature**
   - Click inside the signature area
   - Press `Cmd+A` (Mac) or `Ctrl+A` (Windows) to select all
   - Press `Cmd+C` (Mac) or `Ctrl+C` (Windows) to copy

3. **Open Gmail Settings**
   - Click the gear icon ⚙️ in Gmail
   - Click "See all settings"
   - Stay on the "General" tab
   - Scroll down to "Signature"

4. **Create new signature**
   - Click "+ Create new"
   - Name it (e.g., "S3 Labs")
   - Click in the signature editor
   - Press `Cmd+V` (Mac) or `Ctrl+V` (Windows) to paste

5. **Set defaults (optional)**
   - Under "Signature defaults", choose your new signature
   - For new emails and/or replies

6. **Save**
   - Scroll to bottom and click "Save Changes"

## Design System Colors Reference

| Color | Hex | Usage |
|-------|-----|-------|
| Bio-Green | `#7ed957` | Primary accent, email links |
| Glow Cyan | `#5ffbf1` | Website link |
| Bio-Gold | `#d4a574` | Divider accent |
| Void | `#0d100b` | Dark background |
| Forest Deep | `#141912` | Elevated dark surfaces |
| Cream | `#f5f1e8` | Primary text (dark mode) |
| Moss | `#6a7858` | Secondary/muted text |
| Forest Dark | `#1a1f16` | Primary text (light mode) |

## Typography

The signature uses **Outfit** font with web-safe fallbacks:

```
font-family: 'Outfit', 'Helvetica Neue', Helvetica, Arial, sans-serif;
```

- **Name**: 18px, weight 600
- **Title**: 13px, weight 400
- **Contact**: 13px

## Troubleshooting

### Logo not displaying?
- Ensure the image URL is publicly accessible
- Try opening the URL directly in an incognito browser window
- Gmail may cache images; wait a few minutes or test with a new email

### Fonts look different?
- Gmail may not load Google Fonts for all recipients
- The fallback fonts (Helvetica Neue, Arial) maintain a similar look
- Consider this acceptable; the colors and layout carry the brand

### Signature looks broken?
- Make sure you copied the entire table element
- Try copying from the browser view, not the HTML source
- Some email extensions may interfere; try disabling temporarily

### Dark signature has white background in recipient's client?
- Some email clients force light backgrounds
- The light theme (`email-signature.html`) is more universally compatible
- Consider using light theme for external emails

## Logo Assets

Available in `/public/brand/logos/png/`:

| File | Use Case |
|------|----------|
| `s3-logo-mark.png` | Standard (60x48) |
| `s3-logo-mark@2x.png` | Retina displays |
| `s3-logo-full.png` | Full wordmark if preferred |
