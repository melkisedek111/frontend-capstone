import React from "react";
import {
	LoginContentContainer,
	LoginContentSection,
} from "./LoginContent.styled.jsx";
import ApiIcon from "@mui/icons-material/Api";

const LoginContent = () => {
	return (
		<LoginContentSection>
			<LoginContentContainer>
				<ApiIcon />
				<h1>Issue Ticket Request Tracker</h1>
                <h5>Catanduanes State University</h5>
				<p>
					Aute pariatur cupidatat amet excepteur. Laborum ullamco id cupidatat
					culpa reprehenderit labore ex dolor non magna magna amet. Sunt ullamco
					exercitation consequat adipisicing eu id ea voluptate elit adipisicing
					aliqua adipisicing. Proident cillum sit amet non aliqua deserunt
					ipsum. Enim eu adipisicing voluptate adipisicing qui qui esse quis
					esse laborum et. Enim sit reprehenderit officia reprehenderit fugiat
					aliquip proident minim ex occaecat eiusmod reprehenderit nulla labore.
				</p>
			</LoginContentContainer>
		</LoginContentSection>
	);
};

export default LoginContent;
