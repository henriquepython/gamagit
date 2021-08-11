import React, { useState } from 'react';

function App(props) {
  const [ usuario, setUsuario] = useState('Guilherme')
  return (
    <>
      <input name="usuario" id="usuario" className="usuarioInput" placeholder="Usuário"></input>
      <button type="button">Pesquisar</button>
    </>
  );
}

export default App;
