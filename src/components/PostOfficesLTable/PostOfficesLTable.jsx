import React, { useEffect, useState } from 'react';
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
  sellectPostOffice,
  sellectPostOfficeIsLoading,
  sellectSearchString,
  sellectTotalHits,
} from 'redux/postOffices/postOfficeSellectors';
import {
  setHitsPerPage,
  setServerPage,
} from 'redux/postOffices/postOfficeSlice';
import { useNavigate } from 'react-router-dom';
import { FullscreenSpiner } from 'components/common/Spiners/Spiner';

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
  const searchString = useSelector(sellectSearchString);
  const postOfficeIsLoading = useSelector(sellectPostOfficeIsLoading);

  // Effect page changing
  useEffect(() => {
    dispatch(setServerPage(page + 1));
  }, [page, dispatch]);

  // Effect reset pages if new City select
  useEffect(() => {
    setPage(0);
    dispatch(setServerPage(1));
  }, [cityRef, searchString, dispatch]);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = e => {
    const hitsPerPage = +e.target.value;
    setRowsPerPage(hitsPerPage);
    dispatch(setHitsPerPage(hitsPerPage));
    setPage(0);
  };

  const handleGetPostOfficeDetales = ({ Ref, Number }) => {
    setActualPostId(Number);
    navigate(`/post-office/${Ref}`);
  };

  return (
    <>
      {postOfficeIsLoading ? (
        <FullscreenSpiner />
      ) : (
        <Paper sx={{ width: '100%', height: '104ch' }}>
          <TableContainer sx={{ width: '100%', height: '98ch' }}>
            <Table aria-label="sticky table">
              <TableBody>
                {postOffices.map(row => {
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
            sx={{ p: 0 }}
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
      )}
    </>
  );
};

export default PostOfficesLTable;
