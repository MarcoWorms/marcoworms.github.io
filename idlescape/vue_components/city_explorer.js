idlescape.vues.city_explorer = Vue.extend({
  template: `
    <div id="city-map" :style="map_position">
      <div v-if="filters.combat"
      v-for="combat_spot in spots.combat"
      class="spot combat" :style="get_pin_position(combat_spot, 'combat')"
      >
          {{ get_pin_name(combat_spot, 'combat') }}
      </div> 
      
      <div v-if="filters.skilling"
      v-for="skilling_spot in spots.skilling"
      class="spot skilling":style="get_pin_position(skilling_spot, 'skilling')"
      >
          {{ get_pin_name(skilling_spot, 'skilling') }}
      </div> 

      <div v-if="filters.quests"
      v-for="quest_spot in spots.quests"
      class="spot quests":style="get_pin_position(quest_spot, 'quests')"
      >
          {{ get_pin_name(quest_spot, 'quests') }}
      </div> 
    </div> 

    <div id="city-filters">
      <p>Filter Spots:</p>
      <div class='pointer_cursor'>
        <input v-model="filters.skilling" type="checkbox">
        <span @click="toggle_bool('skilling')" >Skilling</span><br>
      </div>
      
      <div class='pointer_cursor'>
        <input v-model="filters.combat" type="checkbox">
        <span @click="toggle_bool('combat')" >Combat</span><br>
      </div>
      <div class='pointer_cursor'>
        <input v-model="filters.quests" type="checkbox">
        <span @click="toggle_bool('quests')" >Quests</span>
      </div>
    </div>

  `,
  data: function () {
    return { 
      filters: {
        skilling: true,
        combat: true,
        quests: true
      }
    }
  },
  computed: {
    map_position: function () {
      return idlescape.models.all_cities[this.selected_city].css
    },
    spots: function () {
      return idlescape.models.all_cities[this.selected_city].spots_uids
    },
    selected_city: function () {
      return this.$parent.selected_city
    }
  },
  methods: {
    get_pin_position: function (spot_uid, spot_type) {
      return {
        top: idlescape.models.spots[spot_type][spot_uid].locations[this.selected_city].y + 'px',
        left: idlescape.models.spots[spot_type][spot_uid].locations[this.selected_city].x + 'px'
      }
    },
    get_pin_name: function (spot_uid, spot_type) {
      return idlescape.models.spots[spot_type][spot_uid].name
    },
    toggle_bool: function (filter_to_toggle) {
      this.filters[filter_to_toggle] = !this.filters[filter_to_toggle]
    }
  }
})

// register