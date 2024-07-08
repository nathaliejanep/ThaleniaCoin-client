import * as React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/AuthProvider';
interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }: any) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  console.log('PrivateRoute: isAuthenticated:', isAuthenticated);
  console.log('PrivateRoute: location:', location);
  if (!isAuthenticated) {
    navigate('/login', { replace: true });

    // return (
    //   <Navigate
    //     to='/login'
    //     state={{ from: location }}
    //     replace={true}
    //   />
    // );
  }

  return children;
};

export default PrivateRoute;
