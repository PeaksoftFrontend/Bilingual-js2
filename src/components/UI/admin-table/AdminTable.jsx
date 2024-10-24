import React, { useState } from "react";
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
import { Icons } from "../../../assets/icons";

export const AdminTable = ({ columns, data }) => {
  const getTableType = () => {
    if (columns.some((col) => col.accessor === "questionType")) {
      return "TEST";
    } else if (columns.some((col) => col.accessor === "userName")) {
      return "USERINFO";
    } else if (columns.some((col) => col.accessor === "question")) {
      return "RESULT";
    }
    return null;
  };

  const tableType = getTableType();

  const getIcons = (row) => {
    const [isSwitced, setIsSwitced] = useState(row.original.icon);

    const handleIconClick = () => {
      setIsSwitced((prevState) => !prevState);
    };

    switch (tableType) {
      case "TEST":
        return (
          <ActionsContainer>
            <div onClick={handleIconClick}>
              {isSwitced ? <Icons.SwitchOn /> : <Icons.SwitchOff />}
            </div>
            <Icons.Note />
            <Icons.Trash />
          </ActionsContainer>
        );
      case "USERINFO":
        return (
          <ActionsContainer>
            {row.original.icon ? <Icons.Tick /> : <Icons.Eye />}
            <Icons.Trash />
          </ActionsContainer>
        );
      case "RESULT":
        return (
          <ActionsContainer>
            {row.original.icon ? <Icons.Eye /> : <Icons.TickGreen />}
          </ActionsContainer>
        );
      default:
        return null;
    }
  };

  const modifiedColumns = React.useMemo(
    () => [
      ...columns,
      {
        accessor: "actions",
        Cell: ({ row }) => getIcons(row),
      },
    ],
    [columns, tableType]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns: modifiedColumns,
      data,
    });

  return (
    <StyledTableContainer component={Paper}>
      <StyledTable {...getTableProps()}>
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
                  <StyledCell
                    {...cell.getCellProps()}
                    key={cellIndex}
                    data-column={cell.column.id}
                  >
                    {cell.render("Cell")}
                  </StyledCell>
                ))}
              </StyledRow>
            );
          })}
        </TableBody>
      </StyledTable>
    </StyledTableContainer>
  );
};

const StyledTable = styled(Table)(() => ({
  borderSpacing: "0 16px",
  borderCollapse: "separate",
  background: "transparent",
}));

const StyledTableContainer = styled(TableContainer)({
  width: "100%",
  boxShadow: "none",
});

const StyledHeaderCell = styled(TableCell)({
  fontWeight: "bold",
  fontSize: "16px",
  borderBottom: "none",
});

const StyledRow = styled(TableRow)({
  width: "100%",
  height: "66px",
  borderRadius: "8px",
  boxShadow:
    "0px 4px 10px 0px rgba(0, 0, 0, 0.06),  0px -4px 10px 0px rgba(0, 0, 0, 0.06)",
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

  "&[data-column='name']": {
    maxWidth: "150px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});

const ActionsContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "22px",
});
