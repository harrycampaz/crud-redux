import React from 'react';

const Header = () => {
    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between d-flex">

            <h1>Crud - Redux</h1>
            <button  type="button" className="btn btn-danger nuevo-post">
                Agregar Producto
            </button>
        </div>
    );
};

export default Header;