# Sahana S Sankanurmath Portfolio

Editable Next.js portfolio for Sahana S Sankanurmath, AI/ML Graduate in Bengaluru.

## Run locally

```powershell
npm install
npm run dev
```

Open `http://localhost:3000`.

## Where to edit

- Personal details and project content: `src/lib/content.ts`
- Profile image: add your file as `public/sahana.jpg`
- Resume link: update `resumeUrl` in `src/lib/content.ts`
- Main page sections: `src/app/page.tsx`
- Visual system: `src/app/globals.css`
- Header and mobile navigation: `src/components/site-header.tsx`
- Contact behavior: `src/components/contact-form.tsx`

## Contact form

Without configuration, the form opens the visitor's email client and drafts a message to `sankanurmathsahana@gmail.com`.

## Resume link

The hero/header buttons open the Google Drive file. The bottom-right **Download Resume** link uses Google Drive's download endpoint. Set the Drive file sharing to **Anyone with the link → Viewer** or downloads will fail with an access error.

For Formspree, copy `.env.example` to `.env.local` and add:

```env
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

## Production checks

```powershell
npm run build
npm start
```

The current build has been verified with `npm run build`.
