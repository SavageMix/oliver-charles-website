# How to Add a New Project

## Step 1: Create Project Folder
Create a new folder in `public/images/projects/project-X/` (use next number, like project-10)

## Step 2: Add Your Photos
Put your project photos in that folder. Name them clearly:
- `project-name-location-1.jpg` (main hero image)
- `project-name-location-2.jpg` (detail shot)
- `project-name-location-3.jpg` (another angle)
- etc.

**Photo requirements:**
- JPG format
- At least 1200px wide
- Compress them first (use TinyJPG.com)

## Step 3: Copy This Template

### For Homepage (app/page.tsx)
Add this inside the `const projects = [` array:

```javascript
  {
    id: 6,  // Use next number
    title: 'Your Project Title',
    location: 'Town, Postcode',
    category: 'Porcelain Patio',  // or 'Composite Decking', 'Glass Balustrade', 'Full Landscaping'
    date: 'Month Year',
    size: 'XXm²',
    description: 'Brief description of the project. What was done, key features, etc.',
    image: '/images/projects/project-X/main-image-1.jpg',
    images: [
      '/images/projects/project-X/main-image-1.jpg',
      '/images/projects/project-X/detail-image-2.jpg',
      '/images/projects/project-X/angle-image-3.jpg'
    ],
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    testimonial: {
      quote: "Customer quote about how amazing the work was!",
      author: "Customer Name",
      location: "Town"
    }
  }
```

### For Projects Page (app/projects/page.tsx)
Add this inside the `const projects = [` array:

```javascript
  {
    id: 6,  // Use same number as above
    title: 'Your Project Title',
    location: 'Town, Postcode',
    category: 'Porcelain Patio',
    date: 'Month Year',
    size: 'XXm²',
    description: 'Same description as above.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    images: [
      '/images/projects/project-X/image-1.jpg',
      '/images/projects/project-X/image-2.jpg',
      '/images/projects/project-X/image-3.jpg'
    ],
    testimonial: {
      quote: "Customer quote here.",
      author: "Customer Name",
      location: "Town"
    }
  }
```

## Step 4: Add to Service Page (Optional)
If it's a specific service (e.g., decking project), also add it to:
- `app/services/composite-decking/page.tsx`
- `app/services/porcelain-patios/page.tsx`
etc.

Use the same format as the Projects page.

## Step 5: Build & Test
```bash
npm run build
```

If it builds successfully, push to GitHub!

---

## Example Real Entry

Look at `app/page.tsx` lines 48-100 for a real example with actual project data.

## Tips

1. **Keep descriptions under 200 characters** for the homepage cards
2. **Use real towns/postcodes** you worked in (helps local SEO)
3. **Get customer permission** before using their name/quote
4. **Use consistent photo naming** so you can find them later
5. **Compress images** before uploading (use TinyJPG.com)

## Need Help?

If you get stuck, send me:
1. The project photos (or tell me the folder name)
2. Project details (town, size, what was done)
3. Any customer testimonial

And I'll format it properly for you!
