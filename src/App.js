import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Forgot, Login, Signup } from "./components/auth";
import { getCurrentUser } from "./utils";
import { Header } from "./components/common";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setLoading } from "./redux/global";
import { Chats, Expense, Ledger, Notification, Settings } from "./pages";
import Home from "./pages/Home";
import SubMenu from "./pages/SubMenu";
import Voucher from "./pages/vocher";
import NewExpense from "./pages/New-Expense";
import { Spinner } from "react-bootstrap";
import { getExpenseRequest } from "./redux/expense";
import { getVoucherRequest } from "./redux/voucher";

function App() {
  const dispatch = useDispatch();
  // const router = useLocation();

  const { loading } = useSelector((state) => state.global);

  useEffect(() => {
    dispatch(getVoucherRequest());
    dispatch(getExpenseRequest());
  }, []);

  // useEffect(() => {
  //   const handleStart = (url) => {
  //     url !== router.pathname
  //       ? dispatch(setLoading(true))
  //       : dispatch(setLoading(false));
  //   };
  //   const handleComplete = (url) => dispatch(setLoading(false));

  //   router.events.on("routeChangeStart", handleStart);
  //   router.events.on("routeChangeComplete", handleComplete);
  //   router.events.on("routeChangeError", handleComplete);
  // }, [router]);

  const RequireAuth = ({ children }) => {
    // let auth = getCurrentUser();
    // let location = useLocation();

    // if (!auth) {
    //   return <Navigate to="/login" state={{ from: location }} replace />;
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
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/expense"
          element={
            <RequireAuth>
              <Expense />
            </RequireAuth>
          }
        />
        {/* <Route path='/' element={<Header />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Forgot />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/sub-menu"
          element={
            <RequireAuth>
              <SubMenu />
            </RequireAuth>
          }
        />
        <Route
          path="/voucher"
          element={
            <RequireAuth>
              <Voucher />
            </RequireAuth>
          }
        />
        <Route
          path="/new-expense"
          element={
            <RequireAuth>
              <NewExpense />
            </RequireAuth>
          }
        />
         <Route
          path="/notification"
          element={
            <RequireAuth>
              <Notification />
            </RequireAuth>
          }
        />
        <Route
          path="/chats"
          element={
            <RequireAuth>
              <Chats />
            </RequireAuth>
          }
        />
        <Route
          path="/settings"
          element={
            <RequireAuth>
              <Settings />
            </RequireAuth>
          }
        />
         <Route
          path="/ledger"
          element={
            <RequireAuth>
              <Ledger />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
