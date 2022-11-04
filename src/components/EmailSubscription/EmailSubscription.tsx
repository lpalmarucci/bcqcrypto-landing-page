import Button from 'components/Button/Button'
import React from 'react'
import {StyledSubscriptionWrapper, StyledInputEmail} from './style'

const EmailSubscription = () => {
  return (
    <StyledSubscriptionWrapper>
        <StyledInputEmail type="email" placeholder='Enter your email'/>
        <Button text="Try now" variant="primary"/>
    </StyledSubscriptionWrapper>
  )
}

export default EmailSubscription
