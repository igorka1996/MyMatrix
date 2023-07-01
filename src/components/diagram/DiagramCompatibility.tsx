import React, { useEffect } from "react";
import "./diagram.scss";
import { useLocation } from "react-router-dom";
import { calculation, funcCalculation } from "../../utils/calc";
import { MatrixDiagramCompatibility } from "../../feature/MatrixDiagramCompatibility";
import { useAppDispatch, useAppSelector } from "../../redux-store/store";
import { getMatrixCompatibility } from "../../redux-store/MatrixCompatibility-reducer";
import { SimpleAccordionCompatibility } from "../../feature/SimpleAccordionCompatibility";
import { Button, CircularProgress } from "@mui/material";
import { personalMatrixAPI } from "../../API/API";

export const DiagramCompatibility = () => {
  const { state } = useLocation();
  const matrixWait = useAppSelector((state) => state.errorReducer.matrixWait);
  const dispatch = useAppDispatch();

  const subscribeAccessCompatibility = state.sub.filter((e: any) => {
    return (
      e.access &&
      (e.subscribe === "Вместе и навсегда" ||
        e.subscribe === "Видео-курс + Вместе и навсегда" ||
        (e.subscribe === "Пробный" && e.compatibility > 0) ||
        (e.subscribe === "Матрица на месяц" && e.expiresSub > Date.now()))
    );
  });
  useEffect(() => {
    dispatch(
      getMatrixCompatibility({
        isWhyDidYouMeet: funcCalculation([Ad, A1d, A2d]),
        isTheSpiritualEssenceOfTheCouple: funcCalculation([Bd, B1d, B2d]),
        isMaterialKarma: funcCalculation([Cd, C1d, C2d]),
        isCouplesSpiritualKarma: funcCalculation([Dd, D1d, D2d]),
        isGenericTasksOfPartners: funcCalculation([Ed, Fd, Gd, Hd]),
        isCouplesWellBeing: funcCalculation([C2d, Md, G4d, Ld, D2d]),
        isThePurposeOfTheCouple: funcCalculation([LP1d, YMd, RRMd]),
        datePartnerOne: state.date,
        datePartnerTwo: state.date1,
        subscribe: subscribeAccessCompatibility[0]?.subscribe,
        id: state.id,
      })
    );
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

  const birthdayArray1 = state.date1.split("-");
  let Ac = calculation(parseInt(birthdayArray1[2]));
  let Bc = calculation(parseInt(birthdayArray1[1]));
  let Cc = calculation(parseInt(birthdayArray1[0]));

  let Dc = calculation(Ac + Bc + Cc);
  let Xc = calculation(Ac + Bc + Cc + Dc);
  let B2c = calculation(Bc + Xc);
  let B1c = calculation(Bc + B2c);
  let B3c = calculation(B2c + Xc);
  let Fc = calculation(Bc + Cc);
  let Hc = calculation(Dc + Ac);
  let Gc = calculation(Cc + Dc);
  let Ec = calculation(Ac + Bc);
  let Yc = calculation(Ec + Fc + Gc + Hc);
  let G2c = calculation(Gc + Yc);
  let F2c = calculation(Fc + Yc);
  let F1c = calculation(Fc + F2c);
  let E2c = calculation(Ec + Yc);
  let E1c = calculation(Ec + E2c);
  let A2c = calculation(Ac + Xc);
  let A1c = calculation(Ac + A2c);
  let A3c = calculation(A2c + Xc);
  let C2c = calculation(Cc + Xc);
  let C1c = calculation(Cc + C2c);
  let D2c = calculation(Dc + Xc);
  let G4c = calculation(C2c + D2c);
  let Mc = calculation(G4c + C2c);
  let Lc = calculation(D2c + G4c);
  let XYc = calculation(Xc + Yc);
  let G1c = calculation(G2c + Gc);
  let D1c = calculation(Dc + D2c);
  let H2c = calculation(Hc + Yc);
  let H1c = calculation(Hc + H2c);
  let K1c = calculation(Dc + Cc);
  let K2c = calculation(D2c + C2c);
  let K3c = calculation(Xc + Xc);
  let K4c = calculation(B3c + A3c);
  let K5c = calculation(B2c + A2c);
  let K6c = calculation(B1c + A1c);
  let I5c = calculation(D2c + C2c);
  let T1c = calculation(Dc + D2c + B3c + Xc + B1c + B2c + Bc);
  let T2c = calculation(Ac + A1c + A2c + A3c + Xc + C2c + Cc);
  let T3c = calculation(Ec + K6c + K5c + K4c + K3c + K2c + K1c);
  let LNc = calculation(Bc + Dc);
  let LZc = calculation(Ac + Cc);
  let LP1c = calculation(LNc + LZc);
  let LOc = calculation(Ec + Gc);
  let LMc = calculation(Fc + Hc);
  let YMc = calculation(LOc + LMc);
  let DGc = calculation(YMc + LP1c);
  let FHc = calculation(Fc + Hc);
  let EGc = calculation(Ec + Gc);
  let BFc = calculation(Bc + Fc);
  let BFBc = calculation(Bc + BFc);
  let BFBBFc = calculation(BFc + BFBc);
  let BFBFc = calculation(Bc + BFBc);
  let BFFc = calculation(BFc + Fc);
  let BFFBFc = calculation(BFc + BFFc);
  let BFFFc = calculation(Fc + BFFc);
  let FCc = calculation(Fc + Cc);
  let FCFc = calculation(FCc + Fc);
  let FCFFCc = calculation(FCFc + FCc);
  let FCFFc = calculation(FCFc + Fc);
  let FCCc = calculation(FCc + Cc);
  let FCCFCc = calculation(FCCc + FCc);
  let FCCCc = calculation(FCCc + Cc);
  let CGc = calculation(Cc + Gc);
  let CGCc = calculation(CGc + Cc);
  let CGCCc = calculation(CGCc + Cc);
  let CGCCGc = calculation(CGCc + CGc);
  let CGGc = calculation(CGc + Gc);
  let CGGCGc = calculation(CGGc + CGc);
  let CGGGc = calculation(CGGc + Gc);
  let GDc = calculation(Gc + Dc);
  let GDGc = calculation(GDc + Gc);
  let GDGGc = calculation(GDGc + Gc);
  let GDGGDc = calculation(GDGc + GDc);
  let GDDc = calculation(GDc + Dc);
  let GDDGDc = calculation(GDDc + GDc);
  let GDDDc = calculation(GDDc + Dc);
  let DHc = calculation(Dc + Hc);
  let DHDc = calculation(DHc + Dc);
  let DHDDc = calculation(DHDc + Dc);
  let DHDDHc = calculation(DHDc + DHc);
  let DHHc = calculation(DHc + Hc);
  let DHHDHc = calculation(DHHc + DHc);
  let DHHHc = calculation(DHHc + Hc);
  let HAc = calculation(Hc + Ac);
  let HAHc = calculation(HAc + Hc);
  let HAHHc = calculation(HAHc + Hc);
  let HAHHAc = calculation(HAHc + HAc);
  let HAAc = calculation(HAc + Ac);
  let HAAHAc = calculation(HAAc + HAc);
  let HAAAc = calculation(HAAc + Ac);
  let AEc = calculation(Ac + Ec);
  let AEAc = calculation(AEc + Ac);
  let AEAAc = calculation(AEAc + Ac);
  let AEAAEc = calculation(AEAc + AEc);
  let AEEc = calculation(AEc + Ec);
  let AEEAEc = calculation(AEEc + AEc);
  let AEEEc = calculation(AEEc + Ec);
  let EBc = calculation(Ec + Bc);
  let EBEc = calculation(EBc + Ec);
  let EBEEc = calculation(EBEc + Ec);
  let EBEEBc = calculation(EBEc + EBc);
  let EBBc = calculation(EBc + Bc);
  let EBBEBc = calculation(EBBc + EBc);
  let EBBBc = calculation(EBBc + Bc);
  // Compatibility
  let Bd = calculation(B + Bc);
  let Fd = calculation(F + Fc);
  let Cd = calculation(C + Cc);
  let Gd = calculation(G + Gc);
  let Dd = calculation(D + Dc);
  let Hd = calculation(H + Hc);
  let Ad = calculation(A + Ac);
  let Ed = calculation(E + Ec);
  let Xd = calculation(X + Xc);

  let B2d = calculation(Bd + Xd);
  let B1d = calculation(Bd + B2d);
  let C2d = calculation(Cd + Xd);
  let C1d = calculation(Cd + C2d);
  let D2d = calculation(Dd + Xd);
  let D1d = calculation(Dd + D2d);
  let A2d = calculation(Ad + Xd);
  let A1d = calculation(Ad + A2d);
  let G4d = calculation(C2d + D2d);
  let Ld = calculation(D2d + G4d);
  let Md = calculation(G4d + C2d);
  let LNd = calculation(Bd + Dd);
  let LZd = calculation(Ad + Cd);
  let LP1d = calculation(LNd + LZd);
  let LOd = calculation(Ed + Gd);
  let LMd = calculation(Fd + Hd);
  let YMd = calculation(LOd + LMd);
  let RRMd = calculation(LP1d + YMd);

  const downloadPdf = async () => {
    let response = await personalMatrixAPI.getPdfCompatibility(
      funcCalculation([Ad, A1d, A2d]),
      funcCalculation([Bd, B1d, B2d]),
      funcCalculation([Cd, C1d, C2d]),
      funcCalculation([Dd, D1d, D2d]),
      funcCalculation([Ed, Fd, Gd, Hd]),
      funcCalculation([C2d, Md, G4d, Ld, D2d]),
      funcCalculation([LP1d, YMd, RRMd]),
      state.date,
      state.date1
    );
    const blob = new Blob([response.data], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${state.date}/${state.date1}`;
    link.click();
    URL.revokeObjectURL(url);
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
      {subscribeAccessCompatibility.length > 0 ? (
        <Button onClick={downloadPdf}>Скачать PDF</Button>
      ) : undefined}
      <MatrixDiagramCompatibility
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
        LP1c={LP1c}
        LZc={LZc}
        LNc={LNc}
        DGc={DGc}
        YMc={YMc}
        LMc={LMc}
        LOc={LOc}
        Mc={Mc}
        Lc={Lc}
        G4c={G4c}
        G2c={G2c}
        G1c={G1c}
        E1c={E1c}
        E2c={E2c}
        H1c={H1c}
        H2c={H2c}
        F1c={F1c}
        F2c={F2c}
        XYc={XYc}
        Yc={Yc}
        D1c={D1c}
        C1c={C1c}
        FHc={FHc}
        EGc={EGc}
        T1c={T1c}
        T2c={T2c}
        T3c={T3c}
        K1c={K1c}
        C2c={C2c}
        D2c={D2c}
        I5c={I5c}
        Xc={Xc}
        K3c={K3c}
        A3c={A3c}
        B3c={B3c}
        K4c={K4c}
        A2c={A2c}
        B2c={B2c}
        K5c={K5c}
        A1c={A1c}
        B1c={B1c}
        K6c={K6c}
        Ac={Ac}
        Bc={Bc}
        Dc={Dc}
        BFBFc={BFBFc}
        DHDDc={DHDDc}
        BFBc={BFBc}
        DHDc={DHDc}
        BFBBFc={BFBBFc}
        DHDDHc={DHDDHc}
        BFc={BFc}
        DHc={DHc}
        BFFBFc={BFFBFc}
        DHHDHc={DHHDHc}
        BFFc={BFFc}
        DHHc={DHHc}
        BFFFc={BFFFc}
        DHHHc={DHHHc}
        Fc={Fc}
        Hc={Hc}
        FCFFc={FCFFc}
        HAHHc={HAHHc}
        FCFc={FCFc}
        HAHc={HAHc}
        FCFFCc={FCFFCc}
        HAHHAc={HAHHAc}
        FCc={FCc}
        HAc={HAc}
        FCCFCc={FCCFCc}
        HAAHAc={HAAHAc}
        FCCc={FCCc}
        HAAc={HAAc}
        FCCCc={FCCCc}
        HAAAc={HAAAc}
        Cc={Cc}
        CGCCc={CGCCc}
        AEAAc={AEAAc}
        CGCc={CGCc}
        AEAc={AEAc}
        CGCCGc={CGCCGc}
        AEAAEc={AEAAEc}
        CGc={CGc}
        AEc={AEc}
        CGGCGc={CGGCGc}
        AEEAEc={AEEAEc}
        CGGc={CGGc}
        AEEc={AEEc}
        CGGGc={CGGGc}
        AEEEc={AEEEc}
        Gc={Gc}
        Ec={Ec}
        GDGGc={GDGGc}
        EBEEc={EBEEc}
        GDGc={GDGc}
        EBEc={EBEc}
        GDGGDc={GDGGDc}
        EBEEBc={EBEEBc}
        GDc={GDc}
        EBc={EBc}
        GDDGDc={GDDGDc}
        EBBEBc={EBBEBc}
        GDDc={GDDc}
        EBBc={EBBc}
        GDDDc={GDDDc}
        EBBBc={EBBBc}
        Bd={Bd}
        Fd={Fd}
        Cd={Cd}
        Gd={Gd}
        Dd={Dd}
        Hd={Hd}
        Ad={Ad}
        Ed={Ed}
        Xd={Xd}
        B2d={B2d}
        B1d={B1d}
        C2d={C2d}
        C1d={C1d}
        D2d={D2d}
        D1d={D1d}
        A2d={A2d}
        A1d={A1d}
        G4d={G4d}
        Ld={Ld}
        Md={Md}
        LNd={LNd}
        LZd={LZd}
        LP1d={LP1d}
        LOd={LOd}
        LMd={LMd}
        YMd={YMd}
        RRMd={RRMd}
      />
      <SimpleAccordionCompatibility />
    </>
  );
};
