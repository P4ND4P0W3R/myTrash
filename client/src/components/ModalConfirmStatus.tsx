// DEFINITION OF DEFAULT TRASH
type TrashProps = {
	id: number;
	coordinateX: number;
	coordinateY: number;
	full: number;
	etat: number;
};

type ChoiceProps = {
	showModalConfirmation: number;
	statusChoice: string;
	selectedTrash: TrashProps;
	setShowModalConfirmation: (arg0: number) => void;
	updateFullById: (arg0: number, arg1: number) => void;
};

export const ModalConfirmStatus = (props: ChoiceProps) => {
	function HandleCancel() {
		props.setShowModalConfirmation(0);
	}

	function HandleConfirm() {
		console.log('kkkk');
		let status = 1;
		if (props.statusChoice == 'Pleine') {
			status = 1;
		} else if (props.statusChoice == 'Vide') {
			status = 0;
		}
		props.updateFullById(props.selectedTrash.id, status);
		props.setShowModalConfirmation(0);
	}

	if (!props.showModalConfirmation) return null;

	const status = () => {
		if (props.statusChoice == 'Pleine') {
			return (
				<p style={{ color: 'red' }} className="text-center mt-3">
					Pleine
				</p>
			);
		} else if (props.statusChoice == 'Vide') {
			return (
				<p style={{ color: 'green' }} className="text-center mt-3">
					Vide
				</p>
			);
		} else {
			return (
				<p style={{ color: 'yellow' }} className="text-center mt-3">
					Endommagé
				</p>
			);
		}
	};

	return (
		<div className="modalConfirmation">
			<div className="modalContainer col-xl-4 text-light">
				<h3 className="text-center">Signalement</h3>
				<p className="mt-4 px-3">
					Vous êtes sur le point de déclarer cette poubelle comme :
				</p>
				{status()}

				<div className="d-flex mt-4 pt-2 justify-content-center">
					<div
						className="buttonCancel button col-3 me-4 text-center p-2"
						onClick={() => HandleCancel()}
					>
						Annuler
					</div>
					<div
						className="buttonConfirm button col-3 ms-4 text-center p-2"
						onClick={() => HandleConfirm()}
					>
						Confirmer
					</div>
				</div>
			</div>
		</div>
	);
};
