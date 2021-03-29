import React from 'react'

const Main = () => {

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


    let balance = 0
    return (
        <div>
            <button className='btn btn-primary float-right'
            onClick={() => {newOperation()}}
            >
                Nueva operacion
            </button>
            <h1>Balance actual: $ {balance}</h1>
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