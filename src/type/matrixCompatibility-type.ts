export type isValueAndTextType = {
  value: number;
  text: string;
};

export type MatrixCompatibilityAPI = {
  isWhyDidYouMeet: isValueAndTextType[];
  isTheSpiritualEssenceOfTheCouple: isValueAndTextType[];
  isMaterialKarma: isValueAndTextType[];
  isCouplesSpiritualKarma: isValueAndTextType[];
  isGenericTasksOfPartners: isValueAndTextType[];
  isCouplesWellBeing: isValueAndTextType[];
  isThePurposeOfTheCouple: isValueAndTextType[];
  subscription: [];
  dateRepeat: boolean;
};

export type MatrixCompatibility = {
  data: {
    isWhyDidYouMeet: isValueAndTextType[];
    isTheSpiritualEssenceOfTheCouple: isValueAndTextType[];
    isMaterialKarma: isValueAndTextType[];
    isCouplesSpiritualKarma: isValueAndTextType[];
    isGenericTasksOfPartners: isValueAndTextType[];
    isCouplesWellBeing: isValueAndTextType[];
    isThePurposeOfTheCouple: isValueAndTextType[];
    dateRepeat: boolean;
  };
};
