

import { useState } from 'react'
import { CircleMarker } from 'react-leaflet'


type MarkerProps = {
center: [number, number]
}
  
export const MarkerCircle = ( props: MarkerProps ) => {

    const [markerColor, setMarkerColor] = useState("green")

    const handleOnclick = () => {
        console.log("on a clické !!")
        setMarkerColor("blue")
    }
  
    return (
        <CircleMarker 
            center={props.center} 
            color={markerColor}
            fillColor={markerColor}
            fillOpacity={0.5}
            radius={2}
            eventHandlers={{
                click: handleOnclick
            }}
        />
    )
}