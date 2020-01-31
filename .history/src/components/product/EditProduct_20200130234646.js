import React, { Component, useState, useEffect } from 'react';
import { connect } from "react-redux";
import { showProduct } from "../../actions/productActions";


function EditProduct(props) {

    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState('')
    const [error, setError] = useState(false)


   const  nameProduct = e => {
        setNombre(e.target.value)
    }


    useEffect(()=> {
        props.showProduct(props.match.params.id);
    }, [nombren, precio])

   const priceProduct = e => {
        setPrecio(e.target.value);
    }

   const  handleEditProduct = e => {
        e.preventDefault();
        // const { nombre, precio } = this.state;
        // const nombre = no



        if (nombre === '' || precio === '') {
          
            setError(true)
            return;
        }

        setError(false)

        const infoProduct = {
            nombre,
            precio
        }

        console.log(infoProduct);

        // this.props.addProduct(infoProduct);

        // this.props.history.push('/');
    }
    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center">Agregar Nuevo Producto</h2>
                        <form onSubmit={handleEditProduct}>
                            <div className="form-group">
                                <label>Titulo</label>
                                <input onChange={nameProduct} type="text" className="form-control" placeholder="Titulo" />
                            </div>
                            <div className="form-group">
                                <label>Precio del Producto</label>
                                <input onChange={priceProduct} type="text" className="form-control" placeholder="Precio" />
                            </div>
                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                        </form>

                        {error ? <div className="font-weight-bold alert alert-danger text-center mt-4" > Todos los campos son obligatorios </div> : null}
                    </div>
                </div>
            </div>
        </div>
    );


}
const mapStateToProsps = state => ({
    product: state.products.product
})

export default connect(mapStateToProsps, { showProduct })(EditProduct);
// class EditProduct extends Component {



//     componentDidMount(){

//         this.props.showProduct(this.props.match.params.id);


//     }


//     componentWillReceiveProps(nextProps, nextState){


//         const {nombre, precio} = nextProps.product;       
//         this.setState({nombre, precio});
//         console.log('componentWillReceiveProps');

//     }

// }

