
import { useEffect } from 'react'
import { CircleMarker } from 'react-leaflet'

type TrashProps = {
    id: number,
    coordinateX: number;
    coordinateY: number;
    full: number;
    etat: number
  }
  
type MarkerProps = {
    trash: {
        id: number,
        coordinateX: number;
        coordinateY: number;
        full: number;
        etat: number
    }
    toggleModal: () => void;
    handleClickTrash: (arg0: TrashProps) => void;
    indexToUpdate: number;
    setIndexToUpdate: (arg0: number) => void
}
  
export const MarkerCircle = ( props: MarkerProps ) => {

    useEffect(() => {
        if(props.indexToUpdate == props.trash.id){
            console.log("c'est moi !!")
        }
        //NE PAS FAIRE ATTENTION À CETTE ERREUR SVP
    }, [props.indexToUpdate])

    const handleOnclick = () => {
        console.log("?.")
        props.toggleModal()
        props.handleClickTrash(props.trash)
    }

    return (
        <CircleMarker 
            center={[props.trash.coordinateX, props.trash.coordinateY]} 
            color={props.trash.etat == 1 ? "#FFC106" : props.trash.full == 1 ? "red" : "green"}
            fillColor={props.trash.etat == 1 ? "#FFC106" : props.trash.full == 1 ? "red" : "green"}
            fillOpacity={0.5}
            radius={2}
            eventHandlers={{
                click: handleOnclick
            }}
        />
    )
}