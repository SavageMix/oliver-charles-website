# Oliver Charles Garden Design & Build

A Next.js 16 static website for Oliver Charles Garden Design & Build.

## Stack

- **Framework**: Next.js 16.1.6 (Static Export)
- **Runtime**: React 19 + TypeScript
- **Styling**: Tailwind CSS 3.4
- **Server**: Express.js (API routes for contact form & reviews)
- **Deployment**: Render (Web Service)

## Structure

- `app/` - Next.js App Router (pages & components)
- `public/images/` - Static images
- `dist/` - Build output (static files)
- `server.js` - Express server with API endpoints

## Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## API Endpoints

- `GET /api/reviews` - Fetches Google Reviews
- `POST /api/contact` - Contact form submission (SendGrid)

## Environment Variables

Required in `.env`:
- `GOOGLE_PLACES_API_KEY`
- `GOOGLE_PLACE_ID`
- `SENDGRID_API_KEY`
