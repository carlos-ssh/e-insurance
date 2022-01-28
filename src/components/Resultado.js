import React from 'react';
import styled from '@emotion/styled';

const Mensaje = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const ResultadoCotizacion = styled.div`
  text-align: center;
  padding: .5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;

const TextoCotizacion = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const Resultado = ({cotizacion}) => {

  return (
    (cotizacion === 0)
      ?
        <Mensaje> Select a brand, year and coverage </Mensaje>
      :
        (
          <ResultadoCotizacion>
            <TextoCotizacion>Total: $ {cotizacion}</TextoCotizacion>
          </ResultadoCotizacion>
        )
  )
}

export default Resultado;