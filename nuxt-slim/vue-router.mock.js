export default function VueRouter(options = {}) {
  this.options = options
  this.route = createRoute()
}

function createRoute() {
  return {
    fullPath: '/',
    path: '/',
    matched: []
  }
}

VueRouter.prototype.push = function () {
  this.route = createRoute()
}

VueRouter.prototype.resolve = function () {
  return {
    route: createRoute()
  }
}

VueRouter.prototype.match = function () {
  return createRoute()
}

VueRouter.prototype.beforeEach = () => {}

VueRouter.prototype.afterEach = () => { }


VueRouter.install = function (Vue) {
  if (VueRouter.install.installed) { return }
  VueRouter.install.installed = true

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get() {  return this.$root.$options.router }
  })

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get() {return this.$router.route }
  })

  Vue.component('routerView', {
    functional: true,
    render(createElement, context) {
      return createElement('div', context.children)
    }
  })
}
