'use strict'

idlescape.spots.skilling = {
  
  //fishing
  fly_fishing: {
    name: "Fly fishing",
    required_levels: {
      fishing: 20
    },
    drops: [
      [100, 'trout', 20]
    ],
    locations: {
      lumbridge: {
        x: 420,
        y: 200,
        distance_to_bank: 1
      }
    }
  },
  bait_fishing: {
    name: "Bait fishing",
    required_levels: {
      fishing: 20
    },
    drops: [
      [100, 'pike', 20]
    ],
    locations: {
      lumbridge: {
        x: 400,
        y: 104,
        distance_to_bank: 1
      }
    }
  },
  
  //cooking
  oven: {
    name: 'Oven',
    required_levels: {
      cooking: 1
    },
    locations: {
      lumbridge: {
        x: 0,
        y: 0,
        distance_to_bank: 1
      }
    }
  },
  cook_o_matic_100: {
    name: 'Cook-o-matic 100',
    required_levels: {
      cooking: 1
    },
    required_quests: ['cooks_assistant'],
    locations: {
      lumbridge: {
        x: 306,
        y: 230,
        distance_to_bank: 1
      }
    },
    special: {
      
    }
  },
  
  //smithing
  forge: {
    name: 'Forge',
    required_levels: {
      smithing: 1
    },
    locations: {
      lumbridge: {
        x: 350,
        y: 120,
        distance_to_bank: 1
      }
    }
  }
}