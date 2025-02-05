import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
//import { config } from '../config';
import {endpoints} from '../config'

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface UserContextProps {
  users: User[];
  fetchUsers: () => Promise<void>;
  createUser: (user: Omit<User, 'id'>) => Promise<void>;
  updateUser: (user: User) => Promise<void>;
  deleteUser: (id: number) => Promise<void>;
}

export const UserContext = createContext<UserContextProps>({
  users: [],
  fetchUsers: async () => {},
  createUser: async () => {},
  updateUser: async () => {},
  deleteUser: async () => {},
});

interface ProviderProps {
  children: ReactNode;
}


export const UserProvider: React.FC<ProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);


  const fetchUsers = async () => {
    try {
      console.log("Fazendo requisição para:", `${endpoints.root}/users`);
      const response = await axios.get(`${endpoints.root}/users`, {
        headers: { "Cache-Control": "no-cache" },
        params: { t: new Date().getTime() }, // Adiciona um timestamp para evitar cache
      });
      console.log('Dados recebidos:', response.data);
      setUsers(response.data);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  };
  

  const createUser = async (user: Omit<User, 'id'>) => {
    try {
      const response = await axios.post(`${endpoints.root}/users`, user);
      setUsers([...users, response.data]);
      alert("✅ Usuário cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  };


  const updateUser = async (user: User) => {
    try {
      await axios.put(`${endpoints.root}/users/${user.id}`, user);
      setUsers(users.map(u => (u.id === user.id ? user : u)));
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
    }
  };


  const deleteUser = async (id: number) => {
    try {
      await axios.delete(`${endpoints.root}/users/${id}`);
      setUsers(users.filter(u => u.id !== id));
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  
  return (
    <UserContext.Provider value={{ users, fetchUsers, createUser, updateUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};
