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
,[]);  


        const displayOperation = (item)=> {
            console.log(item)
           return (
           <li key ={item.id} className="list-group-item" >
            <FaTrashAlt onClick={()=>deleteOperation(item.id)}/>
            <FaWrench/>
            Fecha: {item.date},
            Concepto: {item.concept},
            $: {item.amount},
            Tipo: {item.type}
            
       </li>)

        }

        const refreshPage= () => {
            window.location.reload(false);
          }
    
    const  deleteOperation = async(id) =>  {
        console.log("ID:" + id)
    try{
        const response = await axios({
        url: "http://localhost:8000/operation/" + id,
        method: 'DELETE',
    })
    
    alert("Se elimino correctamente")
    refreshPage()
 }catch(e){
    alert(e);
}
}
        return (
            <div className='columns'
            style={{background: '#8f94fb',fontSize:'20px',color:'#000',padding:'30px',heigth:'25px', textAlign:'center'}}>
          <Container>
            <Row
              style={{background:'#4e54c8', padding:'30px'}}>
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