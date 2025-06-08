import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Conteudo from './components/Conteudo';

export default function App() {
  const [opcao, setOpcao] = useState('Dashboard');

  return (
    <div className="app-container">
      <Sidebar opcaoAtiva={opcao} setOpcao={setOpcao} />
      <div className="main-content">
        <header className="header">
          <h2>{opcao}</h2>
        </header>
        <Conteudo opcao={opcao} />
      </div>
    </div>
  );
}
