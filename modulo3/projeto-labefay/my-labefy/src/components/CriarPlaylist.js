import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const CriarPlaylistDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
`

const BotaoEInput = styled.div`
    display: flex;
    flex-direction: row;
`

const Botao = styled.button`
background: rgba( 255, 255, 255, 0.1);
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
    border-radius: 8px;
`


export default class CriarPlaylist extends React.Component{
    state = {
        criarPlaylistInput: "",
        
    }

    onChangeNamePlaylist = (event) => {
        this.setState({ criarPlaylistInput: event.target.value })
    };

    criarPlaylist = () => {
        const body = {
            name: this.state.criarPlaylistInput
        };

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body,
        ////////////https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists
        {
            headers: {
                Authorization: 'wellington-marcelino-guimaraes'
            }
        })
        .then((response) => {
            this.setState({ criarPlaylistInput: "" });
            alert('Playlist criada com sucesso!')
        })
        .catch((erro) => {
            console.log(erro.message)
            alert('Não foi possível criar a playlist')
        })
    }

    render() {
        return(
            <div>
                <CriarPlaylistDiv>
                    <label>Criar Playlist</label>
                    <BotaoEInput>
                        <input value={this.state.criarPlaylistInput} onChange={this.onChangeNamePlaylist}></input>
                        <Botao onClick={this.criarPlaylist}>Criar</Botao>
                    </BotaoEInput>
                </CriarPlaylistDiv>
                
            </div>
        )
    }
}