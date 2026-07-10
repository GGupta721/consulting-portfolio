# Gaurav Gupta — Consulting Portfolio

A fast, static one-page consulting site plus a contact page. No build step, no
frameworks, no external scripts or fonts — just HTML, CSS, and a little vanilla JS.
Drag the folder into Netlify and it's live.

## Files

```
index.html        Home: hero, services, why-me + credentials, experience timeline,
                  featured resource, skills, and the "book an appointment" band.
contact.html      Contact page: spam-protected form + booking card.
thanks.html       Shown after the form is submitted (noindex).
assets/css/styles.css   All styling. Colors live in the :root block at the top.
assets/js/main.js       Mobile menu, footer year, email reveal.
assets/favicon.svg      "GG" monogram favicon.
netlify.toml      Publish settings + security headers (CSP, etc.).
robots.txt / sitemap.xml   SEO.
```

## Editing content (no coding needed for most of it)

All copy is written directly in the HTML with `<!-- EDIT: ... -->` comments marking
the repeatable blocks:

- **Services** — in `index.html`, copy one `<article class="card">` block to add a service.
- **Credentials** — the `.cred` blocks under "Why me". Add `cred--pending` for in-progress items.
- **Experience** — each role is one `.tl-item` block. Reorder or reword freely.
- **Skills** — the `<span class="chip">` tags in the Skills section.
- **Colors** — change the values in `:root { ... }` at the top of `styles.css`.

## Before you go live — replace these placeholders

1. **Domain:** search-and-replace `REPLACE-WITH-YOUR-DOMAIN` in `index.html`,
   `contact.html`, `robots.txt`, and `sitemap.xml` with your real domain.
2. **Booking link:** in `contact.html`, find the "TO ENABLE BOOKING" comment and paste
   your Calendly / Cal.com URL. (If you add Calendly, also add its host to the
   `Content-Security-Policy` line in `netlify.toml`, or the widget will be blocked.)
3. **Featured resource:** the "6-Week SOC 2 Readiness Plan" is a marked placeholder.
   Add the real PDF and link it, or delete that `<section id="resources">` block.

## Deploy to Netlify

**Easiest (drag & drop):**
1. Go to https://app.netlify.com/drop
2. Drag this whole folder onto the page.
3. Done — you get a `*.netlify.app` URL. Add a custom domain under Site settings → Domain.

**Or connect the git repo:** New site → import from Git → pick the repo. Publish directory `.`,
no build command.

## The contact form

Uses **Netlify Forms** — zero backend. After your first deploy, Netlify auto-detects the
form named `contact`. Turn on notifications under **Site settings → Forms → Form
notifications** to get an email (send it to `gg301998@gmail.com`) whenever someone submits.

Spam protection: a honeypot field (`bot-field`) is already wired in. For heavier
protection you can enable Netlify's reCAPTCHA in the form settings, or add
`data-netlify-recaptcha="true"` (note: reCAPTCHA loads a Google script, so you'd need to
relax the CSP in `netlify.toml`).

## Privacy notes (why it's built this way)

- No phone number, address, rates, or immigration status on the site.
- Email is assembled in JS instead of sitting in the HTML, to reduce scraping.
- No third-party scripts, fonts, analytics, or cookies — nothing to track visitors.
- A strict Content-Security-Policy is set in `netlify.toml`.
- Want it private for now? Netlify supports site-wide **password protection**
  (Site settings → Access control → Visitor access) on paid plans.
