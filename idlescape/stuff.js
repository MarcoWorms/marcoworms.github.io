'use strict'

const xp_table = {
  1: 0,
  2: 83,
  3: 174,
  4: 276,
  5: 388,
  6: 512,
  7: 650,
  8: 801,
  9: 969,
  10: 1154,
  11: 1358,
  12: 1584,
  13: 1833,
  14: 2107,
  15: 2411,
  16: 2746,
  17: 3115,
  18: 3523,
  19: 3973,
  20: 4470,
  21: 5018,
  22: 5624,
  23: 6291,
  24: 7028,
  25: 7842,
  26: 8740,
  27: 9730,
  28: 10824,
  29: 12031,
  30: 13363,
  31: 14833,
  32: 16456,
  33: 18247,
  34: 20224,
  35: 22406,
  36: 24815,
  37: 27473,
  38: 30408,
  39: 33648,
  40: 37224,
  41: 41171,
  42: 45529,
  43: 50339,
  44: 55649,
  45: 61512,
  46: 67983,
  47: 75127,
  48: 83014,
  49: 91721,
  50: 101333,
  51: 111945,
  52: 123660,
  53: 136594,
  54: 150872,
  55: 166636,
  56: 184040,
  57: 203254,
  58: 224466,
  59: 247886,
  60: 273742,
  61: 302288,
  62: 333804,
  63: 368599,
  64: 407015,
  65: 449428,
  66: 496254,
  67: 547953,
  68: 605032,
  69: 668051,
  70: 737627,
  71: 814445,
  72: 899256,
  73: 992895,
  74: 1096278,
  75: 1210421,
  76: 1336443,
  77: 1475581,
  78: 1629200,
  79: 1798808,
  80: 1986068,
  81: 2192818,
  82: 2421087,
  83: 2673114,
  84: 2951373,
  85: 3258594,
  86: 3597729,
  87: 3972294,
  88: 4385776,
  89: 4842295,
  90: 5346332,
  91: 5902831,
  92: 6517253,
  93: 7195629,
  94: 7944614,
  95: 8771558,
  96: 9684577,
  97: 10692629,
  98: 11805606,
  99: 13034431,
  100: 14391160,
  101: 15889108,
  102: 17542976,
  103: 19368991,
  104: 21385072,
  105: 23611005,
  106: 26068631,
  107: 28782068,
  108: 31777942,
  109: 35085653,
  110: 38737660,
  111: 42769799,
  112: 47221639,
  113: 52136868,
  114: 57563717,
  115: 63555442,
  116: 70170839,
  117: 77474827,
  118: 85539081,
  119: 94442736,
  120: 104273166
}

const player = (function () {

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

  const initial_stats = {
      exp_current: 0,
      exp_to_next_lvl: 83,
      level_current: 1,
      level_max: 99
  }
  Object.keys(all_skills).forEach((skill_uid) => {
    let skill = all_skills[skill_uid]
    Object.assign(skill, initial_stats)
  })

  var quest_points = 0

  const inventory = {}
  const quests = []
  const perks = []


  return {
    inventory: {
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
    },
    perks: {
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
    },
    quests: {
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

}())

const all_items = {
  coin: {
    name: 'Coins'
  },
  bones: {
    name: 'Bones'
  },
  raw_beef: {
    name: 'Raw beef'
  },
  cowhide: {
    name: 'Cowhide'
  },
  trout: {
    name: 'Trout'
  }
}
//generate runes
{
  var rune_types = [
    'air',
    'water',
    'earth',
    'fire',
    'mind',
    'body',
    'cosmic',
    'chaos',
    'astral',
    'nature',
    'law',
    'death',
    'blood',
    'soul'
  ]

  var all_runes = rune_types.map((rune_type) => {
     return {
      uid: rune_type + '_rune',
      name: rune_type.capitalize() + ' rune'
    }
  })

  all_runes.forEach((rune) => {
    all_items[rune.uid] = { name: rune.name }
  })

  console.log('All items: ', all_items)
  
}

const all_monsters = {
  cow: {
    name: 'Cow',
    lvl: 2,
    hp: 8,
    poison: false,
    max_hit: 1,
    drops: [ 
      [100, 'bones', 1],
      [100, 'raw_beef', 1],
      [100, 'cowhide', 1]
    ]
  },
  cow_calf: {
    name: 'Cow calf',
    lvl: 2,
    hp: 6,
    max_hit: 1,
    poison: false,
    drops: [ 
      [100, 'bones', 1],
      [100, 'raw_beef', 1],
      [100, 'cowhide', 1]
    ]
  },
  goblin: {
    name: 'Goblin',
    lvl: [2, 5, 11, 12],
    hp: [3, 5, 12, 13],
    max_hit: [1, 1, 2, 2],
    poison: false,
    drops: [ 
      [50, 'coins', [1, 24]],
      [25, 'water_rune', 6],
      [25, 'mind_rune', 6],
      [25, 'body_rune', 6],
      [5, 'earth_rune', 6],
      [1, 'chaos_rune', 6],
      [1, 'nature_rune', 6],
    ]
  },
  spider: {
    name: 'Spider',
    lvl: 1,
    hp: 2,
    max_hit: 1,
    poison: false,
    drops: []
  },
  quest_skeleton: {
    name: 'Quest Skeleton',
    lvl: 13,
    hp: 18,
    max_hit: 2,
    poison: false,
    drops: []
  },
}
{
  console.log('All monsters: ', all_monsters)
}


const all_cities = {
  lumbridge: {
    skilling_spots: {
      fishing: {
        fly_fishing: {
          name: "Fly fishing",
          level: 20,
          drops: [100, 'trout']
        },
        bait_fishing: {
          name: "Bait fishing",
          level: 25,
          drops: [100, 'pike']
        },
      },
      cooking: {
        oven: {
          name: 'Oven',
          level: 1
        },
        cook_o_matic_100: {
          name: 'Cook-o-matic 100',
          level: 1,
          required_perks: ['can use cook-o-matic']
        }
      },
      smithing: {
        forge: {
          name: 'Forge',
          level: 1
        }
      }
    },
    combat: {
      farm: {
        name: 'Cow Farm',
        monsters: ['cow', 'cow_calf']
      },
      goblin_house: {
        name: 'Goblin House',
        monsters: ['goblin', 'spider']
      } 
    },
    quests: {
      cooks_assistant: {
        name: "Cook's Assistant",
        time: 2,
        quest_points: 1,
        skill_requirements: {},
        combat: [],
        rewards: {
          xp: {
            cooking: 300
          },
          perks: [
            'can use cook-o-matic'
          ]
        }
      },
      restless_ghost: {
        name: "The Restless Ghost",
        time: 5,
        quest_points: 1,
        skill_requirements: {},
        combat: ['quest_skeleton'],
        rewards: {
          xp: {
            prayer: 1125
          },
          perks: [
            'can talk to ghosts'
          ]
        }
      },
      rune_mysteries: {
        name: "Rune Mysteries",
        time: 5,
        quest_points: 1,
        skill_requirements: {},
        combat: [],
        rewards: {
          perks: [
            'can use runecrafting skill'
          ]
        }
      }
    }
  }
}
{
  console.log('All cities: ', all_cities)
}