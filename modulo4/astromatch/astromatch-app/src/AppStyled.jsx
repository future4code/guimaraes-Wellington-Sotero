import styled from 'styled-components'
import PeopleIcon from '@material-ui/icons/People';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Fundo from './assets/fundolove.jpg';



export const DivApp = styled.div`
  margin: 0;
  padding: 0%;
  background-image: url(${Fundo});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: center;
  height: 150%;
  width: 100%;
  background-size: 100%;
  background-position: center;
  

`

export const DivInterna = styled.div`
  width: 400px;
  height: 90vh;
  margin-top: 10px;
  border: 1px solid black;
  background-color: #fff;
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: 400px;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dedede;
  padding: 0 20px;
  
`

export const DivEspaco = styled.div`
  width: 1.4em;
  display: flex;
`

export const Logo = styled.img`
  height: 100%;
`

export const IconeCurtidas = styled(PeopleIcon)`
  cursor: pointer;
  color: #820095;
`

export const IconeVoltar = styled(ArrowBackIcon)`
  cursor: pointer;
  color: #34AAA9;
`
