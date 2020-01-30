import React, { Component } from 'react';
import { connect } from "react-redux";

import { showProducts } from "../../actions/productActions";

class Products extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

const mapStateToProps = state => ({
    Products: state.products.products
})

export default connect(mapStateToProps, {showProducts})(Products);