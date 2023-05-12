export type isCharacteristicsOfQualities = {
  value: number;
  text: string;
};
export type isRecommendationsForParents = {
  value: number;
  text: string;
};
export type isChildInCommunication = {
  value: number;
  text: string;
};

export type isPersonalQualitiesChildren = {
  isCharacteristicsOfQualities: isCharacteristicsOfQualities[];
  isRecommendationsForParents: isRecommendationsForParents[];
  isChildInCommunication: isChildInCommunication[];
};
export type isBirthTalents = {
  value: number;
  text: string;
};
export type isTalentsInTheFemaleLine = {
  value: number;
  text: string;
};
export type isTalentsInTheMaleLine = {
  value: number;
  text: string;
};
export type isChildTalents = {
  isBirthTalents: isBirthTalents[];
  isTalentsInTheFemaleLine: isTalentsInTheFemaleLine[];
  isTalentsInTheMaleLine: isTalentsInTheMaleLine[];
  isDirectionsOfHobbiesAndHobbyGroups: isDirectionsOfHobbiesAndHobbyGroups[];
};

export type isDirectionOfActivityOptionsForFutureProfessions = {
  value: number;
  text: string;
};
export type isForSuccessItIsImportant = {
  value: number;
  text: string;
};

export type isSelfRrealizationOfTheChild = {
  isDirectionOfActivityOptionsForFutureProfessions: isDirectionOfActivityOptionsForFutureProfessions[];
  isForSuccessItIsImportant: isForSuccessItIsImportant[];
};

export type isFirstPersonalPurpose = {
  value: number;
  text: string;
};
export type isSecondSocialPurpose = {
  value: number;
  text: string;
};
export type isPurposeOfTheChild = {
  isFirstPersonalPurpose: isFirstPersonalPurpose[];
  isSecondSocialPurpose: isSecondSocialPurpose[];
};
export type isWhatToConsiderWhenRaisingAChild = {
  value: number;
  text: string;
};
export type isLessonsOnTheGenderOfTheMaleLine = {
  value: number;
  text: string;
};
export type isLessonsOnTheGenderOfTheFemaleLine = {
  value: number;
  text: string;
};
export type isDirectionsOfHobbiesAndHobbyGroups = {
  value: number;
  text: string;
};
export type isRelationshipWithParents = {
  isWhatToConsiderWhenRaisingAChild: isWhatToConsiderWhenRaisingAChild[];
  isLessonsOnTheGenderOfTheMaleLine: isLessonsOnTheGenderOfTheMaleLine[];
  isLessonsOnTheGenderOfTheFemaleLine: isLessonsOnTheGenderOfTheFemaleLine[];
};
export type isSubconsciousScript = {
  value: number;
  text: string;
};

export type PersonalMatrixChildren = {
  isPersonalQualitiesChildren: isPersonalQualitiesChildren;
  isChildTalents: isChildTalents;
  isRelationshipWithParents: isRelationshipWithParents;
  isSelfRrealizationOfTheChild: isSelfRrealizationOfTheChild;
  isPurposeOfTheChild: isPurposeOfTheChild;
  isSubconsciousScript: isSubconsciousScript[];
  isYear: [];
};
