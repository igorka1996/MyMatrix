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
export type isPersonalPowerCode = {
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

export type PersonalMatrix = {
  isPersonalQualities: IsPersonalQualities;
  isTalents: IsTalents;
  isPastLife: IsPastLife[];
  isHealth: IsHealth;
  isPurpose: IsPurpose;
  isPersonalPowerCode: isPersonalPowerCode[];
  isLove: IsLove;
  isMoney: IsMoney;
  isParents: IsParents;
  isChildren: IsChildren[];
  isManagement: IsManagement[];
  isYear: [];
};

export type PropsTypeForecastTheYear = {
  yaer?: any;
  gender?: string;
  B: number;
  D: number;
  age: number;
  DHDD: number;
  BFBF: number;
  BFB: number;
  DHD: number;
  BFBBF: number;
  DHDDH: number;
  BF: number;
  DH: number;
  BFFBF: number;
  DHHDH: number;
  BFF: number;
  DHH: number;
  BFFF: number;
  DHHH: number;
  F: number;
  H: number;
  FCFF: number;
  HAHH: number;
  FCF: number;
  HAH: number;
  FCFFC: number;
  HAHHA: number;
  FC: number;
  HA: number;
  FCCFC: number;
  HAAHA: number;
  FCC: number;
  HAA: number;
  FCCC: number;
  HAAA: number;
  C: number;
  A: number;
  CGCC: number;
  AEAA: number;
  CGC: number;
  AEA: number;
  CGCCG: number;
  AEAAE: number;
  CG: number;
  AE: number;
  CGGCG: number;
  AEEAE: number;
  CGG: number;
  AEE: number;
  CGGG: number;
  AEEE: number;
  G: number;
  E: number;
  GDGG: number;
  EBEE: number;
  GDG: number;
  EBE: number;
  GDGGD: number;
  EBEEB: number;
  GD: number;
  EB: number;
  GDDGD: number;
  EBBEB: number;
  GDD: number;
  EBB: number;
  GDDD: number;
  EBBB: number;
};

export type PropsTypeForecastTheYearChildren = {
  CGG: number;
  AEE: number;
  age: number;
  yaer?: any;
  gender?: string;
  C: number;
  A: number;
  CGCC: number;
  AEAA: number;
  CGC: number;
  AEA: number;
  CGCCG: number;
  AEAAE: number;
  CG: number;
  AE: number;
  CGGCG: number;
  AEEAE: number;
  CGGG: number;
  AEEE: number;
  G: number;
  E: number;
  GDGG: number;
  EBEE: number;
  GDG: number;
  EBE: number;
  GDGGD: number;
  EBEEB: number;
  GD: number;
  EB: number;
};

export type MatrixDiagramType = {
  LP1: number;
  LZ: number;
  LN: number;
  DG: number;
  YM: number;
  LM: number;
  LO: number;
  M: number;
  L: number;
  G4: number;
  G2: number;
  G1: number;
  E1: number;
  E2: number;
  H1: number;
  H2: number;
  F1: number;
  F2: number;
  XY: number;
  Y: number;
  D1: number;
  C1: number;
  FH: number;
  EG: number;
  T1: number;
  T2: number;
  T3: number;
  K1: number;
  C2: number;
  D2: number;
  I5: number;
  X: number;
  K3: number;
  A2: number;
  B2: number;
  K5: number;
  A3: number;
  B3: number;
  K4: number;
  B: number;
  D: number;
  A1: number;
  B1: number;
  K6: number;
  DHDD: number;
  BFBF: number;
  BFB: number;
  DHD: number;
  BFBBF: number;
  DHDDH: number;
  BF: number;
  DH: number;
  BFFBF: number;
  DHHDH: number;
  BFF: number;
  DHH: number;
  BFFF: number;
  DHHH: number;
  F: number;
  H: number;
  FCFF: number;
  HAHH: number;
  FCF: number;
  HAH: number;
  FCFFC: number;
  HAHHA: number;
  FC: number;
  HA: number;
  FCCFC: number;
  HAAHA: number;
  FCC: number;
  HAA: number;
  FCCC: number;
  HAAA: number;
  C: number;
  A: number;
  CGCC: number;
  AEAA: number;
  CGC: number;
  AEA: number;
  CGCCG: number;
  AEAAE: number;
  CG: number;
  AE: number;
  CGGCG: number;
  AEEAE: number;
  CGG: number;
  AEE: number;
  CGGG: number;
  AEEE: number;
  G: number;
  E: number;
  GDGG: number;
  EBEE: number;
  GDG: number;
  EBE: number;
  GDGGD: number;
  EBEEB: number;
  GD: number;
  EB: number;
  GDDGD: number;
  EBBEB: number;
  GDD: number;
  EBB: number;
  GDDD: number;
  EBBB: number;
};
