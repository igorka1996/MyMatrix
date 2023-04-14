import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PersonalMatrix } from "../type/personalMatrix-type";
import { personalMatrixAPI } from "../API/API";
import { HandleError } from "../utils/errors";

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
  isTests: [],
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
  isYear: {
    isEssenceOfTheYearPlus: {
      isPlus: [],
      isMinus: [],
    },
    isCausesOfEvents: {
      isPlus: [],
      isMinus: [],
    },
  },
};

const slice = createSlice({
  name: "personalMatrix",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPersonalMatrix.fulfilled, (state, action) => {
      state.isPersonalQualities = action.payload.isPersonalQualities;
      state.isTalents = action.payload.isTalents;
      state.isPastLife = action.payload.isPastLife;
      state.isHealth = action.payload.isHealth;
      state.isPurpose = action.payload.isPurpose;
      state.isTests = action.payload.isTests;
      state.isLove = action.payload.isLove;
      state.isMoney = action.payload.isMoney;
      state.isParents = action.payload.isParents;
      state.isChildren = action.payload.isChildren;
      state.isManagement = action.payload.isManagement;
      state.isYear = action.payload.isYear;
    });
  },
});

export const personalMatrixReducer = slice.reducer;

export const getPersonalMatrix = createAsyncThunk(
  "personalMatrix/get",
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
      IsTests: number;
      Gender: string;
      isLove: number[];
      isMoney: number[];
      parentMenLine: number[];
      parentWomenLine: number[];
      parentResentment: number[];
      isChildren: number[];
      isManagement: number[];
      IsYear: number[];
    },
    { dispatch, rejectWithValue }
  ) => {
    try {
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
        param.IsTests,
        param.Gender,
        param.isLove,
        param.isMoney,
        param.parentMenLine,
        param.parentWomenLine,
        param.parentResentment,
        param.isChildren,
        param.isManagement,
        param.IsYear
      );
      return res.data;
    } catch (e) {
      HandleError(e, dispatch);
      return rejectWithValue(null);
    }
  }
);
