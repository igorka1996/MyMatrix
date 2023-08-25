import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { adminAPI } from "../API/API";
import { tableWaitAC } from "./error-wait-reducer";
import { HandleError } from "../utils/errors";

export type BlogType = {
  data: {
    _id: string;
    img: string;
    title: string;
    text: string;
  };
};

const initialState: BlogType = {
  data: {
    _id: "",
    img: "",
    title: "",
    text: "",
  },
};

const slice = createSlice({
  name: "blog-once",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBlog.fulfilled, (state, action) => {
      state.data = action.payload.data;
    });
  },
});
export const blogReducer = slice.reducer;

export const getBlog = createAsyncThunk(
  "blog-once/get",
  async (param: { id: string }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(tableWaitAC({ tableWait: true }));
      let res = await adminAPI.getBlog(param.id);
      dispatch(tableWaitAC({ tableWait: false }));
      return {
        data: res.data,
      };
    } catch (e) {
      dispatch(tableWaitAC({ tableWait: false }));
      HandleError(e, dispatch);
      return rejectWithValue(null);
    }
  }
);
