// MainContent.js
// Displays the main user table with CRUD actions and pagination
import React, { useState } from 'react';
import './App.css';

/**
 * MainContent displays the user table, Add/Edit/Delete buttons, and pagination.
 * @param {Array} users - List of user objects
 * @param {Function} onEdit - Edit user handler
 * @param {Function} onDelete - Delete user handler
 * @param {Function} onAdd - Add user handler
 */
const PAGE_SIZE = 5;

const MainContent = ({ users, onEdit, onDelete, onAdd }) => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(users.length / PAGE_SIZE) || 1;
  const pagedUsers = users.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <main className="main-content">
      <div className="main-content-header">
        <h1>Users</h1>
        <button className="primary-btn" onClick={onAdd} aria-label="Add user">Add</button>
      </div>
      <div className="table-container" tabIndex={0}>
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
            {pagedUsers.length === 0 ? (
              <tr>
                <td colSpan={5} className="empty-state">No users found.</td>
              </tr>
            ) : (
              pagedUsers.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <span className={user.status === 'Active' ? 'status-active' : 'status-inactive'}>
                      {user.status}
                    </span>
                  </td>
                  <td>
                    <button className="secondary-btn" onClick={() => onEdit(user)} aria-label={`Edit ${user.name}`}>Edit</button>
                    <button className="danger-btn" onClick={() => onDelete(user)} aria-label={`Delete ${user.name}`}>Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <button
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1}
          aria-label="Previous page"
        >
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button
          onClick={() => setPage(p => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          aria-label="Next page"
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default MainContent;
