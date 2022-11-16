import { Navigate } from "react-router-dom";
import { useAut } from "../context/authContext";

const WithPrivateRoute = ({ children }) => {
  const { currentUser } = useAut();

  if (currentUser) {
    return children;
  }

  return <Navigate to="/" />;
};

export default WithPrivateRoute;
