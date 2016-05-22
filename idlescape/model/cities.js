'use strict'

idlescape.models.all_cities = {
  lumbridge: {
    name: "Lumbridge",
    css: {
        backgroundPosition: '-693px -670px'
    },
    spots_uids: {
      skilling: [
        'fly_fishing',
        'bait_fishing',
        'cook_o_matic_100',
        'forge',
        'trees'
      ],
      combat: [
        'farm',
        'goblin_house'
      ],
      quests: [
        'cooks_assistant',
        'restless_ghost',
      ]
    }
  },
  draynor: {
    name: 'Draynor Village',
    css: {
        backgroundPosition: '-449px -530px'
    }
  },
  falador: {
    name: 'Falador',
    css: {
        backgroundPosition: '-39px -300px'
    }
  },
  edgeville: {
    name: 'Edgeville',
    css: {
      backgroundPosition: '-399px -6px'
    }
  },
  varrock: {
    name: 'Varrock',
    css : {
      backgroundPosition: '-729px -36px'
    }
  },
  port_sarim: {
    name: 'Port Sarim',
    css: {
      backgroundPosition: '-8px -736px'
    }
  }
}
// {
//   console.log('All cities: ', idlescape.all_cities)
// }