# PortfolioWebsite

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Deploying To Cloudflare Pages

This project is a client-side Angular SPA and does not use Angular SSR. Cloudflare Wrangler currently has a known Angular auto-config bug where it can assume SSR is enabled and then fail with:

```text
Cannot set properties of undefined (setting 'experimentalPlatform')
```

To avoid that path, deploy the static build output directly:

1. Build the app:

```bash
npm run build:pages
```

2. Deploy the static output directory:

```bash
npm run deploy:pages
```

If you are deploying through the Cloudflare Pages UI, use:

- Build command: `npm run build:pages`
- Build output directory: `dist/portfolio-website/browser`

This bypasses the broken SSR mutation logic in Wrangler auto-config for SPA-only Angular projects.
