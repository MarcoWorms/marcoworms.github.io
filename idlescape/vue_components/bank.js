idlescape.vues.bank = Vue.extend({
  template: `
    <div> 
      <p v-for="item in bank" v-if="item.ammount > 0">
        {{ item.object.name }} : {{ item.ammount }}
      </p>
    </div>

    
  `,
  data: function () {
    return {
      bank: idlescape.player.bank.get_all()
    }
  },

})
