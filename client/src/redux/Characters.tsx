import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface Character {
  _id: string
  playeruid: string
  playerName: string
  characterName: string
}

interface Characters {
  userCharacters: Character[]
  comCharacters: Character[]
}

const initialState: Characters = {
  userCharacters: [] as Character[],
  comCharacters: [] as Character[],
}

export const characters = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    addUserCharacters: (state, action: PayloadAction<Character>) => {
      state.userCharacters = [...state.userCharacters, action.payload]
    },
    addComCharacters: (state, action: PayloadAction<Character>) => {
      state.comCharacters = [...state.comCharacters, action.payload]
    },
  },
})

export const { addUserCharacters, addComCharacters } = characters.actions

export default characters.reducer
