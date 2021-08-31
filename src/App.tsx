import { Auth } from "./components/Auth";
import { Counter } from "./components/Counter";
import { Header } from "./components/Header";
import { UserProfile } from "./components/UserProfile";
import { useAppSelector } from "./hooks";

function App() {
  const isAuth = useAppSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && (
        <>
          <UserProfile />
          <Counter />
        </>
      )}
    </>
  );
}

export default App;
