import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { cadastroUsuario } from "../../services/Service";
import UserLogin from "../../models/UserLogin";
import { Grid, Typography, Button, TextField, FormControl, InputLabel, Select } from '@material-ui/core';
import { Box } from "@mui/material";
import './RegisterUser.css';

function RegisterUser() {

    let navigate = useNavigate();

    const [confirmarSenha, setConfirmarSenha] = useState<String>("")

    const [UserLogin, setUsuario] = useState<UserLogin>(
        {
            id: 0,
            nome: "",
            email: "",
            senha: "",
            foto: "",
            tipo: ""
        }
    );

    const [usuarioResultado, setUsuarioResultado] = useState<UserLogin>(
        {
            id: 1,
            nome: "",
            email: "",
            senha: "",
            foto: "",
            tipo: ""
        }
    );

    useEffect(() => {

        if (usuarioResultado.id === 0) {
            navigate('/login');
        }

    }, [usuarioResultado, navigate]);

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUsuario({
            ...UserLogin,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {

        e.preventDefault();

        if (confirmarSenha === UserLogin.senha) {
            try {
                await cadastroUsuario(`/api/Usuarios/cadastrar`, UserLogin, setUsuarioResultado)
                alert('Usuario cadastrado com sucesso')
            } catch (error) {
                alert('Usuario já cadastrado, tente outro email!')
            }

        } else {
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='cadastrar'>Cadastrar</Typography>

                        <TextField
                            value={UserLogin.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth />

                        <TextField
                            value={UserLogin.email}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='email' label='E-mail' variant='outlined' name='email' margin='normal' type='email' fullWidth />

                        <TextField
                            value={UserLogin.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />


                        <TextField
                            value={confirmarSenha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                            id='confirmarSenha' label='Confirmar Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />

                        <TextField
                            value={UserLogin.foto}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='foto' label='Foto' variant='outlined' name='foto' margin='normal' fullWidth />


                        <FormControl
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            variant="outlined">
                            <InputLabel htmlFor="outlined-age-native-simple">Tipo de Usuário</InputLabel>
                            <Select
                                value={UserLogin.tipo}
                                native
                                label="Tipo de Usuário"
                                inputProps={{
                                    name: 'Tipo de Usuário',
                                    id: 'outlined-age-native-simple',
                                }}
                            >
                                <option aria-label="None" value="" />
                                <option value="NORMAL">NORMAL</option>
                                <option value="ADMINISTRADOR">ADMINISTRADOR</option>
                            </Select>
                        </FormControl>

                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Box marginY={2} textAlign='center'>
                                <Link to='/login' className='text-decorator-none'>
                                    <Button variant='outlined' className='btnCancelar'>
                                        Cancelar
                                    </Button>
                                </Link>
                            </Box>
                            <Box marginY={2} textAlign='center'>
                                <Button type='submit' variant='contained' className="btnCadastrar">
                                    Cadastrar
                                </Button>
                            </Box>
                        </Grid>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}

export default RegisterUser;