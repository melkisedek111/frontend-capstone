import React, { useState } from "react";
import CustomModal from "../Common/CustomModal/CustomModal.jsx";
import CustomButton from "../Common/CustomButton/CustomButton.jsx";
import AddPositionForm from "./AddPositionForm.jsx";

const AddPositionRequestFormModal = () => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<CustomButton label={"Add Position"} isDefault={true}  onClick={handleClickOpen}/>
			<CustomModal
				title="Add Department Form"
				body={<AddPositionForm />}
				modalWidth={"sm"}
				handleClose={handleClose}
				isOpen={open}
			/>
		</div>
	);
};

export default AddPositionRequestFormModal;
