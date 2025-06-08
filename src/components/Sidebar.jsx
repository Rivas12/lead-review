import React from 'react';

export default function Sidebar({ setOpcao }) {
  return (
    <div className="sidebar">
      <button onClick={() => setOpcao('Dashboard')}>Dashboard</button>
      <button onClick={() => setOpcao('Leads')}>Leads</button>
      <button onClick={() => setOpcao('Configurações')}>Configurações</button>
    </div>
  );
}
