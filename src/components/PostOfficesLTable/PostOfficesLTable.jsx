import React, { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import {
  sellectCityRef,
  sellectCurrentQuery,
  sellectPage,
  sellectPostOffice,
  sellectTotalHits,
} from 'redux/postOffices/postOfficeSellectors';
import { setServerPage } from 'redux/postOffices/postOfficeSlice';
import { fetchPostOffice } from 'redux/postOffices/postOfficeOperations';

const columns = [{ id: 'name', label: 'Назва', minWidth: 420 }];

const PostOfficesLTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [actualPostId, setActualPostId] = useState(null);

  const { mobile } = useCustomQueries();

  const dispatch = useDispatch();
  const postOffices = useSelector(sellectPostOffice);
  // console.log('postOffices :>> ', postOffices);

  const totalHits = useSelector(sellectTotalHits);
  const cityRef = useSelector(sellectCityRef);

  // useEffect(() => {
  //   if (serverPage === 1) {
  //     setActualPostOffices(postOffices);
  //   }
  //   setActualPostOffices(prevState => {
  //     // console.log('prevState :>> ', prevState);
  //     // console.log('postOffices :>> ', postOffices);
  //     return [...prevState, ...postOffices];
  //   });
  // }, [serverPage, postOffices]);

  // useEffect(() => {
  //   console.log('useEffect totalHits :>> ', totalHits);
  //   setActualPostOffices([]);
  // }, [totalHits]);

  // console.log('actualPostOffices :>> ', actualPostOffices);

  useEffect(() => {
    setPage(0);
    dispatch(setServerPage(1));
  }, [cityRef, dispatch]);

  // console.log('currentQuery :>> ', currentQuery);

  const handleChangePage = (event, newPage) => {
    // console.log('page :>> ', page);
    // console.log('newPage :>> ', newPage);

    // console.log(
    //   'needToLoad :>> ',
    //   postOffices.length / rowsPerPage === page + 1
    // );
    console.log('===================================');
    console.log('postOffices.length :>> ', postOffices.length);
    console.log('rowsPerPage :>> ', rowsPerPage);
    console.log('page + 1 :>> ', page + 1);
    console.log('===================================');

    const isLoadNextPostOffices = postOffices.length / rowsPerPage === page + 1;
    if (isLoadNextPostOffices) {
      console.log('inrice page');
      dispatch(setServerPage(newPage + 1));
    }
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleGetPostOfficeDetales = id => {
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
              {postOffices
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => {
                  return (
                    <TableRow hover key={row.Ref}>
                      {columns.map(column => {
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            sx={{ p: 0 }}
                            onClick={() => handleGetPostOfficeDetales(row.Ref)}
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
          count={totalHits}
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
