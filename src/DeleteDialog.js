import React, { useEffect, useRef } from "react";
import "./App.css";

function DeleteDialog({ user, onConfirm, onCancel }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    dialogRef.current && dialogRef.current.focus();
  }, []);
  const handleKeyDown = (e) => {
    if (e.key === "Escape") onCancel();
  };
  return (
    <div className="modal-overlay" tabIndex={-1} ref={dialogRef} onKeyDown={handleKeyDown} role="dialog" aria-modal="true">
      <div className="modal">
        <h2>Confirm Delete</h2>
        <p>Are you sure you want to delete <b>{user?.name}</b>?</p>
        <div className="modal-actions">
          <button className="btn btn-danger" onClick={onConfirm}>Delete</button>
          <button className="btn btn-secondary" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteDialog;
