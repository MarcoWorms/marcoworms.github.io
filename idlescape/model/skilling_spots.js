'use strict'

idlescape.models.spots.skilling = {
  
  //fishing
  fly_fishing: {
    name: "Fly fishing",
    required_levels: {
      fishing: 20
    },
    drops: [
      {
        rate: 100,
        item_uid: 'trout',
        required_levels: {
          fishing: 20
        },
      }
    ],
    locations: {
      lumbridge: {
        x: 430,
        y: 204,
        difficulty: 1
      }
    }
  },
  bait_fishing: {
    name: "Bait fishing",
    required_levels: {
      fishing: 25
    },
    drops: [
      {
        rate: 100,
        item_uid: 'pike',
      }
    ],
    locations: {
      lumbridge: {
        x: 400,
        y: 104,
        difficulty: 1
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
        difficulty: 1
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
        y: 254,
        difficulty: 1
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
    required_items: [
      { 
        uid: 'copper',
        ammount: 1
      },
      { 
        uid: 'tin',
        ammount: 1
      }
    ],
    drops: [
      {
        rate: 100,
        uid: 'bronze_bar'
      }
    ],
    locations: {
      lumbridge: {
        x: 350,
        y: 120,
        difficulty: 1
      }
    }
  },
  
  //woodcutting
  trees: {
    name: 'Trees',
    required_levels: {
      woodcutting:1
    },
    locations: {
      lumbridge: {
        x: 246,
        y: 241,
        difficulty: 1
      }
    },
    drops: [
      {
        rate: 100,
        uid: 'logs'
      }
    ],
  }
}