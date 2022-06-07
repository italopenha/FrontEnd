import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Box, Grid } from '@material-ui/core';
import './Footer.css';
import { useSelector } from 'react-redux';
import { TokensState } from '../../../store/tokens/TokensReducer';

function Footer() {

    const token = useSelector<TokensState, TokensState['tokens']>(
        (state) => state.tokens
    );

    var footerComponent;

    if (token != "") {
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" item xs={12}>
                <Box className='redes-sociais'>
                    <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h5" align="center" gutterBottom className='txt-redes-sociais'>Siga-nos nas redes sociais</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="https://www.facebook.com/" target="_blank">
                            <FacebookIcon className='icones-redes-sociais' />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank">
                            <InstagramIcon className='icones-redes-sociais' />
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank">
                            <LinkedInIcon className='icones-redes-sociais' />
                        </a>
                    </Box>
                </Box>
                <Box className='generation-back' paddingTop={3}>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a target="_blank" href="https://brazil.generation.org" className="text-decorator-none">
                            <Typography variant="subtitle2" gutterBottom className='generation-brasil' align="center">Generation Brasil</Typography>
                        </a>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    }

    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;