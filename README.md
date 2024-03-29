<a href="https://github.com/airbnb/javascript">
    <img alt="code style: airbnb" src="https://badgen.net/badge/eslint/airbnb/ff5a5f?icon=airbnb"></a>
<a href="https://github.com/prettier/prettier">
    <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"></a>
<a href="https://www.typescriptlang.org/">
    <img alt="type: typescript" src="https://img.shields.io/npm/types/typescript.svg"></a>
<a href="https://github.com/carbonaut/pwa-boilerplate/actions?query=workflow%3Aintegration/">
    <img alt="ci: github action" src="https://github.com/carbonaut/pwa-boilerplate/workflows/integration/badge.svg"></a>
<a href="https://storybook.js.org/">
    <img alt="storybook support" src="https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg"></a>
<a href="https://playwright.dev/">
    <img alt="e2e: playwright" src="https://badgen.net/badge/e2e/Playwright/green"></a>

This is a frontend boilerplate, based on `ionic start` and customized by [Carbonaut](http://carbonaut.io/). It uses [Ionic 7](https://ionicframework.com/), [Angular 16](http://angular.io/) and [Node.js](https://nodejs.org/en/) 18.14.\*.

## Basic Setup

This project does not require any global dependencies, but the following CLIs are used to generate project files:

```
npm i -g @ionic/cli @angular/cli
```

Before running locally, clone the repo and install its dependencies by running `npm install`.

Start the dev server on `localhost:4200`:

```
npm run start
```

Note: The command above will use the local CLI to run the project, this avoids having different versions running between in different machines.

## Project Structure

This project uses the _folder by feature_ structure. Please read [this article](https://medium.com/swlh/angular-organizing-features-and-modules-e582611a720e) to understand how it works.

### Core

Core is a combination of all _singletons_ and _services_ that can be used in the whole app.

Each service should be in their own folder together with their test file.

- Each service should be global and not tied to a specific feature;
- Each service should be in its own folder inside the `core/services` folder;
- Guards should be inside its own folder inside the `core/guards` folder;
- Interceptors should be inside its own folder inside `core/interceptors` folder;
- Core services should be provided in `app.module.ts`.

By default, this project implements the following core features:

- `ApiInterceptor`: API interceptor to handle HTTP errors and HTTP request headers;
- `CustomTranslationsLoaderService`: custom loader for loading translations;
- `GlobalErrorHandlerService`: global error handler service;
- `ExampleCoreService`: generic example service.
- `LoggerService`: skeleton wrapper to hold all log related logic (errors, warnings, info. etc.);
- `ToastService`: wrapper to hold all toast related logic. By default it implements [ion-toast from Ionic](https://ionicframework.com/docs/api/toast);
- `TranslationsService`: wrapper to hold all translation related logic. By default it implements [@ngx-translate/core](https://github.com/ngx-translate/core).

### Modules

Each _feature_ is a folder within the `src/app/modules` folder.

- Each _feature_ should have its own `*.module.ts` and `*-routing.module.ts`, created at `modules/{feature-name}/*.module.ts`;
- State manager files (store and query) and feature related service should be created in `modules/{feature-name}/state/`.

#### Feature Specific Presentational Components

- Should be created in `modules/feature/components/{component-name}/*.component.*`;
- Should be declared in the `modules/{feature-name}/*.module.ts`;
- Should **not** import any service;
- Should use [ChangeDetection.OnPush](https://netbasal.com/a-comprehensive-guide-to-angular-onpush-change-detection-strategy-5bac493074a4)

#### Feature Specific Smart Components (Controllers)

- Should be created in `modules/{feature-name}/pages/{page-name}/*.page.*`;
- Should have its own module. This is automatically generated by `@ionic/cli`;
- Should use Presentational Components to build the layout.

### Shared

All Presentational components, overlays and templates that are used in more than one _feature_ should be added to the `shared` folder.

- Components should be created in `shared/components/{component-name}/{component-name}.component.*`;
- Utilities should be created in `shared/utilities/{utility-name}/{utility-name}.utility.*`;
- Components, utilities, pipes, directives should all be added to `declarations` and `exports` in the `shared.module.ts`
- Features should import the `shared.module.ts` if they require any of the shared components.

## Creating Modules and Components

We recommend using the `@angular/cli` and `@ionic/cli` for generating project files.

### Create a New Module With Router

```
ng g module modules/{module-name} --routing
```

Remember to import the feature module to the `app-routing.module.ts`.

### Creates a Presentational Component

```
ng g c modules/{module-name}/components/{component-name}
```

Remember to add the component on the `declarations` array in the feature `.module.ts`.

### Create a Smart Component (Controller)

```
ionic g page modules/{module-name}/pages/{page-name}
```

This will automatically create a module for each page and import it on the feature module

## State Manager

We use [elf](https://ngneat.github.io/elf/docs/store) as a library to manage our states in a reactive way.

To create a new store, run the command below

```
npx @ngneat/elf-cli repo
```

You can also see the example store on `modules/example-feature/state/examples.{repository, service}.ts`

- It is recommended to use localStorage to save the state through [elf's persist state](https://ngneat.github.io/elf/docs/features/persist-state).

## Linter

This project uses ESLint with Typescript support. Note that Angular [does not](https://github.com/angular/angular-cli/issues/13732) support ESLint on their CLI yet.

The linter settings is opinionated and uses [Airbnb Javascript Style Guide](https://github.com/airbnb/javascript) as a base. There are a few considerations:

- For .ts, .js and .scss files, the project uses Prettier for formatting;
- For .html files, the project uses Beautify;
- To be sure that the above rules will work on your workspace, use [VSCode](https://code.visualstudio.com/) and install the following extensions: [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), [Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify), [Prettier](https://github.com/prettier/prettier-vscode);
- If you find any rule that is conflicting with Angular and Typescript, please update the `.eslintrc.js` file and open a PR for this fix.

You can manually trigger linter (with automated fixing):

```
npm run lint:fix
```

## Theme

### BEM and Reusable Styles

Use the [BEM](http://getbem.com/introduction/) naming convention for class namings and structure.

All global _SCSS_ files are under the `theme` folders. These are classes that can and should be reused through the entire project. Note that all components css's are kept within the theme folder in order to make the _framework_ reusable on other projects and not tie visuals to Angular code.

All classes should use the following convention:

```
.<namespace>-<component><modifier>
```

#### Namespaces

Namespaces can be either:

- [_c_ for component classes]: these classes will be used for general components such as buttons (_.c-button_), links (_.c-link_), sections (_.c-section_), etc. It should contain all styles needed to make the element work out of the box without the need of additional styling;
- [_u_ for utility classes]: these classes will contain utility classes that can be used sparingly to avoid writing css for common tasks. They'll contain utilities for display (_.u-display-flex_, _.u-display-inline_, etc), margin (_.u-margin-top_, ._-u-margin-bottom_, etc), padding, visibility, alignment, fonts, etc;
- [_l_ for layout classes]: these classes will be used for layouts such as grids (_.l-grid_), containers (_.l-container_), etc;
- [_e_ for custom component classes]: these classes should be used inside Angular component's css to style specific components that will not be reused. Ideally, you should be able to use utility classes to perfom most basic customizations without needing to write a custom component class.

#### Modifiers

Modifiers can be either:

- `--state`: to indicate a different state for a component (eg. `.c-button--active`)
- `subcomponent`: to indicate subcomponents (eg. `.c-hero__title`)

As we build the different pages, it's important to reuse those classes as much as possible to avoid conflicting css and reduce the amount of time needed to manage different yet similar components.

You should need to create a very specific component or style something slightly different, you should [not] modify the css on the _theme_ folder [nor] modify a class within that element's specific style. You should create a custom component class (the ones starting with `e`) modifying only the specific properties you need and apply it in conjunction with the regular _framework_ class. Eg.:

```
<button class="c-button c-button--large e-hero-button">
    Test
</button>
```

#### Folder Structure

Within them [theme] folder, there'll be all _.scss_ files related to the _framework_. The folder structure below represent how they look and where the different classes should go. Two items worth mentioning are:

- [spacing.scss]: this file will include all spacing variables. To keep the design coherent and spaced proportionally, you should avoid using specific values for margin, padding, width, height and others. Use these variables to space elements proportionally based on units, so items will be spaced based on a half, single, double and quad units;
- [variables.scss]: you must not add any colors directly on your _.scss_ files. All colors must be defined within this file using sass variables and used across the application.

Folder structure is as follows:

```
    .
    ├── ...
    ├── theme
    │   ├── components                   # Should contain all components styles
    │   │   ├── button.scss              # All styles related to a button, its states and subcomponents
    │   │   └── ...
    │   ├── base.scss                    # General theme definitions (fonts, reset, body, html, etc.)
    │   ├── layout.scss                  # Layout classes
    │   ├── utilities.scss               # Utilities classes
    │   ├── spacing.scss                 # Spacing varibles
    │   └── variables.scss               # Color and font variables
    └── ...
```

#### Theme Example

Here's an example of how this structure is going to look like on code:

```
<div class="c-card">
    <h3 class="c-card__title c-card__title--small">
        Hello World
    </h3>
    <button class="c-button c-button--large c-card__button u-margin-top-double">
        Submit
    </button>
</div>
```

## Storybook

Each presentational component should have stories documenting inputs, outputs, css variables and every variant.

The component story is expected to be in a file called `component-name.stories.ts` on it's folder. Check
`modules/example-feature/components/presentation/presentation.stories.ts` for a detailed example.

To build components with dependency for other components, services or modules, please check the
[storybook documentation](https://www.learnstorybook.com/intro-to-storybook/angular/en/composite-component/).

Note that the component preview has a 16px padding on all sites for a better view.

### Live Storybook Instance

`npm run storybook`

### Static Storybook

`npm run build-storybook`

Note that if the project name `app` is changed on `angular.json`, Storybook commands inside architect must be changed as well.

`"browserTarget": "{project-name}:build",`

## Tests

The test suite for this project uses the default testing libraries that Angular uses (Jasmine and Karma). The only exception is that we use [Playwright](https://playwright.dev/) for E2E tests.

In order to run the E2E tests, first you need to install the browsers used by Playwright with the command:

```
npm run e2e:install
```

Then, to run the tests:
```
npm run e2e
```

New tests should be included in the `e2e` folder.