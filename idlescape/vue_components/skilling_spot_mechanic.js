idlescape.vues.skilling_spot_mechanic = Vue.extend({
  template: `
  <div class="pop_up_content">
    <h3>Level Requirement:</h3>
    <span v-for="required_level in spot.required_levels"><br>- {{$key.capitalize()}} : {{ required_level }}</span>
    <h3 v-if="has_item_requirement"><br>Consumes:</h3>
    <span v-if="has_item_requirement" v-for="item in spot.required_items"><br>- {{ item.uid }}</span>
    <h3><br>Drops:</h3>
    <span v-for="drop in spot.drops"><br>- {{ drop.uid }} {{ drop.rate }}%</span>
  </div>
  `,
  computed: {
    spot: function () {
      return this.$parent.spot
    },
    has_item_requirement: function () {
      return this.$parent.spot.required_items ? true : false
    }
  }
})