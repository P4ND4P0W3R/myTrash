

type ChoiceProps = {
    showModalConfirmation: number;
    statusChoice: string
}

export const ModalConfirmStatus = (props: ChoiceProps) => {

    if(!props.showModalConfirmation) return null

    const status = () => {
        if(props.statusChoice == "Pleine") {
            return(
                <p style={{color: "red"}} className="text-center mt-3">Pleine</p>
            )
        }
    }

    return(
        <div className="modalConfirmation">
            <div className="modalContainer col-xl-4 text-light">
                <h3 className="text-center">Signalement</h3>
                <p className="mt-4 px-3">Vous êtes sur le point de déclarer cette poubelle comme : {status()}</p>
                
            </div>
        </div>
    )
}