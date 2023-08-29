import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { adminAPI } from "../API/API";
import { successAC, userAdminAC } from "./error-wait-reducer";
import { HandleError } from "../utils/errors";

export type isDescription = {
  _id: string;
  value: number;
  text: string;
};

export type Data = {
  isWhyDidYouMeet: isDescription[];
  isTheSpiritualEssenceOfTheCouple: isDescription[];
  isMaterialKarma: isDescription[];
  isCouplesSpiritualKarma: isDescription[];
  isGenericTasksOfPartners: isDescription[];
  isCouplesWellBeing: isDescription[];
  isThePurposeOfTheCouple: isDescription[];
};

export type Compatibility = {
  id: string;
  data: Data;
};
const initialState: Compatibility = {
  id: "6464a3d5788b78ec34fa3ee6",
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
  name: "get-matrix-compatibility-admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMatrixCompatibilityAdmin.fulfilled, (state, action) => {
      state.data = action.payload.data;
    });
    builder.addCase(
      updateMatrixCompatibilityAdmin.fulfilled,
      (state, action) => {
        const name = action.payload.name as keyof Data;
        const dataArray = state.data[name];
        for (let i = 0; i < dataArray.length; i++) {
          if (dataArray[i].value === action.payload.data.value) {
            dataArray[i] = action.payload.data;
            break;
          }
        }
      }
    );
  },
});

export const getMatrixCompatibility = slice.reducer;

export const getMatrixCompatibilityAdmin = createAsyncThunk(
  "get-matrix-compatibility-admin/get",
  async (param: { id: string }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(userAdminAC({ userAdmin: true }));
      let res = await adminAPI.getMatrixCompatibilityAdmin(param.id);
      dispatch(userAdminAC({ userAdmin: false }));
      return {
        data: res.data,
      };
    } catch (e) {
      dispatch(userAdminAC({ userAdmin: false }));
      HandleError(e, dispatch);
      return rejectWithValue(null);
    }
  }
);

export const updateMatrixCompatibilityAdmin = createAsyncThunk(
  "get-matrix-compatibility-admin/update",
  async (
    param: { index: number; name: string; id: string; description: string },
    { dispatch, rejectWithValue }
  ) => {
    try {
      let res = await adminAPI.updateMatrixCompatibilityAdmin({
        index: param.index,
        description: param.description,
        id: param.id,
        name: param.name,
      });
      dispatch(successAC({ success: "Данные успешно изменены" }));
      return {
        data: res.data.data,
        name: res.data.name,
      };
    } catch (e) {
      HandleError(e, dispatch);
      return rejectWithValue(null);
    }
  }
);
