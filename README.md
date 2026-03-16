# AJ Solutions React Site

Marketing website for AJ Solutions Mia, built with React, TypeScript, `styled-components`, Ant Design, and `react-i18next`.

The site is a single-page experience focused on home media installs and business/home networking services. It includes:

- A hero section and service content blocks driven by JSON content files
- A contact form that submits through EmailJS
- English and Spanish language support
- A promotional discount popup with localStorage-based cooldown
- A Docker + Nginx production build

## Tech stack

- React 18
- TypeScript
- `react-router-dom` v5
- `styled-components`
- Ant Design
- `react-i18next`
- EmailJS

## Getting started

Requirements:

- Node.js 18+ recommended
- npm

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Create a production build:

```bash
npm run build
```

Run tests:

```bash
npm test
```

## Project structure

```text
public/                  Static assets, icons, logos, and images
src/
  common/                Shared UI building blocks and hooks
  components/            Page sections like header, footer, content blocks, contact form
  content/               JSON-managed marketing copy
  locales/               Translation files
  pages/Home/            Main landing page composition
  router/                Route config and lazy-loaded routing
  styles/                Global styling
Dockerfile               Multi-stage production image
nginx.conf               SPA-friendly Nginx config
```

## Content and customization

Most homepage copy is managed in JSON files under [`/Users/andresrodriguez/Documents/AJSolutionsCode/react-ajsolutions/src/content`](/Users/andresrodriguez/Documents/AJSolutionsCode/react-ajsolutions/src/content).

- [`/Users/andresrodriguez/Documents/AJSolutionsCode/react-ajsolutions/src/content/MiddleBlockContent.json`](/Users/andresrodriguez/Documents/AJSolutionsCode/react-ajsolutions/src/content/MiddleBlockContent.json): hero copy
- [`/Users/andresrodriguez/Documents/AJSolutionsCode/react-ajsolutions/src/content/AboutContent.json`](/Users/andresrodriguez/Documents/AJSolutionsCode/react-ajsolutions/src/content/AboutContent.json): business IT services section
- [`/Users/andresrodriguez/Documents/AJSolutionsCode/react-ajsolutions/src/content/MissionContent.json`](/Users/andresrodriguez/Documents/AJSolutionsCode/react-ajsolutions/src/content/MissionContent.json): home media section
- [`/Users/andresrodriguez/Documents/AJSolutionsCode/react-ajsolutions/src/content/ProductContent.json`](/Users/andresrodriguez/Documents/AJSolutionsCode/react-ajsolutions/src/content/ProductContent.json): home network section
- [`/Users/andresrodriguez/Documents/AJSolutionsCode/react-ajsolutions/src/content/ContactContent.json`](/Users/andresrodriguez/Documents/AJSolutionsCode/react-ajsolutions/src/content/ContactContent.json): contact form heading and intro text

Translations live in:

- [`/Users/andresrodriguez/Documents/AJSolutionsCode/react-ajsolutions/src/locales/en/translation.json`](/Users/andresrodriguez/Documents/AJSolutionsCode/react-ajsolutions/src/locales/en/translation.json)
- [`/Users/andresrodriguez/Documents/AJSolutionsCode/react-ajsolutions/src/locales/es/translation.json`](/Users/andresrodriguez/Documents/AJSolutionsCode/react-ajsolutions/src/locales/es/translation.json)

The homepage is assembled in [`/Users/andresrodriguez/Documents/AJSolutionsCode/react-ajsolutions/src/pages/Home/index.tsx`](/Users/andresrodriguez/Documents/AJSolutionsCode/react-ajsolutions/src/pages/Home/index.tsx).

## Contact form

The contact form uses EmailJS in [`/Users/andresrodriguez/Documents/AJSolutionsCode/react-ajsolutions/src/common/utils/useForm.tsx`](/Users/andresrodriguez/Documents/AJSolutionsCode/react-ajsolutions/src/common/utils/useForm.tsx).

It currently initializes and sends with hardcoded values:

- Public key: `0LSTKvIpPtUPszRog`
- Service ID: `service_lz2iaf2`
- Template ID: `template_6s7f7ek`

If you move this project between environments or accounts, update those values before deploying. A future improvement would be moving them into environment variables.

## Promo popup

The discount popup is implemented in [`/Users/andresrodriguez/Documents/AJSolutionsCode/react-ajsolutions/src/common/PromoPopup/index.tsx`](/Users/andresrodriguez/Documents/AJSolutionsCode/react-ajsolutions/src/common/PromoPopup/index.tsx) and configured on the home page.

Current behavior:

- Shows shortly after page load
- Offers the `AJ10` discount code
- Scrolls visitors to the contact section when they click the CTA
- Uses `localStorage` to avoid re-showing until the cooldown expires

## Navigation and routing

Routes are defined in [`/Users/andresrodriguez/Documents/AJSolutionsCode/react-ajsolutions/src/router/config.ts`](/Users/andresrodriguez/Documents/AJSolutionsCode/react-ajsolutions/src/router/config.ts).

Current routes:

- `/`
- `/home`

The header navigation scrolls to in-page sections for:

- About
- Contact

## Footer and business links

The footer includes:

- Contact email: `A.jsolutionsmia@gmail.com`
- Service area: Miami-Dade, Broward County, and Palm Beach County
- WhatsApp link
- Instagram link
- Google review link
- English/Spanish language switcher

See [`/Users/andresrodriguez/Documents/AJSolutionsCode/react-ajsolutions/src/components/Footer/index.tsx`](/Users/andresrodriguez/Documents/AJSolutionsCode/react-ajsolutions/src/components/Footer/index.tsx).

## Docker deployment

Build the production image:

```bash
docker build -t ajsolutions-react .
```

Run the container:

```bash
docker run -p 443:443 ajsolutions-react
```

Notes:

- The Docker build compiles the React app and serves the output with Nginx.
- [`/Users/andresrodriguez/Documents/AJSolutionsCode/react-ajsolutions/nginx.conf`](/Users/andresrodriguez/Documents/AJSolutionsCode/react-ajsolutions/nginx.conf) is configured for single-page app routing via `try_files ... /index.html`.
- The current container listens on port `443` inside the container.

## Maintenance notes

- The active application entry point is [`/Users/andresrodriguez/Documents/AJSolutionsCode/react-ajsolutions/src/index.tsx`](/Users/andresrodriguez/Documents/AJSolutionsCode/react-ajsolutions/src/index.tsx).
- Package metadata in [`/Users/andresrodriguez/Documents/AJSolutionsCode/react-ajsolutions/package.json`](/Users/andresrodriguez/Documents/AJSolutionsCode/react-ajsolutions/package.json) still uses `"name": "my-app"`, which could be renamed if you want the package metadata to match the project.

## License

This repository includes an MIT [`/Users/andresrodriguez/Documents/AJSolutionsCode/react-ajsolutions/LICENSE`](/Users/andresrodriguez/Documents/AJSolutionsCode/react-ajsolutions/LICENSE) file.
