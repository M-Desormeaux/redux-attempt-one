import { Auth } from "./components/Auth";
import { Counter } from "./components/Counter";
import { Header } from "./components/Header";
import { UserProfile } from "./components/UserProfile";
import { useAppDispatch, useAppSelector } from "./hooks";
import { useEffect } from "react";
import { authActions } from "./store/auth";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const auth = localStorage.getItem("auth");

    if (auth === "true") {
      dispatch(authActions.login());
    }
  }, []);

  const isAuth = useAppSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
