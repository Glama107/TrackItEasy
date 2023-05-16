import * as React from 'react';
import {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {ThemeProvider} from '@mui/material/styles';
import theme from "../themeMUI";
import ApiService from "../Services/ApiService";
import {NavLink, useNavigate} from "react-router-dom";
import {CircularProgress} from "@mui/material";

const apiService = new ApiService()


export default function SignUpComponent() {
    const navigate = useNavigate();
    const [errorText, setErrorText] = useState('');
    const [errorEmpty, setErrorEmpty] = useState('');
    const [isLoading, setIsLoading] = useState('Sign Up');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(<CircularProgress color="inherit"/>)
        const data = new FormData(event.currentTarget);

        if (data.get('username') === '' || data.get('email') === '' || data.get('password') === '') {
            setIsLoading('Sign Up')
            setErrorEmpty("Veuillez remplir tous les champs");
            return;
        }

        const response = await apiService.signUp(data.get('username'), data.get('email'), data.get('password'));
        if (response === true) {
            navigate('/');
        } else {
            setIsLoading('Sign Up')
            setErrorText("Un compte avec cet email existe déjà");
        }
        console.log(response);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'primary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit}
                         sx={{mt: 3}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    {...errorEmpty && {
                                        error: true,
                                        helperText: errorEmpty
                                    }}
                                    autoComplete="given-name"
                                    name="username"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Nom d'utilisateur"
                                    autoFocus
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    {...errorText && {
                                        error: true,
                                        helperText: errorText
                                    }}
                                    {...errorEmpty && {
                                        error: true,
                                        helperText: errorEmpty
                                    }}
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    {...errorEmpty && {
                                        error: true,
                                        helperText: errorEmpty
                                    }}
                                    required
                                    fullWidth
                                    name="password"
                                    label="Mot de passe"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails"
                                                       color="primary"/>}
                                    label="Remember me"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            {isLoading}
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <NavLink to={"/login"}>
                                    <Link variant="body2">
                                        Déjà un compte ? Connectez-vous
                                    </Link>
                                </NavLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}