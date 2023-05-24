import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { personalMatrixAPI } from "../API/API";
import { HandleError } from "../utils/errors";
import { PersonalMatrixChildren } from "../type/personalMatrixChildren-type";
import { subAC } from "./registration-login-auth";

const initialState: PersonalMatrixChildren = {
  isPersonalQualitiesChildren: {
    isCharacteristicsOfQualities: [],
    isRecommendationsForParents: [],
    isChildInCommunication: [],
  },
  isChildTalents: {
    isBirthTalents: [],
    isTalentsInTheFemaleLine: [],
    isTalentsInTheMaleLine: [],
    isDirectionsOfHobbiesAndHobbyGroups: [],
  },
  isRelationshipWithParents: {
    isWhatToConsiderWhenRaisingAChild: [],
    isLessonsOnTheGenderOfTheMaleLine: [],
    isLessonsOnTheGenderOfTheFemaleLine: [],
  },
  isSelfRrealizationOfTheChild: {
    isDirectionOfActivityOptionsForFutureProfessions: [],
    isForSuccessItIsImportant: [],
  },
  isPurposeOfTheChild: {
    isFirstPersonalPurpose: [],
    isSecondSocialPurpose: [],
  },
  isSubconsciousScript: [],
  isYear: [],
};

const slice = createSlice({
  name: "personalMatrixChildren",
  initialState,
  reducers: {
    logOutMatrixChildrenAC() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPersonalMatrixChildren.fulfilled, (state, action) => {
      state.isPersonalQualitiesChildren =
        action.payload.isPersonalQualitiesChildren;
      state.isChildTalents = action.payload.isChildTalents;
      state.isRelationshipWithParents =
        action.payload.isRelationshipWithParents;
      state.isSelfRrealizationOfTheChild =
        action.payload.isSelfRrealizationOfTheChild;
      state.isPurposeOfTheChild = action.payload.isPurposeOfTheChild;
      state.isSubconsciousScript = action.payload.isSubconsciousScript;
      state.isYear = action.payload.isYear;
    });
    builder.addCase(
      getPersonalMatrixChildrenLite.fulfilled,
      (state, action) => {
        state.isPersonalQualitiesChildren =
          action.payload.isPersonalQualitiesChildren;
        state.isYear = action.payload.isYear;
      }
    );
  },
});

export const personalMatrixChildrenReducer = slice.reducer;
export const { logOutMatrixChildrenAC } = slice.actions;
export const getPersonalMatrixChildren = createAsyncThunk(
  "personalMatrixChildren/post",
  async (
    param: {
      isPersonalQualitiesChildren: number[];
      isBirthTalents: number[];
      isTalentsInTheFemaleLine: number[];
      isTalentsInTheMaleLine: number[];
      isWhatToConsiderWhenRaisingAChild: number[];
      isLessonsOnTheGenderOfTheMaleLine: number[];
      isLessonsOnTheGenderOfTheFemaleLine: number[];
      isDirectionOfActivityOptionsForFutureProfessions: number[];
      isForSuccessItIsImportant: number[];
      isFirstPersonalPurpose: number[];
      isSecondSocialPurpose: number[];
      isSubconsciousScript: number[];
      Gender: string;
      subscribe: string;
      id: string;
    },
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(logOutMatrixChildrenAC());
      const res = await personalMatrixAPI.getPersonalMatrixChildren(
        param.isPersonalQualitiesChildren,
        param.isBirthTalents,
        param.isTalentsInTheFemaleLine,
        param.isTalentsInTheMaleLine,
        param.isWhatToConsiderWhenRaisingAChild,
        param.isLessonsOnTheGenderOfTheMaleLine,
        param.isLessonsOnTheGenderOfTheFemaleLine,
        param.isDirectionOfActivityOptionsForFutureProfessions,
        param.isForSuccessItIsImportant,
        param.isFirstPersonalPurpose,
        param.isSecondSocialPurpose,
        param.isSubconsciousScript,
        param.Gender,
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

export const getPersonalMatrixChildrenLite = createAsyncThunk(
  "personalMatrixChildrenLite/get",
  async (
    param: {
      isPersonalQualitiesChildren: number[];
      Gender: string;
    },
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(logOutMatrixChildrenAC());
      const res = await personalMatrixAPI.getPersonalMatrixChildrenLite(
        param.isPersonalQualitiesChildren,
        param.Gender
      );
      return res.data;
    } catch (e) {
      HandleError(e, dispatch);
      return rejectWithValue(null);
    }
  }
);
