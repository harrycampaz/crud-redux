import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";

import { showProducts } from "../../actions/productActions";
import Product from './Product';


class Products extends Component {

    componentDidMount() {
        this.props.showProducts();
    }


    render() {
        const { Products } = this.props;
        console.log("PROSPS",Products);
        
        return (
            <Fragment>
                <h2 className="text-center my-5">Products</h2>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <ul>
                            {Products.map(product => (
                                <Product key={product.id} product={product} />
                            ))}
                        </ul>
                    </div>
                </div>

            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    Products: state.products.products
})

export default connect(mapStateToProps, { showProducts })(Products);