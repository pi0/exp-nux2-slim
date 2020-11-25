export default function VueRouter(options = {}) {
  this.options = options
  this.push()
}

VueRouter.prototype.createRoute = function() {
  return {
    fullPath: '/',
    path: '/',
    matched: [
      {
        path: '/',
        components: [this.options.routes[0].component],
        instances: []
      }
    ]
  }
}

VueRouter.prototype.push = function () {
  this.currentRoute = this.createRoute()
}

VueRouter.prototype.resolve = function () {
  return {
    route: this.createRoute()
  }
}

VueRouter.prototype.match = function () {
  return this.createRoute()
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
    get: function get() { return this.$router.currentRoute }
  })

  Vue.component('routerView', {
    functional: true,
    render(createElement, context) {
      return createElement(context.parent.$route.matched[0].components[0])
    }
  })
}
