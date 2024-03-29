export type magicType = {
  name: string
  damage: {
    dice_number: number
    dice_sides: 4 | 6 | 8 | 10 | 12 | 20
    bonus: number
    type:
      | 'acid'
      | 'bludgeoning'
      | 'cold'
      | 'fire'
      | 'force'
      | 'lightning'
      | 'necrotic'
      | 'piercing'
      | 'poison'
      | 'psychic'
      | 'radiant'
      | 'slashing'
      | 'thunder'
  }
  description: string
  memorized: boolean
}
