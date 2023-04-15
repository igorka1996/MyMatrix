import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type StatusType = "idle" | "loading" | "success";

type InitialStateType = {
  error: string;
  success: string;
  status: StatusType;
  initialize: boolean;
  avatarWait: boolean;
  updateUser: boolean;
};

const initialState: InitialStateType = {
  success: "",
  error: "",
  status: "idle",
  initialize: false,
  avatarWait: false,
  updateUser: false,
};

const slice = createSlice({
  name: "error-initialized-status",
  initialState,
  reducers: {
    errorAC(state, action: PayloadAction<{ error: string }>) {
      state.error = action.payload.error;
    },
    successAC(state, action: PayloadAction<{ success: string }>) {
      state.success = action.payload.success;
    },
    statusAC(state, action: PayloadAction<{ status: StatusType }>) {
      state.status = action.payload.status;
    },
    initialAC(state, action: PayloadAction<{ initial: boolean }>) {
      state.initialize = action.payload.initial;
    },
    avatarWaitAC(state, action: PayloadAction<{ avatarWait: boolean }>) {
      state.avatarWait = action.payload.avatarWait;
    },
    updateUserAC(state, action: PayloadAction<{ updateUser: boolean }>) {
      state.updateUser = action.payload.updateUser;
    },
  },
});

export const {
  successAC,
  updateUserAC,
  avatarWaitAC,
  errorAC,
  statusAC,
  initialAC,
} = slice.actions;
export const errorReducer = slice.reducer;
