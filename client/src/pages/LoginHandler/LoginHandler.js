import Loading from "../../components/Loading";
import { useSearchParams } from "react-router-dom";
import { userJsonAtom } from "../../utils/Auth";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginHandler = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const token = searchParams.get("token");
  const isClient = searchParams.get("is_client") === "True";
  const isSuperUser = searchParams.get("is_superuser") === "True";
  const isLawyer = searchParams.get("is_lawyer") === "True";
  const dataJSON = searchParams.get("data");
  const data = JSON.parse(dataJSON) || {};
  const userData = {
    name: data.name || "",
    email: data.email || "",
    picture: data.picture || "",
  };

  const user = {
    token,
    userData,
    isClient,
    isSuperUser,
    isLawyer,
  };

  // To know if user is comming from Google Signup (First time login, so go to signup page)
  const isSignup = searchParams.get("signup");

  const [userJson, setUserJson] = useAtom(userJsonAtom);

  useEffect(() => {
    setUserJson(JSON.stringify(user));
    // wait for 3 seconds
    setTimeout(() => {
      // verify user permissions to redirect to the correct page
      const redirectTo = shouldRedirectTo({ user, isSignup });
      navigate(redirectTo);
    }, 0);
  }, [user, setUserJson]);

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <Loading className="py-4 px-2" />
      <p className="text-[#094B72E5] text-lg font-medium">Loading...</p>
      <br className="py-2" />
      <p>data: {JSON.stringify(JSON.parse(userJson))}</p>
      <br />
      <p>shouldRedirectTo: {shouldRedirectTo({ user, isSignup })}</p>
    </div>
  );
};

export default LoginHandler;

const shouldRedirectTo = ({ user, isSignup }) => {
  if (user.isSuperUser) {
    return "/admin";
  }

  if (isSignup || (!user.isClient && !user.isLawyer && !user.isSuperUser)) {
    return "/choice";
  }

  if (user.isLawyer) {
    return "/dashboard";
  }

  if (user.isClient) {
    return "/search";
  }

  return "/";
};
