import {Navigate} from 'react-router-dom';
import ApiService from "../Services/ApiService";
import {useEffect, useState} from "react";

const apiService = new ApiService()

export {PrivateRoute};

function PrivateRoute({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const response = await apiService.checkLogin();
                setIsAuthenticated(response);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        checkAuthentication();
    }, []);

    if (!isAuthenticated && !isLoading) {
        // not logged in so redirect to login page with the return url
        return <Navigate to="/login"/>
    } else if (!isLoading) {
        // authorized so return child components
        return children;
    }

}

export default PrivateRoute;