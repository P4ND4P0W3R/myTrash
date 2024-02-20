import { MapContainer, TileLayer } from 'react-leaflet'
import { MarkerCircle } from './MarkerCircle';

import "leaflet/dist/leaflet.css"
import './css/LeafletMap.css'

type PropsMarker = {
  dataTrash: {
    id: number;
    coordinateX: number;
    coordinateY: number;
  }[];
};

export function LeafletMap(props: PropsMarker) {

    return (
      <MapContainer center={[48.8604, 2.3440]} zoom={13} minZoom={13} scrollWheelZoom={true} className='col-xl-9'>
        <TileLayer
          attribution=''
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
        />

        {props.dataTrash.map((trash) => (
          <MarkerCircle key={trash.id} center={[trash.coordinateX, trash.coordinateY]} />
        ))}
      </MapContainer>
    );
}