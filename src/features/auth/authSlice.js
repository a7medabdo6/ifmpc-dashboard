import { createSlice } from "@reduxjs/toolkit";

// Load initial state from local storage
const loadFromLocalStorage = () => {
  const state = localStorage.getItem("authState");
  if (state) {
    return JSON.parse(state);
  }
  return { isAuthenticated: false, user: null };
};

const initialState = loadFromLocalStorage();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      // Save state to local storage
      localStorage.setItem("authState", JSON.stringify(state));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      // Remove state from local storage
      localStorage.removeItem("authState");
      localStorage.removeItem("accessToken");
 
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
