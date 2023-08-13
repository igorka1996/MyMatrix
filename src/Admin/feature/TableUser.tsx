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
import { ChangeEvent, useEffect } from "react";
import { changeAdmin, getUserPage } from "../../redux-store/admin-all-user";
import { Switch } from "@mui/material";

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
  mail: string;
  phone: string;
  totalMount: number;
  admin: React.ReactElement;
}

function createData(
  name: string,
  surname: string,
  mail: string,
  phone: string,
  totalMount: number,
  admin: React.ReactElement
): Data {
  return { name, surname, mail, phone, totalMount, admin };
}

export function TableUser() {
  const userAll = useAppSelector((state) => state.adminUserAll.userAll);
  const users = useAppSelector((state) => state.adminUserAll.data);
  const dispatch = useAppDispatch();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  useEffect(() => {
    dispatch(getUserPage({ page, batchSize: rowsPerPage }));
  }, [page, rowsPerPage, dispatch]);

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
  const rows: Data[] = users.map((e) =>
    createData(
      e.name,
      e.surname,
      e.email,
      e.phone,
      e.totalAmount,
      <Switch
        checked={e.admin}
        onChange={(el) => onChangeHandlerAdmin(el, e._id)}
        color="secondary"
      />
    )
  );
  const cellKeys = columns.map((column) => column.id);
  const rowKeys = rows.map((row, index) => index);
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
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
          <TableBody>
            {rows
              // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, rowIndex) => (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={rowKeys[rowIndex]}
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
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={userAll}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
