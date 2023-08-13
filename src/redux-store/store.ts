import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import { useDispatch, useSelector } from "react-redux";
import { personalMatrixReducer } from "./personalMatrix-reducer";
import { registrationReducer } from "./registration-login-auth";
import { errorReducer } from "./error-wait-reducer";
import { personalMatrixChildrenReducer } from "./personalMatrixChildren-reducer";
import { MatrixCompatibilityReducer } from "./MatrixCompatibility-reducer";
import { adminUserAll } from "./admin-all-user";

const rootReducers = combineReducers({
  personalMatrixReducer: personalMatrixReducer,
  registrationReducer: registrationReducer,
  errorReducer: errorReducer,
  personalMatrixChildrenReducer: personalMatrixChildrenReducer,
  MatrixCompatibilityReducer: MatrixCompatibilityReducer,
  adminUserAll: adminUserAll,
});

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(thunkMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppRootStateType = ReturnType<typeof rootReducers>;
export const useAppSelector = <T>(fn: (state: AppRootStateType) => T): T => {
  return useSelector(fn);
};
//@ts-ignore
window.store = store;
