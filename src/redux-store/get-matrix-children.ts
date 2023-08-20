import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { adminAPI } from "../API/API";

type Data = {
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
export type Children = {
  id: string;
  data: Data | any;
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
    builder.addCase(updateMatrixChildrenAdmin.fulfilled, (state, action) => {
      const category = state.data[action.payload.category];
      const name =
        action.payload.category === action.payload.name
          ? category
          : category[action.payload.name];
      const obj = action.payload.data;
      for (let i = 0; i < name.length; i++) {
        if (name[i].value === action.payload.index) {
          name[i] = obj;
          break;
        } else if (i === 2 && i === action.payload.index - 1) {
          name[i] = obj;
          break;
        } else if (i === 3 && i === action.payload.index - 1) {
          name[i] = obj;
          break;
        }
      }
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
      name?: string;
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
      return {
        data: res.data.data,
        name: res.data.name as keyof Data,
        category: res.data.category as keyof Data,
        gender: res.data.gender,
        index: res.data.index,
      };
    } catch (e) {
      return rejectWithValue(null);
    }
  }
);
