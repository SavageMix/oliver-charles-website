# Oliver Charles Garden Design & Build

This workspace contains a static website for Oliver Charles Garden Design & Build. The files were copied from the provided `Kimi_Agent_Deployment_v2` package.

## Structure

- `index.html` - entry point
- `assets/` - compiled JS/CSS
- `images/` - project and hero images

## Viewing the site

You can open `index.html` directly in your browser, or run a simple static server:

```powershell
# From the workspace root
python -m http.server 8000
# or
npx serve .
```

Then visit `http://localhost:8000` to see the site.

## Notes

This is a pre-built React Single-Page Application; source code is not included here. To modify content, edit the HTML/CSS or rebuild the original React project.
