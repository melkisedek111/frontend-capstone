import React, { useState } from "react";
import CustomModal from "../Common/CustomModal/CustomModal.jsx";
import CustomButton from "../Common/CustomButton/CustomButton.jsx";
import AddDepartmentRequestForm from "./AddDepartmentRequestForm.jsx";

const AddDepartmentRequestFormModal = () => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<CustomButton label={"Add Department"} isDefault={true}  onClick={handleClickOpen}/>
			<CustomModal
				title="Add Department Form"
				body={<AddDepartmentRequestForm />}
				modalWidth={"sm"}
				handleClose={handleClose}
				isOpen={open}
			/>
		</div>
	);
};

export default AddDepartmentRequestFormModal;
