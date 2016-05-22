idlescape.vues.skilling_spot_mechanic = Vue.extend({
  template: `
  <div class="popup_content_container">
    <div class="pop_up_content">
      
      <div class="pop_up_content_left">
        <h3>Level Requirement:</h3>
        <span v-for="required_level in spot.required_levels"><br>- {{$key.capitalize()}} : {{ required_level }}</span>

        <div v-if="has_item_requirement">
          <h3><br>Consumes:</h3>
          <span v-for="item in spot.required_items"><br>- {{ get_item_name(item.uid) }} : {{ item.ammount }}</span>
        </div>
      </div>
      

      <div class="pop_up_content_right">
        <div v-if="has_drops">
          <h3 >Drops:</h3>
          <span v-for="spot_drops_stat in spot_drops_stats"><br>- {{ spot_drops_stat.name }} {{ spot_drops_stat.rate }}% {{ spot_drops_stat.exp }}xp</span>
        </div>
      </div>
      
    </div>
    
  </div>
  
    <div class="pop_up_actions">
      <button>Start</button>
      <button disabled="true">Stop</button>
      <button disabled="true">Luck</button>
    </div>
    
   <div class="progress_bar_container">
      <div class="progress_bar">
        <div class="progress" :style="progress_css"></div> 
      </div>
   </div>
  
  `,
  data: function () {
    return {
      progress: 50
    }
  },
  computed: {
    spot: function () {
      return this.$parent.spot
    },
    spot_drops_stats: function () {
      return this.spot.drops.map((drop, index) => {
        return {
          name: idlescape.models.all_items[drop.uid].name,
          rate: this.spot.drops[index].rate,
          exp: this.spot.drops[index].exp
        }
      })
    },
    has_item_requirement: function () {
      return this.$parent.spot.required_items ? true : false
    },
    has_drops: function () {
      return this.$parent.spot.drops ? true : false
    },
    progress_css: function () {
      console.log(this.progress)
      return {
        width: this.progress + '%'
      }
    }
  },
  methods: {
    get_item_name: function(item_uid) {
      return idlescape.models.all_items[item_uid].name
    }
  }
})