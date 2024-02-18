import { LeafletMap } from "../components/LeafletMap"
import './css/Map.css'


export default function Map(){
    return(
        <>
            <div className="main-container d-flex bg-primary">
                {/*<p>jbhh</p>*/}
                <LeafletMap />

            </div>
        </>
    )
}