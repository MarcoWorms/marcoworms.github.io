'use strict'

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

const idleFight = {}

idleFight.items = {
    "hp_potion": {
        name: "HP Potion",
        effect: "heal",
        power: 1
    }
}

idleFight.monsters = {
    training_grounds: {
        "training_dummy": {
            name: "Training Dummy",
            stats: {
                hp: 3,
                max_hp: 3,
                attack: 2,
                defense: 1,
                speed: 1,
                exp: 1,
                gold: 1,
                charge: 0
            },
            spawn_influence: 10
        },
        "mecha_training_dummy": {
            name: "Mecha Training Dummy",
            stats: {
                hp: 6,
                max_hp: 6,
                attack: 2,
                defense: 2,
                speed: 1,
                exp: 2,
                gold: 1,
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
                    let dom = document.getElementById('stats')
                    dom.innerHTML = ''
                    Object.keys(player_stats).forEach( key => {
                        let stat = player_stats[key]
                        if (stat.display === "header") {
                            dom.innerHTML += '<p>'+stat.name+': '+stat.value+(stat.max ? (' / ' + stat.max) : "")+'</p>'
                        }
                    })
                },
                inventory: (player_inventory) => {
                    let dom = document.getElementById('inventory')
                    dom.innerHTML = ''
                    player_inventory.forEach( (key) => {
                        let item = idleFight.items[key]
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
                player : (player_stats) => {

                    drawBar('player_hp', player_stats.hp.max, player_stats.hp.value)
                    drawBar('player_mana', player_stats.mana.max, player_stats.mana.value)
                    drawBar('player_charge', 100, player_stats.charge.value)

                    let dom = document.getElementById('player_combat_stats')
                    dom.innerHTML = ''
                    Object.keys(player_stats).forEach( key => {
                        let stat = player_stats[key]
                        if (stat.display === "combat") {
                            dom.innerHTML += '<p>'+stat.name+': '+stat.value+(stat.max ? (' / ' + stat.max) : "")+'</p>'
                        }

                    })
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
            value: 1,
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
        hp: {
            name: "HP",
            value: 10,
            max: 10,
            display: "combat"
        },
        mana: {
            name: "Mana",
            value: 3,
            max: 3,
            display: "combat"
        },
        attack: {
            name: "Attack",
            value: 2,
            display: "combat"
        },
        defense: {
            name: "Defense",
            value: 1,
            display: "combat"
        },
        speed: {
            name: "Speed",
            value: 2,
            display: "combat"
        },
        luck: {
            name: "Luck",
            value: 1,
            display: "combat"
        },
        charge: {
            name: "Charge",
            value: 0,
            display: "combat"
        },
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
        gainExp: (exp) => {
            stats.exp.value += exp
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
                            idleFight.player.gainExp(spawned_monster.stats.exp)
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
            gui.combat.draw.player(idleFight.player.getStats())
            gui.combat.draw.monster(spawned_monster)
        }
    }
}())

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

    idleFight.player.draw()
    idleFight.combat.draw()
}

jQuery(document).ready( ($) => {

    idleFight.start_game()

});

