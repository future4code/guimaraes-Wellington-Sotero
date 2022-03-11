import React from 'react';
import styled from 'styled-components';
import CriarPlaylist from './CriarPlaylist';
/* import icone from './assets/play.png'; */
import { SiSpotify } from "react-icons/si";

const TituloLabefy = styled.h1`
    font-size: 50px;
    display: flex;
    width: 400px;

    /* background-color: White; */
    background-image: url(${SiSpotify});
    /* SiSpotify */
`

const BoxHeader = styled.div`
    display: flex;
    justify-content: space-between;
    justify-content: center;
    width: 800px;
    backgroud-color: White;
`

export default class Header extends React.Component {
    render() {
        return(
            <BoxHeader>
                <TituloLabefy>Well's Labefy</TituloLabefy>
                <CriarPlaylist />
            </BoxHeader>
        )
    }
};