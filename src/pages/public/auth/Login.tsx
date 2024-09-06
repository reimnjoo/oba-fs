import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext"; 

export default function Login() {

    const { login } = useAuth(); 
    const navigate = useNavigate();

    const handleLogin = () => {
        login();
        navigate('/dashboard'); 
    };

    return (
        <div className="font-poppins">
            <p>Login</p>
            <button onClick={handleLogin}>Login Here</button>
        </div>
    );
}
