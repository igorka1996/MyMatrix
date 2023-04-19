import React from "react";
import TextField from "@mui/material/TextField";
import {
  emailValidation,
  messageValidation,
  subjectValidations,
} from "../../../../validations/validationRegistrationForm";
import { useAppDispatch, useAppSelector } from "../../../../redux-store/store";
import { SubmitHandler, useForm } from "react-hook-form";
import { authAPI } from "../../../../API/API";
import { HandleError } from "../../../../utils/errors";
import { successAC } from "../../../../redux-store/error-wait-reducer";

interface FormRegistration {
  email: string;
  subject: string;
  message: string;
}

export const Support = () => {
  const email = useAppSelector((state) => state.registrationReducer.email);
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    formState: { errors, isValid },
    register,
    reset,
  } = useForm<FormRegistration>({
    mode: "all",
  });

  const onSubmit: SubmitHandler<FormRegistration> = async (data) => {
    try {
      const res = await authAPI.supportMessage({
        email: data.email,
        subject: data.subject,
        message: data.message,
      });
      dispatch(successAC({ success: res.data.message }));
      reset({ subject: "", message: "" });
    } catch (e) {
      HandleError(e, dispatch);
    }
  };

  return (
    <div>
      <form className={"formLoginRgistr"} onSubmit={handleSubmit(onSubmit)}>
        <span className={"loginSpan"}>Отправить сообщение в поддержку</span>
        <div className={"divLogin"}>
          <TextField
            className={"formPassAndMail"}
            {...register("email", emailValidation)}
            label="Ваш Email"
            multiline
            maxRows={4}
            defaultValue={email}
            variant="outlined"
            error={!!errors.email?.message}
            helperText={errors.email?.message}
          />
        </div>
        <div className={"divLogin"}>
          <TextField
            {...register("subject", subjectValidations)}
            className={"formPassAndMail"}
            id="outlined-multiline-flexible"
            label="Тема сообщения"
            multiline
            maxRows={4}
            error={!!errors.subject?.message}
            helperText={errors.subject?.message}
          />
        </div>
        <div className={"divLogin"}>
          <TextField
            {...register("message", messageValidation)}
            className={"formPassAndMail"}
            id="outlined-multiline-static"
            label="Ваше сообщение"
            multiline
            rows={5}
            error={!!errors.message?.message}
            helperText={errors.message?.message}
          />
        </div>
        <button
          style={{ padding: "5px 40px", marginTop: 80 }}
          className={`batonStandart + ' ' + ${!isValid ? "dis" : ""}`}
          disabled={!isValid}
          type={"submit"}
        >
          Отправить сообщение
        </button>
      </form>
    </div>
  );
};
