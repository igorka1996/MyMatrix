import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { adminAPI } from "../API/API";

export type Data = {
  isPersonalQualities: {
    isGeneral: [];
    isPositive: [];
    isNegative: [];
  };
  isTalents: {
    isTalentFromGod: [];
    isTalentFromTheFather: [];
    isMotherTalent: [];
  };
  isPurpose: {
    isPurpose20_40: [];
    isPurpose40_60: [];
    isGeneralPurpose: [];
  };
  isParents: {
    parentMenLine: [];
    parentWomenLine: [];
    parentResentment: [];
  };
  isLove: {
    loveMen: [];
    loveWomen: [];
    loveTotal: [];
    loveMenCharacter: [];
    loveWomenCharacter: [];
  };
  isMoney: {
    moneyLineOfActivity: [];
    moneySuccess: [];
    moneyFlow: [];
  };
  isPastLife: [];
  isHealth: [];
  isPersonalPowerCode: [];
  isChildren: [];
  isManagement: [];
  isYear: [];
  isProgram: [];
};
export type Personal = {
  id: string;
  data: Data | any;
};

const initialState: Personal = {
  id: "645a5724fd9798b3dd8c0000",
  data: {
    isPersonalQualities: {
      isGeneral: [],
      isPositive: [],
      isNegative: [],
    },
    isTalents: {
      isTalentFromGod: [],
      isTalentFromTheFather: [],
      isMotherTalent: [],
    },
    isPurpose: {
      isPurpose20_40: [],
      isPurpose40_60: [],
      isGeneralPurpose: [],
    },
    isParents: {
      parentMenLine: [],
      parentWomenLine: [],
      parentResentment: [],
    },
    isLove: {
      loveMen: [],
      loveWomen: [],
      loveTotal: [],
      loveMenCharacter: [],
      loveWomenCharacter: [],
    },
    isMoney: {
      moneyLineOfActivity: [],
      moneySuccess: [],
      moneyFlow: [],
    },
    isPastLife: [],
    isHealth: [],
    isPersonalPowerCode: [],
    isChildren: [],
    isManagement: [],
    isYear: [],
    isProgram: [],
  },
};

const slice = createSlice({
  name: "get-matrix-personal-admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMatrixPersonalAdmin.fulfilled, (state, action) => {
      state.data = action.payload.data;
    });
    builder.addCase(updateMatrixPersonalAdmin.fulfilled, (state, action) => {
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

export const getMatrixPersonal = slice.reducer;

export const getMatrixPersonalAdmin = createAsyncThunk(
  "get-matrix-personal-admin/get",
  async (param: { id: string }, { dispatch, rejectWithValue }) => {
    try {
      let res = await adminAPI.getMatrixPersonalAdmin(param.id);
      return {
        data: res.data,
      };
    } catch (e) {
      return rejectWithValue(null);
    }
  }
);

export const updateMatrixPersonalAdmin = createAsyncThunk(
  "get-matrix-personal-admin/update",
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
