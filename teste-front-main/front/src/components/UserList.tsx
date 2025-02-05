import React from 'react';
import { useUserContext } from '../context/useUserContext';

export const UserList: React.FC = () => {
  const { users } = useUserContext();

  console.log("Usuários carregados no UserList:", users); // 👈 Adicione isso

  if (!Array.isArray(users)) {
    return <div>Os dados de usuários não estão no formato esperado.</div>;
  }

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;