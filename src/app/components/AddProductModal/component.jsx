import React from 'react';
import { Typography, Modal } from 'material-ui';


const AddProductModal = ({ open, onClose }) => (
  <Modal open={open} onClose={onClose}>
    <div>
      <Typography variant="title">
        Text in a modal
      </Typography>
      <Typography variant="subheading">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </Typography>
    </div>
  </Modal>
);

export default AddProductModal;
