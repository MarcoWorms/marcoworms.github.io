idlescape.vues.inventory = Vue.extend({
  template: `
    <div class="inventory" :style="container_size">
      <p v-for="item in all_inventory">
        {{ item.object.name }}
      </p>
    </div>
  `,
  data: function () {
    return {
      all_inventory: {},
      container_size: {
        width: '137px'
      }
    }
  },
  methods: {
    add: function (item_uid, ammount) {
      if (ammount === undefined) { ammount = 1 }
      if (this.all_inventory[item_uid]) {
        this.all_inventory[item_uid].ammount += ammount 
      } else {
        this.all_inventory[item_uid] = {
          object: idlescape.all_items[item_uid],
          ammount: ammount
        }
      } 
    },
    remove: function (item_uid, ammount)  {
      if (ammount === undefined) { ammount = 1 }
      this.all_inventory[item_uid].ammount -= ammount
    },
    have: function (item_uid, ammount) {
      if (ammount === undefined) { ammount = 1 }
      return this.all_inventory[item_uid].ammount >= ammount ? true : false
    }
  }
})