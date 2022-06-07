import React, { useEffect } from "react";
import { Typography, Box, Grid, Button } from '@material-ui/core';
import TabPosts from "../../components/posts/tabPosts/TabPosts";
import ModalPosts from "../../components/posts/modalPosts/ModalPosts";
import './Home.css';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokensState } from "../../store/tokens/TokensReducer";


function Home() {

    let navigate = useNavigate();
    const token = useSelector<TokensState, TokensState['tokens']>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")
        }
    }, [token])

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="fundo">
                <Grid alignItems="center" item xs={6}>
                    <Box padding={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="txt3">Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="txt3">expresse aqui os seus pensamentos e opiniões</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPosts />
                        </Box>
                        <Link to="/posts" className="text-decorator-none">
                            <Button variant="outlined" className="btn-postagens">Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <img src="http://i.imgur.com/H88yIo2.png" alt="" className="img-home" />
                </Grid>
                <Grid xs={12}>
                    <TabPosts />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;

