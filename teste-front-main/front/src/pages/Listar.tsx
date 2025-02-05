import NavBar from "../components/NavBar";
import { UserProvider } from "../context/UserContext";
import {UserList} from "../components/UserList";
const Listar = () => {
    return (
        <div style={{ textAlign: 'left' }}>
        <NavBar />
            <h2>Lista de Usuários</h2>  
            <UserProvider>
            <UserList  />
            </UserProvider>
        </div>
    );
}

export default Listar;