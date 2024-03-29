import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import { useDispatch, useSelector } from "react-redux";
import { personalMatrixReducer } from "./personalMatrix-reducer";
import { registrationReducer } from "./registration-login-auth";
import { errorReducer } from "./error-wait-reducer";
import { personalMatrixChildrenReducer } from "./personalMatrixChildren-reducer";
import { MatrixCompatibilityReducer } from "./MatrixCompatibility-reducer";
import { adminUserAll } from "./admin-all-user";
import { adminUser } from "./admin-one-user";
import { getMatrixCompatibility } from "./get-matrix-compatibility";
import { getMatrixChildren } from "./get-matrix-children";
import { getMatrixPersonal } from "./get-matrix-personal";
import { blogAdminReducer } from "./blog-admin-reducer";
import { blogReducer } from "./blog-reducer";

const rootReducers = combineReducers({
  personalMatrixReducer: personalMatrixReducer,
  registrationReducer: registrationReducer,
  errorReducer: errorReducer,
  personalMatrixChildrenReducer: personalMatrixChildrenReducer,
  MatrixCompatibilityReducer: MatrixCompatibilityReducer,
  adminUserAll: adminUserAll,
  adminUser: adminUser,
  getMatrixCompatibility: getMatrixCompatibility,
  getMatrixChildren: getMatrixChildren,
  getMatrixPersonal: getMatrixPersonal,
  blogAdminReducer: blogAdminReducer,
  blogReducer: blogReducer,
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
