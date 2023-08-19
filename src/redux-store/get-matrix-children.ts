import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { adminAPI } from "../API/API";

export type Children = {
  id: string;
  data: {
    isPersonalQualitiesChildren: {
      isCharacteristicsOfQualities: [];
      isRecommendationsForParents: [];
      isChildInCommunication: [];
    };
    isRelationshipWithParents: {
      isWhatToConsiderWhenRaisingAChild: [];
      isLessonsOnTheGenderOfTheMaleLine: [];
      isLessonsOnTheGenderOfTheFemaleLine: [];
    };
    isChildTalents: {
      isTalentsFomBirth: [];
      isTalentsInTheMaleLine: [];
      isTalentsInTheFemaleLine: [];
      isDirectionsOfHobbiesAndHobbyGroups: [];
    };
    isSelfRrealizationOfTheChild: {
      isDirectionOfActivityOptionsForFutureProfessions: [];
      isForSuccessItIsImportant: [];
    };
    isPurposeOfTheChild: {
      isFirstPersonalPurpose: [];
      isSecondSocialPurpose: [];
    };
    isSubconsciousScript: [];
    isYear: [];
  };
};

const initialState: Children = {
  id: "64de1238dafa3bd3c5bfe8d0",
  data: {
    isPersonalQualitiesChildren: {
      isCharacteristicsOfQualities: [],
      isRecommendationsForParents: [],
      isChildInCommunication: [],
    },
    isRelationshipWithParents: {
      isWhatToConsiderWhenRaisingAChild: [],
      isLessonsOnTheGenderOfTheMaleLine: [],
      isLessonsOnTheGenderOfTheFemaleLine: [],
    },
    isChildTalents: {
      isTalentsFomBirth: [],
      isTalentsInTheMaleLine: [],
      isTalentsInTheFemaleLine: [],
      isDirectionsOfHobbiesAndHobbyGroups: [],
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
  name: "get-matrix-children-admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMatrixChildrenAdmin.fulfilled, (state, action) => {
      state.data = action.payload.data;
    });
  },
});

export const getMatrixChildren = slice.reducer;

export const getMatrixChildrenAdmin = createAsyncThunk(
  "get-matrix-children-admin/get",
  async (param: { id: string }, { dispatch, rejectWithValue }) => {
    try {
      let res = await adminAPI.getMatrixChildrenAdmin(param.id);
      return {
        data: res.data,
      };
    } catch (e) {
      return rejectWithValue(null);
    }
  }
);

export const updateMatrixChildrenAdmin = createAsyncThunk(
  "get-matrix-children-admin/update",
  async (
    param: {
      index: number;
      name: string;
      id: string;
      description: string;
      category: string;
      gender?: string;
    },
    { dispatch, rejectWithValue }
  ) => {
    try {
      let res = await adminAPI.updateMatrixChildrenAdmin({
        index: param.index,
        description: param.description,
        id: param.id,
        name: param.name,
        category: param.category,
        gender: param.gender,
      });
      console.log(res.data.data);
      return {
        data: res.data.data,
        name: res.data.name,
      };
    } catch (e) {
      return rejectWithValue(null);
    }
  }
);
