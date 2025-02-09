import { Navigate, Outlet } from "react-router-dom";
import PropTypes from 'prop-types';

const ProtectedRoute = ({ adminOnly }) => {
    const token = localStorage.getItem("token");
    const isAdmin = localStorage.getItem("isAdmin") === "true";

    if (!token) return <Navigate to="/" />; // Redirect if not logged in
    if (adminOnly && !isAdmin) return <Navigate to="/dashboard" />; // Redirect users

    return <Outlet />; // Render child routes if authorized
};
ProtectedRoute.propTypes = {
    adminOnly: PropTypes.bool,
};

export default ProtectedRoute;
