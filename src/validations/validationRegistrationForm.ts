export const nameAndSurnameValidation = {
  required: "Обязательно для заполнения",
  validate: (value: string) => {
    if (value.length < 1 || value.length > 20) {
      return "Имя не может быть больше 20 символов";
    }
    return true;
  },
};
const regularEmail =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

export const emailValidation = {
  required: "Обязательно для заполнения",
  validate: (value: string) => {
    if (!regularEmail.test(value)) {
      return "Введите корректный e-mail";
    }
    return true;
  },
};

const regularPhone = /^(\+7|8) \d{3} \d{3} \d{2} \d{2}$/;
export const phoneValidation = {
  required: "Обязательно для заполнения",
  maxLength: 16,
  validate: (value: string) => {
    if (!regularPhone.test(value)) {
      return "Введите корректный номер телефона, который должен начинаться с +7";
    }
    return true;
  },
};

const regularPass =
  /([a-z]+[A-Z]+[0-9]+|[a-z]+[0-9]+[A-Z]+|[A-Z]+[a-z]+[0-9]+|[A-Z]+[0-9]+[a-z]+|[0-9]+[a-z]+[A-Z]+|[0-9]+[A-Z]+[a-z]+)/;
export const passValidation = {
  required: "Обязательно для заполнения",
  validate: (value: string) => {
    if (!regularPass.test(value) || value.length < 8) {
      return "Пароль должен состоять из 8 или более символов и включать в себя цифры, латинские буквы верхнего и нижнего регистра";
    }
    return true;
  },
};
