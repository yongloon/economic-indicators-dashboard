// UserModal.js
import React, { useState, useEffect, useRef } from "react";
import "./App.css";

/**
 * UserModal component for adding/editing users.
 * Accessible modal dialog with form fields for Name, Email, Status.
 * Props:
 *   user: user object to edit (null for add)
 *   onSave: function(user) => void
 *   onClose: function() => void
 */
const UserModal = ({ user, onSave, onClose }) => {
  const [form, setForm] = useState({
    name: user ? user.name : "",
    email: user ? user.email : "",
    status: user ? user.status : "Active",
  });
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus first input for accessibility
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (!form.name || !form.email) {
      setError("Name and Email are required.");
      return;
    }
    // Email regex (basic)
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Invalid email address.");
      return;
    }
    setError("");
    onSave({ ...user, ...form });
  };

  // ESC key closes modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <form className="modal" onSubmit={handleSubmit}>
        <button
          type="button"
          className="modal-close"
          aria-label="Close"
          onClick={onClose}
        >
          ×
        </button>
        <h2>{user ? "Edit User" : "Add User"}</h2>
        <label>
          Name
          <input
            ref={inputRef}
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            aria-required="true"
          />
        </label>
        <label>
          Email
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            aria-required="true"
            type="email"
          />
        </label>
        <label>
          Status
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </label>
        {error && <div style={{ color: "#ef4444", marginTop: 8 }}>{error}</div>}
        <div style={{ marginTop: 24, textAlign: "right" }}>
          <button
            type="button"
            className="btn-delete"
            style={{ marginRight: 8 }}
            onClick={onClose}
          >
            Cancel
          </button>
          <button className="btn-add" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserModal;
