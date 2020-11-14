import React, { useEffect, useState } from 'react'
import { Button } from '@material-ui/core'

import backend from '../services/backend';
import Product from '../model/Product';
import AppBar from '../components/AppBar/AppBar'
import Grid from '../components/Grid/Grid';
import ProductsGrid from '../components/ProductsGrid/ProductsGrid';
import Toolbar from '../components/Toolbar/Toolbar';

import './style.css'

function ProdutsView() {

    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        backend.get('/products').then((response) => {
            setProducts(response.data)
        })
    }, [])

    return (
        <div className="App">
            
            
            <AppBar />
            <div className="data-interface">
                <Toolbar />
                
                <ProductsGrid>
                    {products}
                </ProductsGrid>
            </div>
            
            
        </div>
    )
}

export default ProdutsView;