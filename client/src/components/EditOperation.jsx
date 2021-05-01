import React from 'react'
import { withRouter } from 'react-router-dom';
import axios from 'axios'


class EditOperation extends React.Component {
    constructor(args) {
        super(args)
        this.state = this.props.history.location.state

    }



     editOperation = async (id) => {
        console.log("ID:" + id)
        try {
            const response = await axios({
                url: "http://localhost:8000/operation/" + id,
                method: 'PUT',
                data:this.state,
            })

            alert("Se editó correctamente")
        } catch (e) {
            alert(e);

    }
}

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })

    }


    render() {

        return (
            <div className='Form'
                style={{ background: '#8f94fb', fontSize: '20px', color: '#000', margin: '25px 25px', padding: '25px', textAlign: 'center' }}>
                <div>
                    <label htmlFor="date"> Fecha </label>
                    <input
                        value={this.state.date}
                        onChange={this.onChange.bind(this)}
                        name="date" id="date" type="date"
                        defaultValue={this.state.date} />
                </div>

                <div>
                    <label htmlFor="concept"> Concepto </label>
                    <input
                        value={this.state.concept}
                        onChange={this.onChange.bind(this)}
                        name="concept" id="concept" type="text" />
                </div>

                <div>
                    <label htmlFor="amount"> Monto </label>
                    <input
                        value={this.state.amount}
                        onChange={this.onChange.bind(this)}
                        name="amount" id="amount" type="number" />
                </div>

                <div>

                    <button type="button" class="btn btn-success" onClick={() => this.editOperation(this.state.id)}>Guardar</button>

                    <button onClick={() => { this.props.history.push("/listado-operaciones") }} type="button" class="btn btn-danger">Cancelar</button>
                </div>

            </div>
        )

    }

}
export default withRouter(EditOperation);
