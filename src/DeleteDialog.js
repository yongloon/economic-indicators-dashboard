import React from "react";

/**
 * DeleteDialog: Confirmation dialog for deleting a user.
 * @param {Object} user - User to delete.
 * @param {function} onConfirm - Confirm callback.
 * @param {function} onCancel - Cancel callback.
 */
function DeleteDialog({ user, onConfirm, onCancel }) {
  return (
    <div className="modal" role="dialog" aria-modal="true">
      <div className="modal-content">
        <h2>Delete User</h2>
        <p>Are you sure you want to delete {user?.name}?</p>
        <div className="modal-actions">
          <button className="delete-btn" onClick={onConfirm}>Delete</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteDialog;
