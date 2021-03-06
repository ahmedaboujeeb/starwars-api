import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import type { ICharacterInfo } from './Character';

interface IProps {
  details: ICharacterInfo;
  IsModalOpened: boolean;
  onCloseModal: Function;
}

const Info = (props: IProps) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  return (
    <div>
      <Modal
        open={props.IsModalOpened}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            {props.details?.name}
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Hair Color: {props.details?.hair_color}
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2, mb: 2 }}>
            Height: {props.details?.height}
          </Typography>
          <Button onClick={() => props.onCloseModal()} variant='text'>
            close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Info;
