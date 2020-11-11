import React, { useEffect, useState } from 'react'
import { Button } from '@material-ui/core'

import backend from '../services/backend';
import Product from '../model/Product';
import AppBar from '../components/AppBar/AppBar'
import Grid from '../components/Grid/Grid';
import ProductsGrid from '../components/ProductsGrid/ProductsGrid';


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
            {/* <p>{products}</p> */}

            <ProductsGrid>{products}</ProductsGrid>

            <Button variant="contained" color="primary">
            Hello world
            </Button>
        </div>
    )
}

export default ProdutsView;