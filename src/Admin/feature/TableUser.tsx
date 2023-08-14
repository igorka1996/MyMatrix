import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useAppDispatch, useAppSelector } from "../../redux-store/store";
import { ChangeEvent, useEffect, useState } from "react";
import { changeAdmin, getUserPage } from "../../redux-store/admin-all-user";
import { Switch } from "@mui/material";
import { SuperInput } from "./SuperInput";
import { TableWaitSkeleton } from "../../feature/TableWaitSkeleton";
import { Link } from "react-router-dom";

interface Column {
  id: "name" | "surname" | "mail" | "phone" | "totalMount" | "admin";
  label: string;
  minWidth?: number;
  align?: "right";
}

const columns: readonly Column[] = [
  { id: "name", label: "Имя", minWidth: 170 },
  { id: "surname", label: "Фамилия", minWidth: 100 },
  {
    id: "mail",
    label: "Почта",
    minWidth: 170,
    align: "right",
  },
  {
    id: "phone",
    label: "Телефон",
    minWidth: 170,
    align: "right",
  },
  {
    id: "totalMount",
    label: "Сумма покупок",
    minWidth: 170,
    align: "right",
  },
  {
    id: "admin",
    label: "Админка",
    minWidth: 170,
    align: "right",
  },
];

interface Data {
  name: string;
  surname: string;
  mail: React.ReactElement;
  phone: string;
  totalMount: string;
  admin: React.ReactElement;
}

function createData(
  name: string,
  surname: string,
  mail: React.ReactElement,
  phone: string,
  totalMount: string,
  admin: React.ReactElement
): Data {
  return { name, surname, mail, phone, totalMount, admin };
}

export function TableUser() {
  const userAll = useAppSelector((state) => state.adminUserAll.userAll);
  const users = useAppSelector((state) => state.adminUserAll.data);
  const tableWait = useAppSelector((state) => state.errorReducer.tableWait);
  const dispatch = useAppDispatch();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [text, setText] = useState("");
  useEffect(() => {
    dispatch(getUserPage({ page, batchSize: rowsPerPage, search: text }));
  }, [page, rowsPerPage, dispatch, text]);
  const searchText = (payload: { text: string }) => {
    setText(payload.text);
  };
  const onChangeHandlerAdmin = (
    el: ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    dispatch(changeAdmin({ userId: id, value: el.currentTarget.checked }));
  };
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const rows: Data[] | undefined = users
    ? users.map((e) =>
        createData(
          e.name,
          e.surname,
          <Link state={{ id: e._id }} to={`/admin-table/${e._id}`}>
            {e.email}
          </Link>,
          e.phone,
          e.totalAmount.toString().replace(/(\d+)00(?=\s|$)/g, "$1,00"),
          <Switch
            checked={e.admin}
            onChange={(el) => onChangeHandlerAdmin(el, e._id)}
            color="secondary"
          />
        )
      )
    : undefined;
  const cellKeys = columns.map((column) => column.id);
  const rowKeys = rows?.map((row, index) => index);
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <SuperInput setPage={setPage} search={searchText} txt={text} />
      <TableContainer sx={{ maxHeight: "auto" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell
                  key={cellKeys[index]}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          {!tableWait ? (
            <TableBody>
              {rows?.map((row, rowIndex) => (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={rowKeys ? rowKeys[rowIndex] : undefined}
                >
                  {columns.map((column, columnIndex) => {
                    const value = row[column.id];
                    return (
                      <TableCell
                        key={cellKeys[columnIndex]}
                        align={column.align}
                      >
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <TableBody>
              <TableRow>
                <TableCell>
                  <TableWaitSkeleton />
                </TableCell>
                <TableCell>
                  <TableWaitSkeleton />
                </TableCell>
                <TableCell>
                  <TableWaitSkeleton />
                </TableCell>
                <TableCell>
                  <TableWaitSkeleton />
                </TableCell>
                <TableCell>
                  <TableWaitSkeleton />
                </TableCell>
                <TableCell>
                  <TableWaitSkeleton />
                </TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={userAll}
        rowsPerPage={rowsPerPage}
        page={page}
        labelRowsPerPage={"Количество аккаунтов на странице"}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
