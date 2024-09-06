import { useAuth } from "../../../context/AuthContext"

export default function Dashboard() {

    const { isAuthenticated } = useAuth();
    
    return (
        <div className="p-5">
            <p>Dashboard</p>
        </div>
    )
}