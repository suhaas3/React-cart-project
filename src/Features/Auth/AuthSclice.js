import { createSlice } from '@reduxjs/toolkit'

const users = [
  { userName: "user1", passWord: "pass1" },
  { userName: "user2", passWord: "pass2" }
]


export const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticate: false,
    error: null
  },
  reducers: {
    login: (state, action) => {
      const { userName, passWord } = action.payload

      //find matching user
      const user = users.find(user => user.userName === userName && user.passWord === passWord);

      if (user) {
        state.user = { userName: user.userName };
        state.isAuthenticate = true;
        state.error = null;
      } else {
        state.error = "Invalid userName or passWord";
      }
    },

    logout: (state) => {
      state.user = null;
      state.isAuthenticate = false;
      state.error = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = AuthSlice.actions

export default AuthSlice.reducer