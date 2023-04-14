import React from "react";
import TextField from "@mui/material/TextField";
import { emailValidation } from "../../validations/validationRegistrationForm";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../redux-store/store";
import { forgotPasswordThunk } from "../../redux-store/registration-login-auth";
import "./Forgot.scss";
import { CircularProgress } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface FormRegistration {
  email: string;
}

export const ForgotPassword = () => {
  const status = useAppSelector((state) => state.errorReducer.status);
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    formState: { errors, isValid },
    register,
  } = useForm<FormRegistration>({
    mode: "all",
  });
  const onSubmit: SubmitHandler<FormRegistration> = (data) => {
    dispatch(
      forgotPasswordThunk({
        email: data.email,
      })
    );
  };

  return (
    <div className={"forgot"}>
      {status === "loading" ? (
        <CircularProgress />
      ) : status === "success" ? (
        <form className={"forgotBox"} onSubmit={handleSubmit(onSubmit)}>
          <span className={"forgotSpan"}>
            На Вашу почту была успешно <br /> отправлена сслыка на изменение
            пароля
          </span>
          <CheckCircleIcon style={{ fontSize: 100, color: "green" }} />
        </form>
      ) : (
        <form className={"forgotBox"} onSubmit={handleSubmit(onSubmit)}>
          <span className={"forgotSpan"}>
            Введите свою почту <br /> для отправки сслыки на изменеие пароля
          </span>
          <div className={"divLogin"}>
            <TextField
              className={"forgotEmail"}
              {...register("email", emailValidation)}
              label="Email"
              multiline
              maxRows={4}
              variant="standard"
              error={!!errors.email?.message}
              helperText={errors.email?.message}
            />
          </div>
          <button
            style={{ padding: "5px 40px" }}
            className={`batonStandart + ' ' + ${!isValid ? "dis" : ""}`}
            disabled={!isValid}
            type={"submit"}
          >
            Отправить
          </button>
        </form>
      )}
    </div>
  );
};
