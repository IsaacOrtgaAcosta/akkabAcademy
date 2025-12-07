import * as React from 'react';
import type {idPlan} from '@/app/shared/types/common';
import Box from '@mui/material/Box';
import Modal, {type ModalProps as MuiModalProps} from '@mui/material/Modal';

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


interface ModalComponentProps extends MuiModalProps {
    idPlan: idPlan;
};

export const ModalComponent: React.FC<ModalComponentProps> = ({
    open,
    onClose,
    children,
    idPlan,
    ...rest
}) => {

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
         data-idPlan={idPlan}
        {...rest}
      >
        <Box sx={style}>
          {children}
        </Box>
      </Modal>
    </div>
  );
}