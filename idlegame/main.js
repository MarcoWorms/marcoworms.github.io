'use strict'

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

const RNGEESUS = function(percentage) {
    if (Math.random() * 100 < percentage) {
        return true
    } else {
        return false
    }
}

function randomIntFromInterval (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const idleFight = {}

idleFight.items = (function(){

    let crates = (function(){
        function rngeesusGo (crate_id) {

            let crate_content = all_crates[crate_id]

            let open_crate_content = {
                stats: [],
                items: []
            }

            Object.keys(crate_content.stats).forEach(_stat => {
                let stat = crate_content.stats[_stat]
                if (RNGEESUS(stat.chance)) {
                    let ammount = randomIntFromInterval(stat.min, stat.max)
                    for (let i = 0; i < ammount; i += 1) {
                        open_crate_content.stats.push(_stat)
                    }
                }
            })

            Object.keys(crate_content.items).forEach(_item => {
                let item = crate_content.items[_item]
                if (RNGEESUS(item.chance)) {
                    let ammount = randomIntFromInterval(item.min, item.max)
                    for (let i = 0; i < ammount; i += 1) {
                        open_crate_content.items.push(_item)
                    }
                }
            })

            return open_crate_content

        }
        let all_crates = {
            0: {
                name: "Novice Crate",
                stats: {
                    hp: {
                        chance: 70,
                        min: 1,
                        max: 3
                    },
                    attack: {
                        chance: 60,
                        min: 1,
                        max: 2
                    },
                    defense: {
                        chance: 60,
                        min: 1,
                        max: 2
                    }
                },
                items: {
                    hp_potion: {
                        chance: 40,
                        min: 1,
                        max: 2
                    },
                    mp_potion: {
                        chance: 40,
                        min: 1,
                        max: 2
                    },
                }
            }
        }
        return {
            openCrate: (id) => {
                return rngeesusGo(id)
            }
        }
    }()) 
    
    let items_effects = {
        heal: function (power) {
            idleFight.player.heal(power)
        },
        crate: function (power) {
            idleFight.player.parseCrate(crates.openCrate(power))
        }
    }

    let all_items = {
        "hp_potion": {
            name: "Health Potion",
            effect: items_effects.heal,
            power: 5
        },
        crate_1: {
            name: "Novice Crate",
            effect: items_effects.crate,
            power: 0
        },
        mp_potion: {
            name: "Mana Potion",
            effect: items_effects.crate,
            power: 5
        }
    }

    return {
        useItem: (id) => {
            let item = all_items[id]
            item.effect(item.power)
        },
        allItems: () => {
            return all_items
        },
    }

}())



idleFight.level_table = {
    exp_table: [0, 7, 20, 50, 100, 200, 450, 1000, 1600, 2400, 4000]
}

idleFight.monsters = {
    training_grounds: {
        "training_dummy": {
            name: "Training Dummy",
            stats: {
                hp: 3,
                max_hp: 2,
                attack: 2,
                defense: 1,
                speed: 1.5,
                exp: 1,
                gold: 1,
                charge: 0
            },
            spawn_influence: 40
        },
        "mecha_training_dummy": {
            name: "Mecha Training Dummy",
            stats: {
                hp: 6,
                max_hp: 6,
                attack: 2,
                defense: 1,
                speed: 2,
                exp: 4,
                gold: 5,
                charge: 0
            },
            spawn_influence: 9
        },
        "elite_training_dummy": {
            name: "Elite Training Dummy",
            stats: {
                hp: 15,
                max_hp: 15,
                attack: 6,
                defense: 4,
                speed: 2,
                exp: 15,
                gold: 20,
                charge: 0
            },
            spawn_influence: 1
        }
    },
    cursed_mansion: {
        "spooky_scary_skeleton": {
            name: "Spooky Scary Skeleton",
            stats: {
                hp: 20,
                max_hp: 20,
                attack: 7,
                defense: 3,
                speed: 2,
                exp: 10,
                gold: 10,
                charge: 0
            },
            spawn_influence: 10
        },
        "jack_o": {
            name: "Jack O",
            stats: {
                hp: 35,
                max_hp: 35,
                attack: 12,
                defense: 5,
                speed: 3,
                exp: 40,
                gold: 50,
                charge: 0
            },
            spawn_influence: 1
        }
    }
}


idleFight._gui = () => {
    function drawBar(who, max, val) {
        let dom = document.getElementById(who)
        dom.setAttribute('aria-valuemax', max)
        dom.setAttribute('aria-valuenow', val)
        dom.setAttribute('style', 'width: ' + (100 * val / max) + '%')
    }
    return {
        player: {
            draw: {
                stats: (player_stats) => {
                    let dom = document.getElementById('player_stats')
                    let dom2 = document.getElementById('player_combat_stats')
                    let dom3 = document.getElementById('player_fragments')
                    dom.innerHTML = ''
                    dom2.innerHTML = ''
                    Object.keys(player_stats).forEach( key => {
                        let stat = player_stats[key]
                        if (stat.display === "header") {
                            dom.innerHTML += '<p>'+stat.name+': '+stat.value+(stat.max ? (' / ' + stat.max) : "")+'</p>'
                        } else if (stat.display === "combat") {
                            dom2.innerHTML += '<p>'+stat.name+': '+stat.value+(stat.max ? (' / ' + stat.max) : "")+'</p>'
                        } else if (stat.display === "fragments") {
                            dom3.innerHTML = stat.value
                        }
                    })
                    drawBar('player_hp', player_stats.hp.max, player_stats.hp.value)
                    drawBar('player_mana', player_stats.mana.max, player_stats.mana.value)
                    drawBar('player_charge', 100, player_stats.charge.value)
                },
                inventory: (player_inventory) => {
                    let dom = document.getElementById('player_inventory')
                    dom.innerHTML = ''
                    player_inventory.forEach( (key) => {
                        let item = idleFight.items.allItems()[key]
                        dom.innerHTML += '<p>'+item.name+'</p>'
                    })
                }
            }
        },
        combat: {
            draw: {
                status: (combat_status) => {
                    let dom = document.getElementById('fighting_status')
                    dom.innerHTML = combat_status
                    let dom2 = document.getElementById('fight_button')
                    if (combat_status === 'Waiting') {
                        dom2.setAttribute('class', 'btn btn-danger')
                    } else if (combat_status === 'Fighting') {
                        dom2.setAttribute('class', 'btn btn-success')
                    }
                },
                monster: (monster) => {
                    if (monster) {
                        let domName = document.getElementById('monster_name')
                        domName.innerHTML = monster.name

                        drawBar('monster_hp', monster.stats.max_hp, monster.stats.hp)
                        drawBar('monster_charge', 100, monster.stats.charge)

                        let dom3 = document.getElementById('monster_stats')
                        dom3.innerHTML = ""
                        dom3.innerHTML += '<p> HP: '+monster.stats.hp+'/'+monster.stats.max_hp+'</p>'
                        dom3.innerHTML += '<p> Attack: '+monster.stats.attack+'</p>'
                        dom3.innerHTML += '<p> Defense: '+monster.stats.defense+'</p>'

                    }

                }
            }
        }
    }
}

idleFight.player = ( function () {
    const gui = idleFight._gui()
    const stats = {
        level: {
            name: "Level",
            value: 0,
            display: "header"
        },
        exp: {
            name: "Exp",
            value: 0,
            display: "header"
        },
        gold: {
            name: "Gold",
            value: 0,
            display: "header"
        },
        fragments: {
            name: "Ancient Fragments",
            value: 0,
            display: "fragments"
        },
        hp: {
            name: "HP",
            value: 10,
            max: 10,
            display: "combat",
            lvl_up_increase: 1
        },
        mana: {
            name: "Mana",
            value: 3,
            max: 3,
            display: "combat",
            lvl_up_increase: 1
        },
        attack: {
            name: "Attack",
            value: 2,
            display: "combat",
            lvl_up_increase: 1
        },
        defense: {
            name: "Defense",
            value: 1,
            display: "combat",
            lvl_up_increase: 1
        },
        speed: {
            name: "Speed",
            value: 2,
            display: "combat",
            lvl_up_increase: 0.1
        },
        luck: {
            name: "Luck",
            value: 1,
            display: "combat",
            lvl_up_increase: 1
        },
        charge: {
            name: "Charge",
            value: 0,
            display: "",
        }
    }
    const quest = {
        active: false,
        kill_list: null,
        kills_left: 0
    }
    const inventory = ["hp_potion", "hp_potion", "hp_potion"]
    return {
        getStats: () => {
            let _stats = JSON.parse(JSON.stringify(stats))
            return _stats
        },
        getQuest: () => {
            let _quest = JSON.parse(JSON.stringify(quest))
            return _quest
        },
        getInventory: () => {
            let _inventory = inventory.slice()
            return _inventory
        },
        takeDamage: (monster_attack) => {
            let damage_taken = monster_attack - stats.defense.value
            stats.hp.value -= (damage_taken > 0) ? damage_taken : 0
        },
        heal: (ammount) => {
            stats.hp.value += ammount
        },
        kill: (monster) => {
            stats.exp.value += monster.stats.exp
            stats.gold.value += monster.stats.gold

            let exp_to_next_level = idleFight.level_table.exp_table[stats.level.value + 1]
            if (exp_to_next_level) {
                if (stats.exp.value >= exp_to_next_level) {
                    idleFight.player.levelUp();
                } 
            }        
            
        },
        levelUp: () => {
            stats.level.value += 1
            stats.fragments.value += stats.level.value
            Object.keys(stats).forEach( key => {
                let stat = stats[key]
                if (stat.lvl_up_increase) {
                    if (stat.max) {
                        stat.max += Math.floor(stat.lvl_up_increase*100)/100
                    }
                    stat.value += Math.floor(stat.lvl_up_increase*100)/100
                }
            })
        },
        charge: () => {
            stats.charge.value += 2
            if (stats.charge.value >= 100) {
                stats.charge.value = 0
                return true
            }
            return false
        },
        isDead: () => {
            return stats.hp.value <= 0 ? true : false
        },
        die: () => {
            stats.hp.value = JSON.parse(JSON.stringify(stats.hp.max))
            stats.charge.value = 0
        },
        parseCrate: (crate_content) => {
            $(opened_crate_content).html($(opened_crate_content).html() + '<br>' + JSON.stringify(crate_content))
            crate_content.stats.forEach(stat => {
                stats[stat].value += 1
                if (stats[stat].max) {
                    stats[stat].max += 1;
                }
            })
            crate_content.items.forEach(item => {
                inventory.push(item)
            })
        },
        spendFragments: (ammount) => {
            if (stats.fragments.value >= ammount) {
                stats.fragments.value -= ammount
                return true
            } else {
                return false
            }
        },
        draw: () => {
            gui.player.draw.stats(stats)
            gui.player.draw.inventory(inventory)
        }
    }
}() )

idleFight.combat = ( function () {
    const gui = idleFight._gui()

    let raid_name = ""
    let status = "Waiting"
    let spawned_monster;

    function getRandomMonster () {
        let all_monsters = JSON.parse(JSON.stringify(idleFight.monsters[raid_name]))
        let all_monsters_keys = Object.keys(all_monsters)
        let final_monster_pool = []
        all_monsters_keys.forEach( key => {
            for (var i = all_monsters[key].spawn_influence - 1; i >= 0; i--) {
                final_monster_pool.push(key)
            };
        })
        let rng_decision = final_monster_pool[Math.floor(Math.random() * final_monster_pool.length)];
        return all_monsters[rng_decision]
    }

    function changeStatus (_status) {
        function status_waiting () {
            status = "Waiting"
        }
        function status_fighting () {
            status = "Fighting"
        }
        let statuses = {
            Waiting: status_waiting,
            Fighting: status_fighting
        }
        typeof statuses[_status] === 'function' ? statuses[_status]() : console.log("unexpected status", status)

        idleFight.combat.draw()
    }

    function charge_monster (monster) {

        monster.stats.charge += 2
        if (monster.stats.charge >= 100) {
            monster.stats.charge = 0
            return true
        }
        return false

    }

    return {
        setRaidName: function (_raid_name) {
            raid_name = _raid_name.split('#')[1].trim() || ""
        },
        fight: function () {
            if (raid_name !== "" && status === "Waiting") {

                changeStatus("Fighting")

                let player_stats = idleFight.player.getStats()
                spawned_monster = getRandomMonster()
                spawned_monster.stats.max_hp = spawned_monster.stats.hp

                let monster_dmg_taken = player_stats.attack.value - spawned_monster.stats.defense

                let player_attack = window.setInterval(function() {
                    if (idleFight.player.charge()) {
                        spawned_monster.stats.hp -= (monster_dmg_taken > 0) ? monster_dmg_taken : 0
                        if (spawned_monster.stats.hp <= 0) {
                            spawned_monster.stats.hp = 0;
                            spawned_monster.stats.charge = 0;
                            window.clearInterval(monster_attack)
                            window.clearInterval(player_attack)
                            changeStatus("Waiting")
                            idleFight.player.kill(spawned_monster)
                            idleFight.player.draw()
                            idleFight.combat.fight()
                        }
                    }
                    idleFight.combat.draw()
                }, Math.ceil(150 /(player_stats.speed.value)))


                let monster_attack = window.setInterval(function() {
                    if (charge_monster(spawned_monster)) {
                        idleFight.player.takeDamage(spawned_monster.stats.attack)
                        if (idleFight.player.isDead()) {
                            window.clearInterval(monster_attack)
                            window.clearInterval(player_attack)
                            changeStatus("Waiting")
                            idleFight.player.die()
                            idleFight.player.draw()
                        }
                    }
                }, Math.ceil(300 /(spawned_monster.stats.speed)))
            }
        },
        draw: function () {
            gui.combat.draw.status(status)
            idleFight.player.draw()
            gui.combat.draw.monster(spawned_monster)
        }
    }
}())

idleFight.shop = {
    buyCrate: (id) => {
        if (idleFight.player.spendFragments(1)) {
            idleFight.items.useItem(id)
            idleFight.player.draw()
        }
        
    }
}

idleFight.start_game = function () {

    $('#tabs').tab();

    // Change raid on dropdown button
    $(document).on('click', '#raid-picker-dropdown li a', function() {
        $('#raid-name-display').html(
            $(this).html()
        );

        idleFight.combat.setRaidName(this.href)
    });

    // Give quest button
    $(document).on('click', '#quest_button', function() {

    });

    $(document).on('click', '#fight_button', function() {
        idleFight.combat.fight()
    });

    $(document).on('click', '#crate_1', function() {
        idleFight.shop.buyCrate("crate_1")
    });

    idleFight.player.draw()
    idleFight.combat.draw()
}

jQuery(document).ready( ($) => {

    idleFight.start_game()

});

