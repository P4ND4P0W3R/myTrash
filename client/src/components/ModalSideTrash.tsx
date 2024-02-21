import { useState } from 'react';

import './css/ModalSideTrash.css'
import { ModalConfirmStatus } from './ModalConfirmStatus';

import { GeoAltFill } from 'react-bootstrap-icons';

// DEFINITION OF DEFAULT TRASH
type TrashProps = {
    id: number,
    coordinateX: number;
    coordinateY: number;
    full: number;
    etat: number
}

type ModalProps = {
    showModalTrash: number
    handleCloseSideBar: () => void
    selectedTrash: TrashProps;
    updateFullById: (arg0: number, arg1: number) => void;
}

export const ModalSideTrash = (props: ModalProps) => {

    const [showModalConfirmation, setShowModalConfirmation] = useState(0);
    const [statusChoice, setStatusChoice] = useState("");

    function HandleChoice(choice: string) {
        setShowModalConfirmation(1);
        setStatusChoice(choice);
    }



    if(!props.showModalTrash) return null

    const renderStatusButton = () => {
        if (props.selectedTrash.etat === 1){
            return (
                <p className='status bg-warning'>Endommagé</p>
            );
        }else if (props.selectedTrash.full === 0) {
            return (
                <p className='status greenSubBackground'>Vide</p>
            );
        } else {
            return (
                <p className='status redSubBackground'>Pleine</p>
            )
        }
    };


    const buttonStatus = () => {
        if (props.selectedTrash.etat === 1){
            return (
                <div className='w-100 mt-3 bg-warning buttonStatus text-dark disabled'></div>
            );
        }else if (props.selectedTrash.full === 0) {
            return (
                <div>
                    <div className='w-100 bg-success buttonStatus text-light' onClick={() => HandleChoice("Pleine")}>Vide</div>
                    <div className='w-100 mt-3 bg-warning buttonStatus' onClick={() => HandleChoice("Endommagé")}>Endommagée</div>
                </div>
            );
        } else {
            return(
                <div>
                    <div className='w-100 redSubBackground disabled buttonStatus text-light disabled'>Pleine</div>
                    <div className='w-100 mt-3 bg-warning buttonStatus disabled'>Endommagée</div>
                </div>
            )
        }
    }


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
                    <h1 className='text-light'>{renderStatusButton()}</h1>

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
                    <p className='text-light'>Signalements :</p>
                    {buttonStatus()}
                   
                </div>
            </div>
            <div className="col-xl-9 px-5 pt-5 h-100" onClick={props.handleCloseSideBar}/>
            <ModalConfirmStatus showModalConfirmation={showModalConfirmation} statusChoice={statusChoice} setShowModalConfirmation={setShowModalConfirmation} updateFullById={props.updateFullById} selectedTrash={props.selectedTrash} />
        </div>
    )
}
