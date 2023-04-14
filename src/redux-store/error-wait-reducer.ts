import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type StatusType = "idle" | "loading" | "success";

type InitialStateType = {
  error: string;
  status: StatusType;
  initialize: boolean;
};

const initialState: InitialStateType = {
  error: "",
  status: "idle",
  initialize: false,
};

const slice = createSlice({
  name: "error-initialized-status",
  initialState,
  reducers: {
    errorAC(state, action: PayloadAction<{ error: string }>) {
      state.error = action.payload.error;
    },
    statusAC(state, action: PayloadAction<{ status: StatusType }>) {
      state.status = action.payload.status;
    },
    initialAC(state, action: PayloadAction<{ initial: boolean }>) {
      state.initialize = action.payload.initial;
    },
  },
});

export const { errorAC, statusAC, initialAC } = slice.actions;
export const errorReducer = slice.reducer;
