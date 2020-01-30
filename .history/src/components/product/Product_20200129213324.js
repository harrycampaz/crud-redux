import React, { Component } from 'react';

class Product extends Component {
    render() {
        const { id, nombre, precio } = this.props.product
        return (
            <div>
                <li className="list-group-item">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md-8 d-flex justify-content-between align-items-center">
                            <p className="text-dark m-0">
                                {nombre}
                            </p>
                            <span className="badge badge-warning text-dark">
                                {precio}
                            </span>
                        </div>
                        <div className="col-md-4 d-flex justify-content-end acciones">
                            2
                          </div>
                    </div>
                </li>
            </div>
        );
    }
}

export default Product;