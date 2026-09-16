# basoarfan.

Personal portfolio built with React, Tailwind CSS, React Router, React Icons, and Animate.css.

## Run locally

```bash
npm install
npm run dev
```

On PowerShell, use `npm.cmd` if script execution is restricted.

## Build and test

```bash
npm run build
npm test -- --watchAll=false --runInBand
```

## Projects

Edit `src/data/projects.js` to add or update projects. Four projects use images imported from `src/assets/project1.png` through `project4.png`. Clicking a card opens a responsive detail dialog inspired by `webtest.html`. All data is loaded locally, without a backend or API credentials.

Example entry:

```js
const projects = [
  {
    id: "my-project",
    title: "My Project",
    category: "Web Application",
    description: "A plain-text description of the project.",
    images: [{ url: "/images/my-project.png" }],
    link: "https://example.com",
    features: ["A feature of the project"],
    summary: ["A short project highlight"],
    technologies: ["React", "Tailwind CSS"],
  },
];

export default projects;
```

Import images from `src/assets/`, or put public images in `public/images/`. Only `id` and `title` are required; the other fields are optional. Projects without a link show a disabled link button.

## Styling

The color palette is defined in `tailwind.config.js`. Light/dark theme preference is saved in browser storage.
