import React, { useState, useEffect } from "react";

/**
 * UserModal component handles Add/Edit user functionality with validation.
 * Props:
 * - user: user object to edit (null for add)
 * - onSave: function(user) called on successful save
 * - onClose: function() to close the modal
 * - users: array of all users (for duplicate email validation)
 */
const UserModal = ({ user, onSave, onClose, users = [] }) => {
  const [formData, setFormData] = useState(
    user || { name: "", email: "", status: "Active" }
  );
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData(user || { name: "", email: "", status: "Active" });
    setErrors({});
  }, [user]);

  // Validation logic for required fields and duplicate email
  const validate = (data) => {
    const errs = {};
    if (!data.name.trim()) errs.name = "Name is required";
    if (!data.email.trim()) errs.email = "Email is required";
    else if (
      users.some(
        (u) => u.email === data.email && u.id !== (user ? user.id : null)
      )
    )
      errs.email = "Email already exists";
    return errs;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    onSave({ ...formData, id: user ? user.id : undefined });
  };

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal">
        <h2>{user ? "Edit User" : "Add User"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              autoFocus
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <div className="form-error" id="name-error">
                {errors.name}
              </div>
            )}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <div className="form-error" id="email-error">
                {errors.email}
              </div>
            )}
          </div>
          <div className="form-group">
            <label>Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="modal-actions">
            <button type="submit">Save</button>
            <button type="button" onClick={onClose} className="secondary">
              Cancel
            </button>
          </div>
        </form>
      </div>
      <style>{`
        .modal-overlay {
          position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
          background: rgba(0,0,0,0.2); display: flex; align-items: center; justify-content: center;
          z-index: 1000;
        }
        .modal {
          background: #fff; padding: 32px; border-radius: 8px; min-width: 320px; box-shadow: 0 2px 16px rgba(0,0,0,0.14);
        }
        .form-group { margin-bottom: 18px; }
        .form-group label { display: block; margin-bottom: 6px; font-weight: 500; }
        .form-group input, .form-group select {
          width: 100%; padding: 8px 12px; border: 1px solid #d1d5db; border-radius: 4px;
          font-size: 15px;
        }
        .form-error { color: #ef4444; font-size: 13px; margin-top: 4px; }
        .modal-actions { display: flex; gap: 12px; justify-content: flex-end; margin-top: 22px; }
        .modal-actions button { padding: 10px 20px; font-weight: 500; border: none; border-radius: 4px; cursor: pointer; }
        .modal-actions .secondary { background: #f1f5f9; color: #111827; }
        .modal-actions button[type='submit'] { background: #2563eb; color: #fff; }
      `}</style>
    </div>
  );
};

export default UserModal;
