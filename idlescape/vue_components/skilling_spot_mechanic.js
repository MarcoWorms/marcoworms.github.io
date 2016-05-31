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
          <span v-for="spot_drops_stat in spot_drops_stats">
            <br>- {{ spot_drops_stat.name }} (+{{ spot_drops_stat.exp }}xp)
          </span>
          <br>
          <br>
          <br>
        </div>
        <h3>Other:</h3>
        <br>
        <p>Min. ticks to farm: {{ spot.min_ticks_to_farm }} </p>  
      </div>
      
    </div>
    
  </div>
  
    <div class="pop_up_actions">
      <button @click="start_skilling()" :disabled="disable_start">Start</button>
      <button @click="stop_skilling()" :disabled="is_state('idle')">Stop</button>
      <br>
      <br>
      <p>Ticks Since Start:<br> 
      {{ total_ticks }}</p>
      <br>
    </div>
    
   <div class="progress_bar_container">
      <div class="progress_bar">
        <div class="progress progress_instant" :style="progress_css"></div> 
        <div class="progress progress_medium" :style="progress_css"></div> 
        <div class="progress progress_slow" :style="progress_css"></div> 
        <div class="progress progress_complete" :style="progress_complete"></div> 
      </div>
   </div>
  
  `,
  data: function () {
    return {
      state: 'idle',
      farm_loop: undefined,
      hp: 0,
      max_hp: 0,
      total_ticks: 0,
      progress_complete: {
        opacity: 0
      }
    }
  },
  computed: {
    progress: function () {
      if (this.max_hp === 0) {
        return 0
      } else {
        return this.hp * 100 / this.max_hp
      }
      
    },
    spot: function () {
      return this.$parent.spot
    },
    spot_drops_stats: function () {
      return this.spot.drops.map((drop, index) => {
        return {
          name: idlescape.models.all_items[drop.uid].name,
          rate: this.spot.drops[index].rate,
          exp: this.spot.drops[index].exp.ammount
        }
      })
    },
    has_item_requirement: function () {
      return this.spot.required_items ? true : false
    },
    has_drops: function () {
      return this.spot.drops ? true : false
    },
    progress_css: function () {
      return {
        width: this.progress + '%'
      }
    },
    disable_start: function () {
      return (this.is_state('farming') || !this.meets_level_requirement)
    },
    meets_level_requirement: function () {
      let player_meets_level_requirement = true
      Object.keys(this.spot.required_levels).forEach(skill_uid => {
        const skill_required_level = this.spot.required_levels[skill_uid]
        if (!idlescape.player.has_level(skill_uid, skill_required_level)) {
          player_meets_level_requirement = false
        }
      })
      return player_meets_level_requirement
    }
  },
  methods: {
    get_item_name: function(item_uid) {
      return idlescape.models.all_items[item_uid].name
    },
    is_state: function (state) {
      return (this.state === state)
    },
    detect_death: function () {
      if (this.hp >= this.max_hp) {
        this.progress_complete.opacity = 100
        window.setTimeout(function(){
          this.progress_complete.opacity = 0
        }.bind(this), 150)

        if (this.spot.required_items) {
          idlescape.player.bank.remove(this.spot.required_items[0].uid, this.spot.required_items[0].ammount)
        }

        this.hp = 0
        this.spot.drops.forEach(function (drop) {
          idlescape.player.bank.add(drop.uid)
          idlescape.player.add_exp(drop.exp.skill_uid, drop.exp.ammount)
        })
      }
    },
    start_skilling: function () {

      this.total_ticks = 0
      this.max_hp = this.spot.hp
      this.hp = 0
      this.state = 'farming'
      this.farm_loop = window.setInterval(
        function () {
          if (!this.spot.required_items || idlescape.player.bank.have(this.spot.required_items[0].uid, this.spot.required_items[0].ammount)) {
            var max_dmg = this.spot.hp / this.spot.min_ticks_to_farm
            this.total_ticks += 1
            var damage = idlescape.player.skill_damage_per_tick(Object.keys(this.spot.required_levels)[0])
            damage = damage + (((Math.random() * damage) - damage)/4)
            if (damage >= max_dmg) { damage = max_dmg }
            // console.log(damage)
            this.hp += damage
            this.detect_death()
          } else {
            this.stop_skilling()
          }
        }.bind(this),
      600)

    },
    stop_skilling: function () {
      this.state = 'idle'
      window.clearInterval(this.farm_loop)
    }
  }
})