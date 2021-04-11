import React from 'react'
import {Container, Input, Button, Text, Break} from './styles/opt-in-form'

function OptInForm({children, ...restProps}){
    return (
        <Container {...restProps}>{children}</Container>
    )
}

OptInForm.Input = function OptInFormInput({...restProps}){
    return (
        <Input {...restProps}/>
    )
}

OptInForm.Button = function OptInFormButton({children, ...restProps}){
    return (
        <Button {...restProps}>{children} <img src="images/icons/chevron-right.png" alt="Try Now"/> </Button>
    )
}

OptInForm.Text = function OptInFormText({children, ...restProps}){
    return (
        <Text {...restProps}>{children}</Text>
    )
}

OptInForm.Break = function OptInFormBreak({children, ...restProps}){
    return (
        <Break {...restProps}>{children}</Break>
    )
}


export default OptInForm