import React from 'react'

const LogoApp = ({...logo}) => {
    return (
       <h1>{logo.text}</h1>
    )
}

export default LogoApp
