import styled from "styled-components";



export const LoginFormSection = styled.section`

`;

export const LoginFormContainer = styled.div`
    padding: 0 150px;

    > h1 {
        font-size: 35px;
        margin-bottom: 20px;
    }

    > p {
        margin-bottom: 17%;
    }

    .form {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .form-sub {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 20px;
    }

    .form-actions {
        margin-top: 20%
    }
`;