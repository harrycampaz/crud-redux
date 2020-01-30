import React, { Component } from 'react';

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

    render() {
        return (
            <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center">Agregar Nuevo Producto</h2>
                            <form>
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

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddProduct;