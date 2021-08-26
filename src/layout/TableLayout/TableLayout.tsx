import {
  Paper,
  makeStyles,
  createStyles,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
  withStyles,
  Theme,
} from '@material-ui/core';
import React from 'react';

interface RenderColumn<T> {
  label: string;
  key: keyof T;
  align?: 'right' | 'left' | 'inherit' | 'center' | 'justify';
  minWidth?: number;
  render?: (item: T) => JSX.Element;
}

export type TransformTable<T> = Array<RenderColumn<T>>;

export interface TableLayoutProps<T> {
  items: Array<T>;
  headers: TransformTable<T>;
}

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    container: {
      padding: '0px',
    },
  })
);

const TableLayout: <T>(
  props: TableLayoutProps<T>
) => React.ReactElement<TableLayoutProps<T>> = ({ items, headers }) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(12);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {headers.map((column) => (
                <StyledTableCell
                  key={column.key as string}
                  align={'left'}
                  style={{ minWidth: column.minWidth ? column.minWidth : 150 }}
                >
                  {column.label.toUpperCase()}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {items
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item: any) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={item.id}>
                    {headers.map((column) => {
                      const value = item[column.key];
                      return (
                        <TableCell
                          key={column.key as string}
                          align={column.align ? column.align : 'left'}
                        >
                          {column.render ? column.render(item) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[12, 25, 100]}
        component="div"
        count={items.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default TableLayout;
