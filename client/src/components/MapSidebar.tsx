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

                <div className="line_separation my-4" />

                <div className="dataContainer">
                    <p className='text-light pt-3 mb-2 data_text'>Nombre de poubelle recensés :</p>
                    <h1 className='text-light'>2 900</h1>

                    <p className='text-light pt-4 mb-2  data_text'>Poubelles actuellement pleines :</p>
                    <h1 className='text-light'>293</h1>
                </div>
            </div>
        )
    }
}