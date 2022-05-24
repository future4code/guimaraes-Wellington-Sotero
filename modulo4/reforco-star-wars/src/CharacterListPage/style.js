import styled from 'styled-components'
import Fundo from '../assets/fundostarwars.jpg'


export const MainContainer = styled.div`
    background-image: url(${Fundo});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: center;
    justify-content: center;
    
    
    
`
export const ButtonHome = styled.button`
    display: flex;
    flex-direction: row;
    height: 20px;
    height: 40px;
    background-color: rgba(130, 130, 130, 0.5);
    font-size: large;
    color: white;
    padding: 20px;
    align-items: center
    margin: 50px;
    align-items: center;
    border-radius: 8px;
`
export const CharacterCard = styled.button`
    background-color: rgba(130, 130, 130, 0.5);
    font-size: large;
    color: white;
    margin: 7px 0 0;
    border-radius: 8px;
`
    
    
export const CardsDiv = styled.div`
    display: inline-flex;
       
` 
    
     
export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto;
    margin: 5rem;
    grid-row-gap: 2rem;
    grid-column-gap: 1rem;
    place-items: center;
` 