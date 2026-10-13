# Real Estate Square — React + Vite + Tailwind CSS

Premium redesign of realestatesquare.in (UI/UX only; all content is from the existing website).

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build -> dist/
npm run lint
```

## Structure
```
public/            favicon
src/
  main.jsx         entry (BrowserRouter)
  App.jsx          layout + routes
  index.css        Tailwind v4 import + theme tokens (colors, fonts) + .btn/.field helpers
  App.css          custom keyframes (hero animation)
  data/site.js     ALL content: company info, services, projects, offices, images
  components/      Header, Hero (slider), SearchForm, Footer, Reveal, PageBanner, CtaBand, Icons ...
  pages/           Home, About, Projects, WhyUs, Contact
  hooks/           usePageMeta (title + description per page)
```

## Routes
`/` · `/about-us` · `/projects` · `/why-us` · `/contact`

## Notes
- Images are loaded from the original site via `IMG_BASE` in `src/data/site.js`.
  To self-host: copy them into `public/images/` and change `IMG_BASE` to `/images/`.
- Hero search has no listing database (the original site has none); it opens a pre-filled enquiry on /contact.
- Contact form sends via WhatsApp (8800006689) or email (info@realestatesquare.in); no backend needed.
- For static hosting add an SPA fallback (all routes -> index.html).
