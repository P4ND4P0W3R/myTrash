import { useState } from "react"
import { LeafletMap } from "../components/LeafletMap"
import { MapSidebar } from "../components/MapSidebar"
import { ModalSideTrash } from "../components/ModalSideTrash"
import NavBar from "../components/NavBar"

import './css/Map.css'

const data = [
    { id: 1, coordinateX: 48.851955, coordinateY: 2.356730, full: 1, etat: 0 },
    { id: 2, coordinateX: 48.852418, coordinateY: 2.357240, full: 0, etat: 0 },
    { id: 3, coordinateX: 48.853039, coordinateY: 2.355333, full: 1, etat: 1 }
]

// DEFINITION OF DEFAULT TRASH
type TrashProps = {
    id: number,
    coordinateX: number;
    coordinateY: number;
    full: number;
    etat: number
}


export default function Map(){

    const [indexToUpdate, setIndexToUpdate] = useState(-1)


    function updateFullById(id: number, newFullValue: number) {
        // Find the index of the element with the given id
        console.log("first")
        const index = data.findIndex(trash => trash.id === id);
        // If the element with the given id exists
        if (index !== -1) {
            // Update the 'full' property of the element
            console.log("before : ", data[index].full)
            data[index].full = newFullValue;
            setIndexToUpdate(index)
            console.log("after : ", data[index].full)
        }
      }

    // DEFINITION OF INITAL TRASH => WHEN NO TRASH IS SELECTED
    const initialTrash: TrashProps = {
        id: 0,
        coordinateX: 0,
        coordinateY: 0,
        full: 0,
        etat: 0,
    };

    const [selectedTrash, setSelectedTrash] = useState<TrashProps>(initialTrash);
    const [showModalTrash, setShowModalTrash] = useState(0)

    const toggleModal = () => { if(showModalTrash){ setShowModalTrash(0) } else { setShowModalTrash(1); console.log("22") } }
    const handleClickTrash = (trash: TrashProps) => { setSelectedTrash(trash); setShowModalTrash(1) }
    const handleCloseSideBar = () => { setSelectedTrash(initialTrash); setShowModalTrash(0) }

    return(
        <>
            <NavBar />
            <div className="main-container d-flex">
                <MapSidebar />
                <LeafletMap dataTrash={data} toggleModal={toggleModal} handleClickTrash={handleClickTrash} indexToUpdate={indexToUpdate} setIndexToUpdate={setIndexToUpdate}/>

                {showModalTrash && <ModalSideTrash showModalTrash={showModalTrash} handleCloseSideBar={handleCloseSideBar} selectedTrash={selectedTrash} updateFullById={updateFullById}/>}
                
            </div>
        </>
    )
}