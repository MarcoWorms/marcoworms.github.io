const pin_template = `
  <div id="city-map" :style="map_position">

    <div v-if="filters.combat"
    v-for="combat_spot in spots.combat"
    class="spot combat" :style="get_pin_position(combat_spot, 'combat')"
    :class="custom_css"
    >
        <img class='pin_icon' :src="get_pin_img_raw('attack')" alt="" />
    </div> 
    
    <div v-if="filters.skilling"
    v-for="skilling_spot in spots.skilling"
    class="spot skilling":style="get_pin_position(skilling_spot, 'skilling')"
    :class="custom_css"
    @click="this.$dispatch('open_popup', 'skilling', skilling_spot)"
    >
        <img class='pin_icon' :src="get_pin_img(skilling_spot, 'skilling')" alt="" />
    </div> 

    <div v-if="filters.quests"
    v-for="quest_spot in spots.quests"
    class="spot quests":style="get_pin_position(quest_spot, 'quests')"
    :class="custom_css"
    >
        <img class='pin_icon' :src="get_pin_img_raw('quest')" alt="" />
    </div> 

    <mainpopup :location="selected_city"></mainpopup>

  </div> 
`
const filter_template = `
  <div id="city-filters">
    <p>Filter Spots:</p>
    <div class='filter-text' :class="{ enabled : filters.skilling}">
      <input v-model="filters.skilling" type="checkbox">
      <span @click="toggle_bool('skilling')" >Skilling</span><br>
    </div>
    
    <div class='filter-text' :class="{ enabled : filters.combat}">
      <input v-model="filters.combat" type="checkbox">
      <span @click="toggle_bool('combat')" >Combat</span><br>
    </div>
    <div class='filter-text' :class="{ enabled : filters.quests}">
      <input v-model="filters.quests" type="checkbox">
      <span @click="toggle_bool('quests')" >Quests</span>
    </div>
  </div>
`
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
idlescape.vues.city_explorer = Vue.extend({
  template: pin_template + filter_template,
  data: function () {
    return { 
      filters: {
        skilling: true,
        combat: true,
        quests: true,
        custom_css: {
          spot_can_see: false
        }
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
      this.hide_icons()
      window.setTimeout(() => {
        this.show_icons()
      }, 0)
      
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
    get_pin_img: function (spot_uid, spot_type) {
      return './imgs/large_icons/' + Object.keys(idlescape.models.spots[spot_type][spot_uid].required_levels)[0] + '.png'
    },
    get_pin_img_raw: function (icon_name) {
      return './imgs/large_icons/' + icon_name + '.png'
    },
    toggle_bool: function (filter_to_toggle) {
      this.filters[filter_to_toggle] = !this.filters[filter_to_toggle]
    },
    show_icons: function() {
      this.$set('custom_css.spot_can_see', true)
    },
    hide_icons: function() {
      this.$set('custom_css.spot_can_see', false)
    }
  }
})

// register