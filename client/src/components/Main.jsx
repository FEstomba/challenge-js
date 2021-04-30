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
        <div>
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
            <div style={{color:'red'}}>
            <h1>Balance actual: $ {balance}</h1>
            </div>
            <h2>Ultimas 10 operaciones:</h2>
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