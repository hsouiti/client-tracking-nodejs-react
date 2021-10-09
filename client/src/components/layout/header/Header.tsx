import { Paper } from '@mui/material'
import React from 'react'

const Header = ({title}: {title:string}) => {
    console.log(title)
    return (
       <Paper elevation={0}> 
            <h1>Header {title}</h1>
       </Paper>
    )
}

export default Header