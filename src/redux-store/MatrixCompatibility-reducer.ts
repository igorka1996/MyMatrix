import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { personalMatrixAPI } from "../API/API";
import { HandleError } from "../utils/errors";
import { MatrixCompatibility } from "../type/matrixCompatibility-type";

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
  reducers: {},
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
  },
});

export const MatrixCompatibilityReducer = slice.reducer;

export const getMatrixCompatibility = createAsyncThunk(
  "MatrixCompatibility/get",
  async (
    param: {
      isWhyDidYouMeet: number[];
      isTheSpiritualEssenceOfTheCouple: number[];
      isMaterialKarma: number[];
      isCouplesSpiritualKarma: number[];
      isGenericTasksOfPartners: number[];
      isCouplesWellBeing: number[];
      isThePurposeOfTheCouple: number[];
    },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const res = await personalMatrixAPI.getMatrixCompatibility(
        param.isWhyDidYouMeet,
        param.isTheSpiritualEssenceOfTheCouple,
        param.isMaterialKarma,
        param.isCouplesSpiritualKarma,
        param.isGenericTasksOfPartners,
        param.isCouplesWellBeing,
        param.isThePurposeOfTheCouple
      );
      return res.data;
    } catch (e) {
      HandleError(e, dispatch);
      return rejectWithValue(null);
    }
  }
);
