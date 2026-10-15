# Hira Ansari — Portfolio

Next.js 14 (App Router) · Tailwind CSS · Framer Motion · Supabase · next-themes

## Run locally
```bash
npm install
cp .env.example .env.local   # then add your Supabase URL + anon key
npm run dev
```
Open http://localhost:3000

## Connect the contact form
1. Create a project at supabase.com.
2. SQL Editor → paste and run `supabase/schema.sql`.
3. Settings → API → copy the Project URL and `anon` key into `.env.local`.
4. Messages appear in Table Editor → `messages`.

## Make it yours
- Photo: put `hira.jpg` in `/public` and replace the placeholder block in `components/Hero.js` with `<Image src="/hira.jpg" fill alt="Hira Ansari" className="object-cover rounded-[2rem]" />`.
- Projects: edit the `projects` array in `components/Projects.js`.
- Email: edit it in `components/Contact.js`.

## Deploy
Push to GitHub, import into Vercel, add the two env vars, deploy.
