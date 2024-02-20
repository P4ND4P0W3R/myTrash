
//import { useState, useEffect } from 'react'
import { CircleMarker } from 'react-leaflet'

type TrashProps = {
    id: number,
    coordinateX: number;
    coordinateY: number;
    full: number;
  }
  
type MarkerProps = {
    trash: {
        id: number,
        coordinateX: number;
        coordinateY: number;
        full: number;
    }
    toggleModal: () => void;
    handleClickTrash: (arg0: TrashProps) => void
}
  
export const MarkerCircle = ( props: MarkerProps ) => {

    const handleOnclick = () => {
        console.log("?.")
        props.toggleModal()
        props.handleClickTrash(props.trash)
    }

    return (
        <CircleMarker 
            center={[props.trash.coordinateX, props.trash.coordinateY]} 
            color={props.trash.full == 1 ? "red" : "green"}
            fillColor={props.trash.full == 1 ? "red" : "green"}
            fillOpacity={0.5}
            radius={2}
            eventHandlers={{
                click: handleOnclick
            }}
        />
    )
}