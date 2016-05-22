idlescape.vues.bank_skill = Vue.extend({
    template: `
        <p class="bank-skill-title">
            <div class="bank-skill-tab" :class="get_selected_class('bank')"
            @click="set_selected('bank')"
            >
            Bank
            </div>
            
            <div class="bank-skill-tab" :class="get_selected_class('skill')"
            @click="set_selected('skill')"
            >
            Skills
            </div>
        </p>
        <div class="bank-skill-container">
            <bank v-if="is_selected('bank')"></bank>
            <div v-if="is_selected('skill')">tbd</div> 
        </div>
    `,
    data: function () {
        return {
            selected: 'bank'
        }
    },
    methods: {
        get_selected_class: function (tab_uid) {
            if (this.selected === tab_uid) {
                return {
                    bank_skill_selected_tab: true
                }
            } else {
                return {
                    bank_skill_selected_tab: false
                }
            }
        },
        is_selected: function (tab_uid) {
            if (this.selected === tab_uid) {
                return true
            } else {
                return false
            }
        },
        set_selected: function (tab_uid) {
            this.selected = tab_uid
        }
    }
})