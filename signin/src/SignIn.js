import React from "react";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const SignIn = () => {
    const onSignIn = () => {
        window.sessionStorage.setItem("token", JSON.stringify('fakeToken'));
        window.location.reload(true);
    }
    return (
        <form>
            <div>
            <Typography component="p">
                Username:
            </Typography>
            <TextField id="username" />
            </div>
            <div>
            <Typography component="p">
                Password:
            </Typography>
            <TextField
                id="password"
                type="password"
                autoComplete="current-password"/>
            </div>
            <br/>
            <Button variant="contained" onClick={onSignIn}>Sign in</Button>
        </form>
    );
}

export default SignIn;
