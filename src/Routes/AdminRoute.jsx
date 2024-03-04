

import { Navigate } from 'react-router-dom';
import Loader from '../Components/Loader/Loader';
import useRole from '../Hooks/useRole';

const AdminRoute = ({children}) => {
    const [role, isLoading] =useRole()
    console.log(role)
    

    if (isLoading) return <Loader></Loader>
    if (role === 'admin') return children
    return <Navigate to='/dashboard' />
};

export default AdminRoute;