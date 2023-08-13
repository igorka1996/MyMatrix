import React, { useEffect } from "react";
import "./diagram.scss";
import { SimpleAccordion } from "../../feature/SimpleAccordion";
import { SimpleAccordionChildren } from "../../feature/SimpleAccordionChildren";
import { Link, useLocation } from "react-router-dom";
import { getPersonalMatrix } from "../../redux-store/personalMatrix-reducer";
import { useAppDispatch, useAppSelector } from "../../redux-store/store";
import { calculateAge, calculation, funcCalculation } from "../../utils/calc";
import { MatrixDiagram } from "../../feature/MatrixDiagram";
import { getPersonalMatrixChildren } from "../../redux-store/personalMatrixChildren-reducer";
import { personalMatrixAPI } from "../../API/API";
import { Button, CircularProgress } from "@mui/material";

export const Diagram = () => {
  const { state } = useLocation();
  const age = calculateAge(state.date);
  const matrixWait = useAppSelector((state) => state.errorReducer.matrixWait);
  const dateRepeatPersonal = useAppSelector(
    (state) => state.personalMatrixReducer.data.dateRepeat
  );
  const dateRepeatChildren = useAppSelector(
    (state) => state.personalMatrixChildrenReducer.data.dateRepeat
  );
  const dispatch = useAppDispatch();

  const subscribeAccess = state.sub.filter((e: any) => {
    return (
      e.access &&
      (e.subscribe === "Вместе и навсегда" ||
        e.subscribe === "Видео-курс + Вместе и навсегда" ||
        (e.subscribe === "Пробный" && e.quantity > 0) ||
        (e.subscribe === "Матрица на месяц" && e.expiresSub > Date.now()))
    );
  });

  useEffect(() => {
    if (state.child) {
      dispatch(
        getPersonalMatrixChildren({
          isPersonalQualitiesChildren: funcIsPersonalQualitiesl(),
          isBirthTalents: funcCalculation([B, B1, B2]),
          isTalentsInTheFemaleLine: funcCalculation([F, F1, F2]),
          isTalentsInTheMaleLine: funcCalculation([E, E2, E1]),
          isLessonsOnTheGenderOfTheMaleLine: funcCalculation([
            F,
            F1,
            F2,
            X,
            H,
            H1,
            H2,
          ]),
          isLessonsOnTheGenderOfTheFemaleLine: funcCalculation([
            E,
            E1,
            E2,
            X,
            G,
            G1,
            G2,
          ]),
          isWhatToConsiderWhenRaisingAChild: funcCalculation([A, A1, A2]),
          isDirectionOfActivityOptionsForFutureProfessions: [M],
          isForSuccessItIsImportant: funcCalculation([G4, C2, C, C1]),
          isSubconsciousScript: funcCalculation([C, D, D1, D2]),
          isFirstPersonalPurpose: [LP1],
          isSecondSocialPurpose: [YM],
          Gender: state.male,
          date: state.date,
          name: state.name,
          subscribe: subscribeAccess[0]?.subscribe,
          id: state.id,
        })
      );
    } else {
      dispatch(
        getPersonalMatrix({
          isProgram: uniqueArr(),
          isPersonalQualities: funcIsPersonalQualitiesl(),
          talentsOfDad: funcCalculation([E, E2, E1]),
          talentsOfMother: funcCalculation([F, F1, F2]),
          talentsOfGod: funcCalculation([B, B1, B2]),
          isPastLife: `${D2}-${D1}-${D}`,
          IsHealthSaxasrara: funcCalculation([B, A, E]),
          IsHealthAdjna: funcCalculation([A1, B1, K6]),
          IsHealthVishydha: funcCalculation([A2, B2, K5]),
          IsHealthAnaxata: funcCalculation([A3, B3, K4]),
          IsHealthManipura: funcCalculation([X, X, K3]),
          IsHealthMuladxara: funcCalculation([D, C, K1]),
          isHealthSvadxistana: funcCalculation([C2, D2, I5]),
          IsPurpose: [LP1, LP2, LP3],
          isPersonalPowerCode: funcCalculation([X, Y, XY]),
          Gender: state.male,
          isLove: funcCalculation([D2, L, G4]),
          isMoney: [M],
          moneySuccess: funcCalculation([G4, C2, C, C1]),
          MoneyFlow: funcCalculation([C, C1]),
          parentMenLine: funcCalculation([E, E1, E2, X, G, G1, G2]),
          parentWomenLine: funcCalculation([F, F1, F2, X, H, H1, H2]),
          parentResentment: funcCalculation([A, A1, A2]),
          isChildren: funcCalculation([A, A1, A2]),
          isManagement: funcCalculation([A, B, X]),
          date: state.date,
          name: state.name,
          id: state.id,
          subscribe: subscribeAccess[0]?.subscribe,
        })
      );
    }
  }, []);
  const birthdayArray = state.date.split("-");
  let A = calculation(parseInt(birthdayArray[2]));
  let B = calculation(parseInt(birthdayArray[1]));
  let C = calculation(parseInt(birthdayArray[0]));

  let D = calculation(A + B + C);
  let X = calculation(A + B + C + D);
  let B2 = calculation(B + X);
  let B1 = calculation(B + B2);
  let B3 = calculation(B2 + X);
  let F = calculation(B + C);
  let H = calculation(D + A);
  let G = calculation(C + D);
  let E = calculation(A + B);
  let Y = calculation(E + F + G + H);
  let G2 = calculation(G + Y);
  let F2 = calculation(F + Y);
  let F1 = calculation(F + F2);
  let E2 = calculation(E + Y);
  let E1 = calculation(E + E2);
  let A2 = calculation(A + X);
  let A1 = calculation(A + A2);
  let A3 = calculation(A2 + X);
  let C2 = calculation(C + X);
  let C1 = calculation(C + C2);
  let D2 = calculation(D + X);
  let G4 = calculation(C2 + D2);
  let M = calculation(G4 + C2);
  let L = calculation(D2 + G4);
  let XY = calculation(X + Y);
  let G1 = calculation(G2 + G);
  let D1 = calculation(D + D2);
  let H2 = calculation(H + Y);
  let H1 = calculation(H + H2);
  let K1 = calculation(D + C);
  let K2 = calculation(D2 + C2);
  let K3 = calculation(X + X);
  let K4 = calculation(B3 + A3);
  let K5 = calculation(B2 + A2);
  let K6 = calculation(B1 + A1);
  let I5 = calculation(D2 + C2);
  let T1 = calculation(D + D2 + B3 + X + B1 + B2 + B);
  let T2 = calculation(A + A1 + A2 + A3 + X + C2 + C);
  let T3 = calculation(E + K6 + K5 + K4 + K3 + K2 + K1);
  let LN = calculation(B + D);
  let LZ = calculation(A + C);
  let LP1 = calculation(LN + LZ);
  let LO = calculation(E + G);
  let LM = calculation(F + H);
  let YM = calculation(LO + LM);
  let DG = calculation(YM + LP1);
  let FH = calculation(F + H);
  let EG = calculation(E + G);
  let BF = calculation(B + F);
  let BFB = calculation(B + BF);
  let BFBBF = calculation(BF + BFB);
  let BFBF = calculation(B + BFB);
  let BFF = calculation(BF + F);
  let BFFBF = calculation(BF + BFF);
  let BFFF = calculation(F + BFF);
  let FC = calculation(F + C);
  let FCF = calculation(FC + F);
  let FCFFC = calculation(FCF + FC);
  let FCFF = calculation(FCF + F);
  let FCC = calculation(FC + C);
  let FCCFC = calculation(FCC + FC);
  let FCCC = calculation(FCC + C);
  let CG = calculation(C + G);
  let CGC = calculation(CG + C);
  let CGCC = calculation(CGC + C);
  let CGCCG = calculation(CGC + CG);
  let CGG = calculation(CG + G);
  let CGGCG = calculation(CGG + CG);
  let CGGG = calculation(CGG + G);
  let GD = calculation(G + D);
  let GDG = calculation(GD + G);
  let GDGG = calculation(GDG + G);
  let GDGGD = calculation(GDG + GD);
  let GDD = calculation(GD + D);
  let GDDGD = calculation(GDD + GD);
  let GDDD = calculation(GDD + D);
  let DH = calculation(D + H);
  let DHD = calculation(DH + D);
  let DHDD = calculation(DHD + D);
  let DHDDH = calculation(DHD + DH);
  let DHH = calculation(DH + H);
  let DHHDH = calculation(DHH + DH);
  let DHHH = calculation(DHH + H);
  let HA = calculation(H + A);
  let HAH = calculation(HA + H);
  let HAHH = calculation(HAH + H);
  let HAHHA = calculation(HAH + HA);
  let HAA = calculation(HA + A);
  let HAAHA = calculation(HAA + HA);
  let HAAA = calculation(HAA + A);
  let AE = calculation(A + E);
  let AEA = calculation(AE + A);
  let AEAA = calculation(AEA + A);
  let AEAAE = calculation(AEA + AE);
  let AEE = calculation(AE + E);
  let AEEAE = calculation(AEE + AE);
  let AEEE = calculation(AEE + E);
  let EB = calculation(E + B);
  let EBE = calculation(EB + E);
  let EBEE = calculation(EBE + E);
  let EBEEB = calculation(EBE + EB);
  let EBB = calculation(EB + B);
  let EBBEB = calculation(EBB + EB);
  let EBBB = calculation(EBB + B);
  let LP2 = calculation(E + G + H + F);
  let LP3 = calculation(LP1 + Y);
  const funcIsPersonalQualitiesl = () => {
    if (A === B) {
      return [A, 0, X];
    }
    return [A, B, X];
  };

  function uniqueArr() {
    let arr = [
      `${B}-${B2}-${B1}`,
      `${E}-${E2}-${E1}`,
      `${A}-${A2}-${A1}`,
      `${H}-${H2}-${H1}`,
      `${D}-${D2}-${D1}`,
      `${G}-${G2}-${G1}`,
      `${C}-${C2}-${C1}`,
      `${F}-${F2}-${F1}`,
      `${X}-${Y}-${XY}`,
      `${D2}-${G4}-${L}`,
      `${C2}-${G4}-${M}`,
      `${A}-${B}-${E}`,
      `${A1}-${B1}-${K6}`,
      `${A2}-${B2}-${K5}`,
      `${A3}-${B3}-${K4}`,
      `${X}-${X}-${K3}`,
      `${C2}-${D2}-${I5}`,
      `${C}-${D}-${K1}`,
      `${T2}-${T1}-${T3}`,
      `${E}-${G}-${EG}`,
      `${F}-${H}-${FH}`,
      `${LN}-${LZ}-${LP1}`,
      `${LO}-${LM}-${YM}`,
    ];
    return [...new Set(arr)];
  }

  uniqueArr();

  const downloadPdf = async () => {
    let response;
    if (!state.child) {
      response = await personalMatrixAPI.getPdfPersonal(
        uniqueArr(),
        funcIsPersonalQualitiesl(),
        funcCalculation([E, E2, E1]),
        funcCalculation([F, F1, F2]),
        funcCalculation([B, B1, B2]),
        `${D2}-${D1}-${D}`,
        funcCalculation([B, A, E]),
        funcCalculation([A1, B1, K6]),
        funcCalculation([A2, B2, K5]),
        funcCalculation([A3, B3, K4]),
        funcCalculation([X, X, K3]),
        funcCalculation([D, C, K1]),
        funcCalculation([C2, D2, I5]),
        [LP1, LP2, LP3],
        funcCalculation([X, Y, XY]),
        funcCalculation([D2, L, G4]),
        [M],
        funcCalculation([G4, C2, C, C1]),
        funcCalculation([C, C1]),
        funcCalculation([E, E1, E2, X, G, G1, G2]),
        funcCalculation([F, F1, F2, X, H, H1, H2]),
        funcCalculation([A, A1, A2]),
        funcCalculation([A, A1, A2]),
        funcCalculation([A, B, X]),
        calcYearlyPDF(age)[1] as string,
        funcCalculation(calcYearlyPDF(age)[0] as number[]),
        state.male,
        state.date,
        state.name
      );
    } else {
      response = await personalMatrixAPI.getPdfChildren(
        funcIsPersonalQualitiesl(),
        funcCalculation([B, B1, B2]),
        funcCalculation([F, F1, F2]),
        funcCalculation([E, E2, E1]),
        funcCalculation([F, F1, F2, X, H, H1, H2]),
        funcCalculation([E, E1, E2, X, G, G1, G2]),
        funcCalculation([A, A1, A2]),
        [M],
        funcCalculation([G4, C2, C, C1]),
        funcCalculation([C, D, D1, D2]),
        [LP1],
        [YM],
        calcYearlyPDFChildren(age)[1] as string,
        funcCalculation(calcYearlyPDFChildren(age)[0] as number[]),
        state.male,
        state.date,
        state.name
      );
    }

    const blob = new Blob([response.data], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${state.name}(${state.date})`;
    link.click();
    URL.revokeObjectURL(url);
  };

  function calcYearlyPDF(age: number) {
    if (age >= 16 && age <= 17.5) {
      return [[EBBEB, GDDGD, calculation(EBBEB + GDDGD)], "16-17.5"];
    } else if (age > 17.5 && age <= 18.5) {
      return [[EBB, GDD, calculation(EBB + GDD)], "17.5-18.5"];
    } else if (age > 18.5 && age < 20) {
      return [[EBBB, GDDD, calculation(EBBB + GDDD)], "18.5-19"];
    } else if (age >= 20 && age < 21) {
      return [[B, D, calculation(D + B)], "20"];
    } else if (age >= 21 && age <= 22.5) {
      return [[BFBF, DHDD, calculation(BFBF + DHDD)], "21-22.5"];
    } else if (age > 22.5 && age <= 23.5) {
      return [[BFB, DHD, calculation(BFB + DHD)], "22.5-23.5"];
    } else if (age >= 23.5 && age < 25) {
      return [[BFBBF, DHDDH, calculation(BFBBF + DHDDH)], "23.5-24"];
    } else if (age >= 25 && age < 26) {
      return [[BF, DH, calculation(BF + DH)], "25"];
    } else if (age >= 26 && age <= 27.5) {
      return [[BFFBF, DHHDH, calculation(BFFBF + DHHDH)], "26-27.5"];
    } else if (age > 27.5 && age <= 28.5) {
      return [[BFF, DHH, calculation(BFF + DHH)], "27.5-28.5"];
    } else if (age > 28.5 && age < 30) {
      return [[BFFF, DHHH, calculation(BFFF + DHHH)], "28.5-29"];
    } else if (age >= 30 && age < 31) {
      return [[F, H, calculation(F + H)], "30"];
    } else if (age >= 31 && age <= 32.5) {
      return [[FCFF, HAHH, calculation(FCFF + HAHH)], "31-32.5"];
    } else if (age > 32.5 && age <= 33.5) {
      return [[FCF, HAH, calculation(FCF + HAH)], "32.5-33.5"];
    } else if (age > 33.5 && age < 35) {
      return [[FCFFC, HAHHA, calculation(FCFFC + HAHHA)], "33.5-34"];
    } else if (age >= 35 && age < 36) {
      return [[FC, HA, calculation(FC + HA)], "35"];
    } else if (age >= 36 && age <= 37.5) {
      return [[FCCFC, HAAHA, calculation(FCCFC + HAAHA)], "36-37.5"];
    } else if (age > 37.5 && age <= 38.5) {
      return [[FCC, HAA, calculation(FCC + HAA)], "37.5-38.5"];
    } else if (age > 38.5 && age < 40) {
      return [[FCCC, HAAA, calculation(FCCC + HAAA)], "38.5-39"];
    } else if (age >= 40 && age < 41) {
      return [[C, A, calculation(C + A)], "40"];
    } else if (age >= 41 && age <= 42.5) {
      return [[CGCC, AEAA, calculation(CGCC + AEAA)], "41-42.5"];
    } else if (age > 42.5 && age <= 43.5) {
      return [[CGC, AEA, calculation(CGC + AEA)], "42.5-43.5"];
    } else if (age > 43.5 && age < 45) {
      return [[CGCCG, AEAAE, calculation(CGCCG + AEAAE)], "43.5-44"];
    } else if (age >= 45 && age < 46) {
      return [[CG, AE, calculation(CG + AE)], "45"];
    } else if (age >= 46 && age <= 47.5) {
      return [[CGGCG, AEEAE, calculation(CGGCG + AEEAE)], "46-47.5"];
    } else if (age > 47.5 && age <= 48.5) {
      return [[CGG, AEE, calculation(CGG + AEE)], "47.5-48.5"];
    } else if (age > 48.5 && age < 50) {
      return [[CGGG, AEEE, calculation(CGGG + AEEE)], "48.5-49"];
    } else if (age >= 50 && age < 51) {
      return [[G, E, calculation(G + E)], "50"];
    } else if (age >= 51 && age <= 52.5) {
      return [[GDGG, EBEE, calculation(GDGG + EBEE)], "51-52.5"];
    } else if (age > 52.5 && age <= 53.5) {
      return [[GDG, EBE, calculation(GDG + EBE)], "52.5-53.5"];
    } else if (age > 53.5 && age < 55) {
      return [[GDGGD, EBEEB, calculation(GDGGD + EBEEB)], "53.5-54"];
    } else if (age >= 55 && age < 56) {
      return [[GD, EB, calculation(GD + EB)], "55"];
    } else if (age >= 56 && age <= 57.5) {
      return [[GDDGD, EBBEB, calculation(GDDGD + EBBEB)], "56-57.5"];
    } else if (age > 57.5 && age <= 58.5) {
      return [[GDD, EBB, calculation(GDD + EBB)], "57.5-58.5"];
    } else if (age > 58.5 && age < 60) {
      return [[GDDD, EBBB, calculation(GDDD + EBBB)], "58.5-59"];
    } else if (age >= 60 && age < 61) {
      return [[D, B, calculation(D + B)], "60"];
    } else if (age >= 61 && age <= 62.5) {
      return [[DHDD, BFBF, calculation(DHDD + BFBF)], "61-62.5"];
    } else if (age > 62.5 && age <= 63.5) {
      return [[DHD, BFB, calculation(DHD + BFB)], "62.5-63.5"];
    } else if (age > 63.5 && age < 65) {
      return [[DHDDH, BFBBF, calculation(DHDDH + BFBBF)], "63.5-64"];
    } else if (age >= 65 && age < 66) {
      return [[DH, BF, calculation(DH + BF)], "65"];
    } else if (age >= 66 && age <= 67.5) {
      return [[DHHDH, BFFBF, calculation(DHHDH + BFFBF)], "66-67.5"];
    } else if (age > 67.5 && age <= 68.5) {
      return [[DHH, BFF, calculation(DHH + BFF)], "67.5-68.5"];
    } else if (age > 68.5 && age < 70) {
      return [[DHHH, BFFF, calculation(DHHH + BFFF)], "68.5-69"];
    } else if (age >= 70 && age < 71) {
      return [[H, F, calculation(H + F)], "70"];
    } else if (age >= 71 && age <= 72.5) {
      return [[HAHH, FCFF, calculation(HAHH + FCFF)], "71-72.5"];
    } else if (age > 72.5 && age <= 73.5) {
      return [[HAH, FCF, calculation(HAH + FCF)], "72.5-73.5"];
    } else if (age > 73.5 && age < 75) {
      return [[HAHHA, FCFFC, calculation(HAHHA + FCFFC)], "73.5-74"];
    } else if (age >= 75 && age < 76) {
      return [[HA, FC, calculation(HA + FC)], "75"];
    } else if (age >= 76 && age <= 77.5) {
      return [[HAAHA, FCCFC, calculation(HAAHA + FCCFC)], "76-77.5"];
    } else if (age > 77.5 && age <= 78.5) {
      return [[HAA, FCC, calculation(HAA + FCC)], "77.5-78.5"];
    } else if (age > 78.5 && age < 80) {
      return [[HAAA, FCCC, calculation(HAAA + FCCC)], "78.5-79"];
    } else if (age >= 80 && age < 81) {
      return [[A, C, calculation(A + C)], "80"];
    }
    return [
      [0, 0, 0],
      "Для данной даты воспользуйтесь детской матрицой судьбы",
    ];
  }

  const calcYearlyPDFChildren = (age: number) => {
    if (age >= 0 && age < 1) {
      return [[A, C, calculation(A + C)], "0-1"];
    } else if (age >= 1 && age <= 2.5) {
      return [[AEAA, CGCC, calculation(AEAA + CGCC)], "1-2.5"];
    } else if (age > 2.5 && age <= 3.5) {
      return [[AEA, CGC, calculation(AEA + CGC)], "2.5-3.5"];
    } else if (age > 3.5 && age < 5) {
      return [[AEAAE, CGCCG, calculation(AEAAE + CGCCG)], "3.5-4"];
    } else if (age >= 5 && age < 6) {
      return [[AE, CG, calculation(AE + CG)], "5"];
    } else if (age >= 6 && age <= 7.5) {
      return [[AEEAE, CGGCG, calculation(AEEAE + CGGCG)], "6-7.5"];
    } else if (age > 7.5 && age <= 8.5) {
      return [[AEE, CGG, calculation(AEE + CGG)], "7.5-8.5"];
    } else if (age > 8.5 && age < 10) {
      return [[AEEE, CGGG, calculation(AEEE + CGGG)], "8.5-9"];
    } else if (age >= 10 && age < 11) {
      return [[E, G, calculation(E + G)], "10"];
    } else if (age >= 11 && age <= 12.5) {
      return [[EBEE, GDGG, calculation(EBEE + GDGG)], "11-12.5"];
    } else if (age > 12.5 && age <= 13.5) {
      return [[EBE, GDG, calculation(EBE + GDG)], "12.5-13.5"];
    } else if (age > 13.5 && age < 15) {
      return [[EBEEB, GDGGD, calculation(EBEEB + GDGGD)], "13.5-14"];
    } else if (age >= 15 && age < 16) {
      return [[EB, GD, calculation(EB + GD)], "15"];
    }
    return [
      [0, 0, 0],
      "Для данной даты воспользуйтесь персональной матрицой судьбы",
    ];
  };

  if (matrixWait) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          top: "50%",
          textAlign: "center",
          width: "100%",
        }}
      >
        <CircularProgress />
      </div>
    );
  }
  return (
    <>
      <div className={"diagramName"}>
        {state.child ? "Детская матрица" : "Персональная матрица"}
        <br />
        Имя: {state.name}
        <br />
        Дата рождения: {state.date.split("-").reverse().join("-")}
        <br />
        Пол: {state.male === "M" ? "Мужской" : "Женский"}
      </div>

      <MatrixDiagram
        LP1={LP1}
        LZ={LZ}
        LN={LN}
        DG={DG}
        YM={YM}
        LM={LM}
        LO={LO}
        M={M}
        L={L}
        G4={G4}
        G2={G2}
        G1={G1}
        E1={E1}
        E2={E2}
        H1={H1}
        H2={H2}
        F1={F1}
        F2={F2}
        XY={XY}
        Y={Y}
        D1={D1}
        C1={C1}
        FH={FH}
        EG={EG}
        T1={T1}
        T2={T2}
        T3={T3}
        K1={K1}
        C2={C2}
        D2={D2}
        I5={I5}
        X={X}
        K3={K3}
        A3={A3}
        B3={B3}
        K4={K4}
        A2={A2}
        B2={B2}
        K5={K5}
        A1={A1}
        B1={B1}
        K6={K6}
        A={A}
        B={B}
        D={D}
        BFBF={BFBF}
        DHDD={DHDD}
        BFB={BFB}
        DHD={DHD}
        BFBBF={BFBBF}
        DHDDH={DHDDH}
        BF={BF}
        DH={DH}
        BFFBF={BFFBF}
        DHHDH={DHHDH}
        BFF={BFF}
        DHH={DHH}
        BFFF={BFFF}
        DHHH={DHHH}
        F={F}
        H={H}
        FCFF={FCFF}
        HAHH={HAHH}
        FCF={FCF}
        HAH={HAH}
        FCFFC={FCFFC}
        HAHHA={HAHHA}
        FC={FC}
        HA={HA}
        FCCFC={FCCFC}
        HAAHA={HAAHA}
        FCC={FCC}
        HAA={HAA}
        FCCC={FCCC}
        HAAA={HAAA}
        C={C}
        CGCC={CGCC}
        AEAA={AEAA}
        CGC={CGC}
        AEA={AEA}
        CGCCG={CGCCG}
        AEAAE={AEAAE}
        CG={CG}
        AE={AE}
        CGGCG={CGGCG}
        AEEAE={AEEAE}
        CGG={CGG}
        AEE={AEE}
        CGGG={CGGG}
        AEEE={AEEE}
        G={G}
        E={E}
        GDGG={GDGG}
        EBEE={EBEE}
        GDG={GDG}
        EBE={EBE}
        GDGGD={GDGGD}
        EBEEB={EBEEB}
        GD={GD}
        EB={EB}
        GDDGD={GDDGD}
        EBBEB={EBBEB}
        GDD={GDD}
        EBB={EBB}
        GDDD={GDDD}
        EBBB={EBBB}
      />
      {state.child ? (
        <SimpleAccordionChildren
          repeat={state.repeat}
          yes={subscribeAccess.length > 0}
          gender={state.male}
          age={age}
          AEE={AEE}
          CGG={CGG}
          C={C}
          A={A}
          CGCC={CGCC}
          AEAA={AEAA}
          CGC={CGC}
          AEA={AEA}
          CGCCG={CGCCG}
          AEAAE={AEAAE}
          CG={CG}
          AE={AE}
          CGGCG={CGGCG}
          AEEAE={AEEAE}
          CGGG={CGGG}
          AEEE={AEEE}
          G={G}
          E={E}
          GDGG={GDGG}
          EBEE={EBEE}
          GDG={GDG}
          EBE={EBE}
          GDGGD={GDGGD}
          EBEEB={EBEEB}
          GD={GD}
          EB={EB}
        />
      ) : (
        <SimpleAccordion
          repeat={state.repeat}
          yes={subscribeAccess.length > 0}
          gender={state.male}
          age={age}
          B={B}
          D={D}
          BFBF={BFBF}
          DHDD={DHDD}
          BFB={BFB}
          DHD={DHD}
          BFBBF={BFBBF}
          DHDDH={DHDDH}
          BF={BF}
          DH={DH}
          BFFBF={BFFBF}
          DHHDH={DHHDH}
          BFF={BFF}
          DHH={DHH}
          BFFF={BFFF}
          DHHH={DHHH}
          F={F}
          H={H}
          FCFF={FCFF}
          HAHH={HAHH}
          FCF={FCF}
          HAH={HAH}
          FCFFC={FCFFC}
          HAHHA={HAHHA}
          FC={FC}
          HA={HA}
          FCCFC={FCCFC}
          HAAHA={HAAHA}
          FCC={FCC}
          HAA={HAA}
          FCCC={FCCC}
          HAAA={HAAA}
          C={C}
          A={A}
          CGCC={CGCC}
          AEAA={AEAA}
          CGC={CGC}
          AEA={AEA}
          CGCCG={CGCCG}
          AEAAE={AEAAE}
          CG={CG}
          AE={AE}
          CGGCG={CGGCG}
          AEEAE={AEEAE}
          CGG={CGG}
          AEE={AEE}
          CGGG={CGGG}
          AEEE={AEEE}
          G={G}
          E={E}
          GDGG={GDGG}
          EBEE={EBEE}
          GDG={GDG}
          EBE={EBE}
          GDGGD={GDGGD}
          EBEEB={EBEEB}
          GD={GD}
          EB={EB}
          GDDGD={GDDGD}
          EBBEB={EBBEB}
          GDD={GDD}
          EBB={EBB}
          GDDD={GDDD}
          EBBB={EBBB}
        />
      )}
      <div className={"payOnceAndPDF"}>
        {dateRepeatChildren || dateRepeatPersonal ? undefined : (
          <React.Fragment>
            <span>Приобрести расшифровку данной даты</span>
            <Link
              style={{
                backgroundColor: "rgb(186, 130, 167)",
                width: 150,
                marginLeft: 20,
              }}
              className={"batonStandart"}
              to={"/pay"}
              state={{
                name: "Разовая расшифровка даты",
                matrix: state.child ? "child" : "personal",
                price: 45000,
                date: state.date,
                gender: state.male,
                username: state.name,
              }}
            >
              Олатить
            </Link>
          </React.Fragment>
        )}
        {dateRepeatChildren || dateRepeatPersonal ? (
          <Button
            style={{ backgroundColor: "#ba82a7" }}
            variant={"contained"}
            onClick={downloadPdf}
          >
            Скачать в PDF
          </Button>
        ) : undefined}
      </div>
    </>
  );
};
