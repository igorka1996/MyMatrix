import axios from "axios";
import {
  avatarWaitAC,
  errorAC,
  initialAC,
  statusAC,
} from "../redux-store/error-wait-reducer";
import { Dispatch } from "@reduxjs/toolkit";
export const HandleError = (e: any, dispatch: Dispatch) => {
  const err = e as Error;
  if (axios.isAxiosError(e)) {
    dispatch(errorAC({ error: e.response?.data.message }));
    dispatch(statusAC({ status: "idle" }));
    dispatch(initialAC({ initial: true }));
    dispatch(avatarWaitAC({ avatarWait: false }));
  } else if (err) {
    dispatch(statusAC({ status: "idle" }));
    dispatch(initialAC({ initial: true }));
    dispatch(avatarWaitAC({ avatarWait: false }));
  }
};
