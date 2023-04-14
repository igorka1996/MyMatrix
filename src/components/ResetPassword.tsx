import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import { passValidation } from "../validations/validationRegistrationForm";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import FormHelperText from "@mui/material/FormHelperText";
import { SubmitHandler, useForm } from "react-hook-form";
import { resetPasswordThunk } from "../redux-store/registration-login-auth";
import { useAppDispatch, useAppSelector } from "../redux-store/store";
import { CircularProgress } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface FormRegistration {
  password: string;
  confirmpass: string;
}

export const ResetPassword = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword1, setShowPassword1] = React.useState(false);
  const status = useAppSelector((state) => state.errorReducer.status);
  const params = useParams();

  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    formState: { errors, isValid },
    register,
    getValues,
  } = useForm<FormRegistration>({
    mode: "all",
  });
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
  const password = getValues("password");
  const onSubmit: SubmitHandler<FormRegistration> = (data) => {
    dispatch(
      resetPasswordThunk({
        password: data.password,
        token: params.token ? params.token : "d",
      })
    );
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div className={"forgot"}>
      {status === "loading" ? (
        <CircularProgress />
      ) : status === "success" ? (
        <form className={"forgotBox"} onSubmit={handleSubmit(onSubmit)}>
          <span className={"forgotSpan"}>Пароль успешно изменен</span>
          <CheckCircleIcon style={{ fontSize: 100, color: "green" }} />
          <Link
            style={{ fontSize: 25, marginTop: 20 }}
            className={"batonStandart"}
            to={"/welcome"}
          >
            Войти в профиль с новым паролем
          </Link>
        </form>
      ) : (
        <form className={"forgotBox"} onSubmit={handleSubmit(onSubmit)}>
          <span className={"forgotSpan"}>Введите свой новый пароль</span>
          <div className={"divLogin"}>
            <FormControl className={"forgotEmail"} variant="standard">
              <InputLabel
                error={!!errors.password?.message}
                htmlFor="standard-adornment-password"
              >
                Новый пароль
              </InputLabel>
              <Input
                error={!!errors.password?.message}
                {...register("password", passValidation)}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <FormHelperText error={!!errors.password?.message}>
                {errors.password?.message}
              </FormHelperText>
            </FormControl>
          </div>
          <div className={"divLogin"}>
            <FormControl className={"forgotEmail"} variant="standard">
              <InputLabel
                error={!!errors.confirmpass?.message}
                htmlFor="standard-adornment-password"
              >
                Подтверждение пароля
              </InputLabel>
              <Input
                error={!!errors.confirmpass?.message}
                {...register("confirmpass", {
                  validate: {
                    passConf: (value: string) => {
                      if (password !== value) {
                        return "Пароли не совпадают";
                      }
                      return true;
                    },
                  },
                })}
                type={showPassword1 ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword1}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword1 ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <FormHelperText error={!!errors.confirmpass?.message}>
                {errors.confirmpass?.message}
              </FormHelperText>
            </FormControl>
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
