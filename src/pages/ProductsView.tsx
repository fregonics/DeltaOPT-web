import React, { useEffect, useState } from 'react'
import { Button } from '@material-ui/core'

import backend from '../services/backend';
import AppBar from '../components/AppBar/AppBar'


function ProdutsView() {

    const [products, setProducts] = useState<String>('')

    useEffect(() => {
        backend.get('/products').then((response) => {
            setProducts(JSON.stringify(response.data))
        })
    }, [])

    return (
        <div className="App">
            <AppBar />
            <p>{products}</p>
        
            <Button variant="contained" color="primary">
            Hello world
            </Button>
        </div>
    )
}

export default ProdutsView;