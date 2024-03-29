export type attackType = {
  name: string
  atk_bonus: number
  damage: {
    diceNumber: number
    diceSides: 4 | 6 | 8 | 10 | 12 | 20
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
}
