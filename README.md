# freshwaterprestige.com

Static site for Freshwater Prestige Economics. Plain HTML, one stylesheet (`css/style.css`), and a tiny script (`js/main.js`) that assembles the contact email address at runtime. There's no build step.

- `index.html`: the single page (Hero, Practice areas, Experience, Team, Contact)
- `404.html`: the not-found page (GitHub Pages serves it automatically). All asset paths are relative, so the site works both at https://rarons.github.io/freshwaterprestige/ and at the root of a custom domain.
- `images/`: team headshots (4:5, 320×400 or 260×325, JPEG and WebP), `contours.svg` (hero background), `og-image.png` (1200×630 social card)
- `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`: icons
- `robots.txt`, `sitemap.xml`, `.nojekyll`: hosting files

Preview locally with `python3 -m http.server` from this folder.

To publish on GitHub Pages, push this folder to a repository and enable Pages from the main branch root. Add a `CNAME` file containing `www.freshwaterprestige.com` only once DNS is ready to switch.
