import axios from "axios";
import { PersonalMatrix } from "../type/personalMatrix-type";
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: "http://localhost:4444/",
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  config.headers.authorization = Cookies.get("token");
  return config;
});

export const personalMatrixAPI = {
  getPersonalMatrix(
    isPersonalQualities: number[],
    talentsOfDad: number[],
    talentsOfMother: number[],
    talentsOfGod: number[],
    isPastLife: string,
    IsHealthSaxasrara: number[],
    IsHealthAdjna: number[],
    IsHealthVishydha: number[],
    IsHealthAnaxata: number[],
    IsHealthManipura: number[],
    IsHealthMuladxara: number[],
    isHealthSvadxistana: number[],
    IsPurpose: number[],
    IsTests: number,
    Gender: string,
    isLove: number[],
    isMoney: number[],
    parentMenLine: number[],
    parentWomenLine: number[],
    parentResentment: number[],
    isChildren: number[],
    isManagement: number[],
    IsYear: number[]
  ) {
    return instance.get<PersonalMatrix>(
      `mathmatrix?isPersonalQualities=${isPersonalQualities[0]},${isPersonalQualities[1]},${isPersonalQualities[2]}&talentsOfDad=${talentsOfDad[0]},${talentsOfDad[1]},${talentsOfDad[2]}&talentsOfMother=${talentsOfMother[0]},${talentsOfMother[1]},${talentsOfMother[2]}&talentsOfGod=${talentsOfGod[0]},${talentsOfGod[1]},${talentsOfGod[2]}&isPastLife=${isPastLife}&IsHealthSaxasrara=${IsHealthSaxasrara[0]},${IsHealthSaxasrara[1]},${IsHealthSaxasrara[2]}&IsHealthAdjna=${IsHealthAdjna[0]},${IsHealthAdjna[1]},${IsHealthAdjna[2]}&IsHealthVishydha=${IsHealthVishydha[0]},${IsHealthVishydha[1]},${IsHealthVishydha[2]}&IsHealthAnaxata=${IsHealthAnaxata[0]},${IsHealthAnaxata[1]},${IsHealthAnaxata[2]}&IsHealthManipura=${IsHealthManipura[0]},${IsHealthManipura[1]},${IsHealthManipura[2]}&IsHealthMuladxara=${IsHealthMuladxara[0]},${IsHealthMuladxara[1]},${IsHealthMuladxara[2]}&IsPurpose=${IsPurpose[0]},${IsPurpose[1]},${IsPurpose[2]}&IsTests=${IsTests}&Gender=${Gender}&isLove=${isLove[0]},${isLove[1]},${isLove[2]}&isMoney=${isMoney[0]},${isMoney[1]},${isMoney[2]},${isMoney[3]},${isMoney[4]}&parentMenLine=${parentMenLine[0]},${parentMenLine[1]},${parentMenLine[2]},${parentMenLine[3]},${parentMenLine[4]},${parentMenLine[5]},${parentMenLine[6]}&parentWomenLine=${parentWomenLine[0]},${parentWomenLine[1]},${parentWomenLine[2]},${parentWomenLine[3]},${parentWomenLine[4]},${parentWomenLine[5]},${parentWomenLine[6]}&parentResentment=${parentResentment[0]},${parentResentment[1]},${parentResentment[2]}&isChildren=${isChildren[0]},${isChildren[1]},${isChildren[2]}&isManagement=${isManagement[0]}, ${isManagement[1]},${isManagement[2]}&IsYear=${IsYear[0]},${IsYear[1]}&IsHealthSvadxistana=${isHealthSvadxistana[0]},${isHealthSvadxistana[1]},${isHealthSvadxistana[2]}`
    );
  },
  tests(data: { items: { id: number; quantity: number }[] }) {
    return instance.post("checkout", data);
  },
};

export const authAPI = {
  registration(data: {
    name: string;
    surname: string;
    email: string;
    password: string;
    check: boolean;
    phone: string;
  }) {
    return instance.post("auth/registration", data);
  },
  authMe() {
    return instance.get("auth/me");
  },
  login(data: { email: string; password: string; check: boolean }) {
    return instance.post("auth/login", data);
  },
  deleteMe() {
    return instance.get("delete");
  },
  forgot(data: { email: string }) {
    return instance.post("forgot-password", data);
  },
  resetPass(data: { token: string; password: string }) {
    return instance.post("reset-password", data);
  },
  matrixOnce(items: { id: string; item: { name: string; price: number } }) {
    return instance
      .post("checkout", { items })
      .then((res) => window.location.assign(res.data.url));
  },
  uploadAvatar(data: { userId: string; avatar: string }) {
    return instance.post("upload", data);
  },
  updateUser(data: {
    userId: string;
    name: string;
    surname: string;
    phone: string;
    email: string;
    password?: string;
  }) {
    return instance.post("update", data);
  },
  payRegistration(items: {
    item: { name: string; price: number };
    registration: {
      name: string;
      surname: string;
      email: string;
      password: string;
      check: boolean;
      phone: string;
    };
  }) {
    return instance.post("checkoutnoregistr", items);
  },
};
