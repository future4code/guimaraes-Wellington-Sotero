import styled from 'styled-components'
import BackgroundImage from '../../assets/Images/star-wars-background.png'
export const MainContainer = styled.div`
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
        /* display: flex; */
`
export const ButtonHome = styled.button`
    display: flex;
    flex-direction: row;
    height: 40px;
    background-color: rgba(130, 130, 130, 0.5);
    font-size: large;
    color: white;
    padding: 30px;
    align-items: center;
    margin: 50px;
    text-align: center;
    border-radius: 8px;
`

export const CardContainer = styled.div`
    width: 300px;
    height: 300px;
    height: 250px;
    background-color: rgba(130, 130, 130, 0.5);
    border-radius: 8px;
    padding: 20px;
    margin: 200px;
   
`
export const CardMainContainer = styled.div`
    display: flex;
    justify-content: center;
    color: #F8E00F;
    font-size: large;
    text-align: center;
    margin: auto;
`