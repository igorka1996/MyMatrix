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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
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

function createData(partnerOne: string, partnerTwo: string, link: JSX.Element) {
  return { partnerOne, partnerTwo, link };
}

export function TableCompatibility() {
  const sub = useAppSelector((state) => state.registrationReducer.subscription);
  const id = useAppSelector((state) => state.registrationReducer.id);
  const dispatch = useAppDispatch();
  const matrixSearchHistory = useAppSelector(
    (state) => state.registrationReducer.matrixSearchHistory
  );

  console.log(matrixSearchHistory);
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
      </Link>
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
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <StyledTableRow key={row.partnerOne}>
              <StyledTableCell component="th" scope="row">
                {row.partnerOne}
              </StyledTableCell>
              <StyledTableCell align="center">{row.partnerTwo}</StyledTableCell>
              <StyledTableCell align="center">{row.link}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
