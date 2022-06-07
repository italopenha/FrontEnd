import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import useLocalStorage from 'react-use-localstorage';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { TokensState } from '../../../store/tokens/TokensReducer';
import { addToken } from '../../../store/tokens/Actions';

function Navbar() {

    const [id, setId] = useLocalStorage('id');
    const dispatch = useDispatch();
    const token = useSelector<TokensState, TokensState['tokens']>(
        (state) => state.tokens
    );

    let navigate = useNavigate();

    function goLogout() {
        dispatch(addToken(''))
        setId('')
        alert("Usuário deslogado")
        navigate('/login')
    }

    var navbarComponent;

    if (token != "") {
        navbarComponent = <AppBar position="static" className='nav'>
            <Toolbar variant="dense">
                <Box className='cursor'>
                    <Typography variant="h5" color="inherit">
                        BlogPessoal
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="start">
                    <Link to="/home" className='text-decoration-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/posts" className='text-decoration-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/temas" className='text-decoration-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/formularioTema" className='text-decoration-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Cadastrar Tema
                            </Typography>
                        </Box>
                    </Link>
                    <Box mx={1} className='cursor' onClick={goLogout}>
                        <Typography variant="h6" color="inherit">
                            Logout
                        </Typography>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    }
        return (
            <>
                {navbarComponent}
            </>
        )
}
    

    export default Navbar;