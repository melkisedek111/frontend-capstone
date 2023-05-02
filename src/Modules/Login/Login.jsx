import React from "react";
import { LoginContainer, LoginSection } from "./Login.styled.jsx";
import { Grid } from "@mui/material";
import LoginForm from "./Components/LoginForm.jsx";
import LoginContent from "./Components/LoginContent.jsx";

const Login = () => {
	return <LoginSection>
        <LoginContainer>
            <Grid container spacing={2} padding={15}>
                <Grid item xs={12} md={6}>
                    <LoginContent />
                </Grid>
                <Grid item xs={12} md={6}>
                    <LoginForm />
                </Grid>
            </Grid>
        </LoginContainer>
    </LoginSection>;
};

export default Login;
