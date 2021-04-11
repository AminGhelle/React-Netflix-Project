import React from 'react'
import {Accordian} from '../components'
import OptInForm from '../components/opt-in-form'
import faqsData from '../fixtures/faqs.json'

export function FaqsContainer(){
    return (
        <Accordian>
            <Accordian.Title> Frequently Asked Questions</Accordian.Title>
          {faqsData.map((item) => (
              <Accordian.Item key={item.id}>
                <Accordian.Header>{item.header}</Accordian.Header>
                <Accordian.Body>{item.body}</Accordian.Body>
              </Accordian.Item>
          ))}
            <Accordian.Item />
            <OptInForm>
              <OptInForm.Input placeholder="please enter email address"/>
              <OptInForm.Button>Try it Now</OptInForm.Button>
              <OptInForm.Break />
              <OptInForm.Text>Ready to Watch? Enter your email to create or restart your membership</OptInForm.Text>
            </OptInForm>
        </Accordian>
    )
}
