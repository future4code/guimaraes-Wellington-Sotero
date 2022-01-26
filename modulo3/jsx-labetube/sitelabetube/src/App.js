import logo from './logo.svg';
import './App.css';
import inicio from "./img/inicio.png"
import inscrição from "./img/inscrição.png"
import historico from "./img/historico.png"
import emalta from "./img/em alta.png"
import câmera from "./img/câmera.png"
import originais from "./img/originais.png"

function App() {
  const titulo = "Título do vídeo"

  function reproduzirVideo() {
    alert("O vídeo está sendo reproduzido")

    
}

  return (
    <div>
      <div className="tela-inteira">
        <header>
            <h1><img src="câmera.png"></img>Well's Tube</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca"/>
        </header>

        <main>
            <nav className="menu-vertical">
                <ul>
                    <li className="botoes-meunu-vertical"><img src="inicio"></img>Início</li>
                    
                    <li className="botoes-meunu-vertical"><img src="em alta"></img>Em alta</li>
                    <li className="botoes-meunu-vertical"><img src="inscrição"></img>Inscrições</li>
                   <hr/>
                    <li className="botoes-meunu-vertical"><img src="originais"></img>Originais</li>
                    <li className="botoes-meunu-vertical"><img src="historico"></img>Histórico</li>
                </ul>
            </nav>

            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onClick={reproduzirVideo}>
                    <img src="https://picsum.photos/400/400?a=1 " alt=""/>
                    <h4> {titulo} </h4>
                </div>
                <div className="box-pagina-principal media2" onClick={reproduzirVideo}>
                    <img src="https://picsum.photos/400/400?a=2 " alt=""/>
                    <h4> {titulo} </h4>
                </div>
                <div className="box-pagina-principal media3" onClick={reproduzirVideo}>
                    <img src="https://picsum.photos/400/400?a=3 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media4" onClick={reproduzirVideo}>
                    <img src="https://picsum.photos/400/400?a=4 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media5" onClick={reproduzirVideo}>
                    <img src="https://picsum.photos/400/400?a=5 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media6" onClick={reproduzirVideo}>
                    <img src="https://picsum.photos/400/400?a=6 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media7" onClick={reproduzirVideo}>
                    <img src="https://picsum.photos/400/400?a=7 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media8" onClick={reproduzirVideo}>
                    <img src="https://picsum.photos/400/400?a=8 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
            </section>
        </main>
    </div>   
    
     

        <footer>
            <h4>Oi! Boa noite GUIMARÃES!</h4>
        </footer>
    </div>

    

    
    
  );
}

export default App;
