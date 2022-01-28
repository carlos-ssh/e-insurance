import React, { useState } from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';

const Contenedor= styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [ resumen, guardarResumen ] = useState({
    costizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });
  const { cotizacion, datos } = resumen;


  return (
    <Contenedor>
      <Header
        titulo='Insurance Quoter'
      />
      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
        />
        <Resumen
          datos={datos}
        />
        <Resultado
          cotizacion={cotizacion}
        />
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
