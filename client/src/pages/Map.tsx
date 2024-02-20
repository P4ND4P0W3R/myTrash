import { LeafletMap } from "../components/LeafletMap"
import { MapSidebar } from "../components/MapSidebar"

import './css/Map.css'

const data = [
    { id: 1, coordinateX: 48.851955, coordinateY: 2.356730, full: 1 },
    { id: 2, coordinateX: 48.852418, coordinateY: 2.357240, full: 0 },
    { id: 3, coordinateX: 48.853039, coordinateY: 2.355333, full: 3 }
]


export default function Map(){
    return(
        <>
            <div className="main-container d-flex">
                <MapSidebar />
                <LeafletMap dataTrash={data} />

            </div>
        </>
    )
}