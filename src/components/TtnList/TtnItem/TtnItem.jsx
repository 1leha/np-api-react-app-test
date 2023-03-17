import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Divider,
  IconButton,
  ListItem,
  ListItemText,
  Tooltip,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';
import { styled } from '@mui/material/styles';
import { tooltipClasses } from '@mui/material/Tooltip';
import { removeTtn } from 'redux/ttn/ttnSlice';
import { fetchTtn } from 'redux/ttn/ttnOperations';
import { useNavigate } from 'react-router';
import { eu } from 'date-fns/locale';
import { useCustomQueries } from 'hooks';
import { theme } from 'theme';

const TtnItem = ({
  data: { Number, requestDate, Status, RecipientDateTime, StatusCode },
  onClose,
}) => {
  const [ttnStatusColor, setTtnStatusColor] = useState('');

  useEffect(() => {
    switch (+StatusCode) {
      case 3:
        setTtnStatusColor(theme.colors.statusNotFound);
        break;

      case 5:
        setTtnStatusColor(theme.colors.statusOnTheWay);
        break;

      case 7:
        setTtnStatusColor(theme.colors.statusInPostOffice);
        break;

      case 8:
        setTtnStatusColor(theme.colors.statusInPostOffice);
        break;

      case 9:
        setTtnStatusColor(theme.colors.statusDone);
        break;

      case 10:
        setTtnStatusColor(theme.colors.statusDone);
        break;

      case 11:
        setTtnStatusColor(theme.colors.statusDone);
        break;

      default:
        setTtnStatusColor(theme.colors.secondary);

        break;
    }
  }, [StatusCode]);

  const dispatch = useDispatch();
  const { mobile } = useCustomQueries();

  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }));

  const navigate = useNavigate();

  const handleRemove = (e, ttn) => {
    e.stopPropagation();

    dispatch(removeTtn(ttn));
    navigate(`/check`, { replace: true });
  };

  const handleCheck = ttn => {
    dispatch(fetchTtn(ttn));
    navigate(`/check/${ttn}`);

    mobile && onClose();
  };

  return (
    <>
      <ListItem
        sx={{
          background: ttnStatusColor,
        }}
        button
        onClick={() => handleCheck(Number)}
        secondaryAction={
          <Tooltip title="Видалити" arrow>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={e => handleRemove(e, Number)}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        }
      >
        <HtmlTooltip
          title={
            <>
              <Typography color="inherit">{Status}</Typography>
              <b>{RecipientDateTime}</b>
            </>
          }
        >
          <ListItemText
            primary={Number}
            secondary={format(requestDate, 'HH:MM:ss', {
              locale: eu,
            })}
          />
        </HtmlTooltip>
      </ListItem>
      <Divider />
    </>
  );
};

TtnItem.propTypes = {
  Number: PropTypes.string,
  requestDate: PropTypes.string,
  Status: PropTypes.string,
  RecipientDateTime: PropTypes.string,
  StatusCode: PropTypes.string,
  onClose: PropTypes.func,
};

export default TtnItem;
