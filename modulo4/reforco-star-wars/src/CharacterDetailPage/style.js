import styled from 'styled-components'
import Fundo from '../assets/fundostarwars.jpg'

export const MainContainer = styled.div`
    background-image: url(${Fundo});
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
`
export const ButtonCharacterList = styled.button`
    display: flex;
    flex-direction: row;
    height: 40px;
    background-color: rgba(130, 130, 130, 0.5);
    font-size: large;
    color: white;
    padding: 30px;
    margin: 50px;
    text-align: center;
    border-radius: 10px;
`

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
`
export const CharacterCard = styled.div`
    background-color: rgba(130, 130, 130, 0.5);
    font-size: large;
    color: white;
    margin: 200px;
    border-radius: 10px;
    width: 250px;
    height: 250px;
    text-align: flex-start;
    display: flex;
    text-align: center;
    padding: 20px;
    
`

export const TextCard = styled.div`
    display: block;
` 