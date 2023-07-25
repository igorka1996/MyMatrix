import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Checkbox, FormControlLabel } from "@mui/material";
import {
  emailValidation,
  nameAndSurnameValidation,
  passValidation,
  phoneValidation,
} from "../validations/validationRegistrationForm";
import { useAppDispatch } from "../redux-store/store";
import { registrationThunk } from "../redux-store/registration-login-auth";
import { MuiTelInput } from "mui-tel-input";
import "./Login.scss";

interface FormRegistration {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmpass: string;
  check: boolean;
  phoneInput: string;
}

export function RegistrationForm() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword1, setShowPassword1] = React.useState(false);
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    formState: { errors, isValid },
    register,
    getValues,
    control,
  } = useForm<FormRegistration>({
    mode: "all",
  });
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const password = getValues("password");
  const onSubmit: SubmitHandler<FormRegistration> = (data) => {
    dispatch(
      registrationThunk({
        name: data.name,
        surname: data.surname,
        email: data.email,
        password: data.password,
        check: data.check,
        phone: data.phoneInput,
      })
    );
  };

  return (
    <form className={"formLoginRgistr"} onSubmit={handleSubmit(onSubmit)}>
      <span className={"loginSpan"}>Регистрация</span>
      <div className={"divLogin"}>
        <TextField
          className={"formPassAndMail"}
          {...register("name", nameAndSurnameValidation)}
          label="Имя"
          multiline
          maxRows={4}
          variant="standard"
          error={!!errors.name?.message}
          helperText={errors.name?.message}
        />
      </div>
      <div className={"divLogin"}>
        <TextField
          className={"formPassAndMail"}
          {...register("surname", nameAndSurnameValidation)}
          label="Фамилия"
          multiline
          maxRows={4}
          variant="standard"
          error={!!errors.surname?.message}
          helperText={errors.surname?.message}
        />
      </div>
      <div className={"divLogin"}>
        <Controller
          control={control}
          rules={phoneValidation}
          name={"phoneInput"}
          render={({ field, fieldState }) => (
            <MuiTelInput
              {...field}
              className={"formPassAndMail"}
              onlyCountries={["RU"]}
              defaultCountry={"RU"}
              variant="standard"
              label={"Телефон"}
              inputProps={{ maxLength: 16 }}
              helperText={fieldState.invalid ? errors.phoneInput?.message : ""}
              error={fieldState.invalid}
            />
          )}
        ></Controller>
      </div>
      <div className={"divLogin"}>
        <TextField
          {...register("email", emailValidation)}
          className={"formPassAndMail"}
          label="Email"
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
            Пароль
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
        <FormControl className={"formPassAndMail"} variant="standard">
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
      <FormControlLabel
        control={<Checkbox defaultChecked {...register("check")} />}
        label="Запомнить меня"
      />
      <button
        style={{ padding: "5px 40px", marginTop: 30 }}
        className={`batonStandartSearch + ' ' + ${!isValid ? "dis" : ""}`}
        disabled={!isValid}
        type={"submit"}
      >
        Зарегистрироваться
      </button>
    </form>
  );
}
