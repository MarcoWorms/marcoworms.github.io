'use strict'

idlescape.quests = {
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
    }
  }
}