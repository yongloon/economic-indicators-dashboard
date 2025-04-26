import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import UserModal from "./UserModal";
import DeleteDialog from "./DeleteDialog";
import "./App.css";

// Mock data
const initialUsers = [
  { id: 1, name: "Alice Smith", email: "alice@email.com", status: "Active" },
  { id: 2, name: "Bob Johnson", email: "bob@email.com", status: "Inactive" },
  { id: 3, name: "Carol White", email: "carol@email.com", status: "Active" },
];

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);

  // CRUD handlers
  const handleAdd = (user) => setUsers([...users, { ...user, id: Date.now() }]);
  const handleEdit = (user) =>
    setUsers(users.map((u) => (u.id === user.id ? user : u)));
  const handleDelete = (id) =>
    setUsers(users.filter((u) => u.id !== id));

  return (
    <div className="app-layout">
      <Header />
      <Sidebar />
      <MainContent
        users={users}
        onEdit={(user) => { setSelectedUser(user); setModalOpen(true); }}
        onDelete={(user) => { setSelectedUser(user); setDeleteDialogOpen(true); }}
        onAdd={() => { setSelectedUser(null); setModalOpen(true); }}
      />
      {isModalOpen && (
        <UserModal
          user={selectedUser}
          onSave={(user) => {
            selectedUser ? handleEdit(user) : handleAdd(user);
            setModalOpen(false);
          }}
          onClose={() => setModalOpen(false)}
        />
      )}
      {isDeleteDialogOpen && (
        <DeleteDialog
          user={selectedUser}
          onConfirm={() => { handleDelete(selectedUser.id); setDeleteDialogOpen(false); }}
          onCancel={() => setDeleteDialogOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
