import React, { useEffect, useState } from "react";
import axios from 'axios';
import { BASE_URL } from '../constants/urls';
import { CharacterCard } from './style';
import Fundo from '../assets/fundostarwars.jpg';
import styled from "styled-components";


const Container = styled.div`
    background-image: url(${Fundo});
    background-position: center center;
    

`


const CharacterListPage = () => {
    const [characterList, setCharacterList] = useState([])

    useEffect(() => {
        getCharacterList()
    }, [])

    const getCharacterList = () => {
        axios
        .get(`${BASE_URL}/people`)
        .then((res) => setCharacterList(res.data.results))
        .catch((err) => console.log('erro inesperado', err))

    }

    const characterCards = characterList.map((character, i) => {
        return <div>
           <button> <p>{character.name}</p> </button>
        </div>
        

    })
    
    return (
        
        <Container>
            <h2>Lista de Personagens</h2>
           
               {characterCards}
            
        </Container>
        
        )

    }
    
export default CharacterListPage