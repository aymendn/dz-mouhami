import LocationIcon from "../../assets/location.svg";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  SVGOverlay,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import axios from "axios";
import Loading from "../../components/Loading";
import { useEffect } from "react";
import { useState } from "react";

const defaultPos = [51.505, -0.09];

// convert address to lat and long
const getLatLng = async ({ addressString }) => {
  const response = await axios.get(
    "https://nominatim.openstreetmap.org/search",
    {
      params: {
        q: addressString,
        format: "json",
      },
    }
  );

  const firstResult = response.data[0];
  if (!firstResult) return defaultPos;
  const pos = [parseFloat(firstResult.lat), parseFloat(firstResult.lon)];
  return pos;
};

const Address = ({ address }) => {
  const { t } = useTranslation();

  // {"id":100,"street":"Algerie","city":"Batna","state":"Rue des Frères BOUABSA","zip_code":"19000","country":"N⁰ 30"}
  // converting this object to a string address
  const addressString = `${address?.street || ""}, ${address?.city || ""}, ${
    address?.country || ""
  }, ${address?.zip_code || ""}, ${address?.state || ""}`;

  const [position, setPosition] = useState(defaultPos);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getLatLng({ addressString })
      .then((pos) => {
        setPosition(pos);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [addressString]);

  const bounds = [
    [position[0] - 0.015, position[1] - 0.015],
    [position[0] + 0.015, position[1] + 0.015],
  ];

  return (
    <>
      <div className="flex items-center gap-1">
        <img src={LocationIcon} alt="Locationon" className="w-4" />
        <div className="font-medium text-[#0f3146]">{t("address")}</div>
      </div>
      <div className="text-sm  text-[#26495d]  ms-1">
        {addressString || "No address"}
      </div>
      <div className="w-full h-[300px] mt-3">
        {isLoading && <Loading className={"p-4"} />}
        {isError && <div lassName={"p-4"}>Error</div>}
        {!isLoading && !isError && (
          <MapContainer
            center={position || defaultPos}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: 300, borderRadius: "6px", zIndex: -1 }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <SVGOverlay attributes={{ stroke: "transparent" }} bounds={bounds}>
              <circle r="12" cx="50%" cy="50%" fill="black" />
              <circle r="8" cx="50%" cy="50%" fill="red" />
            </SVGOverlay>
          </MapContainer>
        )}
      </div>
    </>
  );
};

export default Address;
