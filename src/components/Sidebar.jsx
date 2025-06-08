import React from 'react';

const opcoes = [
  { nome: 'Dashboard', icon: '📊' },
  { nome: 'Leads', icon: '👥' },
  { nome: 'Configurações', icon: '⚙️' },
];

export default function Sidebar({ opcaoAtiva, setOpcao }) {
  return (
    <div className="sidebar">
      <div className="sidebar-title">Lead Review</div>
      {opcoes.map(({ nome, icon }) => (
        <button
          key={nome}
          className={opcaoAtiva === nome ? 'active' : ''}
          onClick={() => setOpcao(nome)}
        >
          <span className="icon">{icon}</span>
          {nome}
        </button>
      ))}
    </div>
  );
}
