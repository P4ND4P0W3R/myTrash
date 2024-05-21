import { useState } from "react"
import { LeafletMap } from "../components/LeafletMap"
import { MapSidebar } from "../components/MapSidebar"
import { ModalSideTrash } from "../components/ModalSideTrash"
import NavBar from '../components/NavBar';

import './css/Map.css'

const data = [
    { id: 1, coordinateX: 48.851955, coordinateY: 2.356730, full: 1 },
    { id: 2, coordinateX: 48.852418, coordinateY: 2.357240, full: 0 },
    { id: 3, coordinateX: 48.853039, coordinateY: 2.355333, full: 3 }
]

// DEFINITION OF DEFAULT TRASH
type TrashProps = {
    id: number,
    coordinateX: number;
    coordinateY: number;
    full: number;
}


export default function Map(){

    // DEFINITION OF INITAL TRASH => WHEN NO TRASH IS SELECTED
    const initialTrash: TrashProps = {
        id: 0,
        coordinateX: 0,
        coordinateY: 0,
        full: 0,
    };

    const [selectedTrash, setSelectedTrash] = useState<TrashProps>(initialTrash);
    const [showModalTrash, setShowModalTrash] = useState(0)

    const toggleModal = () => { if(showModalTrash){ setShowModalTrash(0) } else { setShowModalTrash(1) } }
    const handleClickTrash = (trash: TrashProps) => { setSelectedTrash(trash); setShowModalTrash(1) }
    const handleCloseSideBar = () => { setSelectedTrash(initialTrash); setShowModalTrash(0) }

    return(
        <>
            <NavBar/>
            <div className="main-container d-flex">
                <MapSidebar />
                <LeafletMap dataTrash={datdataa} toggleModal={toggleModal} handleClickTrash={handleClickTrash} />

                {showModalTrash && <ModalSideTrash showModalTrash={showModalTrash} handleCloseSideBar={handleCloseSideBar} selectedTrash={selectedTrash} />}
                
            </div>
        </>
    )
}