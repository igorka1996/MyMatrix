import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authAPI } from "../API/API";
import { initialAC, statusAC } from "./error-wait-reducer";
import { HandleError } from "../utils/errors";

type InitialStateType = {
  name: string;
  surname: string;
  email: string;
  id: string;
  token: string;
  auth: boolean;
  subscription: string | number | null;
};

const initialState: InitialStateType = {
  name: "",
  surname: "",
  email: "",
  id: "",
  token: "",
  auth: false,
  subscription: null,
};

const slice = createSlice({
  name: "registration-auth-login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registrationThunk.fulfilled, (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.surname = action.payload.surname;
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.auth = action.payload.auth;
    });
    builder.addCase(payAndRegistrationThunk.fulfilled, (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.surname = action.payload.surname;
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.auth = action.payload.auth;
      window.location.assign(action.payload.url);
    });
    builder.addCase(authThunk.fulfilled, (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.surname = action.payload.surname;
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.auth = action.payload.auth;
    });
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.surname = action.payload.surname;
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.auth = action.payload.auth;
    });
    builder.addCase(logOutThunk.fulfilled, (state, action) => {
      state.name = "";
      state.email = "";
      state.surname = "";
      state.id = "";
      state.token = "";
      state.auth = action.payload.auth;
    });
  },
});

export const registrationReducer = slice.reducer;

export const registrationThunk = createAsyncThunk(
  "registration-auth-login/registration",
  async (
    param: {
      name: string;
      surname: string;
      email: string;
      password: string;
      check: boolean;
      phone: string;
    },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const res = await authAPI.registration({
        name: param.name,
        surname: param.surname,
        email: param.email,
        password: param.password,
        check: param.check,
        phone: param.phone,
      });
      dispatch(initialAC({ initial: true }));
      return {
        name: res.data.name,
        surname: res.data.surname,
        email: res.data.email,
        id: res.data._id,
        token: res.data.token,
        auth: true,
      };
    } catch (e) {
      HandleError(e, dispatch);
      return rejectWithValue(null);
    }
  }
);

export const authThunk = createAsyncThunk(
  "registration-auth-login/auth/me",
  async (param, { dispatch, rejectWithValue }) => {
    try {
      let res = await authAPI.authMe();
      dispatch(initialAC({ initial: true }));
      return {
        name: res.data.name,
        surname: res.data.surname,
        email: res.data.email,
        id: res.data._id,
        token: res.data.token,
        auth: true,
      };
    } catch (e) {
      dispatch(initialAC({ initial: true }));
      return rejectWithValue(null);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "registration-auth-login/auth",
  async (
    param: { email: string; password: string; check: boolean },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const res = await authAPI.login({
        email: param.email,
        password: param.password,
        check: param.check,
      });
      dispatch(initialAC({ initial: true }));
      return {
        name: res.data.name,
        surname: res.data.surname,
        email: res.data.email,
        id: res.data._id,
        token: res.data.token,
        auth: true,
      };
    } catch (e) {
      HandleError(e, dispatch);
      return rejectWithValue(null);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  "registration-auth-login/deleteme",
  async (param, { dispatch, rejectWithValue }) => {
    try {
      await authAPI.deleteMe();
      return { auth: false };
    } catch (e) {
      HandleError(e, dispatch);
      return rejectWithValue(null);
    }
  }
);

export const forgotPasswordThunk = createAsyncThunk(
  "registration-auth-login/forgot",
  async (param: { email: string }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(statusAC({ status: "loading" }));
      await authAPI.forgot({ email: param.email });
      dispatch(statusAC({ status: "success" }));
    } catch (e) {
      HandleError(e, dispatch);
      return rejectWithValue(null);
    }
  }
);

export const resetPasswordThunk = createAsyncThunk(
  "registration-auth-login/forgot",
  async (
    param: { token: string; password: string },
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(statusAC({ status: "loading" }));
      await authAPI.resetPass({ token: param.token, password: param.password });
      dispatch(statusAC({ status: "success" }));
    } catch (e) {
      HandleError(e, dispatch);
      return rejectWithValue(null);
    }
  }
);

export const payAndRegistrationThunk = createAsyncThunk(
  "registration-auth-login/payregistration",
  async (
    param: {
      price: number;
      nameProduct: string;
      name: string;
      surname: string;
      email: string;
      password: string;
      check: boolean;
      phone: string;
    },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const res = await authAPI.payRegistration({
        item: {
          name: param.nameProduct,
          price: param.price,
        },
        registration: {
          name: param.name,
          surname: param.surname,
          email: param.email,
          password: param.password,
          check: param.check,
          phone: param.phone,
        },
      });
      return {
        name: res.data.name,
        surname: res.data.surname,
        email: res.data.email,
        id: res.data._id,
        token: res.data.token,
        auth: true,
        url: res.data.url,
      };
    } catch (e) {
      HandleError(e, dispatch);
      return rejectWithValue(null);
    }
  }
);
