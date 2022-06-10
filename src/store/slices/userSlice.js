import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = {...action.payload};
      state.isLoggedIn = true;
    },
    removeUser: state => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const {addUser, removeUser} = userSlice.actions;

export default userSlice.reducer;
