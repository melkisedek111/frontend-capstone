import styled from "styled-components";

export const RecentRequestCardContainer = styled.div`
    width: 100%;
    background-color: #fff;
	border-radius: 10px;
	border: 1.5px solid #f0f0f0;
	padding: 20px;
    margin-top: 10px;
`;

export const RecentRequestCardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    h5 {
        font-size: 16px;
    }
`;



export const RecentRequestLists = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: scroll;
    padding-right: 5px;
    height: 610px;
`;
