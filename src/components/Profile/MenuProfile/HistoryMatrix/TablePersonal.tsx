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
import {
  historyChildrenMatrix,
  historyPersonalMatrix,
} from "../../../../redux-store/registration-login-auth";
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

function createData(
  name: string,
  date: string,
  gender: string,
  link: JSX.Element
) {
  return { name, date, gender, link };
}
type PropsType = {
  matrix: "children" | "personal";
};
export function TablePersonal(props: PropsType) {
  const matrixSearchHistory = useAppSelector(
    (state) => state.registrationReducer.matrixSearchHistory
  );
  const sub = useAppSelector((state) => state.registrationReducer.subscription);
  const id = useAppSelector((state) => state.registrationReducer.id);
  const dispatch = useAppDispatch();
  let rows;
  if (props.matrix === "personal") {
    rows = matrixSearchHistory?.personal.map((e, index) =>
      createData(
        e.name,
        e.date,
        e.gender === "M" ? "Мужской" : "Женский",
        <Link
          className={"batonStandart"}
          state={{
            date: e.date,
            male: e.gender,
            child: false,
            sub,
            id,
            name: e.name,
          }}
          to={"/matrix"}
        >
          Рассчитать
        </Link>
      )
    );
  } else {
    rows = matrixSearchHistory?.children.map((e, index) =>
      createData(
        e.name,
        e.date,
        e.gender === "M" ? "Мужской" : "Женский",
        <Link
          className={"batonStandart"}
          state={{
            date: e.date,
            male: e.gender,
            child: true,
            sub,
            id,
            name: e.name,
          }}
          to={"/matrix"}
        >
          Рассчитать
        </Link>
      )
    );
  }

  useEffect(() => {
    if (props.matrix === "personal") {
      dispatch(historyPersonalMatrix());
    } else {
      dispatch(historyChildrenMatrix());
    }
  }, [props.matrix]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Имя</StyledTableCell>
            <StyledTableCell align="center">Дата рождения</StyledTableCell>
            <StyledTableCell align="center">Пол</StyledTableCell>
            <StyledTableCell align="center">Рассчитать снова</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.date}</StyledTableCell>
              <StyledTableCell align="center">{row.gender}</StyledTableCell>
              <StyledTableCell align="center">{row.link}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
