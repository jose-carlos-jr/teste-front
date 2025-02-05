import { useUserContext } from '../context/useUserContext';
import { useNavigate } from "react-router-dom";
import styles from './NavBar.module.css';
const NavBar = () => {

  const { fetchUsers } = useUserContext();
  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
      <h2>Gerenciamento de Usuários</h2>
      <div className={styles.buttons}>
            <button onClick={() => navigate("/")} className={styles.button}>🏠 Home</button>
            <button onClick={() => { navigate("/Cadastrar"); }} className={styles.button}>➕ Cadastrar</button>
            <button onClick={() => { fetchUsers(); navigate("/Listar"); }} className={styles.button}>🔄 Listar</button>
            <button onClick={() => navigate("/Deletar")} className={styles.button}>❌ Deletar Usuário</button>
      </div>
    </nav>
  );
};

export default NavBar;

