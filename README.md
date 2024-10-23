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

From this point, you can view the available resumes by going to `http://localhost:4321/`.

You will be prompted with a page that has a link to the example resumes roller, as well as any custom resumes you have added, if any. If you would like to see how to add your own, see below.

## Adding a resume

If you want to add a resume, you can do so by following these steps:

1. Create a file in `src/resumes` with the name of your resume being something like `firstName-lastName.tsx` (this will make the slug `firstName-lastName`)
2. From your resume file, export a `default` value with a `ResumeData` type (from `src/data/resume-data.ts`).
3. Once you have done this, a link to your resume should appear in the list of resumes on the home page. You can either click that link, or go to the address `http://localhost:4321/resumes/[slug]` to view your resume. Just replace `[slug]` with the slug of your resume.

## Printing a resume

Once you are ready to print the resume you have selected (or made), just press Ctrl-P on your keyboard. Any formatting not specifically present for the resume will be stripped away in the print window, and you can safely print the resume! Either as an actual print-out or as a PDF.
