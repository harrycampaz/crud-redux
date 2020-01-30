import React, { Component } from 'react';
import { connect } from "react-redux";
import { addProduct } from "../../actions/productActions";

class AddProduct extends Component {

    state = {
        nombre: '', 
        precio: '',
        error: false
    }

    nameProduct = e => {


        this.setState({
            nombre: e.target.value
        })

    }

    priceProduct = e => {
        this.setState({
            precio: e.target.value
        })
    }

    handleAddProduct = e => {
        e.preventDefault();
        const {nombre, precio} = this.state;

      

        if(nombre === '' || precio === ''){
            this.setState({error: true})
            return;
        }

        this.setState({error: false})
        
        const infoProduct = {
            nombre: this.state.nombre,
            precio: this.state.precio
        }

        console.log(infoProduct);

        this.props.addProduct(infoProduct);
    }

    render() {
        const {error}  = this.state;
        return (
            <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center">Agregar Nuevo Producto</h2>
                            <form onSubmit = {this.handleAddProduct}>
                                <div className="form-group">
                                    <label>Titulo</label>
                                    <input onChange={this.nameProduct} type="text" className="form-control" placeholder="Titulo" />
                                </div>
                                <div className="form-group">
                                    <label>Precio del Producto</label>
                                    <input onChange = {this.priceProduct} type="text" className="form-control" placeholder="Precio" />
                                </div>
                                <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                            </form>

{error ? <div className="font-weight-bold alert alert-danger text-center mt-4" > Todos los campos son obligatorios </div>: null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, {addProduct})(AddProduct);