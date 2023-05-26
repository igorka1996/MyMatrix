import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { personalMatrixAPI } from "../API/API";
import { HandleError } from "../utils/errors";
import { PersonalMatrixChildren } from "../type/personalMatrixChildren-type";
import { subAC } from "./registration-login-auth";

const initialState: PersonalMatrixChildren = {
  data: {
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
  },
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
      state.data = action.payload.data;
    });
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
      date: string;
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
        param.date,
        param.subscribe,
        param.id
      );
      if (res.data.subscription) {
        dispatch(subAC({ sub: res.data.subscription }));
      }
      return { data: res.data };
    } catch (e) {
      HandleError(e, dispatch);
      return rejectWithValue(null);
    }
  }
);
