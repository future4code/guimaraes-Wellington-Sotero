import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import analara from './analara.png';
import pedrohenrique from './pedrohenrique.png';
import bale from './bale.jpg';
import futebol from './futebol.jpg';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'Pedro Henrique'}
          fotoUsuario={pedrohenrique}
          fotoPost={futebol}
        />

<Post
          nomeUsuario={'Ana Lara'}
          fotoUsuario={analara}
          fotoPost={bale}
        />
      </MainContainer>
    );
  }
}

export default App;
