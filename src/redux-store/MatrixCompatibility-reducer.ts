import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { personalMatrixAPI } from "../API/API";
import { HandleError } from "../utils/errors";
import { MatrixCompatibility } from "../type/matrixCompatibility-type";
import { subAC } from "./registration-login-auth";
import { matrixWaitAC } from "./error-wait-reducer";

const initialState: MatrixCompatibility = {
  data: {
    isWhyDidYouMeet: [],
    isTheSpiritualEssenceOfTheCouple: [],
    isMaterialKarma: [],
    isCouplesSpiritualKarma: [],
    isGenericTasksOfPartners: [],
    isCouplesWellBeing: [],
    isThePurposeOfTheCouple: [],
  },
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
      state.data = action.payload.data;
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
      datePartnerOne: string;
      datePartnerTwo: string;
      subscribe: string;
      id: string;
    },
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(matrixWaitAC({ matrixWait: true }));
      dispatch(logOutMatrixCompatibilityAC());
      const res = await personalMatrixAPI.getMatrixCompatibility(
        param.isWhyDidYouMeet,
        param.isTheSpiritualEssenceOfTheCouple,
        param.isMaterialKarma,
        param.isCouplesSpiritualKarma,
        param.isGenericTasksOfPartners,
        param.isCouplesWellBeing,
        param.isThePurposeOfTheCouple,
        param.datePartnerOne,
        param.datePartnerTwo,
        param.subscribe,
        param.id
      );
      if (res.data.subscription) {
        dispatch(subAC({ sub: res.data.subscription }));
      }
      dispatch(matrixWaitAC({ matrixWait: false }));
      return { data: res.data };
    } catch (e) {
      dispatch(matrixWaitAC({ matrixWait: false }));
      HandleError(e, dispatch);
      return rejectWithValue(null);
    }
  }
);
