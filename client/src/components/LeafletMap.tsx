import { Component } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'

import "leaflet/dist/leaflet.css"
import './css/LeafletMap.css'

export class LeafletMap extends Component {
    render() {
      return (
        <MapContainer center={[48.8604, 2.3440]} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
          />
        </MapContainer>
      );
    }
  }