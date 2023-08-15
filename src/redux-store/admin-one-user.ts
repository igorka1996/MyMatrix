import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { adminAPI } from "../API/API";
import { switchWaitAC, userAdminAC } from "./error-wait-reducer";

export type HistoryOfOrders = {
  name: string;
  price: string;
  date: string;
  _id: string;
};

export type Personal = {
  _id: string;
  name: string;
  surname: string;
  email: string;
  historyOfOrders: HistoryOfOrders[];
  subscription: [];
  totalAmount: number;
  avatarURL: string;
  phone: string;
};

const initialState: Personal = {
  _id: "",
  name: "",
  surname: "",
  email: "",
  historyOfOrders: [],
  subscription: [],
  totalAmount: 0,
  avatarURL: "",
  phone: "",
};
const slice = createSlice({
  name: "admin-user-one",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.subscription = action.payload.user.subscription;
      state.historyOfOrders = action.payload.user.historyOfOrders;
      state.email = action.payload.user.email;
      state.surname = action.payload.user.surname;
      state.name = action.payload.user.name;
      state._id = action.payload.user._id;
      state.totalAmount = action.payload.user.totalAmount;
      state.avatarURL = action.payload.avatarURL;
      state.phone = action.payload.user.phone;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.subscription = action.payload.subscription;
    });
  },
});

export const adminUser = slice.reducer;

export const getUser = createAsyncThunk(
  "admin-user-one/user",
  async (param: { id: string }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(userAdminAC({ userAdmin: true }));
      let res = await adminAPI.getUser(param.id);
      dispatch(userAdminAC({ userAdmin: false }));
      return {
        user: res.data.user,
        avatarURL: res.data.avatarURL,
      };
    } catch (e) {
      dispatch(userAdminAC({ userAdmin: false }));
      return rejectWithValue(null);
    }
  }
);

export const updateUser = createAsyncThunk(
  "admin-user-one/user-update",
  async (
    param: { subscribe: string; access: boolean; id: string },
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(switchWaitAC({ switchWait: true }));
      let res = await adminAPI.updateUser({
        id: param.id,
        subscribe: param.subscribe,
        access: param.access,
      });
      dispatch(switchWaitAC({ switchWait: false }));
      return {
        subscription: res.data.subscription,
      };
    } catch (e) {
      dispatch(switchWaitAC({ switchWait: false }));
      return rejectWithValue(null);
    }
  }
);
