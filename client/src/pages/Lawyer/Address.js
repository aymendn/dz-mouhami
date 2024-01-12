import LocationIcon from "../../assets/location.svg";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  SVGOverlay,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Address = () => {
  const position = [51.505, -0.09];

  const bounds = [
    [position[0] - 0.015, position[1] - 0.015],
    [position[0] + 0.015, position[1] + 0.015],
  ];

  return (
    <>
      <div className="flex items-center gap-1">
        <img src={LocationIcon} alt="Locationon" className="w-4" />
        <div className="font-medium text-[#0f3146]">Address</div>
      </div>
      <div className="text-sm  text-[#26495d]  ms-1">
        Rue Djouambi Mbarek, Rouached
      </div>
      <div className="w-full h-[300px] mt-3">
        <MapContainer
          center={position}
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
      </div>
    </>
  );
};

export default Address;
