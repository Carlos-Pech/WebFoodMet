import React from 'react';

const ModalPrueba = ({price}) => {

    
    let Resulado=""
    if(price==null)
    {
        console.error()
    }
    else
    console.log(price)
    
    return (
      <>
      <p>precio:{price}</p>
      </>
    );
  };

export default ModalPrueba;
