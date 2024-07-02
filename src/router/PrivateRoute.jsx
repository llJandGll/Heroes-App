import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useLastRoute } from "../hooks/useLastRoute";

export const PrivateRoute = ({ children }) => {
  const { logged } = useLastRoute();


  return logged ? children : <Navigate to={"/login"} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.any,
};
