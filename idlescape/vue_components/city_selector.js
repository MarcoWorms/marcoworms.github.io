idlescape.vues.city_selector = Vue.extend({
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
        width: '137px'
      }
    }
  },
  methods: {
    select: function (city_uid) {
      this.selected_city = city_uid
      this.$dispatch('city changed', this.selected_city)
    },
    is_city_selected: function (city_uid) {
      return city_uid === this.selected_city ? true : false
    }
  }
})

// register