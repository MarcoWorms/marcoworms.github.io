'use strict'

Vue.component('cityselector', idlescape.vues.city_selector)
Vue.component('inventory', idlescape.vues.inventory)
Vue.component('cityexplorer', idlescape.vues.city_explorer)

idlescape.root_vue = new Vue({
  el: '#root_vue',
  data: {
    selected_city: 'lumbridge'
  },
  methods: {
    inventory_functions: function () {
      return {
        add: this.$children[2].add,
        remove: this.$children[2].remove,
        have: this.$children[2].have,
        get_all: this.$children[2].get_all
      }
    }
  }
})

idlescape.root_vue.$on('city changed', function (selected_city) {
  this.selected_city = selected_city
  console.log('city changed', idlescape.root_vue.selected_city)
})