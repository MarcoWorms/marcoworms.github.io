idlescape.vues.bank = Vue.extend({
  template: `
    <p class="bank-title">Bank:</p>
    <div class="bank">
      
      <p v-for="item in bank" v-if="item.ammount > 0">
        {{ item.object.name }} : {{ item.ammount }}
      </p>
    </div>
  `,
  data: function () {
    return {
      bank: {},
    }
  },
  methods: {
    add: function (item_uid, ammount) {
      if (ammount === undefined) { ammount = 1 }
      if (this.bank[item_uid]) {
        this.$set ('bank.'+item_uid+'.ammount', this.bank[item_uid].ammount + ammount) 
      } else {
        this.$set ('bank.'+item_uid, {
          object: idlescape.all_items[item_uid],
          ammount: ammount
        }) 
      } 
    },
    remove: function (item_uid, ammount)  {
      if (ammount === undefined) { ammount = 1 }
      this.$set ('bank.'+item_uid+'.ammount', this.bank[item_uid].ammount - ammount) 
    },
    have: function (item_uid, ammount) {
      if (!this.bank[item_uid]) { return false }
      if (ammount === undefined) { ammount = 1 }
      return this.bank[item_uid].ammount >= ammount ? true : false
    },
    get_all: function () {
      return this.bank
    }
  }
})
