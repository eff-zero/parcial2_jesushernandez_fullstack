import React, { useState } from 'react'
import Diapositivas from './Diapositivas';

function Botones({info}) {

    /* Jesus Hernandez */
    const [indice, pasarDiapositiva] = useState(0)

    return (
        <>
        <div className="Botones">
            <div className="cotainer">
                <div className="row">
                    <div className="col-sm-4">
                        <button
                            disabled={indice === 0}
                            onClick={ () => pasarDiapositiva(0)}
                            className='btn btn-outline-dark'
                        >
                            Restart
                        </button>
                    </div>
                    <div className="col-sm-4">
                        <button
                            disabled={indice === 0}
                            onClick={() => pasarDiapositiva(indice - 1)}
                            className='btn btn-outline-dark'
                        >
                            Prev
                        </button>
                    </div>
                    <div className="col-sm-4">
                        <button
                            disabled={indice === info.length - 1} // CONDICION PARA NO SALIRNOS DEL VECTOR
                            onClick={() => pasarDiapositiva(indice + 1)}
                            className='btn btn-outline-dark'
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="Diapositivas"> {/* LAS DIAPOSITIVAS ESTAN DENTRO DEL COMPONENTE DE BOTONES */}
            <Diapositivas 
                title = {info[indice]['title']}
                text  = {info[indice]['text']}
            />
        </div>
        </>
    )
}

export default Botones
