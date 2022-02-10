import React from 'react'
import styled from 'styled-components'
import Page1 from "./components/Page1"
import Page2 from "./components/Page2"
import Page3 from "./components/Page3"
import Page4 from "./components/Page4"


const Botão = styled.button `
display: flex;
margin: 0 auto;
`

export default class App extends React.Component {

    state = {
        etapa: 1,
    }

    renderEtapa = () => {
        switch (this.state.etapa) {
            case 1:
                return <Page1 / > ;

            case 2:
                return <Page2 / > ;

            case 3:
                return <Page3 / > ;

            case 4:
                return <Page4 / > ;
        }
    }

    irParaProximaEtapa = () => {
        this.setState({ etapa: this.state.etapa + 1 })
    }


    render() {


        if (this.state.etapa >= 4) {
            return ( 
                <div> { this.renderEtapa() }

                
                </div>

            );


        }

        return (
            <div> { this.renderEtapa() }
            <Botão onClick = { this.irParaProximaEtapa } > Próxima Etapa </Botão> 
            </div>

        );

    }
}