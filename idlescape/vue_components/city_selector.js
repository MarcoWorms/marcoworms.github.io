idlescape.vues.city_selector = Vue.extend({
  template: `
    <div class="cities" :style="container_size">
      <a v-for="city in all_cities" @click="select($key)" class="city" :class="{ 'selected-city': is_city_selected($key)}"">
        <span style="cursor:pointer;">{{ city.name }}</span>
      </a>
    </div>
  `,
  data: function () {
    return {
      selected_city: 'lumbridge',
      container_size: {
        width: '131px'
      }
    }
  },
  computed: {
    all_cities: function () {
      return idlescape.models.all_cities
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