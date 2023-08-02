import React, { ChangeEvent } from "react";
import "./User.scss";
import { useAppDispatch, useAppSelector } from "../../../../redux-store/store";
import {
  updateUserThunk,
  uploadAvatarThunk,
} from "../../../../redux-store/registration-login-auth";
import imageCompression from "browser-image-compression";
import { CircularProgress, OutlinedInput, Skeleton } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import {
  emailValidation,
  nameAndSurnameValidation,
  passValidationUser,
  phoneValidation,
} from "../../../../validations/validationRegistrationForm";
import { MuiTelInput } from "mui-tel-input";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import FormHelperText from "@mui/material/FormHelperText";
import { avatarWaitAC } from "../../../../redux-store/error-wait-reducer";

interface FormRegistration {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmpass: string;
  phoneInput: string;
}

export const User = () => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.registrationReducer.id);
  const avatar = useAppSelector((state) => state.registrationReducer.avatar);
  const avatarWait = useAppSelector((state) => state.errorReducer.avatarWait);
  const name = useAppSelector((state) => state.registrationReducer.name);
  const surname = useAppSelector((state) => state.registrationReducer.surname);
  const email = useAppSelector((state) => state.registrationReducer.email);
  const updateUser = useAppSelector((state) => state.errorReducer.updateUser);
  const phoneNumber = useAppSelector(
    (state) => state.registrationReducer.phone
  );
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword1, setShowPassword1] = React.useState(false);
  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(avatarWaitAC({ avatarWait: true }));
    let file = event.target.files?.[0];
    if (!file) return;
    try {
      const compressedImage = await imageCompression(file, {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      });

      const reader = new FileReader();
      reader.readAsDataURL(compressedImage);
      reader.onload = () => {
        const base64Image = reader.result?.toString().split(",")[1];
        if (base64Image) {
          dispatch(uploadAvatarThunk({ avatar: base64Image, userId }));
        }
      };
      event.target.value = "";
    } catch (error) {
      console.log(error);
    }
  };

  const {
    handleSubmit,
    formState: { errors },
    register,
    getValues,
    control,
    reset,
  } = useForm<FormRegistration>({
    mode: "onBlur",
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
    if (data.password !== "") {
      dispatch(
        updateUserThunk({
          userId,
          name: data.name,
          surname: data.surname,
          email: data.email,
          phone: data.phoneInput,
          password: data.password,
        })
      );
      reset({ password: "", confirmpass: "" });
    } else {
      dispatch(
        updateUserThunk({
          userId,
          name: data.name,
          surname: data.surname,
          email: data.email,
          phone: data.phoneInput,
        })
      );
    }
  };
  return (
    <div className={"userProfile"}>
      <div className={"divUserFlex"}>
        <div className={"divAvatar"}>
          {avatarWait ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                width: "100%",
              }}
            >
              <CircularProgress />
            </div>
          ) : (
            <img
              className={"avatarImg"}
              src={
                avatar
                  ? avatar
                  : "https://www.eltis.org/sites/default/files/styles/adaptive/public/default_images/default_user_0.jpg?itok=oxLSK7Nx"
              }
              width={400}
              alt="Профиль"
            />
          )}
          {avatarWait ? (
            ""
          ) : (
            <input
              className={"avatarInput"}
              onChange={handleFileUpload}
              accept="image/jpeg,image/png,image/gif"
              type="file"
            />
          )}
        </div>
        <div className={"divSpanUser"}>
          <span className={"spanUserName"}>
            {updateUser ? (
              <Skeleton style={{ width: 200 }} />
            ) : (
              name + " " + surname
            )}
          </span>
          <span className={"spanUserEmail"}>
            {updateUser ? <Skeleton style={{ width: 200 }} /> : email}
          </span>
        </div>
      </div>
      <form className={"formUpdate"} onSubmit={handleSubmit(onSubmit)}>
        <div className={"divUserForm"}>
          <TextField
            className={"formPassAndMail"}
            {...register("name", nameAndSurnameValidation)}
            label="Имя"
            multiline
            maxRows={4}
            defaultValue={name}
            variant="outlined"
            error={!!errors.name?.message}
            helperText={errors.name?.message}
          />
        </div>
        <div className={"divUserForm"}>
          <TextField
            className={"formPassAndMail"}
            {...register("surname", nameAndSurnameValidation)}
            label="Фамилия"
            defaultValue={surname}
            multiline
            maxRows={4}
            variant="outlined"
            error={!!errors.surname?.message}
            helperText={errors.surname?.message}
          />
        </div>
        <div className={"divUserForm"}>
          <Controller
            control={control}
            rules={phoneValidation}
            defaultValue={phoneNumber}
            name={"phoneInput"}
            render={({ field, fieldState }) => (
              <MuiTelInput
                {...field}
                className={"formPassAndMail"}
                onlyCountries={["RU"]}
                defaultCountry={"RU"}
                variant="outlined"
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
        <div className={"divUserForm"}>
          <TextField
            {...register("email", emailValidation)}
            className={"formPassAndMail"}
            label="Email"
            defaultValue={email}
            multiline
            maxRows={4}
            variant="outlined"
            error={!!errors.email?.message}
            helperText={errors.email?.message}
          />
        </div>
        <div className={"divUserForm"}>
          <FormControl className={"formPassAndMail"} variant="outlined">
            <InputLabel
              error={!!errors.password?.message}
              htmlFor="outlined-adornment-password"
            >
              Новый пароль
            </InputLabel>
            <OutlinedInput
              error={!!errors.password?.message}
              {...register("password", passValidationUser)}
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Новый пароль"
            />
            <FormHelperText error={!!errors.password?.message}>
              {errors.password?.message}
            </FormHelperText>
          </FormControl>
        </div>
        <div className={"divUserForm"}>
          <FormControl variant={"outlined"} className={"formPassAndMail"}>
            <InputLabel
              error={!!errors.confirmpass?.message}
              htmlFor="outlined-adornment-amount"
            >
              Подтверждение пароля
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              error={!!errors.confirmpass?.message}
              {...register("confirmpass", {
                validate: {
                  passConf: (value: string) => {
                    if (password) {
                      if (password !== value) {
                        return "Пароли не совпадают";
                      }
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
                    edge="end"
                  >
                    {showPassword1 ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label={"Подтверждение пароля"}
            />
            <FormHelperText error={!!errors.confirmpass?.message}>
              {errors.confirmpass?.message}
            </FormHelperText>
          </FormControl>
        </div>
        <button
          style={{ padding: "5px 40px", marginTop: 30 }}
          className={`batonStandart`}
          type={"submit"}
        >
          Сохранить изменения
        </button>
      </form>
    </div>
  );
};
