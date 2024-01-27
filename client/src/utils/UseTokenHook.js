import { useAtom } from "jotai";
import { userJsonAtom } from "./Auth";

const useUser = () => {
  const [userJson, setUserJson] = useAtom(userJsonAtom);

  const user = JSON.parse(userJson);

  const logout = () => {
    setUserJson(null);
    window.location.href = "/";
  };

  return { user, logout };
};

const useToken = () => {
  const { user, logout } = useUser();
  return user?.token;
};

const useTokenWithLogout = () => {
  const { user, logout } = useUser();
  return { token: user?.token, logout };
};

export { useUser, useToken, useTokenWithLogout };
