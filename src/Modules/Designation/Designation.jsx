import React, { useEffect } from "react";
import { DesignationSection } from "./Designation.styled.jsx";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/slices/appBar.slice.js";

const Designation = () => {
    const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setCurrentPage({ pageTitle: "Designation" }));
	}, []);
    
	return <DesignationSection>
        
    </DesignationSection>;
};

export default Designation;
