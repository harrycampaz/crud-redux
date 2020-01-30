import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between d-flex">

           <Link to={'/'} className="navbar-brand">
                Crud - Redux App
           </Link>
          
            <button  type="button" className="btn btn-danger nuevo-post">
                Agregar Producto
            </button>
        </div>
    );
};

export default Header;