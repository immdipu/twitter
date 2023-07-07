import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { loginResponseType } from "@/app/types/authTypes";

interface initialStateProps {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  username: string | null;
  isUserAuthenticated: boolean;
  token: string | null;
  id: string | null;
  profilePic: string | null;
}

const initialState: initialStateProps = {
  firstName: null,
  lastName: null,
  email: null,
  username: null,
  isUserAuthenticated: false,
  token: null,
  id: null,
  profilePic: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    IsuserAuthticated: (state, action: PayloadAction<boolean>) => {
      state.isUserAuthenticated = action.payload;
    },
    LoggedIn: (state, action: PayloadAction<loginResponseType>) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.id = action.payload._id;
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.isUserAuthenticated = true;
      state.profilePic = action.payload.profilePic;
    },
  },
});

export const { IsuserAuthticated, LoggedIn } = authSlice.actions;
export default authSlice.reducer;
