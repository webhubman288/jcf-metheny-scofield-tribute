# Joshua Cedar and Friends — Tribute Site

Live at: https://webhubman288.github.io/jcf-metheny-scofield-tribute/

## Turning on email signups

The signup form is built and working on the page, but it needs a place to send
emails to. The easiest free option is [Formspree](https://formspree.io):

1. Go to formspree.io and sign up for a free account (just an email address).
2. Click **New Form**, name it anything (e.g. "Gig Notify"), and copy the
   endpoint URL it gives you — it looks like `https://formspree.io/f/xxxxxxxx`.
3. Open `script.js` in this folder and paste that URL into the first line:
   ```js
   const FORM_ENDPOINT = "https://formspree.io/f/xxxxxxxx";
   ```
4. Save, then push the change:
   ```
   git add script.js
   git commit -m "Connect signup form"
   git push
   ```
5. GitHub Pages will redeploy automatically in about a minute.

Every signup will then land in your Formspree dashboard (and Formspree emails
you a copy of each new submission by default).

## Adding gig dates

Open `script.js` and add entries to the `GIGS` array near the top, e.g.:

```js
const GIGS = [
  { date: "Sep 12, 2026", venue: "Kuumbwa Jazz Center", city: "Santa Cruz, CA" },
];
```

Save, commit, and push the same way as above — the gig list on the page
updates automatically and the "new shows coming soon" placeholder disappears
once there's at least one gig.

## Making changes generally

This is a plain HTML/CSS/JS site (`index.html`, `style.css`, `script.js`) in
this folder. Edit the files, then run:

```
git add -A
git commit -m "describe your change"
git push
```

Pages will rebuild automatically each time you push to `main`.
