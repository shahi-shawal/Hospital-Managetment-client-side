import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import useAuth from "../../Hooks/useAuth";

// eslint-disable-next-line react/prop-types
const AdminRoutes = ({children}) => {
   
    const {user, loading}= useAuth()
    const [isAdmin, isLoadingAdmin] = useAdmin()

    const location = useLocation()

    if(loading || isLoadingAdmin){
        return <progress className="progress w-56 text-center "></progress>
    }

    if (user || isAdmin) {
        return children
    }

    return <Navigate to="login" state={{from:location}} replace></Navigate>
};

export default AdminRoutes;