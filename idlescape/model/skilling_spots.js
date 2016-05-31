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
        uid: 'trout',
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
        uid: 'pike',
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
        uid: 'bronze_bar',
        exp: 15
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
    hp: 3,
    min_ticks_to_farm: 4,
    locations: {
      lumbridge: {
        x: 246,
        y: 241
      }
    },
    drops: [
      {
        uid: 'logs',
        exp: {
          skill_uid: 'woodcutting',
          ammount: 25
        }
      }
    ]
  },
  oaks: {
    name: 'Oaks',
    required_levels: {
      woodcutting:15
    },
    hp: 5,
    min_ticks_to_farm: 3,
    locations: {
      lumbridge: {
        x: 196,
        y: 201
      }
    },
    drops: [
      {
        uid: 'oak_logs',
        exp: {
          skill_uid: 'woodcutting',
          ammount: 38
        }
      }
    ]
  },
  willows: {
    name: 'Willows',
    required_levels: {
      woodcutting: 30
    },
    hp: 8,
    min_ticks_to_farm: 2,
    locations: {
      draynor: {
        x: 172,
        y: 319
      }
    },
    drops: [
      {
        uid: 'willow_logs',
        exp: {
          skill_uid: 'woodcutting',
          ammount: 68
        }
      }
    ]
  },
  yews: {
    name: 'Willows',
    required_levels: {
      woodcutting: 60
    },
    hp: 20,
    min_ticks_to_farm: 4,
    locations: {
      edgeville: {
        x: 217,
        y: 129
      }
    },
    drops: [
      {
        uid: 'yew_logs',
        exp: {
          skill_uid: 'woodcutting',
          ammount: 175
        }
      }
    ]
  },

// firemaking
  fm_logs: {
    name: 'Logs',
    required_levels: {
      firemaking: 1
    },
    required_items: [
      { 
        uid: 'logs',
        ammount: 1
      }
    ],
    hp: 3,
    min_ticks_to_farm: 2,
    locations: {
      lumbridge: {
        x: 361,
        y: 210
      }
    },
    drops: [
      {
        uid: 'ashes',
        exp: {
          skill_uid: 'firemaking',
          ammount: 40
        }
      }
    ]
  }
}