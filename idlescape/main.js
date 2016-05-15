'use strict'

// create a root instance


var makePlayer = function () {

    var _skills = {
        Woodcutting: 1,
        Firemaking: 1,
        Fishing: 1
    }

    var _inventory = {

    }

    return {
        skills: _skills,
        inventory: {
            add: function (item, ammount) {
                if (_inventory[item] === undefined) {
                    _inventory[item] = 0
                }
                _inventory[item] += ammount
            },
            tryRemove: function (item, ammount) {
                if (_inventory[item] === undefined) {
                    return false
                } else {
                    if (_inventory[item] < ammount) {
                        return false
                    } else {
                        _inventory[item] -= ammount
                        return true
                    }
                }
            },
            get: function () {
                return _inventory
            }
        }
    }
}

var player = makePlayer()

var auxiliar = (function(){
    return {
        clearAllActive: () => {
            rootVue.$children.forEach( (child) => {
                child.active = false
                child.totalLife = child.currentLife
            })
        }
    }
}())

// define
var skillaction = Vue.extend({
    template: '<div :style="styleObject">{{ skillname }}\
                   <br />\
                   <progress max={{totalLife}} value={{currentLife}}></progress>\
                   <br />\
                   <button :style="buttonStyleObject" @click="activate()">\
                        Work<span v-if="active">ing...</span>\
                   </button>\
                </div>',
    props: ['skillname', 'itemprize', 'itemrequirement'],
    data: function () {
        return {
            active: false,
            totalLife: 100,
            currentLife: 100,
            styleObject: {
                width: '200px',
                height: '100px',
                backgroundColor: 'grey'
            },
            buttonStyleObject: {
                width: '100px',
                height: '20px',
            }
        }
    },
    methods: {
        activate: function () {
            auxiliar.clearAllActive()
            this.active = true;
        },
        damage: function () {
            this.currentLife -= player.skills[this.skillname]
            console.log(player.inventory.get())
        },
        reborn: function () {
            this.currentLife = this.totalLife
            if (this.itemrequirement) {
                if (player.inventory.tryRemove(this.itemrequirement, 1)) {
                    if (this.itemprize) {
                        player.inventory.add(this.itemprize, 1)
                    }
                }
            }
            else {
                if (this.itemprize) {
                    player.inventory.add(this.itemprize, 1)
                }
            }

        },
        checkAlive: function () {
            if (this.currentLife < 0) {
                this.reborn()
            }
        },
        tryDamage: function () {
            if (this.active) {
                this.damage()
                this.checkAlive()
            }
        }
    }
})

// register
Vue.component('skillaction', skillaction)

var rootVue = new Vue({
  el: '#rootVue'
})



{



    const mainLoop = (dt) => {
        rootVue.$children.forEach( (child) => {
            child.tryDamage()
        })
    }

    let lastTime = Date.now()
    let deltaTime = null
    const coreLoop = () => {
        deltaTime = Date.now() - lastTime
        lastTime = Date.now()
        mainLoop(deltaTime)
        requestAnimationFrame(coreLoop)
    }
    requestAnimationFrame(coreLoop)
}
