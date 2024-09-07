import { useAuth } from "../../../context/AuthContext"

export default function Dashboard() {

    const { isAuthenticated } = useAuth();
    
    return (
        <div>
            <p>Dashboard</p>
        </div>
    )
}