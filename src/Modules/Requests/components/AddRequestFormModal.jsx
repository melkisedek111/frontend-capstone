import React, { useState } from "react";
import CustomButton from "../../Common/CustomButton/CustomButton.jsx";
import CustomModal from "../../Common/CustomModal/CustomModal.jsx";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddRequestForm from "./AddRequestForm.jsx";

const AddRequestFormModal = () => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
	  setOpen(true);
	};
  
	const handleClose = () => {
	  setOpen(false);
	};
	return (
		<div>
			<CustomButton icon={<AddCircleIcon />} label="Add New Request" onClick={handleClickOpen} />
			<CustomModal title="Create Request Form" body={<AddRequestForm handleClose={handleClose} />} modalWidth={"sm"} handleClose={handleClose} isOpen={open}/>
		</div>
	);
};

export default AddRequestFormModal;
