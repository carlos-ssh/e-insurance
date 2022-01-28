import React from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';

const ContenedorHeader = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;


function App() {
  return (
    <ContenedorHeader>
      <Header
        titulo='Insurance Quoter'
      />
    </ContenedorHeader>
  );
}

export default App;
