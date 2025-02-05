import NavBar from "../components/NavBar";
import UserForm from "../components/UserForm";
import { UserProvider } from "../context/UserContext";

const Cadastrar = () => {
    return (
        <div style={{ textAlign: 'left' }}>
            <NavBar />
                <UserProvider>
                    <UserForm />
                </UserProvider>
        </div>
    );
}

export default Cadastrar