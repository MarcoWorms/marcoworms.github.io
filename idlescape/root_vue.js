'use strict'

Vue.component('cityselector', idlescape.vues.city_selector)
Vue.component('inventory', idlescape.vues.inventory)

idlescape.vues.rootVue = new Vue({
  el: '#rootVue',
  data: {
    selected_city: 'lumbridge'
  },
  methods: {
    update_selected_city: function () {
      this.selected_city = this.$children[0].selected_city
    },
    inventory: {
      add: this.children[1].add,
      remove: this.children[1].remove,
      have: this.children[1].have
    }
  }
})

idlescape.vues.rootVue.$on('city changed', function () {
  idlescape.vues.rootVue.update_selected_city()
  console.log('city changed', idlescape.vues.rootVue.selected_city)
})

