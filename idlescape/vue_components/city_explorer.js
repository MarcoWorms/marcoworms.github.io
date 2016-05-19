idlescape.vues.city_explorer = Vue.extend({
  template: `
    <div id="city-map" :style="map_position">
    
      <div
      v-for="combat_spot in spots.combat"
      class="spot combat" :style="get_pin_position(combat_spot, 'combat')"
      >
          {{ get_pin_name(combat_spot, 'combat') }}
      </div> 
      
      <div
      v-for="skilling_spot in spots.skilling"
      class="spot skilling":style="get_pin_position(skilling_spot, 'skilling')"
      >
          {{ get_pin_name(skilling_spot, 'skilling') }}
      </div> 
      
    
    </div> 
  `,
  computed: {
    map_position: function () {
      return idlescape.all_cities[this.selected_city].css
    },
    spots: function () {
      return idlescape.all_cities[this.selected_city].spots_uids
    },
    selected_city: function () {
      return this.$parent.selected_city
    }
  },
  methods: {
    get_pin_position: function (spot_uid, spot_type) {
      return {
        top: idlescape.spots[spot_type][spot_uid].locations[this.selected_city].y + 'px',
        left: idlescape.spots[spot_type][spot_uid].locations[this.selected_city].x + 'px'
      }
    },
    get_pin_name: function (spot_uid, spot_type) {
      return idlescape.spots[spot_type][spot_uid].name
    }
  }
})

// register