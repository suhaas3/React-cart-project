import { createSlice } from '@reduxjs/toolkit'

const globalState = {
  userName: "",
  password: ""
}

export const LoginFormSlice = createSlice({
  name: 'login_form',
  initialState: globalState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment } = LoginFormSlice.actions

export default LoginFormSlice.reducer