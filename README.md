# next-chain
invoke `next` callback function and form a chain

## Motivation

passing `next` as callback as a mean of flow control is very usefule pattern used by many libraries, such as [koa](https://www.npmjs.com/package/koa). It looks like:

```javascript
app.use(function loginRequired (args, next) {
    if (notAuthenticated) {
        // next will not be executed if not authenticated
        throw new Error('login required')
    }
    await next()
})
```

And I made this library to implement this pattern

## Usage

### esm way
```javascript
import nextChain from 'next-chain'
```

### commonjs way
```javascript
const nextChain = require('next-chain')
```
