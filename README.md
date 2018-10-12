# radial-label-placement

> Simplistic label placement in a radial chart

[![screen](https://raw.githubusercontent.com/nkint/radial-label-placement/master/screen.png)](http://nkint.github.io/radial-label-placement/)

[(demo)](https://nkint.github.io/radial-label-placement/)

<!-- iframe: https://nkint.github.io/radial-label-placement/ -->

## Description

You have to do a pie chart for your cool dashboard, huh?

And you need to position label with polar coordinates with right `text-align` and `text-baseline` css/canvas prop, huh?

This is a really dumb way.

It works for most of the cases.

Zero depencencies, blazing fast, typed with Typescript 3.0, dumb proof.

Even if the only thing you need is just

```js
{
  textAlign: 'center',
  textBaseline: 'middle'
}
```

## Install

```
npm install radial-label-placement
```

or

```
yarn add radial-label-placement
```

## Usage

```js
import radialLabelPlacement from 'radial-label-placement'

// ...
```

## API

### radialLabelPlacement(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.

## Note

AVA typescript test are currently broken because ts-node does not support es6 import yet:
https://github.com/TypeStrong/ts-node/issues/313
To run test change module resolution to `"commonjs"` in tsconfig

## License

MIT © [alberto](https://github.com/nkint)
