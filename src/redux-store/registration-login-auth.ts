import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authAPI } from "../API/API";
import {
  avatarWaitAC,
  initialAC,
  statusAC,
  successAC,
  tableWaitAC,
  updateUserAC,
} from "./error-wait-reducer";
import { HandleError } from "../utils/errors";
import { logOutMatrixAC } from "./personalMatrix-reducer";

type OrdersType = {
  date: string;
  name: string;
  price: string;
  _id: string;
};

type InitialStateType = {
  name: string;
  surname: string;
  email: string;
  id: string;
  token: string;
  auth: boolean;
  subscription: any;
  avatar: string;
  phone: string;
  historyOfOrders: OrdersType[];
  totalAmount: number;
  matrixSearchHistory: {
    personal: { gender: string; name: string; date: string; _id: string }[];
    children: { gender: string; name: string; date: string; _id: string }[];
    compatibility: {
      datePartnerOne: string;
      datePartnerTwo: string;
      _id: string;
    }[];
  };
};

const initialState: InitialStateType = {
  name: "",
  surname: "",
  email: "",
  id: "",
  token: "",
  auth: false,
  subscription: [],
  avatar: "",
  phone: "",
  historyOfOrders: [],
  totalAmount: 0,
  matrixSearchHistory: {
    personal: [],
    children: [],
    compatibility: [],
  },
};
console.log(initialState);
const slice = createSlice({
  name: "registration-auth-login",
  initialState,
  reducers: {
    subAC(state, action: PayloadAction<{ sub: [] }>) {
      state.subscription = action.payload.sub;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registrationThunk.fulfilled, (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.surname = action.payload.surname;
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.auth = action.payload.auth;
      state.phone = action.payload.phone;
      state.subscription = action.payload.sub;
      state.historyOfOrders = action.payload.orders;
      state.totalAmount = action.payload.totalAmount;
      state.avatar = action.payload.avatar;
    });
    builder.addCase(payAndRegistrationThunk.fulfilled, (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.surname = action.payload.surname;
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.auth = action.payload.auth;
      state.phone = action.payload.phone;
      state.subscription = action.payload.sub;
      state.historyOfOrders = action.payload.orders;
      state.totalAmount = action.payload.totalAmount;
      state.avatar = "";
      window.location.assign(action.payload.url);
    });
    builder.addCase(authThunk.fulfilled, (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.surname = action.payload.surname;
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.auth = action.payload.auth;
      state.avatar = action.payload.avatar;
      state.phone = action.payload.phone;
      state.subscription = action.payload.sub;
      state.historyOfOrders = action.payload.orders;
      state.totalAmount = action.payload.totalAmount;
    });
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.surname = action.payload.surname;
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.auth = action.payload.auth;
      state.avatar = action.payload.avatar;
      state.subscription = action.payload.sub;
      state.historyOfOrders = action.payload.orders;
      state.totalAmount = action.payload.totalAmount;
    });
    builder.addCase(logOutThunk.fulfilled, (state, action) => {
      state.name = "";
      state.email = "";
      state.surname = "";
      state.id = "";
      state.token = "";
      state.auth = action.payload.auth;
    });
    builder.addCase(uploadAvatarThunk.fulfilled, (state, action) => {
      state.avatar = action.payload.avatar;
    });
    builder.addCase(updateUserThunk.fulfilled, (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.surname = action.payload.surname;
      state.phone = action.payload.phone;
    });
    builder.addCase(historyPersonalMatrix.fulfilled, (state, action) => {
      state.matrixSearchHistory.personal = action.payload.personal;
    });
    builder.addCase(historyChildrenMatrix.fulfilled, (state, action) => {
      state.matrixSearchHistory.children = action.payload.children;
    });
    builder.addCase(historyCompatibilityMatrix.fulfilled, (state, action) => {
      state.matrixSearchHistory.compatibility = action.payload.compatibility;
    });
  },
});

export const registrationReducer = slice.reducer;
export const { subAC } = slice.actions;
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
        phone: res.data.phone,
        sub: res.data.subscription,
        orders: res.data.historyOfOrders,
        totalAmount: res.data.totalAmount,
        auth: true,
        avatar: res.data.avatarURL,
        matrixSearchHistory: res.data.matrixSearchHistory,
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
        avatar: res.data.avatar,
        phone: res.data.phone,
        sub: res.data.subscription,
        orders: res.data.historyOfOrders,
        totalAmount: res.data.totalAmount,
        matrixSearchHistory: res.data.matrixSearchHistory,
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
      dispatch(initialAC({ initial: false }));
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
        avatar: res.data.avatar,
        sub: res.data.subscription,
        phone: res.data.phone,
        orders: res.data.historyOfOrders,
        totalAmount: res.data.totalAmount,
        matrixSearchHistory: res.data.matrixSearchHistory,
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
      dispatch(logOutMatrixAC());
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
        phone: res.data.phone,
        sub: res.data.subscription,
        orders: res.data.historyOfOrders,
        totalAmount: res.data.totalAmount,
        matrixSearchHistory: res.data.matrixSearchHistory,
        auth: true,
        url: res.data.url,
      };
    } catch (e) {
      HandleError(e, dispatch);
      return rejectWithValue(null);
    }
  }
);

export const uploadAvatarThunk = createAsyncThunk(
  "registration-auth-login/avatar",
  async (
    param: { userId: string; avatar: string },
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(avatarWaitAC({ avatarWait: true }));
      const res = await authAPI.uploadAvatar({
        avatar: param.avatar,
        userId: param.userId,
      });
      dispatch(avatarWaitAC({ avatarWait: false }));
      return {
        avatar: res.data.avatar,
      };
    } catch (e) {
      HandleError(e, dispatch);
      return rejectWithValue(null);
    }
  }
);

export const updateUserThunk = createAsyncThunk(
  "registration-auth-login/updateUser",
  async (
    param: {
      userId: string;
      name: string;
      surname: string;
      email: string;
      phone: string;
      password?: string;
    },
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(updateUserAC({ updateUser: true }));
      const res = await authAPI.updateUser({
        userId: param.userId,
        name: param.name,
        surname: param.surname,
        email: param.email,
        phone: param.phone,
        password: param.password,
      });
      dispatch(updateUserAC({ updateUser: false }));
      dispatch(successAC({ success: res.data.message }));
      return {
        name: res.data.name,
        surname: res.data.surname,
        email: res.data.email,
        phone: res.data.phone,
      };
    } catch (e) {
      HandleError(e, dispatch);
      return rejectWithValue(null);
    }
  }
);

export const historyPersonalMatrix = createAsyncThunk(
  "registration-auth-login/historyMatrixPersonal",
  async (param, { dispatch, rejectWithValue }) => {
    try {
      dispatch(tableWaitAC({ tableWait: true }));
      let res = await authAPI.historyPersonalMatrix();
      dispatch(tableWaitAC({ tableWait: false }));
      return { personal: res.data.matrixSearchHistory };
    } catch (e) {
      dispatch(tableWaitAC({ tableWait: false }));
      HandleError(e, dispatch);
      return rejectWithValue(null);
    }
  }
);

export const historyChildrenMatrix = createAsyncThunk(
  "registration-auth-login/historyMatrixChildren",
  async (param, { dispatch, rejectWithValue }) => {
    try {
      dispatch(tableWaitAC({ tableWait: true }));
      let res = await authAPI.historyChildrenMatrix();
      dispatch(tableWaitAC({ tableWait: false }));
      return { children: res.data.matrixSearchHistory };
    } catch (e) {
      dispatch(tableWaitAC({ tableWait: false }));
      HandleError(e, dispatch);
      return rejectWithValue(null);
    }
  }
);

export const historyCompatibilityMatrix = createAsyncThunk(
  "registration-auth-login/historyMatrixCompatibility",
  async (param, { dispatch, rejectWithValue }) => {
    try {
      dispatch(tableWaitAC({ tableWait: true }));
      let res = await authAPI.historyCompatibilityMatrix();
      dispatch(tableWaitAC({ tableWait: false }));
      return { compatibility: res.data.matrixSearchHistory };
    } catch (e) {
      dispatch(tableWaitAC({ tableWait: false }));
      HandleError(e, dispatch);
      return rejectWithValue(null);
    }
  }
);
