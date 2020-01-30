import React, { Component } from 'react';
import { connect } from "react-redux";

import { showProducts } from "../../actions/productActions";

class Products extends Component {

    componentDidMount(){
        this.props.showProducts();
    }


    render() {
        return (
            <div>
                <h1>Products</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    Products: state.products.products
})

export default connect(mapStateToProps, {showProducts})(Products);