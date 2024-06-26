import React from 'react';

const ConfirmDialog = ({ task, onConfirm, onCancel }) => {
  return (
    <div className="confirm-dialog">
      <p>Are you sure you want to delete "{task.text}"?</p>
      <button className="confirm-button" onClick={onConfirm}>YES</button>
      <button className="cancel-button" onClick={onCancel}>NO</button>
    </div>
  );
};

export default ConfirmDialog;
