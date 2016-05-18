idlescape.vues.city_selector = Vue.extend({
  template: `
    <div class="cities" :style="container_size">
      <a v-for="city in all_cities" @click="select($key)" class="city" :class="{ 'selected-city': is_city_selected($key)}"">
        <span>{{ city.name }}</span>
      </a>
    </div>

    <div id="city-map" :style="city_css_position"></div> 
  `,
  data: function () {
    return {
      selected_city: 'lumbridge',
      all_cities: idlescape.all_cities,
      container_size: {
        width: '137px'
      }
    }
  },
  computed: {
    city_css_position: function () {
      return this.all_cities[this.selected_city].css
    }
  },
  methods: {
    select: function (city_uid) {
      this.selected_city = city_uid
      this.$dispatch('city changed')
    },
    is_city_selected: function (city_uid) {
      return city_uid === this.selected_city ? true : false
    }
  }
})

// register