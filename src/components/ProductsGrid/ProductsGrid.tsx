import React, { InputHTMLAttributes } from 'react';
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper, 
    makeStyles
} from '@material-ui/core'

import Product from '../../model/Product';
import Grid from '../Grid/Grid';

interface ProductProps extends InputHTMLAttributes<HTMLInputElement> {
    children: Product[] 
}

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    }
})

const ProductsGrid: React.FC<ProductProps> = (props) => {
    const items = props.children
    const classes = useStyles()

    return (
        <section id="product-grid">
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="product table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Codigo</TableCell>
                            <TableCell align="left">Nome</TableCell>
                            <TableCell align="left">Descrição</TableCell>
                            <TableCell align="right">TIpo Medição</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map((row) => (
                            <TableRow key={row.code} >
                                <TableCell component="th" scope="row">
                                    {row.code}
                                </TableCell>
                                <TableCell align="left">{row.name}</TableCell>
                                <TableCell align="left">{row.description}</TableCell>
                                <TableCell align="right">{row.measure_type}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* <React.Fragment>
                {
                    props.children.map( (product) => {
                        return <p>{product.name}|{product.description}</p>
                    })
                }
            </React.Fragment> */}
        </section>
    )
}

export default ProductsGrid; 