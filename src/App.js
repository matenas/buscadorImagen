import React, { useState,useEffect } from 'react';
import Form from './components/Form';

function App() {

  //state app buscador
  const [search, setSearch] = useState('');

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="lead text-center">Buscador de Imagenes</h1>
        <Form
          setSearch={setSearch}  
        />
      </div>
    </div>
  );
}

export default App;
