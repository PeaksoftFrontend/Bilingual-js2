import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRouter = ({ Component, allowedRoles }) => {
  const { role } = useSelector((store) => store.auth);

  if (allowedRoles.includes(role)) {
    return Component;
  }

  switch (role) {
    case "ADMIN":
      return <Navigate to="/admin" />;
    case "USER":
      return <Navigate to="/main" />;
    case "GUEST":
    default:
      return <Navigate to="/" />;
  }
};
