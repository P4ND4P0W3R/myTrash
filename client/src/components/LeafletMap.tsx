import { Component } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'
import { MarkerCircle } from './MarkerCircle';

import "leaflet/dist/leaflet.css"
import './css/LeafletMap.css'


export class LeafletMap extends Component {
  
  render() {
    return (
      <MapContainer center={[48.8604, 2.3440]} zoom={13} minZoom={13} scrollWheelZoom={true} className='col-xl-9'>
        <TileLayer
          attribution=''
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
        />
        <MarkerCircle center={[48.857338, 2.346469]} />
      </MapContainer>
    );
  }
}