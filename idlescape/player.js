'use strict'

idlescape.player = (function () {

  const all_skills = {
    fishing: {
      name: 'Fishing'
    },
    cooking: {
      name: 'Cooking'
    },
    prayer: {
      name: 'Prayer'
    }
  }
  
  // add skill stats
  {
    const initial_skills_stats = {
      exp_current: 0,
      exp_to_next_lvl: 83,
      level_current: 1,
      level_max: 99
    }
    Object.keys(all_skills).forEach((skill_uid) => {
      let skill = all_skills[skill_uid]
      Object.assign(skill, initial_skills_stats)
    })
  }

  var quest_points = 0

  const inventory = {}
  const quests = []
  const perks = []

  const public_methods = {
    create_inventory_methods: () => {
      const inventory_methods = {
        add: (item_uid) => {
          inventory[item_uid] ? inventory[item_uid] += 1 : inventory[item_uid] = 1
        },
        remove: (item_uid) => {
          inventory[item_uid] -= 1  
        },
        have: (item_uid, ammount) => {
          return inventory[item_uid] >= ammount ? true : false
        },
        _debug: () => {
          return inventory
        }
      }
      return inventory_methods
    },
    create_perks_methods: () => {
      const perks_methods = {
        add: (perk) => {
          perks.push(perk)
        },
        have: (_perk) => {
          perks.forEach((perk) => {
            if (perk === _perk) {
              return true
            }
          })
          return false
        }
      }
      return perks_methods
    },
    create_quest_methods: () => {
      const quest_methods = {
        add: (quest) => {
          quests.push(quest)
        },
        have: (_quest) => {
          quests.forEach((quest) => {
            if (quest === _quest) {
              return true
            }
          })
          return false
        },
        add_points: (ammount) => {
          quest_points += ammount
        },
        total_points: () => {
          return quest_points
        }
      }
    }
  }

  return {
    inventory: public_methods.create_inventory_methods(),
    perks: public_methods.create_perks_methods(),
    quests: public_methods.create_quest_methods()
  }

}())
