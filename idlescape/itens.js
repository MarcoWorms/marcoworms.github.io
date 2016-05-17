idlescape.all_items = {
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
// generate runes
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
    idlescape.all_items[rune.uid] = { name: rune.name }
  })
  
}
// debug
{
  console.log('All items: ', idlescape.all_items)
}
