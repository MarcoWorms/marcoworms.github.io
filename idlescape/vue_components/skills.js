idlescape.vues.skills = Vue.extend({
  template: `
    <div class="skill-container" v-for="skill in player_skills">

        <div class="skill-info-container">
            <div class="skill-image-container">
                <img class="skill-image" :src="get_skill_image($key)" alt="" />
            </div>
            
            <span class="skill-name">{{skill.name}}</span><br>
        </div>
        
        <span class="skill-level">Lvl: {{skill.current_lvl}}</span><br>
        

        <div class="skill-progress-bar">
            <div class="skill-progress-bar-content" :style="get_width_percentage(skill.exp_current, skill.exp_to_next_lvl, skill.current_lvl)">
            </div>
            <span class="skill-progress-bar-text">{{skill.exp_current}} / {{skill.exp_to_next_lvl}}</span>
        </div>
        
        <br>
    </div>
  `,
  data: function () {
    return {
      player_skills: idlescape.player.all_skills()
    }
  },
  methods: {
    get_width_percentage: function (exp_current, exp_to_next_lvl, current_lvl) {
      let width_percentage = 0
      let start_exp_this_lvl = idlescape.models.xp_table[current_lvl]
      let total_exp_this_lvl = exp_to_next_lvl - start_exp_this_lvl
      let relative_exp = exp_current - start_exp_this_lvl

      width_percentage = Math.ceil(relative_exp * 100 / total_exp_this_lvl)

      return {
        width: width_percentage + '%'
      }
    },
    get_skill_image: function (skill_uid) {
        return './imgs/small_icons/' + skill_uid + '.png'
    }
  }

})



