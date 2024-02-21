

type ChoiceProps = {
    showModalConfirmation: number;
    statusChoice: string
}

export const ModalConfirmStatus = (props: ChoiceProps) => {

    if(!props.showModalConfirmation) return null

    return(
        <div className="modalConfirmation">
            <div className="modalContainer col-xl-4 text-light">
                <h3 className="text-center">Signalement</h3>
                <p className="mt-4 px-3">Vous êtes sur le point de déclarer cette poubelle comme :</p>
                <p>{props.statusChoice}</p>
            </div>
        </div>
    )
}