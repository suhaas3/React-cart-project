import { createSlice } from '@reduxjs/toolkit'

const globalState = {
  userName: "",
  passWord: ""
}

export const LoginFormSlice = createSlice({
  name: 'login_form',
  initialState: globalState,
  reducers: {
    ReduxLoginDetails: (state) => {
      state.value += 1
    },
    testLoginDetails: (state, action) => {
      state.userName = action.payload.userName
      state.passWord = action.payload.passWord
    }
  },
})

// Action creators are generated for each case reducer function
export const { ReduxLoginDetails, testLoginDetails } = LoginFormSlice.actions

export default LoginFormSlice.reducer