import { Button } from 'react-bootstrap';
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
        <div className="sideBarContainer">
            <div className="col-xl-3 px-5 pt-5 h-100 containerModal">
                <h1 className='timeZone'>09 : 18 : 47</h1>
                
                <div className="location_info d-flex align-items-center pb-3">    {/* Location div */}
                    <small className='textDark'>15 Fev. 2024</small>
                    <GeoAltFill className='ms-3 iconBootstrap'/>
                    <small className='textDark ms-1'>Paris</small>
                </div>

                {/*SEPARATION LINE*/}
                <div className="line_separation my-4" />

                {/*CONTAINER DATA TEXT*/}
                <div className="dataContainer pb-2">
                    <div className='d-flex pt-3 mb-2 align-items-center'>
                        <p className='text-light data_text mb-0'>-  Poubelles id :</p>
                    </div>
                    <h1 className='text-light'>{props.selectedTrash.id}</h1>

                    <div className='d-flex pt-3 mb-2 align-items-center'>
                        <p className='text-light data_text mb-0'>-  Dernière fois vidé :</p>
                    </div>
                    <h3 className='text-light'>20 Fev. 11:20</h3>
                </div> 

                {/*SEPARATION LINE*/}
                <div className="line_separation my-4" />

                <div className="dataContainer pb-2">
                    <p className='text-light'>Signalement :</p>
                    <Button className='btn w-100 bg-success'>Pleine</Button>
                    <Button className='btn w-100 mt-4'>Endommagée</Button>
                </div>
            </div>
            <div className="col-xl-9 px-5 pt-5 h-100" onClick={props.handleCloseSideBar}/>
        </div>
    )
}