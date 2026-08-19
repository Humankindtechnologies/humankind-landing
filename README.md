# HumanKind Technologies — Landing Page

Marketing landing page for **humankindtechnologies.com**, an AI-enabled multi-tenant HRIS.

## Files

```
HKTECHNOLOGIES/
├── index.html              Complete landing page (self-contained: inline CSS + JS)
├── assets/
│   ├── logo-black.png      Nav + footer (light backgrounds), favicon
│   ├── logo-white.png      Mockup title bars (cropped to the sphere mark)
│   └── logo-darkheader.png Spare variant
└── README.md
```

Assets are referenced by relative path, so serve or open the page **from inside this
folder** — the logos won't resolve if `index.html` is moved out on its own.

```bash
python -m http.server 8129 --directory HKTECHNOLOGIES
```

## Design language

Modelled on Apple's marketing pages: restraint, scale, whitespace, precision.

- **Typeface:** Calibri throughout (Candara → Segoe UI fallbacks), set large, bold, and
  tightly tracked for display copy.
- **Palette:** black, white, and blue only.
  - `#FFFFFF` white / `#F5F5F7` grey / `#000000` black bands
  - `#1D1D1F` text, `#6E6E73` secondary
  - `#0071E3` blue — CTAs, links, eyebrows, in-mockup accents
- **Buttons:** pill-shaped, blue filled; secondary CTAs are blue text links with a `›`.
- **Bands alternate** white → black → grey to give the page rhythm, with the two
  highest-value stories (AI, multi-signature documents) placed on black.
- No glow, no glass, no gradients-as-decoration, no particle effects.

### Product mockups

Every product visual is **redrawn from scratch in HTML/CSS**. No screenshot from the
handoff PDF is rendered on the page — those were reference only, for layout, field
names, and data shape.

Each window has a dark title bar, three dots, the cropped brand sphere, and the
`HUMANKIND` wordmark. **No tenant or company name appears anywhere** — sample data is
people's names and job functions only.

Mockups: Dashboard (hero) · AI navigate · AI survey summary · AI leave query ·
Recruitment pipeline · Time tracking (clock + schedule + PTO) · Multi-signature
document · Kudos feed · Roles & permissions · Reports.

## Page structure

1. **Hero** — headline, CTAs, full-width dashboard window
2. **AI-Enabled** (black) — "Ask. And it's done." + three AI mockups
3. **Modules** (grey) — the four-module grid
4. **Recruitment** — ATS pipeline, convert-to-employee
5. **Time Tracking** (grey) — clock in/out, weekly schedule, PTO balances
6. **Documents** (black) — multi-signature, the differentiator
7. **Kudos** — recognition feed
8. **Roles & Reports** (grey) — two-up cards
9. **Closing CTA** + footer

## Module status — keep this accurate

| Module | Status on page |
|---|---|
| Recruitment | **Available now** |
| Time Tracking | **Available now** |
| Onboarding & Offboarding | Coming soon |
| Performance Management | Coming soon |

Time Tracking covers scheduling, clock in / clock out, and paid time off tracking.
Recruitment is a full ATS — job postings, branded careers page, candidate pipeline,
and hired candidates converting into HRIS employee records.

**When a module ships, update both** the card in the `#modules` grid (swap
`mod-status soon` → `mod-status live`, remove the `dim` class) and any copy that says
"coming soon".

---

## ⚠️ Request a Demo — NOT WIRED

Both CTAs (header, closing section) point to:

```
mailto:hello@humankindtechnologies.com?subject=Demo Request
```

A small note under each CTA says so. **No booking flow exists yet.** Before launch,
pick one:

1. **Calendly / Cal.com embed** — fastest, handles scheduling and reminders
2. **Contact form** → email or CRM — more control, needs a backend or form service
3. **Keep mailto** — zero setup, highest drop-off

Then replace the `mailto:` in both places and delete the `.note` paragraphs.

---

## Open decisions (still unanswered)

1. **Demo CTA destination** — see above. Blocks launch.
2. **Contact email** — `hello@humankindtechnologies.com` is assumed. Confirm the real
   inbox before the CTA goes live.
3. **Hosting & domain** — is `humankindtechnologies.com` DNS ready to point at a deploy?
4. **Pricing** — the page shows none. Tiers, "contact us", or a separate page?
5. **Social / OG preview image** — no `og:image` set. Needed before the link is shared.
6. **Analytics** — nothing installed. Plausible / GA4 / none?

## Notes

- Respects `prefers-reduced-motion` — reveals and smooth scroll are disabled for users
  who ask for that.
- Fully responsive; the nav links collapse on mobile (**no hamburger menu yet** — worth
  adding if mobile traffic matters).
- No external requests — no CDN fonts, no third-party scripts. Everything is local.
