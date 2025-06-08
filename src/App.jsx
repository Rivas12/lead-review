import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Conteudo from './components/Conteudo';

export default function App() {
  const [opcao, setOpcao] = useState('Home');

  return (
    <div className="app-container">
      <Sidebar setOpcao={setOpcao} />
      <Conteudo opcao={opcao} />
    </div>
  );
}
