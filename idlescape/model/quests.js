'use strict'

idlescape.models.spots.quests = {
  cooks_assistant: {
    name: "Cook's Assistant",
    time: 2,
    quest_points: 1,
    required_levels: {},
    combat: [],
    rewards: {
      xp: {
        cooking: 300
      }
    },
    locations: {
      lumbridge: {
        x: 306,
        y: 203,
        distance_to_bank: 1
      }
    }
  },
  restless_ghost: {
    name: "The Restless Ghost",
    time: 5,
    quest_points: 1,
    required_levels: {},
    combat: ['quest_skeleton'],
    rewards: {
      xp: {
        prayer: 1125
      }
    },
    locations: {
      lumbridge: {
        x: 400,
        y: 254,
        distance_to_bank: 1
      }
    }
  },
  rune_mysteries: {
    name: "Rune Mysteries",
    time: 5,
    quest_points: 1,
    required_levels: {},
    combat: [],
    rewards: {
      perks: [
        'can use runecrafting skill'
      ]
    },
    locations: {
      lumbridge: {
        x: 400,
        y: 254,
        distance_to_bank: 1
      }
    }
  }
}