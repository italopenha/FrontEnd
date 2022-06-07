import React, { useState, ChangeEvent, useEffect } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import UserLogin from '../../models/UserLogin';
import './Login.css';
import { login } from '../../services/Service';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/Actions';

function Login() {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');

    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            nome: "",
            email: "",
            senha: "",
            foto: "",
            tipo: "NORMAL"
        }
    );

    function updateModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        });
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {

        e.preventDefault();

        try {
            await login(`/api/Usuarios/logar`, userLogin, setToken);

            alert("Login realizado com sucesso!");
        } catch (error) {
            alert("Login ou senha inválidos!");
        }
    }

    useEffect(() => {

        if (token !== "") {
            dispatch(addToken(token))
            navigate("/home");
        }

    }, [token, navigate]);

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' >
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className="entrar">Entrar</Typography>
                        <TextField
                            value={userLogin.email}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                            id='email' label='e-mail' variant='outlined' name='email' margin='normal' fullWidth />

                        <TextField
                            value={userLogin.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                            id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />

                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' className='btn-logar'>
                                Logar
                            </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center' className='nao-tem-conta'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                            <Typography variant='subtitle1' gutterBottom align='center' className="cadastre-se">Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className="imagem-caderno">

            </Grid>
        </Grid >
    );
}

export default Login;