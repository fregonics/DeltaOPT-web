import React from 'react'
import { makeStyles, Drawer } from '@material-ui/core'
import clsx from 'clsx'

import DefaultToolbarContent from './DefaultToolbarContent'

import './style.css'
const drawer_width = 50

const useStyles = makeStyles({
    root: {
        display: 'flex'
    },
    drawer: {
        width: drawer_width,
        flexShrink: 0,
        whiteSpace: 'nowrap'
    },
    drawerOpen: {
        width: drawer_width
    },
    content: {
        flexGrow: 1
    }
})


export default function Toolbar() {
    const classes = useStyles()
    
    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, classes.drawerOpen)}
            anchor="left"
        >
            <DefaultToolbarContent />
        </Drawer>
    )
}