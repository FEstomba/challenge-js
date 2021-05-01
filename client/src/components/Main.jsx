import React from 'react'
import { useHistory } from 'react-router-dom'

const Main = () => {
    const history=useHistory();

    let listOperations = [{
        date:"8/5",
        concept:"a",
        amount:8,
        type: "ingress"

    },
    {
        date:"7/5",
        concept:"b",
        amount:10,
        type: "egress"

    }]
    const newOperation = () => {

    }
    const listOperationByType = () => {

    }

    let balance = 0
    return (
        <div className='Menu'>
            <button className='btn btn-primary float-right'
            onClick={() => {history.push("/nueva-operacion")}}
            >
                Nueva operacion
            </button>


            <button className='btn btn-success float-right'
            onClick={() => {history.push("/listado-operaciones")}}
            >
                Listado de Operaciones
            </button>

            <h2>Balance actual: $ {balance}</h2>
        
            <h3>Ultimas 10 operaciones:</h3>
            <ul className="list-group">
                        {
                            listOperations.map(item =>
                                <li key ="{item.id}" className="list-group-item">
                                    Fecha: {item.date},
                                    Concepto: {item.concept},
                                    $: {item.amount},
                                    Tipo: {item.type}


                                    </li>
                                )
                        }
                    </ul> 



        </div>
    )
}
export default Main