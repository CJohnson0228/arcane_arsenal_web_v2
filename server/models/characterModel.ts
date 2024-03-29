import { Schema, model } from 'mongoose'
import { dndCharType } from '../types/dnd/character.types'

export const characterSchema = new Schema<dndCharType>({
  // create the character database schema from json template
  playeruid: { type: String, required: true },
  playerName: { type: String, required: true },
  characterName: { type: String, required: true },
  class: { type: String, required: true },
  subClass: { type: String, required: false },
  background: { type: String, required: true },
  race: { type: String, required: true },
  subrace: { type: String, required: false },
  alignment: { type: String, required: true },
  ability_scores: {
    strength: { type: Number, required: true },
    dexterity: { type: Number, required: true },
    constitution: { type: Number, required: true },
    intelligence: { type: Number, required: true },
    wisdom: { type: Number, required: true },
    charisma: { type: Number, required: true },
  },
  prof_bonus: { type: Number, required: true },
  passive_wisdom: { type: Number, required: true },
  saving_throws: {
    strength: {
      proficient: { type: Boolean, required: true },
      modifier: { type: Number, required: true },
    },
    dexterity: {
      proficient: { type: Boolean, required: true },
      modifier: { type: Number, required: true },
    },
    constitution: {
      proficient: { type: Boolean, required: true },
      modifier: { type: Number, required: true },
    },
    intelligence: {
      proficient: { type: Boolean, required: true },
      modifier: { type: Number, required: true },
    },
    wisdom: {
      proficient: { type: Boolean, required: true },
      modifier: { type: Number, required: true },
    },
    charisma: {
      proficient: { type: Boolean, required: true },
      modifier: { type: Number, required: true },
    },
  },
  skills: {
    acrobatics: {
      expertise: { type: Boolean, required: true },
      proficient: { type: Boolean, required: true },
      modifier: { type: Number, required: true },
    },
    animal_handling: {
      expertise: { type: Boolean, required: true },
      proficient: { type: Boolean, required: true },
      modifier: { type: Number, required: true },
    },
    arcana: {
      expertise: { type: Boolean, required: true },
      proficient: { type: Boolean, required: true },
      modifier: { type: Number, required: true },
    },
    athletics: {
      expertise: { type: Boolean, required: true },
      proficient: { type: Boolean, required: true },
      modifier: { type: Number, required: true },
    },
    deception: {
      expertise: { type: Boolean, required: true },
      proficient: { type: Boolean, required: true },
      modifier: { type: Number, required: true },
    },
    history: {
      expertise: { type: Boolean, required: true },
      proficient: { type: Boolean, required: true },
      modifier: { type: Number, required: true },
    },
    insight: {
      expertise: { type: Boolean, required: true },
      proficient: { type: Boolean, required: true },
      modifier: { type: Number, required: true },
    },
    intimidation: {
      expertise: { type: Boolean, required: true },
      proficient: { type: Boolean, required: true },
      modifier: { type: Number, required: true },
    },
    investigation: {
      expertise: { type: Boolean, required: true },
      proficient: { type: Boolean, required: true },
      modifier: { type: Number, required: true },
    },
    medicine: {
      expertise: { type: Boolean, required: true },
      proficient: { type: Boolean, required: true },
      modifier: { type: Number, required: true },
    },
    nature: {
      expertise: { type: Boolean, required: true },
      proficient: { type: Boolean, required: true },
      modifier: { type: Number, required: true },
    },
    perception: {
      expertise: { type: Boolean, required: true },
      proficient: { type: Boolean, required: true },
      modifier: { type: Number, required: true },
    },
    performance: {
      expertise: { type: Boolean, required: true },
      proficient: { type: Boolean, required: true },
      modifier: { type: Number, required: true },
    },
    persuasion: {
      expertise: { type: Boolean, required: true },
      proficient: { type: Boolean, required: true },
      modifier: { type: Number, required: true },
    },
    religion: {
      expertise: { type: Boolean, required: true },
      proficient: { type: Boolean, required: true },
      modifier: { type: Number, required: true },
    },
    sleight_of_hand: {
      expertise: { type: Boolean, required: true },
      proficient: { type: Boolean, required: true },
      modifier: { type: Number, required: true },
    },
    stealth: {
      expertise: { type: Boolean, required: true },
      proficient: { type: Boolean, required: true },
      modifier: { type: Number, required: true },
    },
    survival: {
      expertise: { type: Boolean, required: true },
      proficient: { type: Boolean, required: true },
      modifier: { type: Number, required: true },
    },
  },
  armor_class: { type: Number, required: true },
  initiative: { type: Number, required: true },
  speed: { type: Number, required: true },
  hit_points: {
    max: { type: Number, required: true },
    current: { type: Number, required: true },
    temporary: { type: Number, required: true },
    hit_dice: {
      number: { type: Number, required: true },
      sides: { type: Number, required: true },
    },
    death_saves: {
      successes: { type: Number, required: true },
      failures: { type: Number, required: true },
    },
  },
  attacks_spellcasting: {
    name: { type: String, required: true },
    atk_bonus: { type: Number, required: true },
    damage: {
      diceNumber: { type: Number, required: true },
      diceSides: { type: Number, required: true },
      bonus: { type: Number, required: true },
      type: { type: String, required: true },
    },
  },
  proficiencies: {
    armor: [{ type: String, required: true }],
    weapons: [{ type: Number, required: true }],
    languages: [{ type: String, required: true }],
  },
  equipment: {
    coinpurse: {
      copper: { type: Number, required: true },
      silver: { type: Number, required: true },
      elerium: { type: Number, required: true },
      gold: { type: Number, required: true },
      platinum: { type: Number, required: true },
    },
    gear: {
      armor: [{ type: String, required: true }],
      weapons: [{ type: String, required: true }],
    },
  },
  personailty: {
    traits: { type: String, required: true },
    ideals: { type: String, required: true },
    bonds: { type: String, required: true },
    flaws: { type: String, required: true },
  },
  features: [{ type: String, required: true }],
  appearance: {
    eye_color: { type: String, required: true },
    hair_color: { type: String, required: true },
    skin_color: { type: String, required: true },
    height: { type: Number, required: true },
    wieght: { type: Number, required: true },
    size: { type: String, required: true },
  },
  backstory: [{ type: String, required: true }],
  allies: [{ type: String, required: true }],
  organizations: [{ type: String, required: true }],
  treasure: [{ type: String, required: true }],
  spellcasting: {
    spellcasting_ability: { type: String, required: true },
    spell_save_dc: { type: Number, required: true },
    spell_atk_bonus: { type: Number, required: true },
    slots: {
      1: { total: { type: Number, required: true }, expended: { type: Number, required: true } },
      2: { total: { type: Number, required: true }, expended: { type: Number, required: true } },
      3: { total: { type: Number, required: true }, expended: { type: Number, required: true } },
      4: { total: { type: Number, required: true }, expended: { type: Number, required: true } },
      5: { total: { type: Number, required: true }, expended: { type: Number, required: true } },
      6: { total: { type: Number, required: true }, expended: { type: Number, required: true } },
      7: { total: { type: Number, required: true }, expended: { type: Number, required: true } },
      8: { total: { type: Number, required: true }, expended: { type: Number, required: true } },
      9: { total: { type: Number, required: true }, expended: { type: Number, required: true } },
    },
    cantrips: [
      {
        name: { type: String, required: true },
        damage: {
          dice_number: { type: Number, required: true },
          dice_sides: { type: Number, required: true },
          bonus: { type: Number, required: true },
          type: { type: String, required: true },
        },
        description: { type: String, required: true },
        memorized: { type: Number, required: true },
      },
    ],
    1: [
      {
        name: { type: String, required: true },
        damage: {
          dice_number: { type: Number, required: true },
          dice_sides: { type: Number, required: true },
          bonus: { type: Number, required: true },
          type: { type: String, required: true },
        },
        description: { type: String, required: true },
        memorized: { type: Number, required: true },
      },
    ],
    2: [
      {
        name: { type: String, required: true },
        damage: {
          dice_number: { type: Number, required: true },
          dice_sides: { type: Number, required: true },
          bonus: { type: Number, required: true },
          type: { type: String, required: true },
        },
        description: { type: String, required: true },
        memorized: { type: Number, required: true },
      },
    ],
    3: [
      {
        name: { type: String, required: true },
        damage: {
          dice_number: { type: Number, required: true },
          dice_sides: { type: Number, required: true },
          bonus: { type: Number, required: true },
          type: { type: String, required: true },
        },
        description: { type: String, required: true },
        memorized: { type: Number, required: true },
      },
    ],
    4: [
      {
        name: { type: String, required: true },
        damage: {
          dice_number: { type: Number, required: true },
          dice_sides: { type: Number, required: true },
          bonus: { type: Number, required: true },
          type: { type: String, required: true },
        },
        description: { type: String, required: true },
        memorized: { type: Number, required: true },
      },
    ],
    5: [
      {
        name: { type: String, required: true },
        damage: {
          dice_number: { type: Number, required: true },
          dice_sides: { type: Number, required: true },
          bonus: { type: Number, required: true },
          type: { type: String, required: true },
        },
        description: { type: String, required: true },
        memorized: { type: Number, required: true },
      },
    ],
    6: [
      {
        name: { type: String, required: true },
        damage: {
          dice_number: { type: Number, required: true },
          dice_sides: { type: Number, required: true },
          bonus: { type: Number, required: true },
          type: { type: String, required: true },
        },
        description: { type: String, required: true },
        memorized: { type: Number, required: true },
      },
    ],
    7: [
      {
        name: { type: String, required: true },
        damage: {
          dice_number: { type: Number, required: true },
          dice_sides: { type: Number, required: true },
          bonus: { type: Number, required: true },
          type: { type: String, required: true },
        },
        description: { type: String, required: true },
        memorized: { type: Number, required: true },
      },
    ],
    8: [
      {
        name: { type: String, required: true },
        damage: {
          dice_number: { type: Number, required: true },
          dice_sides: { type: Number, required: true },
          bonus: { type: Number, required: true },
          type: { type: String, required: true },
        },
        description: { type: String, required: true },
        memorized: { type: Number, required: true },
      },
    ],
    9: [
      {
        name: { type: String, required: true },
        damage: {
          dice_number: { type: Number, required: true },
          dice_sides: { type: Number, required: true },
          bonus: { type: Number, required: true },
          type: { type: String, required: true },
        },
        description: { type: String, required: true },
        memorized: { type: Number, required: true },
      },
    ],
  },
})

const Character = model<dndCharType>('Character', characterSchema)

export default Character
