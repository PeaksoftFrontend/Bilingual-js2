import React from "react";
import { useTable } from "react-table";
import {
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { TABLE_VARIANTS } from "../../../utils/constants/AdminTable";
import { Icons } from "../../../assets/icons";

export const AdminTable = ({ variant, data }) => {
  const tableConfig = TABLE_VARIANTS[variant];

  if (!tableConfig) {
    return <div>Invalid variant selected</div>;
  }

  const columns = React.useMemo(
    () => [
      ...tableConfig.headers.map((header, index) => ({
        Header: header,
        accessor: tableConfig.keys[index],
      })),
      {
        accessor: "actions",
        Cell: ({ row }) => (
          <ActionsContainer>
            {row.original.onIcon ? <Icons.SwitchOn /> : <Icons.SwitchOff />}
            <Icons.Note />
            <Icons.Trash />
          </ActionsContainer>
        ),
      },
    ],
    [variant]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <StyledTableContainer component={Paper}>
      <Table {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup, headerIndex) => (
            <TableRow {...headerGroup.getHeaderGroupProps()} key={headerIndex}>
              {headerGroup.headers.map((column, columnIndex) => (
                <StyledHeaderCell
                  {...column.getHeaderProps()}
                  key={columnIndex}
                >
                  {column.render("Header")}
                </StyledHeaderCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row, rowIndex) => {
            prepareRow(row);
            return (
              <StyledRow {...row.getRowProps()} key={rowIndex}>
                {row.cells.map((cell, cellIndex) => (
                  <StyledCell {...cell.getCellProps()} key={cellIndex}>
                    {cell.render("Cell")}
                  </StyledCell>
                ))}
              </StyledRow>
            );
          })}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

const StyledTableContainer = styled(TableContainer)({
  width: "100%",
});

const StyledHeaderCell = styled(TableCell)({
  fontWeight: "bold",
  fontSize: "16px",
});

const StyledRow = styled(TableRow)({
  width: "100%",
  height: "66px",
  borderRadius: "8px",
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
});

const StyledCell = styled(TableCell)({
  borderBottom: "none",
  "&:first-of-type": {
    borderTopLeftRadius: "8px",
    borderBottomLeftRadius: "8px",
  },
  "&:last-of-type": {
    borderTopRightRadius: "8px",
    borderBottomRightRadius: "8px",
  },
});

const ActionsContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "22px",
});
