import React from "react";

function MainContent({ users, onEdit, onDelete, onAdd }) {
  return (
    <main className="main-content">
      <div className="main-content-header">
        <h2>Users</h2>
        <button className="add-btn" onClick={onAdd}>
          Add
        </button>
      </div>
      <div className="table-wrapper">
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
              <tr>
                <td colSpan={5} style={{ textAlign: 'center', color: '#888' }}>
                  No users found.
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <span className={
                      user.status === "Active" ? "status-active" : "status-inactive"
                    }>
                      {user.status}
                    </span>
                  </td>
                  <td>
                    <button className="edit-btn" onClick={() => onEdit(user)}>
                      Edit
                    </button>
                    <button className="delete-btn" onClick={() => onDelete(user)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default MainContent;
