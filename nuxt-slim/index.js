const featuresToDisable = [
  'meta',
  'layouts',
  'middleware',
  'transitions',
  'deprecations',
  'validate',
  'clientPrefetch'
]

export default function () {
  const { nuxt } = this

  for (const feature of featuresToDisable) {
    nuxt.options.features[feature] = false
  }

  nuxt.options.build.extractCSS = true

  nuxt.options.alias['vue-router'] = require.resolve('./vue-router.mock.js')
}
