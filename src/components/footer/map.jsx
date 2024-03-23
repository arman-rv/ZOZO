import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";
import { Link } from "react-router-dom";

const Map = () => {
  const location = [36.561379246583954, 53.06664143487221];

  const customIcon = new icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-black.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [27, 40],
    iconAnchor: [26, 28],
    popupAnchor: [-12, -30],
    shadowSize: [41, 41],
  });

  return (
    <MapContainer center={location} zoom={13} className="h-full">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker
        position={[36.561379246583954, 53.06664143487221]}
        icon={customIcon}
        
      >
        <Popup>
          <span className="text-lg pr-2 max-[730px]:text-base max-[560px]:text-sm">ZOZO</span>
          <Link
            target="blank"
            className="text-xl max-[730px]:text-lg max-[560px]:text-base"
            to="https://maps.app.goo.gl/GSwUFL5QFAwMoWoj8"
          >
            see on google map
          </Link>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export { Map };
