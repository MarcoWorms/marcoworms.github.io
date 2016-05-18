'use strict'

idlescape.all_cities = {
  lumbridge: {
    name: "Lumbridge",
    css: {
        backgroundPosition: '-693px -670px'
    },
    skilling_spots: {
      fishing: [
        'fly_fishing',
        'bait_fishing'
      ],
      cooking: [
        'oven', 
        'cook_o_matic_100'
      ],
      smithing: [
        'forge'
      ]
    },
    combat_spots: [
      'farm',
      'goblin_house'
    ],
    quests: [
      'cooks_assistant',
      'restless_ghost',
      'rune_mysteries'
    ]
  },
  draynor: {
    name: 'Draynor Village',
    css: {
        backgroundPosition: '-449px -530px'
    }
  },
  falador: {
    name: 'Falador'
  },
  edgeville: {
    name: 'Edgeville'
  },
  varrock: {
    name: 'Varrock'
  },
  port_sarim: {
    name: 'Port Sarim'
  },
  karamja_east: {
    name: 'Karamja East'
  }
}
{
  console.log('All cities: ', idlescape.all_cities)
}