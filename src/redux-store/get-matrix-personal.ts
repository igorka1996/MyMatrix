import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { adminAPI } from "../API/API";
import { successAC, userAdminAC } from "./error-wait-reducer";
import { HandleError } from "../utils/errors";

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
          if (obj._id) {
            const { _id, ...data } = obj;
            name[i] = data;
            break;
          }
          name[i] = obj;
          break;
        } else if (i === 2 && i === action.payload.index - 1) {
          if (obj._id) {
            const { _id, ...data } = obj;
            name[i] = data;
            break;
          }
          name[i] = obj;
          break;
        } else if (i === 3 && i === action.payload.index - 1) {
          if (obj._id) {
            const { _id, ...data } = obj;
            name[i] = data;
            break;
          }
          name[i] = obj;
          break;
        }
      }
    });
    builder.addCase(updatePersonalProgramMatrix.fulfilled, (state, action) => {
      const category = state.data[action.payload.category];
      const obj = action.payload.data;
      for (let i = 0; i < category.length; i++) {
        if (category[i].value === action.payload.data.value) {
          category[i] = obj;
        }
      }
    });
    builder.addCase(updatePersonalPastLifeMatrix.fulfilled, (state, action) => {
      const category = state.data[action.payload.category];
      const obj = action.payload.data;
      for (let i = 0; i < category.length; i++) {
        if (category[i].value === action.payload.data.value) {
          if (obj._id) {
            const { _id, ...data } = obj;
            category[i] = data;
            break;
          }
          category[i] = obj;
        }
      }
    });
    builder.addCase(newPersonalProgramMatrix.fulfilled, (state, action) => {
      const obj = action.payload.data;
      if (obj._id) {
        const { _id, ...data } = obj;
        state.data.isProgram.push(data);
      } else {
        state.data.isProgram.push(obj);
      }
    });
    builder.addCase(newPersonalPastLifeMatrix.fulfilled, (state, action) => {
      const obj = action.payload.data;
      if (obj._id) {
        const { _id, ...data } = obj;
        state.data.isPastLife.push(data);
      } else {
        state.data.isPastLife.push(obj);
      }
    });
    builder.addCase(deletePersonalProgramMatrix.fulfilled, (state, action) => {
      state.data = action.payload.data;
    });
    builder.addCase(deletePersonalPastLifeMatrix.fulfilled, (state, action) => {
      state.data = action.payload.data;
    });
  },
});

export const getMatrixPersonal = slice.reducer;

export const getMatrixPersonalAdmin = createAsyncThunk(
  "get-matrix-personal-admin/get",
  async (param: { id: string }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(userAdminAC({ userAdmin: true }));
      let res = await adminAPI.getMatrixPersonalAdmin(param.id);
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
      let res = await adminAPI.updateMatrixPersonalAdmin({
        index: param.index,
        description: param.description,
        id: param.id,
        name: param.name,
        category: param.category,
        gender: param.gender,
      });
      dispatch(successAC({ success: "Данные успешно изменены" }));
      return {
        data: res.data.data,
        name: res.data.name,
        category: res.data.category,
        gender: res.data.gender,
        index: res.data.index,
      };
    } catch (e) {
      HandleError(e, dispatch);
      return rejectWithValue(null);
    }
  }
);

export const updatePersonalProgramMatrix = createAsyncThunk(
  "get-matrix-personal-admin/update-program",
  async (
    param: {
      index: number;
      id: string;
      description: string;
      category: string;
      value: string;
      title: string;
    },
    { dispatch, rejectWithValue }
  ) => {
    try {
      let res = await adminAPI.updatePersonalProgramMatrix({
        index: param.index,
        description: param.description,
        id: param.id,
        category: param.category,
        value: param.value,
        title: param.title,
      });
      dispatch(successAC({ success: "Данные успешно изменены" }));
      return {
        data: res.data.data,
        category: res.data.category,
        index: res.data.index,
      };
    } catch (e) {
      HandleError(e, dispatch);
      return rejectWithValue(null);
    }
  }
);

export const updatePersonalPastLifeMatrix = createAsyncThunk(
  "get-matrix-personal-admin/update-past-life",
  async (
    param: {
      index: number;
      id: string;
      description: string;
      category: string;
      value: string;
    },
    { dispatch, rejectWithValue }
  ) => {
    try {
      let res = await adminAPI.updatePersonalPastLifeMatrix({
        index: param.index,
        description: param.description,
        id: param.id,
        category: param.category,
        value: param.value,
      });
      dispatch(successAC({ success: "Данные успешно изменены" }));
      return {
        data: res.data.data,
        category: res.data.category,
        index: res.data.index,
      };
    } catch (e) {
      HandleError(e, dispatch);
      return rejectWithValue(null);
    }
  }
);

export const newPersonalProgramMatrix = createAsyncThunk(
  "get-matrix-personal-admin/new-program",
  async (
    param: {
      id: string;
      title: string;
      description: string;
      value: string;
    },
    { dispatch, rejectWithValue }
  ) => {
    try {
      let res = await adminAPI.newPersonalProgramMatrix({
        title: param.title,
        description: param.description,
        id: param.id,
        value: param.value,
      });
      dispatch(successAC({ success: "Данные успешно изменены" }));
      return {
        data: res.data.data,
      };
    } catch (e) {
      HandleError(e, dispatch);
      return rejectWithValue(null);
    }
  }
);

export const newPersonalPastLifeMatrix = createAsyncThunk(
  "get-matrix-personal-admin/new-past-life",
  async (
    param: {
      id: string;
      description: string;
      value: string;
    },
    { dispatch, rejectWithValue }
  ) => {
    try {
      let res = await adminAPI.newPersonalPastLifeMatrix({
        description: param.description,
        id: param.id,
        value: param.value,
      });
      dispatch(successAC({ success: "Данные успешно изменены" }));
      return {
        data: res.data.data,
      };
    } catch (e) {
      HandleError(e, dispatch);
      return rejectWithValue(null);
    }
  }
);

export const deletePersonalProgramMatrix = createAsyncThunk(
  "get-matrix-personal-admin/delete-program",
  async (
    param: {
      id: string;
      value: string;
    },
    { dispatch, rejectWithValue }
  ) => {
    try {
      let res = await adminAPI.deletePersonalProgramMatrix({
        id: param.id,
        value: param.value,
      });
      dispatch(successAC({ success: "Данные успешно изменены" }));
      return {
        data: res.data.data,
      };
    } catch (e) {
      HandleError(e, dispatch);
      return rejectWithValue(null);
    }
  }
);

export const deletePersonalPastLifeMatrix = createAsyncThunk(
  "get-matrix-personal-admin/delete-past-life",
  async (
    param: {
      id: string;
      value: string;
    },
    { dispatch, rejectWithValue }
  ) => {
    try {
      let res = await adminAPI.deletePersonalPastLifeMatrix({
        id: param.id,
        value: param.value,
      });
      dispatch(successAC({ success: "Данные успешно изменены" }));
      return {
        data: res.data.data,
      };
    } catch (e) {
      HandleError(e, dispatch);
      return rejectWithValue(null);
    }
  }
);
