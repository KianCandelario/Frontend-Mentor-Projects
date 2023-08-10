import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';

function Map() {
    const position: [number, number] = [52.51, 13.38]; // Ensure type is correct
    const customIcon = new Icon({
        iconUrl: "../../src/assets/icons/icon-location.svg",
        iconSize: [33, 33]
    });

    return (
        <div className='w-full h-full'>
            <MapContainer center={position} zoom={6} scrollWheelZoom={true}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={customIcon}>
                <Popup>
                    This is your location!
                </Popup>
            </Marker>
        </MapContainer>
        </div>
    );
}

export default Map;