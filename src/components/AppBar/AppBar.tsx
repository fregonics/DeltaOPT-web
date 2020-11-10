import React from 'react'
import { Ballot, Business, Transform } from '@material-ui/icons'

import { Link } from 'react-router-dom';
import './AppBar.css'


function AppBar() {
    return (
        <header>
            <div id="app-navbar">
                <div className="title-section left-box">
                    <Link to="/">
                        <h1>DeltaOPT </h1>
                    </Link>
                </div>
                <div className="items-section center-box">
                    <div className="item">
                        <Link to="/products">
                            <Ballot />
                            <div className="item-description">Produtos</div>
                        </Link>
                    </div>
                    <div className="item">
                        <Link to="/providers">
                            <Business />
                            <div className="item-description">Fornecedores</div>
                        </Link>
                    </div>
                    <div className="item">
                        <Link to="/processes">
                            <Transform />
                            <div className="item-description">Processos</div>
                        </Link>
                    </div>
                </div>
                <div className="right-box"></div>
            </div>
            
        </header>
    )
}

export default AppBar;