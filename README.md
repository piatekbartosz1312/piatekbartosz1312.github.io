# CryptoTracker (Demo) — Bootstrap Student Project

A **production-ready, responsive** demo website built with **Bootstrap 5** and **Font Awesome** (both via CDN).  
It’s designed to meet a typical front-end “build + deploy” assignment: multi-section layout, Bootstrap grid/components/utilities, custom styling, privacy/GDPR transparency, a custom 404 page, and basic SEO files.

> **Important:** All cryptocurrency “prices” shown are **fake demo values** for learning purposes.  
> This project does **not** fetch real market data and does **not** store personal data.

---

## Live Links (fill these in after deployment)

- **Public website URL:** `https://YOUR-SITE-URL/`
- **GitHub repository URL:** `https://github.com/YOUR-USERNAME/YOUR-REPO/`

---

## Features (what you can demo quickly)

- **Landing (Hero) section** with headline, subheadline, and primary CTA
- **Responsive content section** using Bootstrap grid + **Cards**
- **Advanced Bootstrap components**:
  - **Carousel** (Updates & tips)
  - **Accordion** (FAQ)
  - **Modal** (Sign-in demo)
- **Contact section** with **Bootstrap form controls** + client-side validation styling
- **Font Awesome icons** used consistently across navigation, sections, and footer
- **Privacy/GDPR page** stating no data collection/storage
- **Custom 404 page** styled with Bootstrap
- **sitemap.xml** and **robots.txt** included in the project root
- Lightweight JavaScript only (no frameworks)

---

## Tech Stack

- **Bootstrap 5.3** (CDN)
- **Font Awesome 6** (CDN)
- Vanilla **HTML / CSS / JavaScript**

---

## Project Structure

```text
bootstrap-crypto-tracker/
├─ index.html
├─ privacy.html
├─ 404.html
├─ sitemap.xml
├─ robots.txt
└─ assets/
   ├─ css/
   │  └─ styles.css
   └─ js/
      └─ main.js
```

---

## How to Run Locally

Because this is a static site, you can open `index.html` directly, but using a local server is better (relative paths, 404 testing, etc.).

### Option A — VS Code Live Server
1. Open the folder in VS Code
2. Install **Live Server**
3. Right-click `index.html` → **Open with Live Server**

### Option B — Python simple server
From the project root:
```bash
python -m http.server 8080
```
Then visit:
- `http://localhost:8080/`

---

## Deployment (recommended: GitHub Pages)

### GitHub Pages (quick steps)
1. Create a GitHub repo and push the project files to the repo root.
2. In GitHub: **Settings → Pages**
3. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: `main` (or `master`) and `/ (root)`
4. Save, wait for the URL to appear.

**After deployment, update these files:**
- `sitemap.xml`: replace `https://YOUR-DOMAIN/` with your real URL
- `robots.txt`: replace the sitemap URL with your real URL

### Netlify (alternative)
1. Drag-and-drop the project folder into Netlify **or** connect a Git repo
2. Build command: *(none)*
3. Publish directory: `/` (root)

---

## Verification Checklist (assignment-focused)

### Website structure
- ✅ **Landing page / hero** with headline, subheadline, CTA (`index.html`)
- ✅ **Content section** with responsive grid + cards + advanced component
- ✅ **Contact section** with Bootstrap form controls
- ✅ **Footer** with structured links

### Bootstrap requirements
- ✅ **Grid system:** `.container`, `.row`, `.col-*`
- ✅ **Components (2+):** Navbar, Cards, Modal, Carousel, Accordion
- ✅ **Utility classes (6+):** e.g. `py-5`, `mb-4`, `fw-bold`, `d-flex`, `gap-2`, `text-secondary`, `shadow-sm`, `rounded-4`, etc.
- ✅ **Responsive behavior:** mobile → tablet → desktop layout adapts properly

### Custom styling
- ✅ `assets/css/styles.css` includes **3+ custom/overridden styles**
  - Hero gradient background
  - Focus-visible outlines for accessibility
  - Hover polish for mini-stats (and helper classes)

### Font Awesome
- ✅ Included via CDN
- ✅ 5+ icons used meaningfully (navbar, hero, cards, buttons, footer)

### GDPR / Privacy
- ✅ `privacy.html` includes:
  - student project statement
  - no personal data collected/stored
  - form data not retained
  - transparency about CDN requests

### Custom 404
- ✅ `404.html` in project root with Bootstrap styling and link back home

### SEO files
- ✅ `sitemap.xml` in root (update domain after deploy)
- ✅ `robots.txt` in root referencing sitemap (update domain after deploy)

---

## Screenshots (submission requirement)

Take and include 3 screenshots after deploying:
1. **Mobile** (e.g., 375×667)
2. **Tablet** (e.g., 768×1024)
3. **Desktop** (e.g., 1440×900)

Suggested method:
- Use browser DevTools device toolbar for mobile/tablet
- Full-window screenshot for desktop

---

## Reflection (10 sentences) — template you can edit

1. In this project, I built a responsive website using Bootstrap’s grid, components, and utilities.  
2. I used a hero section to communicate the site’s purpose quickly for first-time visitors.  
3. The grid system helped me create a layout that adapts well across mobile, tablet, and desktop.  
4. Bootstrap components like the navbar, modal, carousel, and accordion improved usability and structure.  
5. Utility classes let me style spacing and typography consistently without excessive custom CSS.  
6. I added a custom `styles.css` file to apply a unique hero gradient and improve focus styles for accessibility.  
7. Font Awesome icons improved visual clarity and helped users scan the UI faster.  
8. I created a privacy page explaining that the site is a student project and does not store personal data.  
9. I also added a custom 404 page plus `sitemap.xml` and `robots.txt` to meet basic production standards.  
10. Deploying the site taught me how to verify asset paths, confirm public access, and validate that everything loads correctly.

---

## Notes / Maintenance

- The “prices” are randomized locally for demo purposes (`assets/js/main.js`).
- Forms are **client-only**: no backend, no storage, no email sending.
- If you add more pages, remember to update `sitemap.xml`.

---

## License

This project is provided for educational purposes. You may add an MIT license if your course requires it.
