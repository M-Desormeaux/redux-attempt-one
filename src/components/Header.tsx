import classes from "./Header.module.css";
import { useAppDispatch, useAppSelector } from "../hooks";
import { authActions } from "../store/auth";

export const Header = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = (event: any) => {
    event.preventDefault();

    dispatch(authActions.logout());
    localStorage.setItem("auth", "false");
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <button onClick={logoutHandler}>Logout</button>
        </nav>
      )}
    </header>
  );
};
