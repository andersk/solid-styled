# rollup-plugin-solid-styled

> Rollup plugin for [`solid-styled`](https://github.com/lxsmnsyc/solid-styled)

[![NPM](https://img.shields.io/npm/v/rollup-plugin-solid-styled.svg)](https://www.npmjs.com/package/rollup-plugin-solid-styled) [![JavaScript Style Guide](https://badgen.net/badge/code%20style/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)

## Install

```bash
npm install --D rollup-plugin-solid-styled
```

```bash
yarn add -D rollup-plugin-solid-styled
```

```bash
pnpm add -D rollup-plugin-solid-styled
```

## Usage

```js
import solidStyled from 'rollup-plugin-solid-styled';

///...
solidStyled({
  verbose: true, // defaults to false
  prefix: 'my-prefix', // optional
  filter: {
    include: 'src/**/*.{ts,js,tsx,jsx}',
    exclude: 'node_modules/**/*.{ts,js,tsx,jsx}',
  },
})
```

> **Note**
> When you are using a SolidJS Rollup plugin, make sure that solid-styled runs first.

## Config options

```js
{
  // Toggle verbose scope names based
  // on the owning component's name,
  // useful for debugging
  // Default: false
  "verbose": true,

  // Allows prefixing scope names
  // useful for package publishing
  // Default: undefined ('')
  "prefix": "example",
}
```

## Sponsors

![Sponsors](https://github.com/lxsmnsyc/sponsors/blob/main/sponsors.svg?raw=true)

## License

MIT © [lxsmnsyc](https://github.com/lxsmnsyc)
