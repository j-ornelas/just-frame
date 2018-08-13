export default {
  info: {
    name: 'Akuma',
    game: 'Street Fighter II: Super Turbo',
    health: null,
    stun: null,
    forward: 48,
    backward: 32
  },
  moves: {
    normals: {
      'close jab': {
        name: 'st. LP (close)',
        damage: 4,
        startup: 2,
        active: 4,
        recovery: 5,
        'on block': 3,
        'on hit': 4,
        stun: '0-5 (random)',
        other: ['Special Cancelable', 'Super Cancelable']
      },
      'far jab': {
        name: 'st. LP (Far)',
        damage: 4,
        startup: 2,
        active: 4,
        recovery: 5,
        'on block': 4,
        'on hit': 4,
        stun: '0-5 (random)',
        other: ['Special Cancelable', 'Super Cancelable', 'Chain Cancelable']
      },
      'crouch lp': {
        name: 'cr. LP',
        damage: 4,
        startup: 2,
        active: 4,
        recovery: 5,
        'on block': 4,
        'on hit': 4,
        stun: '0-5 (random)',
        other: ['Special Cancelable', 'Super Cancelable', 'Chain Cancelable']
      },
      'close strong': {
        name: 'st. MP (close)',
        damage: 22,
        stun: '5-11 (random)',
        startup: 3,
        active: 2,
        recovery: 16,
        'on block': 0,
        'on hit': 0,
        other: ['Special Cancelable', 'Super Cancelable']
      },
      'far strong': {
        name: 'st. MP (far)',
        damage: 22,
        stun: '5-11 (random)',
        startup: 3,
        active: 4,
        recovery: 7,
        'on block': 7,
        'on hit': 7,
        other: ['Special Cancelable', 'Super Cancelable']
      },
      'crouching strong': {
        name: 'cr. MP',
        damage: 22,
        stun: '5-11 (random)',
        startup: 3,
        active: 4,
        recovery: 7,
        'on block': 7,
        'on hit': 7,
        other: ['Special Cancelable', 'Super Cancelable']
      },
      'close fierce': {
        name: 'st. HP (close)',
        damage: 28,
        stun: '3-9 (random)',
        startup: 3,
        active: 8,
        recovery: 23,
        'on block': -9,
        'on hit': -9,
        other: ['Special Cancelable', 'Super Cancelable', 'Stun increases significantly if hit after 2nd active frame']
      },
      'far fierce': {
        name: 'st. HP (far)',
        damage: 28,
        stun: '10-16 (random)',
        startup: 5,
        active: 6,
        recovery: 23,
        'on block': -9,
        'on hit': -9,
        other: ['Super Cancelable']
      },
      'crouching fierce': {
        name: 'cr. HP',
        damage: 28,
        stun: '3-9 (random)',
        startup: 3,
        active: 11,
        recovery: 23,
        'on block': -12,
        'on hit': -12,
        other: ['Special Cancelable', 'Super Cancelable', 'Stun increases / damage decreases significantly if hit after 3rd active frame']
      },
      'standing short close': {
        name: 'st. LK (close)',
        damage: 12,
        stun: '0-5 (random)',
        startup: 5,
        active: 2,
        recovery: 8,
        'on block': 3,
        'on hit': 3,
        other: ['Super Cancelable', 'Must be blocked low']
      },
      'standing short far': {
        name: 'st. LK (far)',
        damage: 14,
        stun: '0-5 (random)',
        startup: 7,
        active: 2,
        recovery: 8,
        'on block': 3,
        'on hit': 3,
        other: ['Must be blocked low']
      },
      'couching short': {
        name: 'cr. LK',
        damage: 4,
        stun: '0-5 (random)',
        startup: 3,
        active: 4,
        recovery: 5,
        'on block': 3,
        'on hit': 3,
        other: ['Must be blocked low', 'Special Cancelable', 'Super Cancelable', 'Chain Cancelable']
      },
      'close standing forward': {
        name: 'st. MK (close)',
        damage: 24,
        stun: '5-11 (random)',
        startup: 3,
        active: 6,
        recovery: 9,
        'on block': 3,
        'on hit': 3,
        other: ['Special Cancelable', 'Super Cancelable']
      },
      'far standing forward': {
        name: 'st. MK (far)',
        damage: 24,
        stun: '5-11 (random)',
        startup: 7,
        active: 8,
        recovery: 7,
        'on block': 3,
        'on hit': 3,
        other: []
      },
      'crouching forward': {
        name: 'cr. MK',
        damage: 22,
        stun: '5-11 (random)',
        startup: 3,
        active: 6,
        recovery: 9,
        'on block': 3,
        'on hit': 3,
        other: ['Must be blocked low', 'Special Cancelable', 'Super Cancelable']
      },
      'close standing roundhouse': {
        name: 'st. HK (close)',
        damage: 34,
        stun: '11-23 (random)',
        startup: 5,
        active: 12,
        recovery: 11,
        'on block': -1,
        'on hit': -1,
        other: ['Move is +7 if hit after 8th active frame', 'Hits twice']
      },
      'far standing roundhouse': {
        name: 'st. HK (far)',
        damage: 30,
        stun: '10-16 (random)',
        startup: 2,
        active: 10,
        recovery: 17,
        'on block': -5,
        'on hit': -5,
        other: ['Move is -1 if hit after 2nd active frame', 'Special Cancelable', 'Super Cancelable']
      },
      'crouching roundhouse': {
        name: 'cr. HK',
        damage: 30,
        stun: '5-11 (random)',
        startup: 3,
        active: 6,
        recovery: 25,
        'on block': -9,
        'on hit': 'KD',
        other: ['Move is -1 if hit after 2nd active frame', 'Special Cancelable', 'Super Cancelable']
      },
      'jumping jab': {
        name: 'jp. LP',
        damage: 12,
        stun: '1-7 (random)',
        startup: 2,
        active: 'n/a',
        recovery: 'n/a',
        'on block': 'n/a',
        'on hit': 'n/a',
        other: ['Move is active entire time Akuma is in the air', 'Special Cancelable']
      },
      'jumping strong': {
        name: 'jp. MP',
        damage: 22,
        stun: '5-11 (random)',
        startup: 4,
        active: 20,
        recovery: 'n/a',
        'on block': 'n/a',
        'on hit': 'n/a',
        other: ['Does not hit crouching opponents', 'Special Cancelable']
      },
      'jumping fierce': {
        name: 'jp. HP',
        damage: 28,
        stun: '11-17 (random)',
        startup: 4,
        active: 8,
        recovery: 'n/a',
        'on block': 'n/a',
        'on hit': 'n/a',
        other: ['Does more stun if jump is neutral', 'Special Cancelable']
      },
      'jumping short (neutral)': {
        name: 'jp. LK (neutral)',
        damage: 14,
        stun: '1-7 (random)',
        startup: 3,
        active: 40,
        recovery: 'n/a',
        'on block': 'n/a',
        'on hit': 'n/a',
        other: ['Special Cancelable']
      },
      'jumping short (diagonal)': {
        name: 'jp. LK (diagonal)',
        damage: 12,
        stun: '1-7 (random)',
        startup: 5,
        active: 'n/a',
        recovery: 'n/a',
        'on block': 'n/a',
        'on hit': 'n/a',
        other: ['Move is active entire time Akuma is in the air']
      },
      'jumping forward': {
        name: 'jp. MK',
        damage: 22,
        stun: '5-11 (random)',
        startup: 5,
        active: 13,
        recovery: 'n/a',
        'on block': 'n/a',
        'on hit': 'n/a',
        other: []
      },
      'jumping roundhouse (neutral)': {
        name: 'jp. HK (neutral)',
        damage: 30,
        stun: '11-17 (random)',
        startup: 2,
        active: 8,
        recovery: 'n/a',
        'on block': 'n/a',
        'on hit': 'n/a',
        other: ['Special Cancelable during the first 4 active frames']
      },
      'jumping roundhouse (diagonal)': {
        name: 'jp. HK (diagonal)',
        damage: 30,
        stun: '3-9 (random)',
        startup: 5,
        active: 7,
        recovery: 'n/a',
        'on block': 'n/a',
        'on hit': 'n/a',
        other: []
      }
    },
    throws: {
      'All Throws': {
        damage: 32,
        range: 48
      }
    },
    specials: {
      fireball: {
        name: 'Blue Hadouken',
        input: '↓↘→ + P',
        startup: 10,
        active: 'projectile',
        recovery: '41/42/43',
        'on block': 'n/a',
        'on hit': 'n/a',
        damage: '18/20/22',
        stun: '7-13',
      },
      redfireball: {
        name: 'Red Hadouken',
        input: '←↙↓↘→ + P',
        startup: 15,
        active: 'projectile',
        recovery: '42/50/60',
        'on block': 'n/a',
        'on hit': 'n/a',
        damage: '18/14/21',
        stun: 3,
      },
      airfireball: {
        name: 'Air Hadouken',
        input: 'In air: ↓↘→ + P',
        startup: 8,
        active: 'projectile',
        recovery: 'n/a',
        'on block': 'n/a',
        'on hit': 'n/a',
        damage: 8,
        stun: '0-4 (random)',
      },
      dragonpunch: {
        name: 'DP / Shouryuken',
        input: '→↓↘ + P',
        startup: 1,
        active: '26/34/38',
        recovery: '22/25/32',
        'on block': 'n/a',
        'on hit': 'KD',
        damage: '32 + 12 + 12',
        stun: '2-8 (random)',
      },
      tatsu: {
        name: 'Tatsumaki',
        input: '↓↙← + K',
        startup: '4/1/1',
        active: '6/12/24',
        recovery: '7/6/7',
        'on block': 'n/a',
        'on hit': 'KD',
        damage: '32 + 12 + 12',
        stun: '3-9 (random)',
      },
      teleport: {
        name: 'Teleport',
        input: '→↓↘/←↓↙ + PPP/KKK',
        startup: '66/51',
        active: 'n/a',
        recovery: '9',
        'on block': 'n/a',
        'on hit': 'n/a',
      }
    },
    supers: {
    }
  }
};
