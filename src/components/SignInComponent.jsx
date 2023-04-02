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
import {useState} from "react";
import {CircularProgress} from "@mui/material";


const apiService = new ApiService()


export default function SignIn() {
    const navigate = useNavigate();
    const [errorText, setErrorText] = useState('');
    const [isLoading, setIsLoading] = useState('Sign In');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(<CircularProgress color="inherit"/>)
        const data = new FormData(event.currentTarget);

        if (data.get('email') === '' || data.get('password') === '') {
            setIsLoading('Sign In')
            setErrorText("Veuillez remplir tous les champs");
            return
        }

        const response = await apiService.signIn(data.get('email'), data.get('password'));
        console.log(response);
        if (response === true) {
            navigate('/');
        } else {
            setIsLoading('Sign In')
            setErrorText("Nom d'utilisateur ou mot de passe incorrect");
        }
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
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate
                         sx={{mt: 1}}>
                        <TextField
                            {...errorText && {
                                error: true,
                                helperText: errorText
                            }}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            {...errorText && {
                                error: true,
                                helperText: errorText
                            }}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember"
                                               color="primary"/>}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            {isLoading}
                        </Button>

                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <NavLink to={"/register"}>
                                    <Link variant="body2">
                                        Don't have an account? Sign Up
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