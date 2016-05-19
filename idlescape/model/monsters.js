'use strict'

idlescape.all_monsters = {
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
// debug
// {
//   console.log('All monsters: ', idlescape.all_monsters)
// }