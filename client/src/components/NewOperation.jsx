import React from 'react'


class NewOperation extends React.Component {

    constructor(args){
        super(args)
        this.state = { 
            date: '',
            concept: '',
            message: ''

        }

    }
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    save(e){
        this.setState({
            message: 'Guardado correctamente'
        })
    }

    render(){
        return (
            <div className='Form' 
            style={{background: '#bdc3c7',fontSize:'20px',color:'#000', margin:'25px 25px', padding:'25px',textAlign:'center'}}>
                <div>
                <label htmlFor="date"> Fecha </label>
                <input 
                value={this.state.date} 
                onChange={this.onChange.bind(this)} 
                name="date" id="date" type="date"/>
                </div>

                <div>
                <label htmlFor="concept"> Concepto </label>
                <input 
                value={this.state.concept} 
                onChange={this.onChange.bind(this)} 
                name="concept" id="concept" type="text"/>
                </div>

                <div>
                <label htmlFor="amount"> Monto </label>
                <input 
                value={this.state.amount} 
                onChange={this.onChange.bind(this)} 
                name="amount" id="amount" type="number"/>
                </div>

                <div>
                <label htmlFor='type'>Tipo de Operacion</label>
                <input type="radio" name="type" value="ingress" onChange={this.onChange.bind(this)}/> Ingreso
                <input type="radio" name="type" value="egress" onChange={this.onChange.bind(this)}/> Egreso
                </div>

                <div>
                    <button type="button" class="btn btn-success" onClick={this.onChange.bind(this)}>Guardar</button>

                    <button type="button" class="btn btn-danger" onClick={this.onChange.bind(this)}>Cancelar</button>
                </div>

            </div>
        )

    }
    
}
export default NewOperation