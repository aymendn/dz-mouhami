import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/ProfileNavbar";
import ArrowUp from "../../assets/arrow_up.svg";
import ChartPlaceholder from "../../assets/chart_placeholder.svg";
import Reviews from "../../pages/Lawyer/Reviews";
import Box from "./Box";
import Footer from "../../components/Footer";
import { useQuery } from "react-query";
import axios from "axios";
import { useToken } from "../../utils/UseTokenHook";
import Loading from "../../components/Loading";

// stats to show
// {
//     "success": true,
//     "all_appointments": 0,
//     "appointments_of_this_week": 0,
//     "pending_appointments": 0,
//     "approved_appointments": 0,
//     "refused_appointments": 0
// }

const fetchStats = async ({ token }) => {
  const response = await axios.get("/core/statistics/", {
    headers: {
      Authorization: token,
    },
  });

  return response.data;
};

const getUserId = async ({ token }) => {
  // first get the id from user lawyer info request:
  const infoResponse = await axios("/core/lawyers/", {
    method: "get",
    headers: {
      Authorization: token,
    },
  });

  const lawyerId = (infoResponse.data[0] || {}).id || null;
  return lawyerId;
};

const DashboardPage = () => {
  const token = useToken();

  const { data, isLoading, isError, error } = useQuery("stats", () =>
    fetchStats({ token })
  );

  const { data: lawyerId, isLoading: lawyerIdIsLoading } = useQuery(
    "lawyerId",
    () => getUserId({ token })
  );

  return (
    <div className="flex flex-col min-h-screen">
      <div className="z-50">
        <Navbar></Navbar>
      </div>
      <div className="flex flex-1">
        <Sidebar></Sidebar>
        <div className="p-10">
          <h1 className="text-3xl mb-6 font-semibold text-[#094B72]">
            Dashboard
          </h1>
          {isLoading && <Loading className={"p-20"} />}
          {isError && <div>{error.message}</div>}
          {data && (
            <main>
              <div className="flex gap-6">
                <div className="min-w-[450px]">
                  <Box title="Tous les rendez-vous">
                    <div className="flex">
                      <h1 className=" text-4xl font-semibold text-[#094B72]  me-4  ">
                        {data.all_appointments}
                      </h1>
                      <img src={ArrowUp}></img>
                    </div>
                  </Box>
                </div>
                <div className="min-w-[450px]">
                  <Box title="Rendez-vous de cette semaine">
                    <div className="flex">
                      <h1 className=" text-4xl font-semibold text-[#094B72]  me-4  ">
                        {data.appointments_of_this_week}
                      </h1>
                      <img src={ArrowUp}></img>
                    </div>
                  </Box>
                </div>
              </div>
              <div className="flex gap-6 mt-6">
                <div className="min-w-[450px]">
                  <Box title="Rendez-vous en attente">
                    <div className="flex">
                      <h1 className=" text-4xl font-semibold text-[#094B72]  me-4  ">
                        {data.pending_appointments}
                      </h1>
                      <img src={ArrowUp}></img>
                    </div>
                  </Box>
                </div>
                <div className="min-w-[450px]">
                  <Box title="Rendez-vous approuvés">
                    <div className="flex">
                      <h1 className=" text-4xl font-semibold text-[#094B72]  me-4  ">
                        {data.approved_appointments}
                      </h1>
                      <img src={ArrowUp}></img>
                    </div>
                  </Box>
                </div>
              </div>
              <div className="flex gap-6 mt-6">
                <div className="min-w-[300px] w-full ">
                  <Box>
                    {lawyerIdIsLoading && <Loading className={"p-20"} />}
                    {lawyerId && (
                      <Reviews lawyerId={lawyerId} hasAction={false} />
                    )}
                  </Box>
                </div>
              </div>
            </main>
          )}
        </div>
      </div>
      <div className=" lg:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default DashboardPage;
