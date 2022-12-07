import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Forgot, Login, Signup } from "./components/auth";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {
  Chats,
  Expense,
  Inventory,
  Ledger,
  Notification,
  Settings,
} from "./pages";
import Home from "./pages/Home";
import SubMenu from "./pages/SubMenu";
import Voucher from "./pages/vocher";
import NewExpense from "./pages/New-Expense";
import { Spinner } from "react-bootstrap";
import PersonalChat from "./pages/PersonalChat";
import { getCurrentUser } from "./utils";

function App() {
  const router = useLocation();

  const { loading } = useSelector((state) => state.global);

  useEffect(() => {
    // const handleStart = (url) => {
    //   url !== router.pathname
    //     ? dispatch(setLoading(true))
    //     : dispatch(setLoading(false));
    // };
    // const handleComplete = (url) => dispatch(setLoading(false));
    // router.events.on("routeChangeStart", handleStart);
    // router.events.on("routeChangeComplete", handleComplete);
    // router.events.on("routeChangeError", handleComplete);
    // eslint-disable-next-line
  }, [router]);

  const RequireAuth = ({ children }) => {
    let auth = getCurrentUser();
    let location = useLocation();

    if (!auth) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
  };
  const PublicRoute = ({ children }) => {
    // let auth = localStorage.getItem("graceshopaholic_token");
    // let location = useLocation();

    // if (auth) {
    //   return <Navigate to={location.state?.from?.pathname || "/"} replace />;
    // }
    return children;
  };

  return (
    <div>
      <div className={`${loading ? "spinner" : "spinner-hide"}`}>
        <Spinner animation="grow" />
      </div>
      <Routes>
        <Route
          path={`${process.env.REACT_APP_BASE_URL_NEW}public/app/`}
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        ></Route>
        <Route
          path={`${process.env.REACT_APP_BASE_URL_NEW}public/app/expense`}
          element={
            // <PublicRoute>
            <Expense />
            // </PublicRoute>
          }
        />
        <Route
          path={`${process.env.REACT_APP_BASE_URL_NEW}public/app/login`}
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path={`${process.env.REACT_APP_BASE_URL_NEW}public/app/forgot-password`}
          element={<Forgot />}
        />
        <Route
          path={`${process.env.REACT_APP_BASE_URL_NEW}public/app/signup`}
          element={<Signup />}
        />
        <Route
          signup
          path={`${process.env.REACT_APP_BASE_URL_NEW}public/app/sub-menu`}
          element={
            // <RequireAuth>
            <SubMenu />
            // </RequireAuth>
          }
        />
        <Route
          path={`${process.env.REACT_APP_BASE_URL_NEW}public/app/voucher`}
          element={
            // <RequireAuth>
            <Voucher />
            // </RequireAuth>
          }
        />
        <Route
          path={`${process.env.REACT_APP_BASE_URL_NEW}public/app/new-expense`}
          element={
            // <RequireAuth>
            <NewExpense />
            // </RequireAuth>
          }
        />
        <Route
        path={`${process.env.REACT_APP_BASE_URL_NEW}public/app/notification`}
          element={
            // <RequireAuth>
            <Notification />
            // </RequireAuth>
          }
        />
        <Route
        path={`${process.env.REACT_APP_BASE_URL_NEW}public/app/chats`}
          element={
            // <RequireAuth>
            <Chats />
            // </RequireAuth>
          }
        />
        <Route
         path={`${process.env.REACT_APP_BASE_URL_NEW}public/app/settings`}
          element={
            // <RequireAuth>
            <Settings />
            // </RequireAuth>
          }
        />
        <Route
          path={`${process.env.REACT_APP_BASE_URL_NEW}public/app/ledger`}
          element={
            // <RequireAuth>
            <Ledger />
            // </RequireAuth>
          }
        />
        <Route
          path={`${process.env.REACT_APP_BASE_URL_NEW}public/app/raw-inventory`}
          element={
            // <RequireAuth>
            <Inventory />
            // </RequireAuth>
          }
        />
        <Route
          path={`${process.env.REACT_APP_BASE_URL_NEW}public/app/personalChat`}
          element={
            // <RequireAuth>
            <PersonalChat />
            // </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
