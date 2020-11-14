import React from 'react'
import { List, ListItem, ListItemIcon } from '@material-ui/core'
import { Add, Edit, Close } from '@material-ui/icons'


function ItemIcon(index: number) {
    switch (index) {
        case 0: {
            return ( <Add /> )
        }
        case 1: {
            return ( <Edit /> )
        }
        case 2: {
            return ( <Close /> )
        }
    }
}

export default function DefaultToolbarContent() {
    return (
        <List>
            {['Incluir', 'Editar', 'Excluir'].map( (text, index) => (
                    <ListItem 
                        button key={text}

                    >
                        <ListItemIcon>
                            {ItemIcon(index)}
                        </ListItemIcon> 
                    </ListItem>
            ) )}
        </List>
    )
}