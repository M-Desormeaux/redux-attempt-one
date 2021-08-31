import classes from "./Auth.module.css";
import { useAppDispatch } from "../hooks";
import { authActions } from "../store/auth";
import { useEffect, useState } from "react";

export const Auth = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    isValid: false,
  });

  useEffect(() => {
    formValidation();
  }, [userInfo.email, userInfo.password]);

  const dispatch = useAppDispatch();

  const loginHandler = (event: any) => {
    event.preventDefault();

    dispatch(authActions.login());
  };

  const updateHandler = (event: any) => {
    setUserInfo({
      ...userInfo,
      [event.target.id]: event.target.value,
    });
  };

  const formValidation = () => {
    const passAccepted = userInfo.password.length > 7;
    const emailValid = userInfo.email.includes("@");

    if (passAccepted && emailValid && !userInfo.isValid) {
      setUserInfo({
        ...userInfo,
        isValid: true,
      });
    } else if (!passAccepted || !emailValid) {
      setUserInfo({
        ...userInfo,
        isValid: false,
      });
    }
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={updateHandler}
              value={userInfo.email}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={updateHandler}
              value={userInfo.password}
            />
          </div>
          <button disabled={!userInfo.isValid}>Login</button>
        </form>
      </section>
    </main>
  );
};
