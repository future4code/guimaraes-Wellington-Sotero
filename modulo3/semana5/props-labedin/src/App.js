import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import exercito from './exercito.png'
import perfil from './perfil.png'
import nasavem from './nasavem.png'
import CardPequeno from './components/CardPequeno/CardPequeno';
import Local from './localpreto.png'
import email from './email.png'
import helicidade from './helicidade.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={perfil} 
          nome="Wellington Marcelino Sotero" 
          descricao="Olá, eu sou o Wellington. Sou o aluno da Labenu. Estudo programação desde Outubro de 2021."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno
          imagem={email}

          label="Email:"
          txt="wellingtonmarcelinosotero@hotmail.com"
          />

        <CardPequeno
          imagem={Local}
          label="Endereço:"
          txt="Rua Me Contrata em Maio, 2022"

          />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={exercito}
          nome="Exército Brasileiro" 
          descricao="De 2006 até 2013 servi as forças armadas passando por vários setores e aprendi muitas coisas."
          />

<CardGrande 
          imagem={helicidade}
          nome="Helicidade Heliporto Ltda." 
          descricao="De 2013 até o atual momento exercendo a atividade de Auxiliar de Pista."
          />
        
        <CardGrande
          imagem={nasavem}
          nome="Vem NASA" 
          descricao="Aprendendo mais a cada dia pra Nasa vim me buscar pra ser estudado." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          link="https://web.facebook.com/wellington.m.sotero"
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          link="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicHQifQ%3D%3D%22%7D"
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />       

        <ImagemButton 
          link="https://www.linkedin.com/in/wellington-m-sotero-49a37762/"
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStPjjyq6RFFrtM4be8eZTfcuNGmfjuBgbsPg&usqp=CAU" 
          texto="LinkedIn"
          
        />   
      </div>
    </div>
  );
}

export default App;
