import React from 'react'
import styled from 'styled-components'

const InputBox = styled.input `
width: 30vw;
margin: 0 auto;
display: flex;
border: groove 5px;
margin-bottom: 3vh;
`

const PerguntaH1 = styled.h1 `
font-weight: bold;
text-align: center;
`

const PerguntaH2 = styled.h3 `
text-align: center;
`

export default class Home extends React.Component {
    state = {
        InputPergunta1: "",
        InputPergunta2: "",
        InputPergunta3: "",
        InputPergunta4: ""
    }

    OnChangePergunta1 = (event) => {
        this.setState({inputPergunta1: event.target.value});
    }

    OnChangePergunta2 = (event) => {
        this.setState({inputPergunta2: event.target.value});
    }

    OnChangePergunta3 = (event) => {
        this.setState({inputPergunta3: event.target.value});
    }

    OnChangePergunta4 = (event) => {
        this.setState({inputPergunta4: event.target.value});
    }
  }





    render() 
        return 
            
            <PerguntaH2> ETAPA 1 - DADOS GERAIS </PerguntaH2>;
            <PerguntaH2>  1. Qual o seu nome ? </PerguntaH2>;
            InputBox
        placeholder = { '' };
        value = {this.State.InputPergunta1};
        OnChange = {this.OnChangePergunta1};
        
        <PerguntaH2> 2. Qual sua idade ? </PerguntaH2>;
            InputBox
        placeholder = { '' };
        value = {this.State.InputPergunta2};
        OnChange = {this.OnChangePergunta2};
        
        <PerguntaH2> 3. Qual seu email ? </PerguntaH2>;
            InputBox
        placeholder = { '' };
        value = {this.State.InputPergunta3};
        OnChange = {this.OnChangePergunta3};
        
        <PerguntaH2> 4. Qual sua escolaridade ? </PerguntaH2>;
            InputBox
        placeholder = { '' };
        value = {this.State.InputPergunta4};
        OnChange = {this.OnChangePergunta4};

        