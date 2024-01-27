import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Redirector = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, []);

  return <div />;
};

export default Redirector;
