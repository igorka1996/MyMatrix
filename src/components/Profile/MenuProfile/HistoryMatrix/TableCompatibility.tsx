import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppDispatch, useAppSelector } from "../../../../redux-store/store";
import { useEffect } from "react";
import { historyCompatibilityMatrix } from "../../../../redux-store/registration-login-auth";
import { Link } from "react-router-dom";
import { calculation, funcCalculation } from "../../../../utils/calc";
import { personalMatrixAPI } from "../../../../API/API";
import { TableWaitSkeleton } from "../../../../feature/TableWaitSkeleton";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#6f89ad",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  partnerOne: string,
  partnerTwo: string,
  link: JSX.Element,
  pdf: JSX.Element
) {
  return { partnerOne, partnerTwo, link, pdf };
}

export function TableCompatibility() {
  const sub = useAppSelector((state) => state.registrationReducer.subscription);
  const id = useAppSelector((state) => state.registrationReducer.id);
  const tableWait = useAppSelector((state) => state.errorReducer.tableWait);
  const dispatch = useAppDispatch();
  const matrixSearchHistory = useAppSelector(
    (state) => state.registrationReducer.matrixSearchHistory
  );

  const onClickHandlerCompatibilityPDF = async (
    date1: string,
    date2: string
  ) => {
    const birthdayArray = date1.split("-");
    let A = calculation(parseInt(birthdayArray[2]));
    let B = calculation(parseInt(birthdayArray[1]));
    let C = calculation(parseInt(birthdayArray[0]));
    let D = calculation(A + B + C);
    let X = calculation(A + B + C + D);
    let F = calculation(B + C);
    let H = calculation(D + A);
    let G = calculation(C + D);
    let E = calculation(A + B);
    const birthdayArray1 = date2.split("-");
    let Ac = calculation(parseInt(birthdayArray1[2]));
    let Bc = calculation(parseInt(birthdayArray1[1]));
    let Cc = calculation(parseInt(birthdayArray1[0]));
    let Dc = calculation(Ac + Bc + Cc);
    let Xc = calculation(Ac + Bc + Cc + Dc);
    let Fc = calculation(Bc + Cc);
    let Hc = calculation(Dc + Ac);
    let Gc = calculation(Cc + Dc);
    let Ec = calculation(Ac + Bc);
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
    try {
      let response = await personalMatrixAPI.getPdfCompatibility(
        funcCalculation([Ad, A1d, A2d]),
        funcCalculation([Bd, B1d, B2d]),
        funcCalculation([Cd, C1d, C2d]),
        funcCalculation([Dd, D1d, D2d]),
        funcCalculation([Ed, Fd, Gd, Hd]),
        funcCalculation([C2d, Md, G4d, Ld, D2d]),
        funcCalculation([LP1d, YMd, RRMd]),
        date1,
        date2
      );
      const blob = await new Blob([response.data], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${date1}/${date2}`;
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch (e) {
      console.log(e);
    }
  };

  const rows = matrixSearchHistory?.compatibility.map((e) =>
    createData(
      e.datePartnerOne,
      e.datePartnerTwo,
      <Link
        className={"batonStandart"}
        state={{ date: e.datePartnerOne, date1: e.datePartnerTwo, sub, id }}
        to={"/matrixcompatibility"}
      >
        Рассчитать
      </Link>,
      <span
        className={"batonStandart"}
        onClick={() =>
          onClickHandlerCompatibilityPDF(e.datePartnerOne, e.datePartnerTwo)
        }
      >
        Скачать
      </span>
    )
  );

  useEffect(() => {
    dispatch(historyCompatibilityMatrix());
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Дата рождения первого партнера</StyledTableCell>
            <StyledTableCell align="center">
              Дата рождения второго партнера
            </StyledTableCell>
            <StyledTableCell align="center">Рассчитать снова</StyledTableCell>
            <StyledTableCell align="center">Документ</StyledTableCell>
          </TableRow>
        </TableHead>
        {tableWait ? (
          <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <TableWaitSkeleton />
              </StyledTableCell>
              <StyledTableCell align="center">
                <TableWaitSkeleton />
              </StyledTableCell>
              <StyledTableCell align="center">
                <TableWaitSkeleton />
              </StyledTableCell>
              <StyledTableCell align="center">
                <TableWaitSkeleton />
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        ) : (
          <TableBody>
            {rows?.map((row) => (
              <StyledTableRow key={row.partnerOne}>
                <StyledTableCell component="th" scope="row">
                  {row.partnerOne.split("-").reverse().join("-")}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.partnerTwo.split("-").reverse().join("-")}
                </StyledTableCell>
                <StyledTableCell align="center">{row.link}</StyledTableCell>
                <StyledTableCell align="center">{row.pdf}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
}
