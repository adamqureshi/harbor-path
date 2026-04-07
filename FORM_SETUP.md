# Harbor Path form setup

## Recommended setup for now
Use **Formspree** for the first live version of `virtual.html`.

Why:
- easiest option for a static Vercel page
- email notifications without building a backend
- simple HTML form action
- easy to replace later with HubSpot or a custom CRM

## How to connect the form
1. Create a form in Formspree.
2. Copy the form endpoint. It will look like:
   `https://formspree.io/f/xxxxx`
3. Open `virtual.html`.
4. Replace `FORM_ENDPOINT_HERE` in the form `action` with your real Formspree ID.
5. In Formspree settings, set your redirect to:
   `https://YOUR-DOMAIN/thank-you.html`
6. Restrict submissions to your domain in Formspree after testing.

## Important note
This first inquiry form should stay **light**.
Do not ask families to upload records, insurance ID numbers, full date of birth, or detailed clinical history on this public page.

## If you later need healthcare-grade intake
Move to a HIPAA-oriented setup such as:
- Jotform HIPAA
- HubSpot with the right HIPAA / sensitive-data setup
- your own secure intake workflow

## Current fields included
- caregiver name
- email
- phone
- borough / county / town
- child age range
- support need
- payment preference
- best time to reach
- timeline
- notes
