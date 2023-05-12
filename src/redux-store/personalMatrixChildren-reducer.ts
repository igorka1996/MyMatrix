import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { personalMatrixAPI } from "../API/API";
import { HandleError } from "../utils/errors";
import { PersonalMatrixChildren } from "../type/personalMatrixChildren-type";

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
  reducers: {},
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
  },
});

export const personalMatrixChildrenReducer = slice.reducer;

export const getPersonalMatrixChildren = createAsyncThunk(
  "personalMatrixChildren/get",
  async (
    param: {
      isPersonalQualitiesChildren: number[];
      queryIsBirthTalentsDirectionsOfHobbiesAndHobbyGroups: number[];
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
    },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const res = await personalMatrixAPI.getPersonalMatrixChildren(
        param.isPersonalQualitiesChildren,
        param.queryIsBirthTalentsDirectionsOfHobbiesAndHobbyGroups,
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
        param.Gender
      );
      return res.data;
    } catch (e) {
      HandleError(e, dispatch);
      return rejectWithValue(null);
    }
  }
);
