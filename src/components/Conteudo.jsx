import React from 'react';

export default function Conteudo({ opcao }) {
  return (
    <div className="conteudo">
      <h1>{opcao}</h1>
      <p>Conteúdo da seção {opcao}</p>
    </div>
  );
}
