import React, { Component } from 'react';

class Product extends Component {
    render() {
        const { id, nombre, precio } = this.props.product
        return (
            <div>
                <li className="list-group-item">
                    <div className="row justify-content-between aling-items-center">
                        <div className="col-md-8 d-flex">
                            <p className="text-dark">
                                {nombre}
                            </p>
                            <span className="badge badge-warning text-dark">
                                {precio}
                            </span>
                        </div>
                        <div className="col-md-4">
                            2
                          </div>
                    </div>
                </li>
            </div>
        );
    }
}

export default Product;