import React, { useState } from "react";
import CustomModal from "../Common/CustomModal/CustomModal.jsx";
import CustomButton from "../Common/CustomButton/CustomButton.jsx";

const AddQRItemsFormModal = () => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<CustomButton label={"Add QR Items"} isDefault={true}  onClick={handleClickOpen}/>
			<CustomModal
				title="Add QR Item Form"
				body={<></>}
				modalWidth={"sm"}
				handleClose={handleClose}
				isOpen={open}
			/>
		</div>
	);
};

export default AddQRItemsFormModal;
