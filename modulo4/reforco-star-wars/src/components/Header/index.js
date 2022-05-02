import React from "react";
import { Link } from 'react-router-dom';

import { AreaHeader } from './styled';

function Header(){
    return (
        <AreaHeader>
           <div className="container">
               <img src="../../../logo.png" />
           </div>

           <nav>
              <ul>
                <li><Link to="/">Início</Link></li>
                <li><Link to="/config">Configurações</Link></li>
                <li><Link to="/logout">Sair</Link></li>
              </ul>
           </nav>
        </AreaHeader>
    );
}

export default Header;