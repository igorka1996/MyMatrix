import React, { useEffect } from "react";
import "./App.css";
import { Diagram } from "./components/diagram/Diagram";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Success } from "./components/Payment/Success/Success";
import { useAppDispatch, useAppSelector } from "./redux-store/store";
import { authThunk, logOutThunk } from "./redux-store/registration-login-auth";
import { ForgotPassword } from "./components/Forgot/ForgotPassword";
import { ResetPassword } from "./components/ResetPassword";
import { Pay } from "./components/Payment/Pay/Pay";
import "@fontsource/bebas-neue";
import { IconHome } from "./feature/Icon";
import "@fontsource/pacifico";
import { HashLink as Anchor } from "react-router-hash-link";
import { Osnova } from "./components/Osnova";
import { CircularProgress } from "@mui/material";
import { ErrorSnackbar } from "./feature/ErorSnackBar";
import { Footer } from "./components/Footer/Footer";
import { Welcome } from "./components/Welcome/Welcome";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { Profile } from "./components/Profile/Profile";
import { SnackBarSuccess } from "./feature/SnackBarSuccess";
import { Error } from "./components/Payment/Error/Error";
import { DiagramCompatibility } from "./components/diagram/DiagramCompatibility";

function App() {
  const loc = useLocation();
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.registrationReducer.auth);
  const initialize = useAppSelector((state) => state.errorReducer.initialize);
  const fromPage = loc.state?.pathname || "/";
  useEffect(() => {
    localStorage.setItem("path", loc.pathname);
  }, [loc.pathname]);

  useEffect(() => {
    dispatch(authThunk());
  }, [dispatch]);

  const onClickOut = () => {
    dispatch(logOutThunk());
  };

  if (!initialize) {
    return (
      <div
        style={{
          position: "fixed",
          top: "30%",
          textAlign: "center",
          width: "100%",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  if (initialize && fromPage !== "/" && auth) {
    return <Navigate to={fromPage} replace />;
  }

  return (
    <div className="App">
      {loc.pathname === "/welcome" ? undefined : (
        <div className={"header"}>
          <div className={"headerList"}>
            <Link to={"/"}>
              <IconHome />
            </Link>
            <span className={"menuSpan"}>О МЕТОДЕ</span>
            <span className={"menuSpan"}>О НАС</span>
            <Anchor smooth to={"/#tarif"} className={"menuSpan"}>
              ТАРИФЫ
            </Anchor>
          </div>
          {auth ? (
            <>
              <div className={"divLog"}>
                <Link
                  style={{ marginRight: 20, fontSize: 20 }}
                  className={"batonStandart"}
                  to={"/profile/user"}
                >
                  профиль
                </Link>
                <button
                  style={{ fontSize: 20 }}
                  className={"batonStandart"}
                  onClick={onClickOut}
                >
                  выход <LogoutIcon />
                </button>
              </div>
            </>
          ) : (
            <>
              <div>
                <Link
                  style={{ marginRight: 20 }}
                  className={"batonStandart"}
                  to={"/welcome"}
                >
                  Войти <LoginIcon />
                </Link>
              </div>
            </>
          )}
        </div>
      )}

      <Routes>
        <Route path={"/"} element={<Osnova />} />
        <Route path={"/matrix"} element={<Diagram />} />
        <Route
          path={"/matrixcompatibility"}
          element={<DiagramCompatibility />}
        />
        <Route path={"/success"} element={<Success />} />
        <Route path={"/error"} element={<Error />} />
        <Route path={"/welcome"} element={<Welcome />} />
        <Route path={"/forgot"} element={<ForgotPassword />} />
        <Route path={"/reset-password/:token"} element={<ResetPassword />} />
        <Route path={"/pay"} element={<Pay />} />
        <Route path={"/profile/*"} element={<Profile />} />
      </Routes>
      <ErrorSnackbar />
      <SnackBarSuccess />
      {loc.pathname === "/welcome" ? undefined : <Footer />}
    </div>
  );
}

export default App;
