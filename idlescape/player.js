'use strict'

idlescape.player = (function () {

  const all_skills = {
    woodcutting: {
      name: 'Woodcutting'
    },
    firemaking: {
      name: 'Firemaking'
    },
    mining: {
      name: 'Mining'
    },
    smithing: {
      name: 'Smithing'
    },
    fishing: {
      name: 'Fishing'
    },
    cooking: {
      name: 'Cooking'
    },
    prayer: {
      name: 'Prayer'
    },
  }

  // add skill stats
  {
    const initial_skills_stats = {
      exp_current: 0,
      exp_to_next_lvl: 83,
      current_lvl: 1,
      max_lvl: 99
    }
    Object.keys(all_skills).forEach((skill_uid) => {
      let skill = all_skills[skill_uid]
      Object.assign(skill, initial_skills_stats)
    })
  }

  let quest_points = 0

  const bank = {}
  const quests = []
  const perks = []

  const public_methods = {
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
      return quest_methods
    },
    create_bank_methods: () => {
      const bank_methods  = {
        add: function (item_uid, ammount_to_add) {
          if (ammount_to_add === undefined) { ammount_to_add = 1 }
          if (bank[item_uid]) {
            bank[item_uid].ammount += ammount_to_add
          } else {
            Vue.set(bank, item_uid, {
              object: idlescape.models.all_items[item_uid],
              ammount: ammount_to_add
            })
          } 
        },
        remove: function (item_uid, ammount_to_remove)  {
          if (ammount_to_remove === undefined) { ammount_to_remove = 1 }
          bank[item_uid].ammount -= ammount_to_remove
        },
        have: function (item_uid, quantity) {
          if (!bank[item_uid]) { return false }
          if (quantity === undefined) { quantity = 1 }
          return bank[item_uid].ammount >= quantity ? true : false
        },
        get_all: function () {
          return bank
        }
      }
      return bank_methods
    }
  }

  const check_lvl = (skill_uid) => {
    let current_skill_exp = all_skills[skill_uid].exp_current

    console.log(all_skills[skill_uid])
    if (current_skill_exp >= all_skills[skill_uid].exp_to_next_lvl) {
      all_skills[skill_uid].current_lvl += 1
      all_skills[skill_uid].exp_to_next_lvl = idlescape.models.xp_table[all_skills[skill_uid].current_lvl + 1]
      check_lvl(skill_uid)
    }
  }

  return {
    perks: public_methods.create_perks_methods(), //add, have
    quests: public_methods.create_quest_methods(), //add, have, add_points, total_points
    bank: public_methods.create_bank_methods(), //add, remove, have, get_all
    all_skills: () => all_skills,
    add_exp: (skill_uid, exp) => {
      all_skills[skill_uid].exp_current += exp
      check_lvl(skill_uid)
    }
  }

}())
