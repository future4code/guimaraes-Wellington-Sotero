import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [{
        id: Date.now(),
        texto: 'Comprar o Carro',
        completa: false
      },
      {
        id: Date.now(),
        texto: 'Abastecer',
        completa: false
      },
      {
        id: Date.now(),
        texto: 'Viajar com meu amor',
        completa: false
      }],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {

  };

  componentDidMount() {

  };

  onChangeInput = (event) => {

  }

  criaTarefa = () => {
    const novoPost = {
    id: Date.now(),
    texto: this.state.textoNovoPost,
    curtido: false
    }

    const novaListaDePosts = [novoPost, ... this.state.listaDePosts]

    this.state({alistaDeposts: novaListaDePosts})

  }

  selectTarefa = (id) => {
    const novaListaDePosts = this.state.listaDePosts.filter((post) => {
      
        return post !== post.id
    }
    )

    this.setState({listaDePosts: novaListaDePosts})

    

  }

  onChangeFilter = (event) => {

  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case "Feito":
          return !tarefa.completa
        case "Ñ Feito":
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="Feito">Feito</option>
            <option value="Ñ Feito">Ñ Feito</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
