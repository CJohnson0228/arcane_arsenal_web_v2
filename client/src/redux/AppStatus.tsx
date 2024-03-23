import { createSlice } from '@reduxjs/toolkit'

interface AppState {
  sideMenu: boolean
  auth: boolean
}

const initialState: AppState = {
  sideMenu: false,
  auth: false,
}

export const appStatus = createSlice({
  name: 'appStatus',
  initialState,
  reducers: {
    toggleSideMenu: (state) => {
      state.sideMenu = !state.sideMenu
    },
    authLogin: (state) => {
      state.auth = true
    },
    authLogout: (state) => {
      state.auth = false
    },
  },
})

export const { toggleSideMenu, authLogin, authLogout } = appStatus.actions

export default appStatus.reducer
