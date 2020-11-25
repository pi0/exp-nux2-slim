# nuxt-slim

**NOTICE:** This is only and only and experimental demo. Please do not use it for production.

Although with nuxt3 it is possible to have only one `app.vue` without `pages/` and no `vue-router`,
this is an experimental test to try on nuxt2/vue2.

- `vue-router` [mocked](./nuxt-slim/vue-router.mock.js) (28 KB / 9.6 KB gzip)
- `vue-meta` disabled (15 KB / 5KB gzip)
- Extra features disabled:
  - layouts
  - middleware
  - ~~transitions~~ (there seems an internal bug with this)
  - deprecations
  - validate
  - clientPrefetch

(implementation: [this module](./nuxt-slim/index.js))

## Result

Normal build:
 - Parsed size: 215 KB
 - Gzip size: 72 KB

Slim build:
 - Parsed size: 158 KB
 - Gzip size: 53 KB

