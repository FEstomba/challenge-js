import axios from 'axios';
import React, {useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom'

const Main = () => {
    const [operations, setOperations] = useState([])
    const history=useHistory();

    useEffect(()=>{
        async function fetchData(){
            const response= await axios.get("http://localhost:8000/operations?limit=10&order=desc")
            setOperations(response.data)
        }
        fetchData()
    }
    ,[])

    console.log(operations)
    
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
                            operations.map(item =>
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