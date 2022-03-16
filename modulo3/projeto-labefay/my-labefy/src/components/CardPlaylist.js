import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const CardDiv = styled.div`
    display: flex;
    width: 25vw;
    margin: 10px 0 10px 40px;
    justify-content: space-between;
    align-items: center;    
`
const BackgroundCard = styled.div`
    background: rgba( 255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    display: flex;
    width: 50vw;
    height: 8vh;
    margin: 10px 0 10px 40px;
    justify-content: center;
    align-items: center;    
`

const Botao = styled.button`
background: rgba( 255, 255, 255, 0.1);
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
    border-radius: 10px;
`


const CardPlaylist = (props) => {
        return(
                <BackgroundCard key={props.playlistId}>
                    <CardDiv >
                            <h3>{props.name}</h3>
                            <Botao onClick={() => {props.mudarPagina("tracklistDaPlaylist", props.playlistId)}}>Ver</Botao>
                            <Botao onClick={() => {props.deletarPlaylist(props.playlistId)}}>Deletar playlist</Botao>                                         
                    
                    </CardDiv>
                </BackgroundCard>
        )
    }
export default CardPlaylist