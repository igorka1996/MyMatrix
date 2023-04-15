import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useAppDispatch, useAppSelector } from "../redux-store/store";
import { successAC } from "../redux-store/error-wait-reducer";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function SnackBarSuccess() {
  const success = useAppSelector((state) => state.errorReducer.success);
  const dispatch = useAppDispatch();
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(successAC({ success: "" }));
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={!!success}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert
        style={{ zIndex: 2 }}
        onClose={handleClose}
        severity="success"
        sx={{ width: "100%" }}
      >
        {success}
      </Alert>
    </Snackbar>
  );
}
