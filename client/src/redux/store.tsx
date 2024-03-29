import { configureStore } from '@reduxjs/toolkit'
import AppStatusReducer from './AppStatus'
import CharactersReducer from './Characters'
import userReducer from './User'

const store = configureStore({
  reducer: {
    user: userReducer,
    appState: AppStatusReducer,
    characters: CharactersReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
