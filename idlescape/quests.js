idlescape.quests = {
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