import React, { useEffect, useState } from "react";
import axios from 'axios';
import { BASE_URL } from '../constants/urls';
import { CharacterCard } from './style';


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
        return 
        <CharacterCard>
            <p key={i}>{character.name}</p>
        </CharacterCard>
        

    })

    return (
        <div>
            <h2>Lista de Personagens</h2>
            {characterCards}
        </div>
    )

    

        
    
}

export default CharacterListPage;