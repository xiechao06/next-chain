import nextChain from './index'
import test from 'tape'

test('default', async function (t) {
  let d = { a: 0 }
  await nextChain(d)(
    (d, next) => { ++d.a; next() },
    d => ++d.a
  )
  t.equal(d.a, 2)
  await nextChain(d)(
    async (d, next) => {
      ++d.a; await next()
    },
    d => new Promise(function (resolve) {
      setTimeout(function () {
        ++d.a
        resolve()
      }, 1000)
    })
  )
  t.equal(d.a, 4)
  t.end()
})
