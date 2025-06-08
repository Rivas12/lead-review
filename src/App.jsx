import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Conteudo from './components/Conteudo';
import { getLeads, getLeadById } from './utils/supabaseClient';

export default function App() {
  const [opcao, setOpcao] = useState('Dashboard');

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const leads = await getLeads();
        console.log(leads);

        const lead = await getLeadById(1);
        console.log(lead);
      } catch (error) {
        console.error('Erro ao buscar leads:', error);
      }
    };

    fetchLeads();
  }, []);

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
