

type ChoiceProps = {
    showModalConfirmation: number;
    statusChoice: string
}

export const ModalConfirmStatus = (props: ChoiceProps) => {

    if(!props.showModalConfirmation) return null

    return(
        <div className="modalConfirmation">
            <p>jhbhb</p>
        </div>
    )
}