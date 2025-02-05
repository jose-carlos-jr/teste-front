import NavBar from "../components/NavBar";
import UserDelet from "../components/UserDelet";
import { UserProvider } from "../context/UserContext";

const DeleteUser = () => {
    return (
        <div>
            <NavBar />
                <UserProvider>
                    <UserDelet />
            </UserProvider>
        </div>
    );
};

export default DeleteUser;
