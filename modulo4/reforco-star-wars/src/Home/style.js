import styled from 'styled-components'
import Fundo from '../assets/fundostarwars.jpg'
/* import BackgroundImage from '../../assets/Images/home.jpg' */

export const MainContainer = styled.div`
background-image: url(${Fundo});
background-repeat: no-repeat;
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh;
padding: 0;
`
export const ButtonsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 40px;
padding: 500px;
margin: 20px;
`
export const Buttons = styled.button`
background-color: #4E4B4B;
font-size: large;
color: #F8E00F;
border-radius: 8px;
height: 50px;
width: 200px;
`