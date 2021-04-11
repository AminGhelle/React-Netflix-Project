import React from 'react'
import {OptInForm, Feature} from '../components'
import {HeaderContainer} from '../containers/header'
import {JumbotronContainer} from '../containers/jumbotron'
import {FooterContainer} from '../containers/footer';
import {FaqsContainer} from '../containers/faqs';

function Home() {
    return (
        <>
        <HeaderContainer>
            <Feature>
                <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                <Feature.SubTitle>Watch anywhere, cancel anytime</Feature.SubTitle>

            <OptInForm>
                <OptInForm.Input placeholder="please enter email address"/>
                <OptInForm.Button>Try it Now</OptInForm.Button>
                <OptInForm.Break />
                <OptInForm.Text>Ready to Watch? Enter your email to create or restart your membership</OptInForm.Text>
             </OptInForm>
            </Feature>
        
        </HeaderContainer>
            <JumbotronContainer/>
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}



export default Home

