import './css/ModalSideTrash.css'

import { GeoAltFill } from 'react-bootstrap-icons';

// DEFINITION OF DEFAULT TRASH
type TrashProps = {
    id: number,
    coordinateX: number;
    coordinateY: number;
    full: number;
}

type ModalProps = {
    showModalTrash: number
    handleCloseSideBar: () => void
    selectedTrash: TrashProps;
}

export const ModalSideTrash = (props: ModalProps) => {

    if(!props.showModalTrash) return null

    return(
        <div className="sideBarContainer" onClick={props.handleCloseSideBar}>
            <div className="col-xl-3 px-5 pt-5 h-100 bg-primary">
                <h1 className='timeZone'>09 : 18 : 47</h1>
                
                <div className="location_info d-flex align-items-center pb-3">    {/* Location div */}
                    <small className='textDark'>15 Fev. 2024</small>
                    <GeoAltFill className='ms-3 iconBootstrap'/>
                    <small className='textDark ms-1'>Paris</small>
                </div>

                {/*SEPARATION LINE*/}
                <div className="line_separation my-4" />
            </div>
        </div>
    )
}