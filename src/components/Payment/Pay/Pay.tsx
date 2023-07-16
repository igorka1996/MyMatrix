import React, { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux-store/store";
import { Link, useLocation } from "react-router-dom";
import { authAPI } from "../../../API/API";
import { Checkbox, FormControlLabel } from "@mui/material";
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

const policyFunc = (auth: boolean) => {
  if (auth) {
    return (
      <span>
        Продолжая покупку, я принмаю условия{" "}
        <Link to={"/"}>Публичной оферты</Link>, подтверждая, что
        ознакомился(ась) с{" "}
        <Link to={"/"}>Политикой обработки персональных данных</Link> и даю свое
        согласие на <Link to={"/"}>обработку персональных данных</Link>
      </span>
    );
  } else {
    return (
      <span>
        Продолжая покупку и регистрацию, я принмаю условия{" "}
        <Link to={"/"}>Публичной оферты</Link>, подтверждая, что
        ознакомился(ась) с{" "}
        <Link to={"/"}>Политикой обработки персональных данных</Link> и даю свое
        согласие на <Link to={"/"}>обработку персональных данных</Link>
      </span>
    );
  }
};

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
  const [check, setCheck] = React.useState(false);
  const pol = policyFunc(auth);
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
        date: state?.date,
        username: state?.username,
        gender: state?.gender,
        matrix: state?.matrix,
        date1: state?.date1,
        date2: state?.date2,
      })
    );
  };
  const onChangeCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setCheck(e.currentTarget.checked);
  };
  const onClickTests = async () => {
    await authAPI.matrixOnce({
      id,
      item: {
        name: state.name,
        price: state.price,
        date: state?.date,
        username: state?.username,
        gender: state?.gender,
        matrix: state?.matrix,
        date1: state?.date1,
        date2: state?.date2,
      },
    });
  };

  const total = state.price.toString().replace(/(\d+)00(?=\s|$)/g, "$1,00");
  return auth ? (
    <div className={"paySection"}>
      <div className={"paySectionPay"}>
        <span className={"oformPay"}>Оформление покупки</span>
        <span className={"payTarif"}>
          Имя: <span className={"payPrice"}>{name}</span>
        </span>
        <span className={"payTarif"}>
          Фамилия: <span className={"payPrice"}>{surname}</span>
        </span>
        <span className={"payTarif"}>
          Почта: <span className={"payPrice"}>{mail}</span>
        </span>
        <span className={"payTarif"}>
          Тариф: <span className={"payPrice"}>{state.name}</span>
        </span>
        <span className={"payTarif"}>
          Стоимость: <span className={"payPrice"}>{`${total} руб.`}</span>
        </span>
        <FormControlLabel
          className={"saveMe"}
          control={<Checkbox onChange={onChangeCheck} defaultChecked={false} />}
          label={pol}
        />
        <button
          style={{ padding: "5px 40px", margin: "0 auto" }}
          className={`batonStandart + ' ' + ${!check ? "dis" : ""}`}
          disabled={!check}
          type={"submit"}
          onClick={onClickTests}
        >
          Оплатить
        </button>
      </div>
    </div>
  ) : (
    <Box className={"paySection"}>
      <span className={"oformPay"}>Оформление покупки</span>
      <form className={"formLoginPay"} onSubmit={handleSubmit(onSubmit)}>
        <div className={"divLoginGlav"}>
          <div className={"divLoginSun"}>
            <TextField
              style={{ width: "70%" }}
              {...register("name", nameAndSurnameValidation)}
              label="Имя"
              multiline
              maxRows={4}
              variant="standard"
              error={!!errors.name?.message}
              helperText={errors.name?.message}
            />
          </div>
          <div className={"divLoginSun"}>
            <TextField
              style={{ width: "70%" }}
              {...register("surname", nameAndSurnameValidation)}
              sx={{ m: 1, width: "25ch" }}
              label="Фамилия"
              multiline
              maxRows={4}
              variant="standard"
              error={!!errors.surname?.message}
              helperText={errors.surname?.message}
            />
          </div>
        </div>
        <div className={"divLoginGlav"}>
          <div className={"divLoginSun"}>
            <Controller
              control={control}
              rules={phoneValidation}
              name={"phoneInput"}
              render={({ field, fieldState }) => (
                <MuiTelInput
                  style={{ width: "70%" }}
                  {...field}
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
          </div>
          <div className={"divLoginSun"}>
            <TextField
              style={{ width: "70%" }}
              {...register("email", emailValidation)}
              label="Email"
              multiline
              maxRows={4}
              variant="standard"
              error={!!errors.email?.message}
              helperText={errors.email?.message}
            />
          </div>
        </div>
        <div className={"divLoginGlav"}>
          <div className={"divLoginSun"}>
            <FormControl style={{ width: "70%" }} variant="standard">
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
          <div className={"divLoginSun"}>
            <FormControl style={{ width: "70%" }} variant="standard">
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
        </div>
        <div className={"divLogin"}>
          <FormControlLabel
            control={<Checkbox defaultChecked {...register("check")} />}
            label="Запомнить меня"
          />
        </div>
        <FormControlLabel
          className={"saveMe"}
          control={<Checkbox onChange={onChangeCheck} defaultChecked={false} />}
          label={pol}
        />
        <button
          style={{ padding: "5px 40px", margin: "0 auto" }}
          className={`batonStandart + ' ' + ${!isValid || !check ? "dis" : ""}`}
          disabled={!isValid || !check}
          type={"submit"}
        >
          Зарегистрироваться и олатить
        </button>
      </form>
    </Box>
  );
};
