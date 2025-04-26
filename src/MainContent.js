import React from "react";

/**
 * MainContent component: Displays the user table and action buttons.
 * @param {Object[]} users - Array of user objects.
 * @param {function} onEdit - Edit handler.
 * @param {function} onDelete - Delete handler.
 * @param {function} onAdd - Add handler.
 */
function MainContent({ users, onEdit, onDelete, onAdd }) {
  return (
    <main className="main-content">
      <div className="actions">
        <button className="add-btn" onClick={onAdd}>Add</button>
      </div>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr><td colSpan="5">No users found.</td></tr>
          ) : (
            users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.status}</td>
                <td>
                  <button className="edit-btn" onClick={() => onEdit(user)}>Edit</button>
                  <button className="delete-btn" onClick={() => onDelete(user)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {/* Pagination can be added here */}
    </main>
  );
}

export default MainContent;
