import React, { useEffect } from "react";
import "./diagram.scss";
import { SimpleAccordion } from "../../feature/SimpleAccordion";
import { SimpleAccordionChildren } from "../../feature/SimpleAccordionChildren";
import { useLocation } from "react-router-dom";
import { getPersonalMatrix } from "../../redux-store/personalMatrix-reducer";
import { useAppDispatch, useAppSelector } from "../../redux-store/store";
import { calculateAge, calculation, funcCalculation } from "../../utils/calc";
import { MatrixDiagram } from "../../feature/MatrixDiagram";
import { getPersonalMatrixChildren } from "../../redux-store/personalMatrixChildren-reducer";

export const Diagram = () => {
  const { state } = useLocation();
  const age = calculateAge(state.date);
  const dispatch = useAppDispatch();

  const subscribeAccessPersonal = state.sub.filter((e: any) => {
    return (
      e.access &&
      (e.subscribe === "Вместе и навсегда" ||
        e.subscribe === "Видео-курс + Вместе и навсегда" ||
        (e.subscribe === "Пробный" && e.personal > 0) ||
        (e.subscribe === "Матрица на месяц" && e.expiresSub > Date.now()))
    );
  });

  const subscribeAccessChildren = state.sub.filter((e: any) => {
    return (
      e.access &&
      (e.subscribe === "Вместе и навсегда" ||
        e.subscribe === "Видео-курс + Вместе и навсегда" ||
        (e.subscribe === "Пробный" && e.children > 0) ||
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
          subscribe: subscribeAccessChildren[0]?.subscribe,
          id: state.id,
        })
      );
    } else {
      dispatch(
        getPersonalMatrix({
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
          id: state.id,
          subscribe: subscribeAccessPersonal[0]?.subscribe,
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

  return (
    <>
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
    </>
  );
};
