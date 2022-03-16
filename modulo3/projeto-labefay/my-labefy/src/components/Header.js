import React from 'react';
import styled from 'styled-components';

import CriarPlaylist from './CriarPlaylist';


const TituloLabefy = styled.h1`
    font-size: 50px;
    display: flex;
    width: 400px;
    

    
`

const BoxHeader = styled.div`
    display: flex;
    justify-content: space-between;
    justify-content: center;
    width: 800px;
    p{
        color: pink;
     }
    
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