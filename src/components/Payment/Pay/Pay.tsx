import React from "react";
import { useAppDispatch, useAppSelector } from "../../../redux-store/store";
import { useLocation } from "react-router-dom";
import { authAPI } from "../../../API/API";
import { Button, Checkbox, FormControlLabel } from "@mui/material";
import TextField from "@mui/material/TextField";
import {
  emailValidation,
  nameAndSurnameValidation,
  passValidation,
  phoneValidation,
} from "../../../validations/validationRegistrationForm";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import FormHelperText from "@mui/material/FormHelperText";
import Box from "@mui/material/Box";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { payAndRegistrationThunk } from "../../../redux-store/registration-login-auth";
import { MuiTelInput } from "mui-tel-input";
import "./Pay.scss";
interface FormRegistration {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmpass: string;
  check: boolean;
  phoneInput: string;
}
export const Pay = () => {
  const { state } = useLocation();
  const name = useAppSelector((state) => state.registrationReducer.name);
  const surname = useAppSelector((state) => state.registrationReducer.surname);
  const mail = useAppSelector((state) => state.registrationReducer.email);
  const id = useAppSelector((state) => state.registrationReducer.id);
  const auth = useAppSelector((state) => state.registrationReducer.auth);

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
      payAndRegistrationThunk({
        nameProduct: state.name,
        price: state.price,
        name: data.name,
        surname: data.surname,
        email: data.email,
        password: data.password,
        check: data.check,
        phone: data.phoneInput,
      })
    );
  };

  const onClickTests = async () => {
    await authAPI.matrixOnce({
      id,
      item: {
        name: state.name,
        price: state.price,
      },
    });
  };

  return auth ? (
    <div className={"paySection"}>
      <span>Имя: {name}</span>
      <br />
      <span>Фамилия: {surname}</span>
      <br />
      <span>Email: {mail}</span>
      <br />
      <Button
        className={"paySection"}
        variant={"contained"}
        onClick={onClickTests}
      >
        Оплатить
      </Button>
    </div>
  ) : (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            {...register("name", nameAndSurnameValidation)}
            sx={{ m: 1, width: "25ch" }}
            label="Имя"
            multiline
            maxRows={4}
            variant="standard"
            error={!!errors.name?.message}
            helperText={errors.name?.message}
          />
          <TextField
            {...register("surname", nameAndSurnameValidation)}
            sx={{ m: 1, width: "25ch" }}
            label="Фамилия"
            multiline
            maxRows={4}
            variant="standard"
            error={!!errors.surname?.message}
            helperText={errors.surname?.message}
          />

          <Controller
            control={control}
            rules={phoneValidation}
            name={"phoneInput"}
            render={({ field, fieldState }) => (
              <MuiTelInput
                {...field}
                sx={{ m: 1, width: "25ch" }}
                onlyCountries={["RU"]}
                defaultCountry={"RU"}
                variant="standard"
                label={"Телефон"}
                inputProps={{ maxLength: 16 }}
                helperText={
                  fieldState.invalid ? errors.phoneInput?.message : ""
                }
                error={fieldState.invalid}
              />
            )}
          ></Controller>

          <TextField
            {...register("email", emailValidation)}
            sx={{ m: 1, width: "25ch" }}
            label="Email"
            multiline
            maxRows={4}
            variant="standard"
            error={!!errors.email?.message}
            helperText={errors.email?.message}
          />

          <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
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

          <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
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
          <FormControlLabel
            control={<Checkbox defaultChecked {...register("check")} />}
            label="Запомнить меня"
          />
          <Button variant={"contained"} disabled={!isValid} type={"submit"}>
            Зарегистрироваться и олатить
          </Button>
        </div>
      </form>
    </Box>
  );
};
