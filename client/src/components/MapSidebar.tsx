import { Component } from 'react';
import { GeoAltFill } from 'react-bootstrap-icons';
import './css/MapSidebar.css'

export class MapSidebar extends Component{

    render() {

        
        return(
            <div className="col-xl-3 container px-5 pt-5">
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
                        <div className="circle greenBackground">
                            <div className="subCircle greenSubBackground" />
                        </div>
                        <p className='text-light data_text ms-3 mb-0'>Poubelles recensés :</p>
                    </div>
                    <h1 className='text-light'>2 900</h1>

                    <div className='d-flex pt-3 mb-2 align-items-center'>
                        <div className="circle redBackground">
                            <div className="subCircle redSubBackground" />
                        </div>
                        <p className='text-light data_text ms-3 mb-0'>Poubelles pleines :</p>
                    </div>
                    <h1 className='text-light'>293</h1>

                    <div className='d-flex pt-3 mb-2 align-items-center'>
                        <div className="circle yellowBackground">
                            <div className="subCircle yellowSubBackground" />
                        </div>
                        <p className='text-light data_text ms-3 mb-0'>Poubelles endommagés :</p>
                    </div>
                    <h1 className='text-light'>35</h1>
                </div>

                {/*SEPARATION LINE*/}
                <div className="line_separation my-4" />

                {/*LEGEND TEXT*/}
                <div className="dataContainer">
                    <div className='d-flex pt-3 mb-2 align-items-center'>
                        <div className="legendTrash redSubBackground" />
                        <p className='text-light data_text ms-3 mb-0 small'>Poubelles pleines</p>
                    </div>

                    <div className='d-flex pt-3 mb-2 align-items-center'>
                        <div className="legendTrash greenSubBackground" />
                        <p className='text-light data_text ms-3 mb-0 small'>Poubelles vides</p>
                    </div>

                    <div className='d-flex pt-3 mb-2 align-items-center'>
                        <div className="legendTrash yellowSubBackground" />
                        <p className='text-light data_text ms-3 mb-0 small'>Poubelles endommagés</p>
                    </div>
                </div>
            </div>
        )
    }
}