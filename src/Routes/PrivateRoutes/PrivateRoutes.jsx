import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()

    const location = useLocation()
    
    if (loading) {
        return <div className="text-center mt-32"> <span className="loading text-error w-56 h-56 loading-spinner loading-lg"></span></div>
    }
   
    if (user) {
        return children
    }

    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRoute;