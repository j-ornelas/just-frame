export default {
  info: {
    name: 'Ken',
    game: 'Street Fighter II: Super Turbo',
    health: null,
    stun: null,
    forward: 51,
    backward: 34
  },
  moves: {
    normals: {
      'close jab': {
        name: 'st. LP (close)',
        damage: 4,
        stun: '0-5 (random)',
        startup: 2,
        active: 4,
        recovery: 5,
        'on block': 4,
        'on hit': 4,
        other: ['Special Cancelable', 'Super Cancelable']
      },
      'far jab': {
        name: 'st. LP (Far)',
        damage: 4,
        stun: '0-5 (random)',
        startup: 2,
        active: 4,
        recovery: 5,
        'on block': 4,
        'on hit': 4,
        other: ['Special Cancelable', 'Super Cancelable', 'Chain Cancelable']
      },
      'crouch lp': {
        name: 'cr. LP',
        damage: 4,
        stun: '0-5 (random)',
        startup: 2,
        active: 4,
        recovery: 5,
        'on block': 4,
        'on hit': 4,
        other: ['Special Cancelable', 'Super Cancelable', 'Chain Cancelable']
      },
      'close strong': {
        name: 'st. MP (close)',
        damage: 24,
        stun: '5-11 (random)',
        startup: 3,
        active: 2,
        recovery: 17,
        'on block': -1,
        'on hit': -1,
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
        other: ['Special Cancelable during first 2 active frames', 'Super Cancelable', 'Stun increases significantly if hit after 2nd active frame']
      },
      'far fierce': {
        name: 'st. HP (far)',
        damage: 28,
        stun: '10-16 (random)',
        startup: 5,
        active: 6,
        recovery: 23,
        'on block': -7,
        'on hit': -7,
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
        other: ['Special Cancelable during first 3 frames', 'Super Cancelable during first 3 frames', 'Stun increases / damage decreases significantly if hit after 3rd active frame']
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
        other: ['Must be blocked low', 'Super Cancelable', 'Chain Cancelable']
      },
      'standing short far': {
        name: 'st. LK (far)',
        damage: 14,
        stun: '0-5 (random)',
        startup: 7,
        active: 2,
        recovery: 9,
        'on block': 2,
        'on hit': 2,
        other: ['Must be blocked low']
      },
      'couching short': {
        name: 'cr. LK',
        damage: 4,
        stun: '0-5 (random)',
        startup: 3,
        active: 4,
        recovery: 5,
        'on block': 4,
        'on hit': 4,
        other: ['Must be blocked low', 'Special Cancelable', 'Super Cancelable', 'Chain Cancelable']
      },
      'close standing forward': {
        name: 'st. MK (close)',
        damage: 22,
        stun: '5-11 (random)',
        startup: 7,
        active: 8,
        recovery: 11,
        'on block': -1,
        'on hit': -1,
        other: []
      },
      'far standing forward': {
        name: 'st. MK (far)',
        damage: 22,
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
      'standing roundhouse': {
        name: 'st. HK',
        damage: 26,
        stun: '10-16 (random)',
        startup: 8,
        active: 4,
        recovery: 17,
        'on block': -4,
        'on hit': -4,
        other: []
      },
      'crouching roundhouse': {
        name: 'cr. HK',
        damage: 26,
        stun: '5-11 (random)',
        startup: 3,
        active: 6,
        recovery: 25,
        'on block': -9,
        'on hit': 'KD',
        other: ['Special Cancelable', 'Super Cancelable']
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
        other: ['Move is active entire time Ken is in the air', 'Special Cancelable']
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
        damage: 24,
        stun: '11-17 (random)',
        startup: 4,
        active: 8,
        recovery: 'n/a',
        'on block': 'n/a',
        'on hit': 'n/a',
        other: ['Has 20 active frames if neutral jump', 'Special Cancelable']
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
        other: ['Move is active entire time Ken is in the air']
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
        other: ['Diagonal Jump Fierce does more damage']
      },
      'jumping roundhouse (neutral)': {
        name: 'jp. HK (neutral)',
        damage: 26,
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
        damage: 26,
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
      throw: {
        name: 'Throw',
        damage: 32,
        stun: '7-13',
        range: 48
      },
      hold: {
        name: 'Hold',
        stun: 0,
        damage: '26 + 4*n',
        range: 48
      },
      airthrow: {
        name: 'Air Throw',
        damage: 32,
        stun: '7-13',
        range: 48
      }
    },
    specials: {
      fireball: {
        name: 'Hadouken',
        input: '↓↘→ + P',
        startup: 13,
        active: 'projectile',
        recovery: '40/41/42',
        'on block': 'n/a',
        'on hit': 'n/a',
        damage: '18/20/22',
        stun: '5-11',
        'meter build': 2
      },
      dragonpunch: {
        name: 'DP / Shouryuken',
        input: '→↓↘ + P',
        startup: 2,
        active: '14/22/26',
        recovery: '19/27/34',
        'on block': 'n/a',
        'on hit': 'KD',
        damage: '38/48/48',
        stun: '9-15 (random)',
        'meter build': 8
      },
      tatsu: {
        name: 'Tatsumaki',
        input: '↓↙← + K',
        startup: 1,
        active: '15/19/23',
        recovery: '14',
        'on block': 'n/a',
        'on hit': 'KD',
        damage: '32 + 12 + 12',
        stun: '3-9 (random)',
        'meter build': 6
      },
      inside: {
        name: 'Inside Crescent',
        input: '↓↘→ + K',
        startup: 7,
        active: 8,
        recovery: 17,
        'on block': 'n/a',
        'on hit': 'KD',
        damage: '4 + 30',
        stun: '0-4 + 7-13 (random)',
        'meter build': 6
      },
      insideOH: {
        name: 'Inside Cresent (hold)',
        input: '↓↘→ + K',
        startup: 7,
        active: 6,
        recovery: 7,
        'on block': 'n/a',
        'on hit': 'n/a',
        damage: 24,
        stun: '7-13 (random)',
        other: ['Must block standing'],
        'meter build': 6
      },
      outside: {
        name: 'Outside Crescent',
        input: '→↘↓ + K',
        startup: 16,
        active: 6,
        recovery: 13,
        'on block': 'n/a',
        'on hit': 'KD',
        damage: '4 + 28',
        stun: '2-8 + 7-13 (random)',
        'meter build': 6
      },
    },
    supers: {
      shouryuu: {
        name: 'Shouryuu Reppa',
        input: '↓↘→↓↘ + P',
        damage: '18 * 5',
        stun: '0-4 (random) * 5',
        startup: 2,
        active: 38,
        recovery: 33
      }
    }
  }
};
