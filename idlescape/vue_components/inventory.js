idlescape.vues.inventory = Vue.extend({
  template: `
    <p class="inv-title">Bank:</p>
    <div class="inventory">
      
      <p v-for="item in all_inventory" v-if="item.ammount > 0">
        {{ item.object.name }} : {{ item.ammount }}
      </p>
    </div>
  `,
  data: function () {
    return {
      all_inventory: {},
    }
  },
  methods: {
    add: function (item_uid, ammount) {
      if (ammount === undefined) { ammount = 1 }
      if (this.all_inventory[item_uid]) {
        this.$set ('all_inventory.'+item_uid+'.ammount', this.all_inventory[item_uid].ammount + ammount) 
      } else {
        this.$set ('all_inventory.'+item_uid, {
          object: idlescape.all_items[item_uid],
          ammount: ammount
        }) 
      } 
    },
    remove: function (item_uid, ammount)  {
      if (ammount === undefined) { ammount = 1 }
      this.$set ('all_inventory.'+item_uid+'.ammount', this.all_inventory[item_uid].ammount - ammount) 
    },
    have: function (item_uid, ammount) {
      if (!this.all_inventory[item_uid]) { return false }
      if (ammount === undefined) { ammount = 1 }
      return this.all_inventory[item_uid].ammount >= ammount ? true : false
    },
    get_all: function () {
      return this.all_inventory
    }
  }
})
