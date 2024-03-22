import { Navigate } from "react-router-dom";
import Loader from "../Components/Loader/Loader";
import useRole from "../Hooks/useRole";


const AdminHostRoute = ({children}) => {
    const [role, isLoading] =useRole()
    console.log(role)
    

    if (isLoading) return <Loader></Loader>
    if (role === 'admin' || role ==='host') return children
    return <Navigate to='/dashboard' />
};

export default AdminHostRoute;