import React, { useState } from 'react';
import { useUserContext } from '../context/useUserContext';

const UserForm: React.FC = () => {
  const { createUser } = useUserContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      await createUser({ name, email });
      setName("");
      setEmail("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Criar Novo Usuário</h2>
      <div>
        <label>Nome: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Email: </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div  style={{ textAlign: 'center' }}>
        <button type="submit">Criar Usuário</button>
      </div>
    </form>
  );
};

export default UserForm;
