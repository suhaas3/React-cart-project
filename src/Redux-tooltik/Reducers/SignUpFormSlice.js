import { createSlice } from '@reduxjs/toolkit'

const globalState = {
  userName: "sai3",
  password: "12345"
}

export const SignUpFormSlice = createSlice({
  name: 'signup_form',
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
export const { increment } = SignUpFormSlice.actions

export default SignUpFormSlice.reducer