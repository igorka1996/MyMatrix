import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { adminAPI } from "../API/API";

export type userAll = {
  _id: string;
  name: string;
  surname: string;
  email: string;
  totalAmount: number;
  phone: string;
  admin: boolean;
};

export type initialStateType = {
  data: userAll[];
  userAll: number;
  page: number;
};

const initialState: initialStateType = {
  data: [],
  userAll: 0,
  page: 0,
};
const slice = createSlice({
  name: "admin-user-all",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserPage.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.userAll = action.payload.userAll;
      state.page = action.payload.page;
    });
    builder.addCase(changeAdmin.fulfilled, (state, action) => {
      state.data.forEach((e) => {
        if (e._id === action.payload.userId) {
          e.admin = action.payload.admin;
        }
      });
    });
  },
});

export const adminUserAll = slice.reducer;

export const getUserPage = createAsyncThunk(
  "admin-user-all/page",
  async (
    param: { page: number; batchSize: number },
    { dispatch, rejectWithValue }
  ) => {
    try {
      let res = await adminAPI.getUsers(param.page, param.batchSize);
      return {
        data: res.data.data,
        userAll: res.data.userAll,
        page: res.data.page,
      };
    } catch (e) {
      return rejectWithValue(null);
    }
  }
);

export const changeAdmin = createAsyncThunk(
  "admin-user-all/admin",
  async (
    param: { userId: string; value: boolean },
    { dispatch, rejectWithValue }
  ) => {
    try {
      let res = await adminAPI.admin({
        userId: param.userId,
        value: param.value,
      });
      return {
        userId: res.data.userId,
        admin: res.data.admin,
      };
    } catch (e) {
      return rejectWithValue(null);
    }
  }
);
