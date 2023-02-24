import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const CustomModal = ({body, title, actions, isOpen, handleClose, modalWidth }) => {
	return (
		<div>
			<Dialog
				open={isOpen}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-describedby="alert-dialog-slide-description"
                fullWidth
				maxWidth={modalWidth || "lg"}
			>
				<DialogTitle>{title}</DialogTitle>
				<DialogContent>
					{body}
				</DialogContent>
				<DialogActions>
					{actions}
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default CustomModal;
