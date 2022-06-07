import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, FormControl, FormHelperText, MenuItem } from "@material-ui/core"
import { useNavigate, useParams } from 'react-router-dom';
import Theme from '../../../models/Theme';
import Post from '../../../models/Post';
import useLocalStorage from 'react-use-localstorage';
import { busca, buscaId, post, put } from '../../../services/Service';
import './RegisterPosts.css';
import { useSelector } from 'react-redux';
import { TokensState } from '../../../store/tokens/TokensReducer';

function RegisterPosts() {

    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [temas, setTemas] = useState<Theme[]>([]);
    const [idCriador, setIdCriador] = useLocalStorage('id');
    const token = useSelector<TokensState, TokensState['tokens']>(
        (state) => state.tokens
    );
    

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])

    const [tema, setTema] = useState<Theme>({
        id: 0,
        descricao: ''
    })

    const [postagem, setPostagem] = useState<Post>({
        id: 0,
        titulo: '',
        descricao: '',
        criador: {
            id: parseInt(idCriador),
        },
        tema: null
    })

    useEffect(() => { 
        setPostagem({
            ...postagem,
            tema: tema
        })
    }, [tema])

    useEffect(() => {
        getTemas()
        if (id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id])

    async function getTemas() {
        await busca("/api/Temas", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdPostagem(id: string) {
        await buscaId(`/api/Postagens/id/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {

        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/api/Postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Postagem atualizada com sucesso');
        } else {
            post(`/api/Postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Postagem cadastrada com sucesso');
        }
        back()

    }

    function back() {
        navigate('/posts')
    }

    return (
        <Container maxWidth="sm">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro postagem</Typography>
                <TextField value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="titulo" label="título" variant="outlined" name="titulo" margin="normal" fullWidth />
                <TextField value={postagem.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="descricao" label="descrição" name="descricao" variant="outlined" margin="normal" fullWidth />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/api/Temas/id/${e.target.value}`, setTema, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            temas.map(tema => (
                                <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default RegisterPosts;