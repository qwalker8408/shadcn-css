## shadcn/css

An alternative approach using shadcn/ui with css modules, *no* tailwindcss. For the love of css.

## unopinionated starter template

- next.js with app router
- typescript
- shadcn components using css modules (first class citizen for next.js app router)

## Getting Started with shadcn/css components

- all the components are found in the shadcn folder under the src folder
- next-themes wraps the root layout and uses css variables. See styles/theme.css to update to your own theme colors
- next-themes handles light/dark mode. See src/shadcn/theme-toggle and place that button anywhere to handle toggling
- animations for the components can be found in src/styles/animations.css

In case you want to copy to an existing project, here are the packages required, you can just copy this into your "dependencies" object within the package.json. Additional 39 packages required in your project.

`
"@hookform/resolvers": "^3.3.4",
"@radix-ui/react-accordion": "^1.1.2",
"@radix-ui/react-alert-dialog": "^1.0.5",
"@radix-ui/react-aspect-ratio": "^1.0.3",
"@radix-ui/react-avatar": "^1.0.4",
"@radix-ui/react-checkbox": "^1.0.4",
"@radix-ui/react-collapsible": "^1.0.3",
"@radix-ui/react-context-menu": "^2.1.5",
"@radix-ui/react-dialog": "^1.0.5",
"@radix-ui/react-dropdown-menu": "^2.0.6",
"@radix-ui/react-hover-card": "^1.0.7",
"@radix-ui/react-icons": "^1.3.0",
"@radix-ui/react-label": "^2.0.2",
"@radix-ui/react-menubar": "^1.0.4",
"@radix-ui/react-navigation-menu": "^1.1.4",
"@radix-ui/react-popover": "^1.0.7",
"@radix-ui/react-progress": "^1.0.3",
"@radix-ui/react-radio-group": "^1.1.3",
"@radix-ui/react-scroll-area": "^1.0.5",
"@radix-ui/react-select": "^2.0.0",
"@radix-ui/react-separator": "^1.0.3",
"@radix-ui/react-slider": "^1.1.2",
"@radix-ui/react-slot": "^1.0.2",
"@radix-ui/react-switch": "^1.0.3",
"@radix-ui/react-tabs": "^1.0.4",
"@radix-ui/react-toggle": "^1.0.3",
"@radix-ui/react-toggle-group": "^1.0.4",
"@radix-ui/react-tooltip": "^1.0.7",
"cmdk": "^1.0.0",
"date-fns": "^3.6.0",
"embla-carousel-react": "^8.0.2",
"input-otp": "^1.2.4",
"lucide-react": "^0.367.0",
"next-themes": "^0.3.0",
"react-day-picker": "^8.10.0",
"react-hook-form": "^7.51.3",
"react-resizable-panels": "^2.0.16",
"sonner": "^1.4.41",
"vaul": "^0.9.0",
"yup": "^1.3.3",
"class-variance-authority": "^0.7.0"
`

## Getting Started with next.js

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
