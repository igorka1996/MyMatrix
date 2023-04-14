export type IsGeneral = {
  value: number;
  text: string;
};
export type IsPositive = {
  value: number;
  text: string;
};
export type IsNegative = {
  value: number;
  text: string;
};
export type IsPersonalQualities = {
  isGeneral: IsGeneral[];
  isPositive: IsPositive[];
  isNegative: IsNegative[];
};
export type IsTalentsOfDad = {
  value: number;
  text: string;
};
export type IsTalentsOfMother = {
  value: number;
  text: string;
};
export type IsTalentsOfGod = {
  value: number;
  text: string;
};
export type IsTalents = {
  isTalentsOfDad: IsTalentsOfDad[];
  isTalentsOfMother: IsTalentsOfMother[];
  isTalentsOfGod: IsTalentsOfGod[];
};
export type IsPastLife = {
  value: string;
  text: string;
};
export type Saxasrar = {
  value: number;
  text: string;
};
export type Adjna = {
  value: number;
  text: string;
};
export type Vishydha = {
  value: number;
  text: string;
};
export type Anaxata = {
  value: number;
  text: string;
};
export type Manipura = {
  value: number;
  text: string;
};
export type Muladxara = {
  value: number;
  text: string;
};
export type Svadxistana = {
  value: number;
  text: string;
};
export type IsHealth = {
  Saxasrara: Saxasrar[];
  Adjna: Adjna[];
  Vishydha: Vishydha[];
  Anaxata: Anaxata[];
  Manipura: Manipura[];
  Muladxara: Muladxara[];
  Svadxistana: Svadxistana[];
};
export type IsPurpose20_40 = {
  value: number;
  text: string;
};
export type IsPurpose40_60 = {
  value: number;
  text: string;
};
export type IsGeneralPurpose = {
  value: number;
  text: string;
};
export type IsPurpose = {
  isPurpose20_40: IsPurpose20_40[];
  isPurpose40_60: IsPurpose40_60[];
  isGeneralPurpose: IsGeneralPurpose[];
};
export type IsTests = {
  value: number;
  text: string;
};
export type IsLoveMenOrWomen = {
  value: number;
  text: string;
};
export type IsCharacterLoveMenOrWomen = {
  value: number;
  text: string;
};
export type LoveTotal = {
  value: number;
  text: string;
};
export type IsLove = {
  isLoveMenOrWomen: IsLoveMenOrWomen[];
  isCharacterLoveMenOrWomen: IsCharacterLoveMenOrWomen[];
  loveTotal: LoveTotal[];
};
export type MoneyLineOfActivity = {
  value: number;
  text: string;
};
export type MoneySucces = {
  value: number;
  text: string;
};
export type IsMoney = {
  moneyLineOfActivity: MoneyLineOfActivity[];
  moneySuccess: MoneySucces[];
  moneyFlow: any[];
};
export type ParentMenLine = {
  value: number;
  text: string;
};
export type ParentWomenLine = {
  value: number;
  text: string;
};
export type ParentResentment = {
  value: number;
  text: string;
};
export type IsParents = {
  parentMenLine: ParentMenLine[];
  parentWomenLine: ParentWomenLine[];
  parentResentment: ParentResentment[];
};
export type IsChildren = {
  value: number;
  text: string;
};
export type IsManagement = {
  value: number;
  text: string;
};
export type IsPlus = {
  value: number;
  text: string;
};
export type IsMinus = {
  value: number;
  text: string;
};
export type IsEssenceOfTheYearPlus = {
  isPlus: IsPlus[];
  isMinus: IsMinus[];
};
export type IsCausesOfEvents = {
  isPlus: IsPlus[];
  isMinus: IsMinus[];
};
export type IsYear = {
  isEssenceOfTheYearPlus: IsEssenceOfTheYearPlus;
  isCausesOfEvents: IsCausesOfEvents;
};
export type PersonalMatrix = {
  isPersonalQualities: IsPersonalQualities;
  isTalents: IsTalents;
  isPastLife: IsPastLife[];
  isHealth: IsHealth;
  isPurpose: IsPurpose;
  isTests: IsTests[];
  isLove: IsLove;
  isMoney: IsMoney;
  isParents: IsParents;
  isChildren: IsChildren[];
  isManagement: IsManagement[];
  isYear: IsYear;
};
