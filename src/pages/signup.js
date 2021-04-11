import React, {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {HeaderContainer} from '../containers/header'
import {FooterContainer} from '../containers/footer'
import {Form} from '../components'
import {FirebaseContext} from '../context/firebase';
import * as ROUTES from '../constants/routes';

function Signup() {
    const history = useHistory()
    const {firebase} = useContext(FirebaseContext)
    const [firstName, setFirstName] = useState('')
    const [password, setPassword] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [error, setError] = useState('')


    const isInvalid = firstName === '' || password === '' || emailAddress === '';
    
    const handleSignUp = (e) => {
        e.preventDefault()

        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) => {
                result.user
                    .updateProfile({
                        displayName: firstName,
                        photoURL: Math.floor(Math.random() * 5) + 1
                    })
            })
            .then(() => {
                history.push(ROUTES.BROWSE)
            }) 
            .catch((error) => {
                setFirstName('')
                setEmailAddress('')
                setPassword('')
                setError(error.message)
            })
}


    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title> Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignUp}>
                        <Form.Input placeholder="First Name" value={firstName} onChange={({target}) => setFirstName(target.value)}/>
                        <Form.Input placeholder="Email Address" value={emailAddress} onChange={({target}) => setEmailAddress(target.value)}/>
                        <Form.Input placeholder="password" value={password} type="password" autoComplete="off" onChange={({target}) => setPassword(target.value)}/>
                        <Form.Submit disabled={isInvalid} type="submit">
                        Sign Up now
                    </Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        Already a user <Form.Link to="/signin"> Sign In Now</Form.Link>
                    </Form.Text>
                    <Form.SubText>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</Form.SubText>
                    
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}

export default Signup
