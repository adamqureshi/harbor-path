# Harbor Path clean repo

Files:
- `index.html`
- `styles.css`
- `script.js`
- `virtual.html`
- `thank-you.html`
- `FORM_SETUP.md`

## What changed
- fixed the broken `Virtual ABA Therapy` button in `index.html`
- replaced the strategy-style copy in `virtual.html` with consumer-facing copy
- made the form ready for Formspree with a placeholder endpoint
- added `thank-you.html` for post-submit confirmation

## Before you deploy
1. Replace the two Formspree placeholders already used in `index.html`.
2. Replace `FORM_ENDPOINT_HERE` in `virtual.html` with your Formspree form ID.
3. Set your Formspree redirect to `/thank-you.html`.
4. Test one live submission.

## Notes
This version keeps the public intake form light and avoids asking for highly sensitive information on the first page.
