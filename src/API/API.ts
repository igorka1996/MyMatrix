import axios from "axios";
import { PersonalMatrixAPI } from "../type/personalMatrix-type";
import Cookies from "js-cookie";
import { PersonalMatrixChildrenAPI } from "../type/personalMatrixChildren-type";
import {
  MatrixCompatibility,
  MatrixCompatibilityAPI,
} from "../type/matrixCompatibility-type";

const instance = axios.create({
  baseURL: "http://localhost:4444/",
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  config.headers.cookie = Cookies.get("token");
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
    isPersonalPowerCode: number[],
    Gender: string,
    isLove: number[],
    isMoney: number[],
    moneySuccess: number[],
    MoneyFlow: number[],
    parentMenLine: number[],
    parentWomenLine: number[],
    parentResentment: number[],
    isChildren: number[],
    isManagement: number[],
    subscribe: string,
    id: string
  ) {
    return instance.post<PersonalMatrixAPI>(
      `mathmatrix?isPersonalQualities=${isPersonalQualities[0]},${isPersonalQualities[1]},${isPersonalQualities[2]}&talentsOfDad=${talentsOfDad[0]},${talentsOfDad[1]},${talentsOfDad[2]}&talentsOfMother=${talentsOfMother[0]},${talentsOfMother[1]},${talentsOfMother[2]}&talentsOfGod=${talentsOfGod[0]},${talentsOfGod[1]},${talentsOfGod[2]}&isPastLife=${isPastLife}&IsHealthSaxasrara=${IsHealthSaxasrara[0]},${IsHealthSaxasrara[1]},${IsHealthSaxasrara[2]}&IsHealthAdjna=${IsHealthAdjna[0]},${IsHealthAdjna[1]},${IsHealthAdjna[2]}&IsHealthVishydha=${IsHealthVishydha[0]},${IsHealthVishydha[1]},${IsHealthVishydha[2]}&IsHealthAnaxata=${IsHealthAnaxata[0]},${IsHealthAnaxata[1]},${IsHealthAnaxata[2]}&IsHealthManipura=${IsHealthManipura[0]},${IsHealthManipura[1]},${IsHealthManipura[2]}&IsHealthMuladxara=${IsHealthMuladxara[0]},${IsHealthMuladxara[1]},${IsHealthMuladxara[2]}&IsPurpose=${IsPurpose[0]},${IsPurpose[1]},${IsPurpose[2]}&isPersonalPowerCode=${isPersonalPowerCode[0]}, ${isPersonalPowerCode[1]}, ${isPersonalPowerCode[2]}&Gender=${Gender}&isLove=${isLove[0]},${isLove[1]},${isLove[2]}&isMoney=${isMoney[0]}&MoneyFlow=${MoneyFlow[0]}, ${MoneyFlow[1]}&moneySuccess=${moneySuccess[0]}, ${moneySuccess[1]}, ${moneySuccess[2]}, ${moneySuccess[3]}, ${moneySuccess[4]}&parentMenLine=${parentMenLine[0]},${parentMenLine[1]},${parentMenLine[2]},${parentMenLine[3]},${parentMenLine[4]},${parentMenLine[5]},${parentMenLine[6]}&parentWomenLine=${parentWomenLine[0]},${parentWomenLine[1]},${parentWomenLine[2]},${parentWomenLine[3]},${parentWomenLine[4]},${parentWomenLine[5]},${parentWomenLine[6]}&parentResentment=${parentResentment[0]},${parentResentment[1]},${parentResentment[2]}&isChildren=${isChildren[0]},${isChildren[1]},${isChildren[2]}&isManagement=${isManagement[0]}, ${isManagement[1]},${isManagement[2]}&IsHealthSvadxistana=${isHealthSvadxistana[0]},${isHealthSvadxistana[1]},${isHealthSvadxistana[2]}`,
      { subscribe, id }
    );
  },
  getPersonalMatrixLite(isPersonalQualities: number[], Gender: string) {
    return instance.get(
      `mathmatrixlite?isPersonalQualities=${isPersonalQualities[0]},${isPersonalQualities[1]},${isPersonalQualities[2]}&Gender=${Gender}`
    );
  },
  getPersonalMatrixChildrenLite(
    isPersonalQualitiesChildren: number[],
    Gender: string
  ) {
    return instance.get(
      `mathmatrixchildlite?isPersonalQualitiesChildren=${isPersonalQualitiesChildren[0]},${isPersonalQualitiesChildren[1]},${isPersonalQualitiesChildren[2]}&Gender=${Gender}`
    );
  },
  getPersonalMatrixChildren(
    isPersonalQualitiesChildren: number[],
    isBirthTalents: number[],
    isTalentsInTheFemaleLine: number[],
    isTalentsInTheMaleLine: number[],
    isWhatToConsiderWhenRaisingAChild: number[],
    isLessonsOnTheGenderOfTheMaleLine: number[],
    isLessonsOnTheGenderOfTheFemaleLine: number[],
    isDirectionOfActivityOptionsForFutureProfessions: number[],
    isForSuccessItIsImportant: number[],
    isFirstPersonalPurpose: number[],
    isSecondSocialPurpose: number[],
    isSubconsciousScript: number[],
    Gender: string,
    subscribe: string,
    id: string
  ) {
    return instance.post<PersonalMatrixChildrenAPI>(
      `mathmatrixchild?isPersonalQualitiesChildren=${isPersonalQualitiesChildren[0]},${isPersonalQualitiesChildren[1]},${isPersonalQualitiesChildren[2]}&isBirthTalents=${isBirthTalents[0]},${isBirthTalents[1]},${isBirthTalents[2]}&isTalentsInTheFemaleLine=${isTalentsInTheFemaleLine[0]},${isTalentsInTheFemaleLine[1]},${isTalentsInTheFemaleLine[2]}&isTalentsInTheMaleLine=${isTalentsInTheMaleLine[0]},${isTalentsInTheMaleLine[1]},${isTalentsInTheMaleLine[2]}&isWhatToConsiderWhenRaisingAChild=${isWhatToConsiderWhenRaisingAChild[0]},${isWhatToConsiderWhenRaisingAChild[1]},${isWhatToConsiderWhenRaisingAChild[2]}&isDirectionOfActivityOptionsForFutureProfessions=${isDirectionOfActivityOptionsForFutureProfessions[0]}&isFirstPersonalPurpose=${isFirstPersonalPurpose[0]}&isSecondSocialPurpose=${isSecondSocialPurpose[0]}&isForSuccessItIsImportant=${isForSuccessItIsImportant[0]}, ${isForSuccessItIsImportant[1]}, ${isForSuccessItIsImportant[2]}, ${isForSuccessItIsImportant[3]}&isLessonsOnTheGenderOfTheMaleLine=${isLessonsOnTheGenderOfTheMaleLine[0]},${isLessonsOnTheGenderOfTheMaleLine[1]},${isLessonsOnTheGenderOfTheMaleLine[2]},${isLessonsOnTheGenderOfTheMaleLine[3]},${isLessonsOnTheGenderOfTheMaleLine[4]},${isLessonsOnTheGenderOfTheMaleLine[5]},${isLessonsOnTheGenderOfTheMaleLine[6]}&isLessonsOnTheGenderOfTheFemaleLine=${isLessonsOnTheGenderOfTheFemaleLine[0]},${isLessonsOnTheGenderOfTheFemaleLine[1]},${isLessonsOnTheGenderOfTheFemaleLine[2]},${isLessonsOnTheGenderOfTheFemaleLine[3]},${isLessonsOnTheGenderOfTheFemaleLine[4]},${isLessonsOnTheGenderOfTheFemaleLine[5]},${isLessonsOnTheGenderOfTheFemaleLine[6]}&isSubconsciousScript=${isSubconsciousScript[0]},${isSubconsciousScript[1]},${isSubconsciousScript[2]}, ${isSubconsciousScript[3]}&Gender=${Gender}`,
      { subscribe, id }
    );
  },
  getMatrixCompatibility(
    isWhyDidYouMeet: number[],
    isTheSpiritualEssenceOfTheCouple: number[],
    isMaterialKarma: number[],
    isCouplesSpiritualKarma: number[],
    isGenericTasksOfPartners: number[],
    isCouplesWellBeing: number[],
    isThePurposeOfTheCouple: number[],
    subscribe: string,
    id: string
  ) {
    return instance.post<MatrixCompatibilityAPI>(
      `mathmatrixcompatibility?isWhyDidYouMeet=${isWhyDidYouMeet[0]},${isWhyDidYouMeet[1]},${isWhyDidYouMeet[2]}&isTheSpiritualEssenceOfTheCouple=${isTheSpiritualEssenceOfTheCouple[0]},${isTheSpiritualEssenceOfTheCouple[1]},${isTheSpiritualEssenceOfTheCouple[2]}&isMaterialKarma=${isMaterialKarma[0]},${isMaterialKarma[1]},${isMaterialKarma[2]}&isCouplesSpiritualKarma=${isCouplesSpiritualKarma[0]},${isCouplesSpiritualKarma[1]},${isCouplesSpiritualKarma[2]}&isGenericTasksOfPartners=${isGenericTasksOfPartners[0]},${isGenericTasksOfPartners[1]},${isGenericTasksOfPartners[2]}, ${isGenericTasksOfPartners[3]}&isCouplesWellBeing=${isCouplesWellBeing[0]},${isCouplesWellBeing[1]},${isCouplesWellBeing[2]}, ${isCouplesWellBeing[3]}, ${isCouplesWellBeing[4]}&isThePurposeOfTheCouple=${isThePurposeOfTheCouple[0]}, ${isThePurposeOfTheCouple[1]}, ${isThePurposeOfTheCouple[2]}`,
      { subscribe, id }
    );
  },

  getMatrixCompatibilityLite(isWhyDidYouMeet: number[]) {
    return instance.get<MatrixCompatibilityAPI>(
      `mathmatrixcompatibilitylite?isWhyDidYouMeet=${isWhyDidYouMeet[0]},${isWhyDidYouMeet[1]},${isWhyDidYouMeet[2]}`
    );
  },
  // tests(data: { items: { id: number; quantity: number }[] }) {
  //   return instance.post("checkout", data);
  // },
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
    return instance.delete("delete");
  },
  forgot(data: { email: string }) {
    return instance.put("forgot-password", data);
  },
  resetPass(data: { token: string; password: string }) {
    return instance.put("reset-password", data);
  },
  matrixOnce(items: { id: string; item: { name: string; price: number } }) {
    return instance
      .post("checkout", { items })
      .then((res) => window.location.assign(res.data.url));
  },
  uploadAvatar(data: { userId: string; avatar: string }) {
    return instance.put("upload", data);
  },
  supportMessage(data: { email: string; subject: string; message: string }) {
    return instance.post("supportmessage", data);
  },
  updateUser(data: {
    userId: string;
    name: string;
    surname: string;
    phone: string;
    email: string;
    password?: string;
  }) {
    return instance.put("update", data);
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
