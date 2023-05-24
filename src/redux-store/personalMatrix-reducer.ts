import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PersonalMatrix } from "../type/personalMatrix-type";
import { personalMatrixAPI } from "../API/API";
import { HandleError } from "../utils/errors";
import { subAC } from "./registration-login-auth";

const initialState: PersonalMatrix = {
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
      state.isPersonalQualities = action.payload.isPersonalQualities;
      state.isTalents = action.payload.isTalents;
      state.isPastLife = action.payload.isPastLife;
      state.isHealth = action.payload.isHealth;
      state.isPurpose = action.payload.isPurpose;
      state.isPersonalPowerCode = action.payload.isPersonalPowerCode;
      state.isLove = action.payload.isLove;
      state.isMoney = action.payload.isMoney;
      state.isParents = action.payload.isParents;
      state.isChildren = action.payload.isChildren;
      state.isManagement = action.payload.isManagement;
      state.isYear = action.payload.isYear;
    });
    builder.addCase(getPersonalMatrixLite.fulfilled, (state, action) => {
      state.isPersonalQualities = action.payload.isPersonalQualities;
      state.isYear = action.payload.isYear;
    });
  },
});

export const personalMatrixReducer = slice.reducer;
export const { logOutMatrixAC } = slice.actions;
export const getPersonalMatrix = createAsyncThunk(
  "personalMatrix/post",
  async (
    param: {
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
      subscribe: string;
      id: string;
    },
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(logOutMatrixAC());
      const res = await personalMatrixAPI.getPersonalMatrix(
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

export const getPersonalMatrixLite = createAsyncThunk(
  "personalMatrixLite/get",
  async (
    param: {
      isPersonalQualities: number[];
      Gender: string;
    },
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(logOutMatrixAC());
      const res = await personalMatrixAPI.getPersonalMatrixLite(
        param.isPersonalQualities,
        param.Gender
      );
      return res.data;
    } catch (e) {
      HandleError(e, dispatch);
      return rejectWithValue(null);
    }
  }
);
