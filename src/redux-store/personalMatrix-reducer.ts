import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PersonalMatrix } from "../type/personalMatrix-type";
import { personalMatrixAPI } from "../API/API";
import { HandleError } from "../utils/errors";
import { subAC } from "./registration-login-auth";
import { matrixWaitAC } from "./error-wait-reducer";

const initialState: PersonalMatrix = {
  data: {
    isPersonalQualities: {
      isGeneral: [],
      isPositive: [],
      isNegative: [],
    },
    isTalents: {
      isTalentsOfDad: [],
      isTalentsOfMother: [],
      isTalentsOfGod: [],
    },
    isPastLife: [],
    isHealth: {
      Saxasrara: [],
      Adjna: [],
      Vishydha: [],
      Anaxata: [],
      Manipura: [],
      Muladxara: [],
      Svadxistana: [],
    },
    isPurpose: {
      isPurpose20_40: [],
      isPurpose40_60: [],
      isGeneralPurpose: [],
    },
    isPersonalPowerCode: [],
    isLove: {
      isLoveMenOrWomen: [],
      isCharacterLoveMenOrWomen: [],
      loveTotal: [],
    },
    isMoney: {
      moneyLineOfActivity: [],
      moneySuccess: [],
      moneyFlow: [],
    },
    isParents: {
      parentMenLine: [],
      parentWomenLine: [],
      parentResentment: [],
    },
    isChildren: [],
    isManagement: [],
    isYear: [],
    isProgram: [{ _id: "", value: "", title: "", text: "" }],
    dateRepeat: false,
  },
};

const slice = createSlice({
  name: "personalMatrix",
  initialState,
  reducers: {
    logOutMatrixAC() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPersonalMatrix.fulfilled, (state, action) => {
      state.data = action.payload.data;
    });
  },
});

export const personalMatrixReducer = slice.reducer;
export const { logOutMatrixAC } = slice.actions;
export const getPersonalMatrix = createAsyncThunk(
  "personalMatrix/post",
  async (
    param: {
      isProgram: string[];
      isPersonalQualities: number[];
      talentsOfDad: number[];
      talentsOfMother: number[];
      talentsOfGod: number[];
      isPastLife: string;
      IsHealthSaxasrara: number[];
      IsHealthAdjna: number[];
      IsHealthVishydha: number[];
      IsHealthAnaxata: number[];
      IsHealthManipura: number[];
      IsHealthMuladxara: number[];
      isHealthSvadxistana: number[];
      IsPurpose: number[];
      isPersonalPowerCode: number[];
      Gender: string;
      isLove: number[];
      MoneyFlow: number[];
      moneySuccess: number[];
      isMoney: number[];
      parentMenLine: number[];
      parentWomenLine: number[];
      parentResentment: number[];
      isChildren: number[];
      isManagement: number[];
      date: string;
      name: string;
      subscribe?: string;
      id?: string;
    },
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(matrixWaitAC({ matrixWait: true }));
      dispatch(logOutMatrixAC());
      const res = await personalMatrixAPI.getPersonalMatrix(
        param.isProgram,
        param.isPersonalQualities,
        param.talentsOfDad,
        param.talentsOfMother,
        param.talentsOfGod,
        param.isPastLife,
        param.IsHealthSaxasrara,
        param.IsHealthAdjna,
        param.IsHealthVishydha,
        param.IsHealthAnaxata,
        param.IsHealthManipura,
        param.IsHealthMuladxara,
        param.isHealthSvadxistana,
        param.IsPurpose,
        param.isPersonalPowerCode,
        param.Gender,
        param.isLove,
        param.isMoney,
        param.moneySuccess,
        param.MoneyFlow,
        param.parentMenLine,
        param.parentWomenLine,
        param.parentResentment,
        param.isChildren,
        param.isManagement,
        param.date,
        param.name,
        param.id,
        param.subscribe
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
