'use strict'

function city_changed(city_uid) {
  console.log('loading city', city_uid)
}

// define
var cities = Vue.extend({
  template: `
    <div class="cities" :style="container_size">
      <a v-for="city in all_cities" @click="select($key)" class="city" :class="{ 'selected-city': is_city_selected($key)}"">
        <span>{{ city.name }}</span>
      </a>
    </div>
  `,
  data: function () {
    return {
      selected_city: 'lumbridge',
      all_cities: idlescape.all_cities,
      container_size: {
        width: '40px'
      }
    }
  },
  methods: {
    select: function (city_uid) {
      this.selected_city = city_uid
      city_changed(city_uid)
    },
    is_city_selected: function (city_uid) {
      return city_uid === this.selected_city ? true : false
    }
  }
})

// register
Vue.component('cities', cities)


var rootVue = new Vue({
  el: '#rootVue'
})