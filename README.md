# remove-data-cy.macro

> Babel macro for removing data-cy attributes from JSX Elements
> Usable with CRA versions >= 2.0

This package is highly experimental, intended for use in my own projects.
Use with caution. In it's current stage it can only remove data-cy attributes which are strings.
Anything else, such as dynamic data-cy values(a function for example) will probably cause an error.

## Install

Using npm:

```sh
npm install --save-dev remove-data-cy.macro
```

or using yarn:

```sh
yarn add remove-data-cy.macro --dev
```

## Usage

```sh
import rcy from "remove-data-cy.macro";
<div {...rcy`data-cy='welcome-message'`>Hello!</div>
```

Results in

```sh
Production environment:
<div>Hello!</div>

Every other environment:
<div data-cy='welcome-message'>Hello!</div>
```

Production environemtn is determined by 
```sh
process.env.NODE_ENV == "production" ||
process.env.REACT_APP_CUSTOM_ENV == "prod" ||
process.env.REACT_APP_CUSTOM_ENV == "production"
````

The values exist in a .env file at the root of your project(where your package.json is).

CRA automatically sets NODE_ENV to *'production'*, *'development'* or *'test'* for respectively **yarn build**, **yarn start** and **yarn test**