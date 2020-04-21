<a href="https://github.com/airbnb/javascript">
    <img alt="code style: airbnb" src="https://badgen.net/badge/eslint/airbnb/ff5a5f?icon=airbnb"></a>
<a href="https://github.com/prettier/prettier">
    <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"></a>
<a href="https://www.typescriptlang.org/">
    <img alt="type: typescript" src="https://img.shields.io/npm/types/typescript.svg"></a>

This is a PWA boilerplate, based of `ionic start` and customized by [Carbonaut](http://carbonaut.io/). It uses [Ionic 5](https://ionicframework.com/) and [Angular 8](http://angular.io/).

Please read the entire document before developing.

## Basic Setup

This project does not require any global dependencies, but you can install the following CLIs to improve your experience:

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

Core is a combination of all Singletons and Services that can be used in the whole app. eg.: AnalyticsService, ErrorHandler, ToastService...

Each service should be in their own folder together with their test file.

- Each service should be global and not tied to a specific feature;
- Each service should be in its own folder inside the `core` folder;
- Core services should be imported in `app.module.ts`;

### Modules

Each _feature_ is a folder within the `src/app/modules` folder.

- Each _feature_ should have its own `*.module.ts` and `*-routing.module.ts`, created at `modules/{feature-name}/*.module.ts`;
- Dumb components specific to the feature should be created in `modules/feature/components/{component-name.component}/`;
- Smart components related to the feature should be created in `modules/{feature-name}/pages/{page-name}/`;
- State manager files (store and query) and feature related service should be created in `modules/{feature-name}/state/`;

### Shared

All dumb components, overlays and templates that are used in more than one _feature_ should be added to the `shared` folder.

- Components should be created in `shared/components/{component-name}/*.component.ts` sub-folder;
- Utilities should be created in `shared/utilities/{utility-name}/*.utility.ts`;
- Each feature should import the `shared.module.ts` if the feature requires any of the shared components;

### Theme

Use the [BEM](http://getbem.com/introduction/) naming convention for class namings and structure.

All global _SCSS_ files are under the `theme` folders. These are classes that can and should be reused through the entire project.

TODO: Discuss how to organize it better;

## Creating modules and components

We recommend using the `@angular/cli` for generating project files.

### Create a new module with router

```
ng g module modules/{module-name} --routing
```

Remember to import the feature module to the `app-routing.module.ts`.

### Creates a new dumb component

```
ng g c modules/{module-name}/components/{component-name}
```

Remember to add the component on the `declarations` array in the feature `.module.ts`.

### Create a smart component

```
ng g c modules/{module-name}/pages/{page-name}
```

## Linter

This project uses ESLint with Typescript support. Note that Angular [does not](https://github.com/angular/angular-cli/issues/13732) support ESLint on their CLI yet.

The linter settings is opinionated and uses [Airbnb Javascript Style Guide](https://github.com/airbnb/javascript) as a base. There are a few considerations:

- For .ts, .js and .scss files, the project uses Prettier for formatting;
- For .html files, the project uses Beautify
- To be sure that the above rules will work on your workspace, use [VSCode](https://code.visualstudio.com/) and install the following extensions: [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), [Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify), [Prettier](https://github.com/prettier/prettier-vscode)
- If you find any rule that is conflicting with Angular and Typescript, please update the `.eslintrc.js` file and open a PR for this fix.

You can manually trigger linter (with automated fixing):

```
npm run lint
```

## State Manager

TODO: Write about Akita

## Storybook

TODO: Write about Storybook
