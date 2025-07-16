import { createSlice } from '@reduxjs/toolkit'

const globalState = {
  userName: "",
  password: ""
}

export const SignUpFormSlice = createSlice({
  name: 'signup_form',
  initialState: globalState,
  reducers: {
    increment: (state) => {
      state.value += 1
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment } = SignUpFormSlice.actions

export default SignUpFormSlice.reducer