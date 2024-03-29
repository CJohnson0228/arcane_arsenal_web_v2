import { attackType } from './attack.types'
import { backgroundsType } from './backgrounds.types'
import { classesType, subClassesType } from './classes.types'
import { armorType, weaponsType } from './equipment.types'
import { languagesType } from './language.types'
import { magicType } from './magic.types'
import { racesType, subraceType } from './races.types'

interface abilityScore {
  score: number
  modifier: number
}

interface saveThrow {
  proficient: boolean
  modifier: number
}

interface skillType {
  expertise: boolean
  proficient: boolean
  modifier: number
}

export interface dndCharType {
  playeruid: string
  playerName: string
  characterName: string
  class: classesType
  subClass: subClassesType | null
  background: backgroundsType
  race: racesType
  subrace: subraceType | null
  alignment?:
    | 'chaotic good'
    | 'neutral good'
    | 'lawful good'
    | 'chaotic neutral'
    | 'true neutral'
    | 'lawful neutral'
    | 'chaotic evil'
    | 'neutral evil'
    | 'lawful evil'
  ability_scores: {
    strength: abilityScore
    dexterity: abilityScore
    constitution: abilityScore
    intelligence: abilityScore
    wisdom: abilityScore
    charisma: abilityScore
  }
  prof_bonus: number
  passive_wisdom: number
  saving_throws: {
    strength: saveThrow
    dexterity: saveThrow
    constitution: saveThrow
    intelligence: saveThrow
    wisdom: saveThrow
    charisma: saveThrow
  }
  skills: {
    acrobatics: skillType
    animal_handling: skillType
    arcana: skillType
    athletics: skillType
    deception: skillType
    history: skillType
    insight: skillType
    intimidation: skillType
    investigation: skillType
    medicine: skillType
    nature: skillType
    perception: skillType
    performance: skillType
    persuasion: skillType
    religion: skillType
    sleight_of_hand: skillType
    stealth: skillType
    survival: skillType
  }
  armor_class: number
  initiative: number
  speed: number
  hit_points: {
    max: number
    current: number
    temporary: number
    hit_dice: {
      number: number
      sides: 4 | 6 | 8 | 10 | 12 | 20
    }
    death_saves: {
      successes: 0 | 1 | 2 | 3
      failures: 0 | 1 | 2 | 3
    }
  }
  attacks_spellcasting: attackType | attackType[]
  proficiencies: {
    armor: null | armorType | armorType[]
    weapons: weaponsType | weaponsType[]
    languages: languagesType | languagesType[]
  }
  equipment: {
    coinpurse: {
      copper: number
      silver: number
      elerium: number
      gold: number
      platinum: number
    }
    gear: {
      armor: armorType | armorType[] | string | string[] // will be an expanded type
      weapons: weaponsType | weaponsType[] | string | string[] // will be an expanded type
    }
  }
  personailty: {
    traits: string
    ideals: string
    bonds: string
    flaws: string
  }
  features: string | string[]
  appearance: {
    eye_color: string
    hair_color: string
    skin_color: string
    height: number
    wieght: number
    size: 'tiny' | 'small' | 'medium' | 'large' | 'huge' | 'gargantuan'
  }
  backstory: string | string[]
  allies: string | string[]
  organizations: string | string[]
  treasure: string | string[]
  spellcasting: {
    spellcasting_ability: 'intelligence' | 'wisdom' | 'charisma'
    spell_save_dc: number
    spell_atk_bonus: number
    slots: {
      1: { total: number; expended: number }
      2: { total: number; expended: number }
      3: { total: number; expended: number }
      4: { total: number; expended: number }
      5: { total: number; expended: number }
      6: { total: number; expended: number }
      7: { total: number; expended: number }
      8: { total: number; expended: number }
      9: { total: number; expended: number }
    }
    cantrips: magicType | magicType[] | null
    1: magicType | magicType[] | null
    2: magicType | magicType[] | null
    3: magicType | magicType[] | null
    4: magicType | magicType[] | null
    5: magicType | magicType[] | null
    6: magicType | magicType[] | null
    7: magicType | magicType[] | null
    8: magicType | magicType[] | null
    9: magicType | magicType[] | null
  }
}
