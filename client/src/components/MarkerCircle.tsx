
//import { useState, useEffect } from 'react'
import { CircleMarker } from 'react-leaflet'

type MarkerProps = {
    center: [number, number];
    full: number
}
  
export const MarkerCircle = ( props: MarkerProps ) => {

    const handleOnclick = () => {
        console.log("on a clické !!")
    }

    return (
        <CircleMarker 
            center={props.center} 
            color={props.full == 1 ? "red" : "green"}
            fillColor={props.full == 1 ? "red" : "green"}
            fillOpacity={0.5}
            radius={2}
            eventHandlers={{
                click: handleOnclick
            }}
        />
    )
}