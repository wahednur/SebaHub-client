import { Navigate, useLocation } from "react-router-dom";

import { BarLoader } from "react-spinners";
import useAuth from "./../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading)
    return <BarLoader color="purple" height={4} width={100} loading={true} />;
  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname} replace={true} />;
};

export default PrivateRoute;
