# Resume Renderer

This is a resume renderer built with Astro and React to demonstrate my skills in both frameworks.

If you were sent here by my resume, this is the source code used to render the resume.

I host the application locally using `npm run dev`, which will have the homepage contain a list to all the resumes available in the `src/resumes` directory.

The resumes are written in TypeScript, with some parts of it allowing React components.

## Running the application

If for some you want to use this yourself, you can do so by following these steps:

1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`
4. Create a file in `src/resumes` with the name of your resume being something like `firstName-lastName.tsx` (this will make the slug `firstName-lastName`)
5. From your resume file, export a `default` value with a `ResumeData` type (from `src/data/resume-data.ts`).
