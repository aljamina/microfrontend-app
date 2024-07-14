import React from "react";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';


const generateClassName = createGenerateClassName({
    seed:'signin'
});

const SignIn = () => {
    const onSignIn = () => {
        window.sessionStorage.setItem("token", JSON.stringify('fakeToken'));
        window.location.reload(true);
    }
    return (
        <StylesProvider generateClassName={generateClassName}>
            <form>
                <div>
                    <Typography component="p">
                        Username:
                    </Typography>
                    <TextField id="username" />
                </div>
                <br/>
                <div>
                    <Typography component="p">
                        Password:
                    </Typography>
                    <TextField
                        id="password"
                        type="password"
                        autoComplete="current-password"
                    />
                </div>
                <br/>
                <Button variant="contained" onClick={onSignIn}>Sign in</Button>
            </form>
        </StylesProvider>
    );
}

export default SignIn;
