import React, { useEffect } from 'react';
import { useUserStore } from './userStore'; // Import your store

const UserList = () => {
  // Extract state and actions using selectors
  const users = useUserStore((state) => state.users);
  const isLoading = useUserStore((state) => state.isLoading);
  const error = useUserStore((state) => state.error);
  const fetchUsers = useUserStore((state) => state.fetchUsers);

  // Trigger the API call on mount
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
