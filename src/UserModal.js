import React, { useState, useEffect } from "react";

/**
 * UserModal: Modal for adding/editing a user.
 * @param {Object} user - User object to edit, or null for add.
 * @param {function} onSave - Callback to save user.
 * @param {function} onClose - Callback to close modal.
 */
function UserModal({ user, onSave, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", status: "Active" });

  useEffect(() => {
    if (user) setForm(user);
  }, [user]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    onSave({ ...user, ...form });
  };

  return (
    <div className="modal" role="dialog" aria-modal="true">
      <div className="modal-content">
        <h2>{user ? "Edit User" : "Add User"}</h2>
        <form onSubmit={handleSubmit}>
          <label>Name<input name="name" value={form.name} onChange={handleChange} required /></label>
          <label>Email<input name="email" type="email" value={form.email} onChange={handleChange} required /></label>
          <label>Status
            <select name="status" value={form.status} onChange={handleChange}>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </label>
          <div className="modal-actions">
            <button type="submit">Save</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserModal;
