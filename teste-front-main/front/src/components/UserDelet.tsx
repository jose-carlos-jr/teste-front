import React from 'react';
import { useUserContext } from '../context/useUserContext';

export const UserDelet: React.FC = () => {
  const { users, deleteUser } = useUserContext();

  return (
    <div style={{ textAlign: 'left' }}>
      <h2>Lista de Usuários</h2>    
      <p>Selecione um usuário para deletar:</p>
        <ul>
            {users.map((user) => (
            <li key={user.id}>
                {user.name} - {user.email}
                <button onClick={() => deleteUser(user.id)}>Deletar</button>
            </li>
            ))}
        </ul>    
    </div>
  );
};

export default UserDelet;