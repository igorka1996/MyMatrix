import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { personalMatrixAPI } from "../API/API";
import { HandleError } from "../utils/errors";
import { MatrixCompatibility } from "../type/matrixCompatibility-type";
import { subAC } from "./registration-login-auth";

const initialState: MatrixCompatibility = {
  isWhyDidYouMeet: [],
  isTheSpiritualEssenceOfTheCouple: [],
  isMaterialKarma: [],
  isCouplesSpiritualKarma: [],
  isGenericTasksOfPartners: [],
  isCouplesWellBeing: [],
  isThePurposeOfTheCouple: [],
};

const slice = createSlice({
  name: "MatrixCompatibility",
  initialState,
  reducers: {
    logOutMatrixCompatibilityAC() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMatrixCompatibility.fulfilled, (state, action) => {
      state.isWhyDidYouMeet = action.payload.isWhyDidYouMeet;
      state.isTheSpiritualEssenceOfTheCouple =
        action.payload.isTheSpiritualEssenceOfTheCouple;
      state.isMaterialKarma = action.payload.isMaterialKarma;
      state.isCouplesSpiritualKarma = action.payload.isCouplesSpiritualKarma;
      state.isGenericTasksOfPartners = action.payload.isGenericTasksOfPartners;
      state.isCouplesWellBeing = action.payload.isCouplesWellBeing;
      state.isThePurposeOfTheCouple = action.payload.isThePurposeOfTheCouple;
    });
    builder.addCase(getMatrixCompatibilityLite.fulfilled, (state, action) => {
      state.isWhyDidYouMeet = action.payload.isWhyDidYouMeet;
    });
  },
});

export const MatrixCompatibilityReducer = slice.reducer;
export const { logOutMatrixCompatibilityAC } = slice.actions;
export const getMatrixCompatibility = createAsyncThunk(
  "MatrixCompatibility/post",
  async (
    param: {
      isWhyDidYouMeet: number[];
      isTheSpiritualEssenceOfTheCouple: number[];
      isMaterialKarma: number[];
      isCouplesSpiritualKarma: number[];
      isGenericTasksOfPartners: number[];
      isCouplesWellBeing: number[];
      isThePurposeOfTheCouple: number[];
      subscribe: string;
      id: string;
    },
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(logOutMatrixCompatibilityAC());
      const res = await personalMatrixAPI.getMatrixCompatibility(
        param.isWhyDidYouMeet,
        param.isTheSpiritualEssenceOfTheCouple,
        param.isMaterialKarma,
        param.isCouplesSpiritualKarma,
        param.isGenericTasksOfPartners,
        param.isCouplesWellBeing,
        param.isThePurposeOfTheCouple,
        param.subscribe,
        param.id
      );
      dispatch(subAC({ sub: res.data.subscription }));
      return res.data;
    } catch (e) {
      HandleError(e, dispatch);
      return rejectWithValue(null);
    }
  }
);

export const getMatrixCompatibilityLite = createAsyncThunk(
  "MatrixCompatibilityLite/get",
  async (
    param: {
      isWhyDidYouMeet: number[];
    },
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(logOutMatrixCompatibilityAC());
      const res = await personalMatrixAPI.getMatrixCompatibilityLite(
        param.isWhyDidYouMeet
      );
      return res.data;
    } catch (e) {
      HandleError(e, dispatch);
      return rejectWithValue(null);
    }
  }
);
