import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Login, Signup } from './components/auth';
import { getCurrentUser } from './utils';

function App() {

  const RequireAuth = ({ children }) => {
    let auth = getCurrentUser();
    let location = useLocation();
    
    if (!auth) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
  }; 

  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            {/* <Layout /> */}
            <Signup />
          </RequireAuth>
        }
      ></Route>
      <Route path='/' element={<Login />} />
      <Route path='/login' element={<Login />} />
      {/* <Route path='/signup' element={<Signup />} /> */}
    </Routes>
  );
}

export default App;
