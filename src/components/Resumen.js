import React, { Fragment } from 'react';


const Resumen = ({datos}) => {
  // Extraer datos
  const {marca, year, plan} = datos;
  if(marca === '' || year === '' || plan === '') return null;

  return (
    <Fragment>
      <h2>Quote Summary</h2>
      <ul>
        <li>Brand: </li>
        <li>Year: </li>
        <li>Plan: </li>
      </ul>
    </Fragment>
  );
}

export default Resumen;