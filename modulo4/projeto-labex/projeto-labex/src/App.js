import styled from 'styled-components'
import './App.css';
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

function App() {
  return (
    <div className="App">
      <div className="main">
        
          <div className="center">
            <div className="menu">
              <div className="logo">
               <h1>Bem Vindo Ao LabexWell</h1>
               <p>Sua Agência de Viagens Espaciais</p>
              </div>
            <div className="item-menu">
             <a href="#">Área Pública(colocar aqui o link real)</a>
             <br></br>
             <a href="#">Área Privada(colocar aqui o link real)</a>
           </div>
           </div>
          </div>

      </div>
      
    </div>
    
  );
}

export default App;