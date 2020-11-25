# nuxt-slim

**NOTICE:** This is only and only and experimental demo. Please do not use it for production.

Although with nuxt3 it is possible to have only one `app.vue` without `pages/` and using `vue-router`,
this is an experimental with slimmed down build.

- `vue-router` [mocked](./nuxt-slim/vue-router.mock.js) (28 KB / 9.6 KB gzip)
- `vue-meta` disabled (15 KB / 5KB gzip)
- Extra features disabled:
  - meta
  - layouts
  - middleware
  - transitions
  - deprecations
  - validate
  - clientPrefetch

(implementation: [this module](./nuxt-slim/index.js))

## Result

Normal build:
 - Parsed size: 215 KB
 - Gzip size: 72 KB

Slim build:
 - Parsed size: 155 KB
 - Gzip size: 52 KB

