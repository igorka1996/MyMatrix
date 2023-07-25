import React from "react";
import TextField from "@mui/material/TextField";
import {
  emailValidation,
  passValidation,
} from "../validations/validationRegistrationForm";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import FormHelperText from "@mui/material/FormHelperText";
import { Checkbox, FormControlLabel } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginThunk } from "../redux-store/registration-login-auth";
import { useAppDispatch } from "../redux-store/store";
import { Link } from "react-router-dom";
import "./Login.scss";

interface FormRegistration {
  email: string;
  password: string;
  check: boolean;
}

export const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    formState: { errors, isValid },
    register,
  } = useForm<FormRegistration>({
    mode: "onBlur",
  });
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const onSubmit: SubmitHandler<FormRegistration> = (data) => {
    dispatch(
      loginThunk({
        email: data.email,
        password: data.password,
        check: data.check,
      })
    );
  };

  return (
    <form className={"formLoginRgistr"} onSubmit={handleSubmit(onSubmit)}>
      <span className={"loginSpan"}>Войти в личный кабинет</span>
      <div className={"divLogin"}>
        <TextField
          className={"formPassAndMail"}
          {...register("email", emailValidation)}
          label="Ваш Email"
          multiline
          maxRows={4}
          variant="standard"
          error={!!errors.email?.message}
          helperText={errors.email?.message}
        />
      </div>
      <div className={"divLogin"}>
        <FormControl className={"formPassAndMail"} variant="standard">
          <InputLabel
            error={!!errors.password?.message}
            htmlFor="standard-adornment-password"
          >
            Ваш пароль
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
      <FormControlLabel
        className={"saveMe"}
        control={<Checkbox defaultChecked {...register("check")} />}
        label="Запомнить меня"
      />
      <button
        style={{ padding: "5px 40px" }}
        className={`batonStandartSearch + ' ' + ${!isValid ? "dis" : ""}`}
        disabled={!isValid}
        type={"submit"}
      >
        Войти
      </button>
      <Link className={"forgotLink"} to={"/forgot"}>
        Забыли свой пароль?
      </Link>
    </form>
  );
};
