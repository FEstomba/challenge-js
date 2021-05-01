import React, {useState,useEffect} from 'react'
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios'
import { FaTrashAlt } from 'react-icons/fa';
import { FaWrench } from 'react-icons/fa';


const ListOperations = () => {
    const [ingress, setIngress] = useState([])
    const [egress, setEgress] = useState([])
    useEffect(()=>{
        async function fetchIngress(){
            const response= await axios.get("http://localhost:8000/operations?type=ingress&order=desc")
            setIngress(response.data)
            console.log(response)
        }

        async function fetchEgress(){
            const response= await axios.get("http://localhost:8000/operations?type=egress&order=desc")
            setEgress(response.data)
            console.log(response)
        }
        fetchIngress()
        fetchEgress()
}
,[])
        const displayOperation = (item)=> {
           return (
           <li key ="{item.id}" className="list-group-item" >
            <FaTrashAlt/>
            <FaWrench/>
            Fecha: {item.date},
            Concepto: {item.concept},
            $: {item.amount},
            Tipo: {item.type}
            
       </li>)

        }
        return (
            <div className='columns'
            style={{background: '#bdc3c7',fontSize:'20px',color:'#000'}}>
          <Container>
            <Row>
            <Col className="text-center" xs="6">Ingresos 
            <ul className="list-group">
                        {
                            ingress.map(item =>
                              displayOperation(item)
                                )
                        }
                    </ul> 
            </Col>

            <Col className="text-center" xs="6">Egresos
            <ul className="list-group">
                        {
                            egress.map(item =>
                                displayOperation(item)
                                )
                        }
                    </ul> 
            </Col>
            </Row>
            </Container>
            </div>
    )
}
export default ListOperations