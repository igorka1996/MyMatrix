import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { adminAPI } from "../API/API";
import { avatarWaitAC, successAC, tableWaitAC } from "./error-wait-reducer";
import { HandleError } from "../utils/errors";

export type BlogType = {
  _id: string;
  img: string;
  title: string;
  text: string;
};
export type BlogsType = {
  data: BlogType[];
};
const initialState: BlogsType = {
  data: [],
};

const slice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBlog.fulfilled, (state, action) => {
      state.data = action.payload.data;
    });
    builder.addCase(newBlog.fulfilled, (state, action) => {
      state.data.push(action.payload.blog);
    });
    builder.addCase(updateBlogImg.fulfilled, (state, action) => {
      state.data.forEach((el) => {
        if (el._id === action.payload.id) {
          el.img = action.payload.img;
        }
      });
    });

    builder.addCase(updateBlogTitle.fulfilled, (state, action) => {
      state.data.forEach((el) => {
        if (el._id === action.payload.id) {
          el.title = action.payload.title;
        }
      });
    });
    builder.addCase(updateBlogText.fulfilled, (state, action) => {
      state.data.forEach((el) => {
        if (el._id === action.payload.id) {
          el.text = action.payload.text;
        }
      });
    });
    builder.addCase(deleteBlog.fulfilled, (state, action) => {
      const index = state.data.findIndex((el) => el._id === action.payload.id);
      if (index !== -1) {
        state.data.splice(index, 1);
      }
    });
  },
});
export const blogAdminReducer = slice.reducer;

export const getAllBlog = createAsyncThunk(
  "blog/get-all-blog",
  async (param, { dispatch, rejectWithValue }) => {
    try {
      dispatch(tableWaitAC({ tableWait: true }));
      let res = await adminAPI.getAllBlog();
      dispatch(tableWaitAC({ tableWait: false }));
      return {
        data: res.data.data,
      };
    } catch (e) {
      dispatch(tableWaitAC({ tableWait: false }));
      HandleError(e, dispatch);
      return rejectWithValue(null);
    }
  }
);

export const newBlog = createAsyncThunk(
  "blog/new-blog",
  async (
    param: { img: string; title: string; text: string },
    { dispatch, rejectWithValue }
  ) => {
    try {
      let res = await adminAPI.newBlog({
        img: param.img,
        title: param.title,
        text: param.text,
      });
      dispatch(successAC({ success: "Блог успешно создан" }));
      return {
        blog: res.data.data,
      };
    } catch (e) {
      HandleError(e, dispatch);
      return rejectWithValue(null);
    }
  }
);

export const updateBlogImg = createAsyncThunk(
  "blog/new-img",
  async (param: { img: string; id: string }, { dispatch, rejectWithValue }) => {
    try {
      let res = await adminAPI.updateBlogImg({
        img: param.img,
        id: param.id,
      });
      dispatch(avatarWaitAC({ avatarWait: false }));
      dispatch(successAC({ success: "Фотография блога успешно обновлена" }));
      return {
        img: res.data.img,
        id: res.data.id,
      };
    } catch (e) {
      dispatch(avatarWaitAC({ avatarWait: false }));
      HandleError(e, dispatch);
      return rejectWithValue(null);
    }
  }
);

export const updateBlogTitle = createAsyncThunk(
  "blog/new-title",
  async (
    param: { title: string; id: string },
    { dispatch, rejectWithValue }
  ) => {
    try {
      let res = await adminAPI.updateBlogTitle({
        title: param.title,
        id: param.id,
      });
      dispatch(successAC({ success: "Заголовок успешно обновлен" }));
      return {
        title: res.data.title,
        id: res.data.id,
      };
    } catch (e) {
      HandleError(e, dispatch);
      return rejectWithValue(null);
    }
  }
);

export const updateBlogText = createAsyncThunk(
  "blog/new-text",
  async (
    param: { text: string; id: string },
    { dispatch, rejectWithValue }
  ) => {
    try {
      let res = await adminAPI.updateBlogText({
        text: param.text,
        id: param.id,
      });
      dispatch(successAC({ success: "Описание успешно обновлено" }));
      return {
        text: res.data.text,
        id: res.data.id,
      };
    } catch (e) {
      HandleError(e, dispatch);
      return rejectWithValue(null);
    }
  }
);
export const deleteBlog = createAsyncThunk(
  "blog/delete-blog",
  async (param: { id: string }, { dispatch, rejectWithValue }) => {
    try {
      let res = await adminAPI.deleteBlog({
        id: param.id,
      });
      dispatch(successAC({ success: "Блог успешно удален" }));
      return {
        id: res.data.id,
      };
    } catch (e) {
      HandleError(e, dispatch);
      return rejectWithValue(null);
    }
  }
);
