import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Forgot, Login, Signup } from './components/auth';
import { getCurrentUser } from './utils';
import { Header } from './components/Home';

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
            <Header />
          </RequireAuth>
        }
      ></Route>
      {/* <Route path='/' element={<Header />} /> */}
      <Route path='/login' element={<Login />} />
      <Route path='/forgot-password' element={<Forgot />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  );
}

export default App;
