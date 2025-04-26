// UserModal.js
import React, { useState, useEffect, useRef } from "react";
import "./App.css";

/**
 * Modal for adding or editing a user.
 * @param {Object} props
 * @param {Object|null} props.user - User object for editing, or null for adding.
 * @param {Function} props.onSave - Callback to save user.
 * @param {Function} props.onClose - Callback to close modal.
 */
function UserModal({ user, onSave, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    status: "Active",
  });
  const [error, setError] = useState("");
  const firstInputRef = useRef(null);

  useEffect(() => {
    if (user) {
      setForm({ name: user.name, email: user.email, status: user.status });
    } else {
      setForm({ name: "", email: "", status: "Active" });
    }
    setError("");
    // Focus first input on open
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [user]);

  // Trap focus inside modal
  useEffect(() => {
    const handleTab = (e) => {
      const focusable = document.querySelectorAll(
        ".modal input, .modal select, .modal button, .modal [tabindex]:not([tabindex='-1'])"
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [onClose]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (!form.name.trim() || !form.email.trim()) {
      setError("Name and Email are required.");
      return;
    }
    // Email format check
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      setError("Invalid email format.");
      return;
    }
    setError("");
    onSave({ ...user, ...form });
  };

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal">
        <h2>{user ? "Edit User" : "Add User"}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              ref={firstInputRef}
              required
            />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Status
            <select name="status" value={form.status} onChange={handleChange}>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </label>
          {error && <div className="form-error" role="alert">{error}</div>}
          <div className="modal-actions">
            <button type="submit" className="btn btn-primary">
              {user ? "Save Changes" : "Add User"}
            </button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserModal;
