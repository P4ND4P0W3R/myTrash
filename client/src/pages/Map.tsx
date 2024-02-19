import { LeafletMap } from "../components/LeafletMap"
import { MapSidebar } from "../components/MapSidebar"

import './css/Map.css'


export default function Map(){
    return(
        <>
            <div className="main-container d-flex">
                <MapSidebar />
                <LeafletMap />

            </div>
        </>
    )
}