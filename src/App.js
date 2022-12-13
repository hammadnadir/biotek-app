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
import { getCurrentUser, isLoggedIn } from "./utils";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Profile from "./pages/Profile";

function App() {
  const router = useLocation();
  const login = isLoggedIn();

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
      return <Navigate to={`/login`} state={{ from: location }} replace />;
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
        <div className="spinner-border text-danger" role="status">
          {/* <span className="sr-only">Loading...</span> */}
        </div>
      </div>
      <Routes >
        <Route path="/" element={<ProtectedRoute />}>
          <Route
            path={`/`}
            element={
              // <RequireAuth>
                <Home />
              // </RequireAuth>
            }
          ></Route>
          <Route
            path={`expense`}
            element={
              // <PublicRoute>
              <Expense />
              // </PublicRoute>
            }
          />

          <Route path={`/forgot-password`} element={<Forgot />} />
          <Route path={`/signup`} element={<Signup />} />
          <Route
            signup
            path={`/sub-menu`}
            element={
              // <RequireAuth>
              <SubMenu />
              // </RequireAuth>
            }
          />
          <Route
            path={`/voucher`}
            element={
              // <RequireAuth>
              <Voucher />
              // </RequireAuth>
            }
          />
          <Route
            path={`/edit_profile`}
            element={
              // <RequireAuth>
              <Profile />
              // </RequireAuth>
            }
          />
          <Route
            path={`/new-expense`}
            element={
              // <RequireAuth>
              <NewExpense />
              // </RequireAuth>
            }
          />
          <Route
            path={`/notification`}
            element={
              // <RequireAuth>
              <Notification />
              // </RequireAuth>
            }
          />
          <Route
            path={`/chats`}
            element={
              // <RequireAuth>
              <Chats />
              // </RequireAuth>
            }
          />
          <Route
            path={`/settings`}
            element={
              // <RequireAuth>
              <Settings />
              // </RequireAuth>
            }
          />
          <Route
            path={`/ledger`}
            element={
              // <RequireAuth>
              <Ledger />
              // </RequireAuth>
            }
          />
          <Route
            path={`/raw-inventory`}
            element={
              // <RequireAuth>
              <Inventory />
              // </RequireAuth>
            }
          />
          <Route
            path={`/personalChat`}
            element={
              // <RequireAuth>
              <PersonalChat />
              // </RequireAuth>
            }
          />
        </Route>
        <Route path={`/login`} element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
