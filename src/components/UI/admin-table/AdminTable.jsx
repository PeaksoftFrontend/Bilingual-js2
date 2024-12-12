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

export const AdminTable = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <StyledTableContainer component={Paper}>
      <StyledTable {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <StyledHeaderCell {...column.getHeaderProps()}>
                  {column.render("Header")}
                </StyledHeaderCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <StyledRow {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <StyledCell {...cell.getCellProps()}>
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
  cursor: "pointer",
  "&:first-of-type": {
    borderTopLeftRadius: "8px",
    borderBottomLeftRadius: "8px",
  },
  "&:last-of-type": {
    borderTopRightRadius: "8px",
    borderBottomRightRadius: "8px",
  },
});
