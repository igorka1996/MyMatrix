import React, { useCallback, useEffect, useMemo } from "react";
import "./diagram.scss";
import { Link, useLocation } from "react-router-dom";
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
  const dateRepeatCompatibility = useAppSelector(
    (state) => state.MatrixCompatibilityReducer.data.dateRepeat
  );

  const subscribeAccessCompatibility = useMemo(() => {
    return state.sub.filter(
      (e: {
        access: boolean;
        subscribe: string;
        quantity: number;
        expiresSub: number;
      }) => {
        return (
          e.access &&
          (e.subscribe === "Вместе и навсегда" ||
            e.subscribe === "Базовый курс + Вместе и навсегда" ||
            (e.subscribe === "Пробный" && e.quantity > 0) ||
            (e.subscribe === "Матрица на месяц" && e.expiresSub > Date.now()))
        );
      }
    );
  }, [state.sub]);

  useEffect(() => {
    dispatch(
      getMatrixCompatibility({
        isWhyDidYouMeet: isWhyDidYouMeet,
        isTheSpiritualEssenceOfTheCouple: isTheSpiritualEssenceOfTheCouple,
        isMaterialKarma: isMaterialKarma,
        isCouplesSpiritualKarma: isCouplesSpiritualKarma,
        isGenericTasksOfPartners: isGenericTasksOfPartners,
        isCouplesWellBeing: isCouplesWellBeing,
        isThePurposeOfTheCouple: isThePurposeOfTheCouple,
        datePartnerOne: state.date,
        datePartnerTwo: state.date1,
        subscribe: subscribeAccessCompatibility[0]?.subscribe,
        id: state.id,
      })
    );
  }, [state.date, state.date1]);

  const birthdayArray = useMemo(() => state.date.split("-"), [state.date]);
  const parseBirthdayArray = parseInt(birthdayArray[0]);
  const parseBirthdayArray1 = parseInt(birthdayArray[1]);
  const parseBirthdayArray2 = parseInt(birthdayArray[2]);
  const A = useMemo(
    () => calculation(parseBirthdayArray2),
    [parseBirthdayArray2]
  );
  const B = useMemo(
    () => calculation(parseBirthdayArray1),
    [parseBirthdayArray1]
  );
  const C = useMemo(
    () => calculation(parseBirthdayArray),
    [parseBirthdayArray]
  );
  const D = useMemo(() => calculation(A + B + C), [A, B, C]);
  const X = useMemo(() => calculation(A + B + C + D), [A, B, C, D]);
  const B2 = useMemo(() => calculation(B + X), [B, X]);
  const B1 = useMemo(() => calculation(B + B2), [B, B2]);
  const B3 = useMemo(() => calculation(B2 + X), [B2, X]);
  const F = useMemo(() => calculation(B + C), [B, C]);
  const H = useMemo(() => calculation(D + A), [D, A]);
  const G = useMemo(() => calculation(C + D), [C, D]);
  const E = useMemo(() => calculation(A + B), [A, B]);
  const Y = useMemo(() => calculation(E + F + G + H), [E, F, G, H]);
  const G2 = useMemo(() => calculation(G + Y), [G, Y]);
  const F2 = useMemo(() => calculation(F + Y), [F, Y]);
  const F1 = useMemo(() => calculation(F + F2), [F, F2]);
  const E2 = useMemo(() => calculation(E + Y), [E, Y]);
  const E1 = useMemo(() => calculation(E + E2), [E, E2]);
  const A2 = useMemo(() => calculation(A + X), [A, X]);
  const A1 = useMemo(() => calculation(A + A2), [A, A2]);
  const A3 = useMemo(() => calculation(A2 + X), [A2, X]);
  const C2 = useMemo(() => calculation(C + X), [C, X]);
  const C1 = useMemo(() => calculation(C + C2), [C, C2]);
  const D2 = useMemo(() => calculation(D + X), [D, X]);
  const G4 = useMemo(() => calculation(C2 + D2), [C2, D2]);
  const M = useMemo(() => calculation(G4 + C2), [G4, C2]);
  const L = useMemo(() => calculation(D2 + G4), [D2, G4]);
  const XY = useMemo(() => calculation(X + Y), [X, Y]);
  const G1 = useMemo(() => calculation(G2 + G), [G2, G]);
  const D1 = useMemo(() => calculation(D + D2), [D, D2]);
  const H2 = useMemo(() => calculation(H + Y), [H, Y]);
  const H1 = useMemo(() => calculation(H + H2), [H, H2]);
  const K1 = useMemo(() => calculation(D + C), [D, C]);
  const K2 = useMemo(() => calculation(D2 + C2), [D2, C2]);
  const K3 = useMemo(() => calculation(X + X), [X]);
  const K4 = useMemo(() => calculation(B3 + A3), [B3, A3]);
  const K5 = useMemo(() => calculation(B2 + A2), [B2, A2]);
  const K6 = useMemo(() => calculation(B1 + A1), [B1, A1]);
  const I5 = useMemo(() => calculation(D2 + C2), [D2, C2]);
  const T1 = useMemo(
    () => calculation(D + D2 + B3 + X + B1 + B2 + B),
    [D, D2, B3, X, B1, B2, B]
  );
  const T2 = useMemo(
    () => calculation(A + A1 + A2 + A3 + X + C2 + C),
    [A, A1, A2, A3, X, C2, C]
  );
  const T3 = useMemo(
    () => calculation(E + K6 + K5 + K4 + K3 + K2 + K1),
    [E, K6, K5, K4, K3, K2, K1]
  );
  const LN = useMemo(() => calculation(B + D), [B, D]);
  const LZ = useMemo(() => calculation(A + C), [A, C]);
  const LP1 = useMemo(() => calculation(LN + LZ), [LN, LZ]);
  const LO = useMemo(() => calculation(E + G), [E, G]);
  const LM = useMemo(() => calculation(F + H), [F, H]);
  const YM = useMemo(() => calculation(LO + LM), [LO, LM]);
  const DG = useMemo(() => calculation(YM + LP1), [YM, LP1]);
  const FH = useMemo(() => calculation(F + H), [F, H]);
  const EG = useMemo(() => calculation(E + G), [E, G]);
  const BF = useMemo(() => calculation(B + F), [B, F]);
  const BFB = useMemo(() => calculation(B + BF), [B, BF]);
  const BFBBF = useMemo(() => calculation(BF + BFB), [BF, BFB]);
  const BFBF = useMemo(() => calculation(B + BFB), [B, BFB]);
  const BFF = useMemo(() => calculation(BF + F), [BF, F]);
  const BFFBF = useMemo(() => calculation(BF + BFF), [BF, BFF]);
  const BFFF = useMemo(() => calculation(F + BFF), [F, BFF]);
  const FC = useMemo(() => calculation(F + C), [F, C]);
  const FCF = useMemo(() => calculation(FC + F), [FC, F]);
  const FCFFC = useMemo(() => calculation(FCF + FC), [FCF, FC]);
  const FCFF = useMemo(() => calculation(FCF + F), [FCF, F]);
  const FCC = useMemo(() => calculation(FC + C), [FC, C]);
  const FCCFC = useMemo(() => calculation(FCC + FC), [FCC, FC]);
  const FCCC = useMemo(() => calculation(FCC + C), [FCC, C]);
  const CG = useMemo(() => calculation(C + G), [C, G]);
  const CGC = useMemo(() => calculation(CG + C), [CG, C]);
  const CGCC = useMemo(() => calculation(CGC + C), [CGC, C]);
  const CGCCG = useMemo(() => calculation(CGC + CG), [CGC, CG]);
  const CGG = useMemo(() => calculation(CG + G), [CG, G]);
  const CGGCG = useMemo(() => calculation(CGG + CG), [CGG, CG]);
  const CGGG = useMemo(() => calculation(CGG + G), [CGG, G]);
  const GD = useMemo(() => calculation(G + D), [G, D]);
  const GDG = useMemo(() => calculation(GD + G), [GD, G]);
  const GDGG = useMemo(() => calculation(GDG + G), [GDG, G]);
  const GDGGD = useMemo(() => calculation(GDG + GD), [GDG, GD]);
  const GDD = useMemo(() => calculation(GD + D), [GD, D]);
  const GDDGD = useMemo(() => calculation(GDD + GD), [GDD, GD]);
  const GDDD = useMemo(() => calculation(GDD + D), [GDD, D]);
  const DH = useMemo(() => calculation(D + H), [D, H]);
  const DHD = useMemo(() => calculation(DH + D), [DH, D]);
  const DHDD = useMemo(() => calculation(DHD + D), [DHD, D]);
  const DHDDH = useMemo(() => calculation(DHD + DH), [DHD, DH]);
  const DHH = useMemo(() => calculation(DH + H), [DH, H]);
  const DHHDH = useMemo(() => calculation(DHH + DH), [DHH, DH]);
  const DHHH = useMemo(() => calculation(DHH + H), [DHH, H]);
  const HA = useMemo(() => calculation(H + A), [H, A]);
  const HAH = useMemo(() => calculation(HA + H), [HA, H]);
  const HAHH = useMemo(() => calculation(HAH + H), [HAH, H]);
  const HAHHA = useMemo(() => calculation(HAH + HA), [HAH, HA]);
  const HAA = useMemo(() => calculation(HA + A), [HA, A]);
  const HAAHA = useMemo(() => calculation(HAA + HA), [HAA, HA]);
  const HAAA = useMemo(() => calculation(HAA + A), [HAA, A]);
  const AE = useMemo(() => calculation(A + E), [A, E]);
  const AEA = useMemo(() => calculation(AE + A), [AE, A]);
  const AEAA = useMemo(() => calculation(AEA + A), [AEA, A]);
  const AEAAE = useMemo(() => calculation(AEA + AE), [AEA, AE]);
  const AEE = useMemo(() => calculation(AE + E), [AE, E]);
  const AEEAE = useMemo(() => calculation(AEE + AE), [AEE, AE]);
  const AEEE = useMemo(() => calculation(AEE + E), [AEE, E]);
  const EB = useMemo(() => calculation(E + B), [E, B]);
  const EBE = useMemo(() => calculation(EB + E), [EB, E]);
  const EBEE = useMemo(() => calculation(EBE + E), [EBE, E]);
  const EBEEB = useMemo(() => calculation(EBE + EB), [EBE, EB]);
  const EBB = useMemo(() => calculation(EB + B), [EB, B]);
  const EBBEB = useMemo(() => calculation(EBB + EB), [EBB, EB]);
  const EBBB = useMemo(() => calculation(EBB + B), [EBB, B]);

  const birthdayArray1 = useMemo(() => state.date1.split("-"), [state.date1]);
  const parsedBirthdayArray10 = parseInt(birthdayArray1[0]);
  const parsedBirthdayArray11 = parseInt(birthdayArray1[1]);
  const parsedBirthdayArray12 = parseInt(birthdayArray1[2]);
  const Ac = useMemo(
    () => calculation(parsedBirthdayArray12),
    [parsedBirthdayArray12]
  );
  const Bc = useMemo(
    () => calculation(parsedBirthdayArray11),
    [parsedBirthdayArray11]
  );
  const Cc = useMemo(
    () => calculation(parsedBirthdayArray10),
    [parsedBirthdayArray10]
  );
  const Dc = useMemo(() => calculation(Ac + Bc + Cc), [Ac, Bc, Cc]);
  const Xc = useMemo(() => calculation(Ac + Bc + Cc + Dc), [Ac, Bc, Cc, Dc]);
  const B2c = useMemo(() => calculation(Bc + Xc), [Bc, Xc]);
  const B1c = useMemo(() => calculation(Bc + B2c), [Bc, B2c]);
  const B3c = useMemo(() => calculation(B2c + Xc), [B2c, Xc]);
  const Fc = useMemo(() => calculation(Bc + Cc), [Bc, Cc]);
  const Hc = useMemo(() => calculation(Dc + Ac), [Dc, Ac]);
  const Gc = useMemo(() => calculation(Cc + Dc), [Cc, Dc]);
  const Ec = useMemo(() => calculation(Ac + Bc), [Ac, Bc]);
  const Yc = useMemo(() => calculation(Ec + Fc + Gc + Hc), [Ec, Fc, Gc, Hc]);
  const G2c = useMemo(() => calculation(Gc + Yc), [Gc, Yc]);
  const F2c = useMemo(() => calculation(Fc + Yc), [Fc, Yc]);
  const F1c = useMemo(() => calculation(Fc + F2c), [Fc, F2c]);
  const E2c = useMemo(() => calculation(Ec + Yc), [Ec, Yc]);
  const E1c = useMemo(() => calculation(Ec + E2c), [Ec, E2c]);
  const A2c = useMemo(() => calculation(Ac + Xc), [Ac, Xc]);
  const A1c = useMemo(() => calculation(Ac + A2c), [Ac, A2c]);
  const A3c = useMemo(() => calculation(A2c + Xc), [A2c, Xc]);
  const C2c = useMemo(() => calculation(Cc + Xc), [Cc, Xc]);
  const C1c = useMemo(() => calculation(Cc + C2c), [Cc, C2c]);
  const D2c = useMemo(() => calculation(Dc + Xc), [Dc, Xc]);
  const G4c = useMemo(() => calculation(C2c + D2c), [C2c, D2c]);
  const Mc = useMemo(() => calculation(G4c + C2c), [G4c, C2c]);
  const Lc = useMemo(() => calculation(D2c + G4c), [D2c, G4c]);
  const XYc = useMemo(() => calculation(Xc + Yc), [Xc, Yc]);
  const G1c = useMemo(() => calculation(G2c + Gc), [G2c, Gc]);
  const D1c = useMemo(() => calculation(Dc + D2c), [Dc, D2c]);
  const H2c = useMemo(() => calculation(Hc + Yc), [Hc, Yc]);
  const H1c = useMemo(() => calculation(Hc + H2c), [H2c, Hc]);
  const K1c = useMemo(() => calculation(Dc + Cc), [Dc, Cc]);
  const K2c = useMemo(() => calculation(D2c + C2c), [D2c, C2c]);
  const K3c = useMemo(() => calculation(Xc + Xc), [Xc]);
  const K4c = useMemo(() => calculation(B3c + A3c), [B3c, A3c]);
  const K5c = useMemo(() => calculation(B2c + A2c), [B2c, A2c]);
  const K6c = useMemo(() => calculation(B1c + A1c), [B1c, A1c]);
  const I5c = useMemo(() => calculation(D2c + C2c), [D2c, C2c]);
  const T1c = useMemo(
    () => calculation(Dc + D2c + B3c + Xc + B1c + B2c + Bc),
    [Dc, D2c, B3c, Xc, B1c, B2c, Bc]
  );
  const T2c = useMemo(
    () => calculation(Ac + A1c + A2c + A3c + Xc + C2c + Cc),
    [Ac, A1c, A2c, A3c, Xc, C2c, Cc]
  );
  const T3c = useMemo(
    () => calculation(Ec + K6c + K5c + K4c + K3c + K2c + K1c),
    [Ec, K6c, K5c, K4c, K3c, K2c, K1c]
  );
  const LNc = useMemo(() => calculation(Bc + Dc), [Bc, Dc]);
  const LZc = useMemo(() => calculation(Ac + Cc), [Ac, Cc]);
  const LP1c = useMemo(() => calculation(LNc + LZc), [LNc, LZc]);
  const LOc = useMemo(() => calculation(Ec + Gc), [Ec, Gc]);
  const LMc = useMemo(() => calculation(Fc + Hc), [Fc, Hc]);
  const YMc = useMemo(() => calculation(LOc + LMc), [LOc, LMc]);
  const DGc = useMemo(() => calculation(YMc + LP1c), [YMc, LP1c]);
  const FHc = useMemo(() => calculation(Fc + Hc), [Fc, Hc]);
  const EGc = useMemo(() => calculation(Ec + Gc), [Ec, Gc]);
  const BFc = useMemo(() => calculation(Bc + Fc), [Bc, Fc]);
  const BFBc = useMemo(() => calculation(Bc + BFc), [Bc, BFc]);
  const BFBBFc = useMemo(() => calculation(BFc + BFBc), [BFc, BFBc]);
  const BFBFc = useMemo(() => calculation(Bc + BFBc), [Bc, BFBc]);
  const BFFc = useMemo(() => calculation(BFc + Fc), [BFc, Fc]);
  const BFFBFc = useMemo(() => calculation(BFc + BFFc), [BFc, BFFc]);
  const BFFFc = useMemo(() => calculation(Fc + BFFc), [Fc, BFFc]);
  const FCc = useMemo(() => calculation(Fc + Cc), [Fc, Cc]);
  const FCFc = useMemo(() => calculation(FCc + Fc), [FCc, Fc]);
  const FCFFCc = useMemo(() => calculation(FCFc + FCc), [FCFc, FCc]);
  const FCFFc = useMemo(() => calculation(FCFc + Fc), [FCFc, Fc]);
  const FCCc = useMemo(() => calculation(FCc + Cc), [FCc, Cc]);
  const FCCFCc = useMemo(() => calculation(FCCc + FCc), [FCCc, FCc]);
  const FCCCc = useMemo(() => calculation(FCCc + Cc), [FCCc, Cc]);
  const CGc = useMemo(() => calculation(Cc + Gc), [Cc, Gc]);
  const CGCc = useMemo(() => calculation(CGc + Cc), [CGc, Cc]);
  const CGCCc = useMemo(() => calculation(CGCc + Cc), [CGCc, Cc]);
  const CGCCGc = useMemo(() => calculation(CGCc + CGc), [CGCc, CGc]);
  const CGGc = useMemo(() => calculation(CGc + Gc), [CGc, Gc]);
  const CGGCGc = useMemo(() => calculation(CGGc + CGc), [CGGc, CGc]);
  const CGGGc = useMemo(() => calculation(CGGc + Gc), [CGGc, Gc]);
  const GDc = useMemo(() => calculation(Gc + Dc), [Gc, Dc]);
  const GDGc = useMemo(() => calculation(GDc + Gc), [GDc, Gc]);
  const GDGGc = useMemo(() => calculation(GDGc + Gc), [GDGc, Gc]);
  const GDGGDc = useMemo(() => calculation(GDGc + GDc), [GDGc, GDc]);
  const GDDc = useMemo(() => calculation(GDc + Dc), [GDc, Dc]);
  const GDDGDc = useMemo(() => calculation(GDDc + GDc), [GDDc, GDc]);
  const GDDDc = useMemo(() => calculation(GDDc + Dc), [GDDc, Dc]);
  const DHc = useMemo(() => calculation(Dc + Hc), [Dc, Hc]);
  const DHDc = useMemo(() => calculation(DHc + Dc), [DHc, Dc]);
  const DHDDc = useMemo(() => calculation(DHDc + Dc), [DHDc, Dc]);
  const DHDDHc = useMemo(() => calculation(DHDc + DHc), [DHDc, DHc]);
  const DHHc = useMemo(() => calculation(DHc + Hc), [DHc, Hc]);
  const DHHDHc = useMemo(() => calculation(DHHc + DHc), [DHHc, DHc]);
  const DHHHc = useMemo(() => calculation(DHHc + Hc), [DHHc, Hc]);
  const HAc = useMemo(() => calculation(Hc + Ac), [Hc, Ac]);
  const HAHc = useMemo(() => calculation(HAc + Hc), [HAc, Hc]);
  const HAHHc = useMemo(() => calculation(HAHc + Hc), [HAHc, Hc]);
  const HAHHAc = useMemo(() => calculation(HAHc + HAc), [HAHc, HAc]);
  const HAAc = useMemo(() => calculation(HAc + Ac), [HAc, Ac]);
  const HAAHAc = useMemo(() => calculation(HAAc + HAc), [HAAc, HAc]);
  const HAAAc = useMemo(() => calculation(HAAc + Ac), [HAAc, Ac]);
  const AEc = useMemo(() => calculation(Ac + Ec), [Ac, Ec]);
  const AEAc = useMemo(() => calculation(AEc + Ac), [AEc, Ac]);
  const AEAAc = useMemo(() => calculation(AEAc + Ac), [AEAc, Ac]);
  const AEAAEc = useMemo(() => calculation(AEAc + AEc), [AEAc, AEc]);
  const AEEc = useMemo(() => calculation(AEc + Ec), [AEc, Ec]);
  const AEEAEc = useMemo(() => calculation(AEEc + AEc), [AEEc, AEc]);
  const AEEEc = useMemo(() => calculation(AEEc + Ec), [AEEc, Ec]);
  const EBc = useMemo(() => calculation(Ec + Bc), [Ec, Bc]);
  const EBEc = useMemo(() => calculation(EBc + Ec), [EBc, Ec]);
  const EBEEc = useMemo(() => calculation(EBEc + Ec), [EBEc, Ec]);
  const EBEEBc = useMemo(() => calculation(EBEc + EBc), [EBEc, EBc]);
  const EBBc = useMemo(() => calculation(EBc + Bc), [EBc, Bc]);
  const EBBEBc = useMemo(() => calculation(EBBc + EBc), [EBBc, EBc]);
  const EBBBc = useMemo(() => calculation(EBBc + Bc), [EBBc, Bc]);
  // Compatibility
  const Bd = useMemo(() => calculation(B + Bc), [B, Bc]);
  const Fd = useMemo(() => calculation(F + Fc), [F, Fc]);
  const Cd = useMemo(() => calculation(C + Cc), [C, Cc]);
  const Gd = useMemo(() => calculation(G + Gc), [G, Gc]);
  const Dd = useMemo(() => calculation(D + Dc), [D, Dc]);
  const Hd = useMemo(() => calculation(H + Hc), [H, Hc]);
  const Ad = useMemo(() => calculation(A + Ac), [A, Ac]);
  const Ed = useMemo(() => calculation(E + Ec), [E, Ec]);
  const Xd = useMemo(() => calculation(X + Xc), [X, Xc]);
  const B2d = useMemo(() => calculation(Bd + Xd), [Bd, Xd]);
  const B1d = useMemo(() => calculation(Bd + B2d), [Bd, B2d]);
  const C2d = useMemo(() => calculation(Cd + Xd), [Cd, Xd]);
  const C1d = useMemo(() => calculation(Cd + C2d), [Cd, C2d]);
  const D2d = useMemo(() => calculation(Dd + Xd), [Dd, Xd]);
  const D1d = useMemo(() => calculation(Dd + D2d), [Dd, D2d]);
  const A2d = useMemo(() => calculation(Ad + Xd), [Ad, Xd]);
  const A1d = useMemo(() => calculation(Ad + A2d), [Ad, A2d]);
  const G4d = useMemo(() => calculation(C2d + D2d), [C2d, D2d]);
  const Ld = useMemo(() => calculation(D2d + G4d), [D2d, G4d]);
  const Md = useMemo(() => calculation(G4d + C2d), [G4d, C2d]);
  const LNd = useMemo(() => calculation(Bd + Dd), [Bd, Dd]);
  const LZd = useMemo(() => calculation(Ad + Cd), [Ad, Cd]);
  const LP1d = useMemo(() => calculation(LNd + LZd), [LNd, LZd]);
  const LOd = useMemo(() => calculation(Ed + Gd), [Ed, Gd]);
  const LMd = useMemo(() => calculation(Fd + Hd), [Fd, Hd]);
  const YMd = useMemo(() => calculation(LOd + LMd), [LOd, LMd]);
  const RRMd = useMemo(() => calculation(LP1d + YMd), [LP1d, YMd]);

  const isWhyDidYouMeet = useMemo(
    () => funcCalculation([Ad, A1d, A2d]),
    [Ad, A1d, A2d]
  );
  const isTheSpiritualEssenceOfTheCouple = useMemo(
    () => funcCalculation([Bd, B1d, B2d]),
    [Bd, B1d, B2d]
  );
  const isMaterialKarma = useMemo(
    () => funcCalculation([Cd, C1d, C2d]),
    [Cd, C1d, C2d]
  );
  const isCouplesSpiritualKarma = useMemo(
    () => funcCalculation([Dd, D1d, D2d]),
    [Dd, D1d, D2d]
  );
  const isGenericTasksOfPartners = useMemo(
    () => funcCalculation([Ed, Fd, Gd, Hd]),
    [Ed, Fd, Gd, Hd]
  );
  const isCouplesWellBeing = useMemo(
    () => funcCalculation([C2d, Md, G4d, Ld, D2d]),
    [C2d, Md, G4d, Ld, D2d]
  );
  const isThePurposeOfTheCouple = useMemo(
    () => funcCalculation([LP1d, YMd, RRMd]),
    [LP1d, YMd, RRMd]
  );

  const downloadPdf = useCallback(async () => {
    let response = await personalMatrixAPI.getPdfCompatibility(
      isWhyDidYouMeet,
      isTheSpiritualEssenceOfTheCouple,
      isMaterialKarma,
      isCouplesSpiritualKarma,
      isGenericTasksOfPartners,
      isCouplesWellBeing,
      isThePurposeOfTheCouple,
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
  }, [
    isWhyDidYouMeet,
    isTheSpiritualEssenceOfTheCouple,
    isMaterialKarma,
    isCouplesSpiritualKarma,
    isGenericTasksOfPartners,
    isCouplesWellBeing,
    isThePurposeOfTheCouple,
    state.date,
    state.date1,
  ]);
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
        Матрица совместимости
        <br />
        Дата рождения первого партнера:{" "}
        {state.date.split("-").reverse().join("-")}
        <br />
        Дата рождения второго партнера:{" "}
        {state.date1.split("-").reverse().join("-")}
      </div>
      <MatrixDiagramCompatibility
        date1={state.date}
        date2={state.date1}
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
      <div className={"payOnceAndPDF"}>
        {dateRepeatCompatibility ? undefined : (
          <React.Fragment>
            <span>Приобрести расшифровку данных дат</span>
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
                matrix: "compatibility",
                price: 45000,
                date1: state.date,
                date2: state.date1,
              }}
            >
              Олатить
            </Link>
          </React.Fragment>
        )}
        {dateRepeatCompatibility ? (
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
