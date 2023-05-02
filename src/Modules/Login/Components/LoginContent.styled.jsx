import styled from "styled-components";
import CSS_CONSTANTS from "../../../utils/css.constants";

export const LoginContentSection = styled.section``;

export const LoginContentContainer = styled.div`
    
    svg {
        font-size: 120px;
        color: ${CSS_CONSTANTS.COLORPALLETS.accent_A};
        margin-bottom: 15px;
    }

    > h1 {
        font-size: 2.5rem;
        margin-bottom: 10px;
    }
    > h5 {
        font-size: 1rem;
        text-transform: uppercase;
        color: #555555;
        font-weight: 500;
    }

    > p {
        margin-top: 30px;
        line-height: 30px;
        text-align: justify;
        padding-right: 50px;
        font-size: 15px;
    }
`;