# next-chain
invoke `next` callback function and form a execution chain

## Motivation

passing `next` as callback as a mean of flow control is very usefule pattern used by many libraries, such as [koa](https://www.npmjs.com/package/koa). It looks like:

```javascript
app.use(function loginRequired (ctx, next) {
    if (notAuthenticated) {
        // next will not be executed if not authenticated
        ctx.body = 'login required'
        return
    }
    await next()
})
```

And I made this library to implement this pattern

## Installation

```bash
$ npm i next-chain
```

## Usage

### esm way
```javascript
import nextChain from 'next-chain'
```

### commonjs way
```javascript
const nextChain = require('next-chain')
```

## Example

```javascript
nextChain({ foo: 1 })(
  (o, next) => {
    // if o.foo is odd, invoke next, otherwise stops here
    if (o.foo & 1) {
      next()
    }
  },
  o => ++o.foo
).then(it => console.log(it.foo)) // 2
```

check `test.js` for more details

## API

### nextChain(...args)

### parameters

* args - arguments passed to next callbacks

### return

a function that accepts an array of functions, which will use `args` plus a
`next` callback as arguments, this function will execute these functions and return a promise




## Development

```bash
$ git clone https://github.com/xiechao06/next-chain.git
$ cd next-chain
$ npm ci
$ npm run build
$ npm run test
```
