import React from 'react';
// import PropTypes from 'prop-types'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import MapModal from 'components/Modals/MapModal';
import { useCustomQueries } from 'hooks';

import PostOfficesLTableItem from 'components/PostOfficesLTableItem';

const columns = [{ id: 'name', label: 'Назва', minWidth: 420 }];

function createData(number, name, adress, cargo) {
  return { number, name, adress, cargo };
}

const rows = [
  createData(1, 'Київ', 'Адресса 1', 'до 30 кг'),
  createData(2, 'Київ', 'Адресса 2', 'до 30 кг'),
  createData(3, 'Київ', 'Адресса 3', 'до 30 кг'),
  createData(4, 'Київ', 'Адресса 4', 'до 30 кг'),
  createData(5, 'Київ', 'Адресса 5', 'до 30 кг'),
  createData(6, 'Київ', 'Адресса 6', 'до 30 кг'),
  createData(7, 'Київ', 'Адресса 6', 'до 30 кг'),
  createData(8, 'Київ', 'Адресса 6', 'до 30 кг'),
  createData(9, 'Київ', 'Адресса 6', 'до 30 кг'),
  createData(10, 'Київ', 'Адресса 6', 'до 30 кг'),
  createData(11, 'Київ', 'Адресса 6', 'до 30 кг'),
  createData(12, 'Київ', 'Адресса 6', 'до 30 кг'),
  createData(13, 'Київ', 'Адресса 6', 'до 30 кг'),
  createData(14, 'Київ', 'Адресса 6', 'до 30 кг'),
];

const PostOfficesLTable = props => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [actualPostId, setActualPostId] = React.useState(null);

  const { mobile, tablet, desktop } = useCustomQueries();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // const setPostId = () => {
  //   return actualPostId;
  // };

  const handleGetPostOfficeDedeles = id => {
    console.log('id :>> ', id);
    setActualPostId(id);
  };

  return (
    <>
      <Paper sx={{ width: '100%' }}>
        <TableContainer sx={{ height: '100vh' }}>
          <Table stickyHeader aria-label="sticky table">
            {/* <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  //   align={column.align}
                  style={{ top: 0, minWidth: 20 }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead> */}
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => {
                  return (
                    <TableRow hover key={row.number}>
                      {columns.map(column => {
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            sx={{ p: 0 }}
                            onClick={() =>
                              handleGetPostOfficeDedeles(row.number)
                            }
                          >
                            <PostOfficesLTableItem data={row} />
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
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          labelRowsPerPage=""
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      {mobile && (
        <MapModal postId={actualPostId} setActualPostId={setActualPostId} />
      )}
    </>
  );
};

// PostOfficesLTable.propTypes = {};

export default PostOfficesLTable;
