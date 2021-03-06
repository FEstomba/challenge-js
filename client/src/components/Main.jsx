import axios from 'axios';
import React, {useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom'


const Main = () => {
    const [operations, setOperations] = useState([])
    const [balance, setBalance] = useState([])
    const history=useHistory();

    useEffect(()=>{
        async function fetchBalance(){
            const response= await axios.get("http://localhost:8000/balance")
            setBalance(response.data)
        }
        
        async function fetchOperations(){
            const response= await axios.get("http://localhost:8000/operations?limit=10&order=desc")
            setOperations(response.data)
        }
        
        fetchBalance()
        fetchOperations()
    }
    ,[])

    

    console.log(operations)
    
    return (
        <div className='Menu'
        style={{background:'#8f94fb',fontSize:'20px',color:'#000', padding:'25px'}}>
            
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
            <div className='balance'
            style={{background:'#4e54c8',textAlign:'center', padding:'15px'}}>
            <h2>Balance actual: $ {balance}</h2>
        
            <h3>Ultimas 10 operaciones:</h3>
              </div>
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