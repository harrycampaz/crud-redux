import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";

import { showProducts } from "../../actions/productActions";

class Products extends Component {

    componentDidMount(){
        this.props.showProducts();
    }


    render() {
        return (
           <Fragment>
               <h2  className="text-center my-5">Products</h2>
           </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    Products: state.products.products
})

export default connect(mapStateToProps, {showProducts})(Products);