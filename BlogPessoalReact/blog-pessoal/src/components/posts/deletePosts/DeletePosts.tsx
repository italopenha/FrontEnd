import React, { useEffect, useState } from 'react'
import { Typography, Button, Card, CardActions, CardContent } from "@material-ui/core"
import { useNavigate, useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { buscaId, deleteId } from '../../../services/Service';
import Post from '../../../models/Post';
import './DeletePosts.css';
import { useSelector } from 'react-redux';
import { TokensState } from '../../../store/tokens/TokensReducer';

function DeletePosts() {

    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<Post>()
    const token = useSelector<TokensState, TokensState['tokens']>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/api/Postagens/id/${id}`, setPost, {
            headers: {
                'Authorization': token
            }
        })
    }

    function sim() {
        navigate('/posts')
        deleteId(`/api/Postagens/deletar/${id}`, {
            headers: {
                'Authorization': token
            }
        });
        alert('Postagem deletada com sucesso');
    }

    function nao() {
        navigate('/posts')
    }

    return (
        <>
            <Box m={2}>
                <Card variant="outlined" >
                    <CardContent>
                        <Box justifyContent="center">
                            <Typography color="textSecondary" gutterBottom>
                                Deseja deletar a Postagem:
                            </Typography>
                            <Typography color="textSecondary" >
                                {post?.titulo}
                            </Typography>
                        </Box>

                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                            <Box mx={2}>
                                <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                                    Sim
                                </Button>
                            </Box>
                            <Box>
                                <Button onClick={nao} variant="contained" size='large' color="secondary">
                                    Não
                                </Button>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}
export default DeletePosts;