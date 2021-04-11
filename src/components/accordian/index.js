import React, {useState, useContext, createContext} from 'react'
import {Container, Inner, Title, Frame, Item, Header, Body } from './styles/accordian'

const toggleContext = createContext()


function Accrodian({children, ...restProps}) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}
Accrodian.Title = function AccordianTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Accrodian.Frame = function AccordianFrame({children, ...restProps}){
    return <Frame {...restProps}>{children}</Frame>
}

Accrodian.Item = function AccordianItem({children, ...restProps}){
    const [toggleShow, setToggleShow] = useState(false)
    return (
        <toggleContext.Provider value={{toggleShow, setToggleShow }}>
            <Item {...restProps}>{children}</Item>
        </toggleContext.Provider>
    )
     
}
    
Accrodian.Header = function AccordianHeader({children, ...restProps}){
    const {toggleShow, setToggleShow} = useContext(toggleContext)

    return <Header 
    onClick={() => setToggleShow(toggleShow => !toggleShow)} 
    {...restProps}>{children}
    {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
    ): (
        <img src="/images/icons/add.png" alt="Open" /> 
    )}
    </Header>
}

Accrodian.Body = function AccordianBody({children, ...restProps}){
    const {toggleShow} = useContext(toggleContext)
    
    return toggleShow ? <Body {...restProps}>{children}</Body> : null
}



export default Accrodian
 