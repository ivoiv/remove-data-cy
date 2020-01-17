# remove-data-cy.macro

> Babel macro for removing data-cy attributes from JSX Elements
> Usable with CRA versions >= 2.0

This package is highly experimental, intended for use in my own projects.
Use with caution.

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
<div data-cy='welcome-message'>Hello!</div>
```

Results in

```sh
Production:
<div>Hello!</div>

Every other:
<div data-cy='welcome-message'>Hello!</div>
```
