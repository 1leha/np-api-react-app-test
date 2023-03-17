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
  sellectHitsPerPage,
  sellectPostOffice,
  sellectSortedPostOffice,
  sellectTotalHits,
} from 'redux/postOffices/postOfficeSellectors';
import {
  setHitsPerPage,
  setServerPage,
} from 'redux/postOffices/postOfficeSlice';
import { useNavigate } from 'react-router-dom';

const columns = [{ id: 'name', label: 'Назва', minWidth: 420 }];

const PostOfficesLTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [actualPostId, setActualPostId] = useState(null);

  const { mobile } = useCustomQueries();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const postOffices = useSelector(sellectPostOffice);
  const totalHits = useSelector(sellectTotalHits);
  const cityRef = useSelector(sellectCityRef);

  // Reset pages if new City select
  useEffect(() => {
    setPage(0);
    dispatch(setServerPage(1));
  }, [cityRef, dispatch]);

  const handleChangePage = (event, newPage) => {
    const isLoadNextPostOffices = postOffices.length / rowsPerPage === page + 1;
    if (isLoadNextPostOffices) {
      dispatch(setServerPage(newPage + 1));
    }
    setPage(newPage);
  };

  const handleChangeRowsPerPage = e => {
    const hitsPerPage = +e.target.value;
    console.log('hitsPerPage :>> ', hitsPerPage);
    setRowsPerPage(hitsPerPage);
    dispatch(setHitsPerPage(hitsPerPage));
    setPage(0);
  };

  const handleGetPostOfficeDetales = ({ Ref, Number }) => {
    // console.log('id :>> ', id);
    setActualPostId(Number);
    navigate(`/post-office/${Ref}`);
  };

  return (
    <>
      <Paper sx={{ width: '100%' }}>
        <TableContainer sx={{ height: '100vh' }}>
          <Table stickyHeader aria-label="sticky table">
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
                            onClick={() => handleGetPostOfficeDetales(row)}
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
        {mobile && (
          <MapModal postId={actualPostId} setActualPostId={setActualPostId} />
        )}
      </Paper>
    </>
  );
};

// PostOfficesLTable.propTypes = {};

export default PostOfficesLTable;
