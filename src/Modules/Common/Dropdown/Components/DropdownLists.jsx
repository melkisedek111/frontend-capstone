import React, { useEffect, useRef, useState } from "react";
import {
	DropdownDetailsContainer,
	DropdownLinks,
} from "../customDropdown.styled.jsx";
import LogoutIcon from "@mui/icons-material/Logout";

const DropdownLists = ({ isOpenDropdown, setIsOpenDropdown }) => {
	const [isFocused, setIsFocused] = useState(false);
	const dropdownRef = useRef(null);

	const handleClick = () => {
		dropdownRef.current.focus();
	};
	const testOnBlur = () => {
		console.log(333);
	};
	useEffect(() => {
		if (isOpenDropdown) {
			console.log(222);

			dropdownRef.current.focus();
		}
		const handleFocus = () => setIsOpenDropdown(true);
		const handleBlur = () => setIsOpenDropdown(false);

		if (dropdownRef.current) {
            console.log(2)
			// dropdownRef.current.addEventListener("focus", handleFocus);
			// dropdownRef.current.addEventListener("blur", handleBlur);
		}

        dropdownRef.current.addEventListener("blur", () => {
            console.log(32323)
        }); 

		return () => {
			if (dropdownRef.current) {
                console.log(1)
				// dropdownRef.current.removeEventListener("focus", handleFocus);
				// dropdownRef.current.removeEventListener("blur", handleBlur);
			}
		};
	}, [isOpenDropdown]);

	return (
		<DropdownDetailsContainer ref={dropdownRef} >
			<DropdownLinks>
				<p>Settings</p>
			</DropdownLinks>
			<DropdownLinks>
				<LogoutIcon />
				<p>Logout</p>
			</DropdownLinks>
		</DropdownDetailsContainer>
	);
};

export default DropdownLists;
