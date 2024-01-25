import Loading from "../../components/Loading";
import { useSearchParams } from "react-router-dom";

const LoginHandler = () => {
  const [searchParams] = useSearchParams();
  const keys = Array.from(searchParams.keys());
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <Loading className="py-4 px-2" />
      <p className="text-[#094B72E5] text-lg font-medium">Loading...</p>
      <br className="py-2" />
      {keys.map((key) => (
        <p className="text-[#094B72E5] text-lg font-medium">
          {key}: {searchParams.get(key)}
        </p>
      ))}
    </div>
  );
};

export default LoginHandler;
