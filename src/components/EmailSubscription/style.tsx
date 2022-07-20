import styled from 'styled-components'

export const StyledSubscriptionWrapper = styled.div`
    width: clamp(150px, 30em, 500px);
    display: flex;
    justify-content: space-between;
    background-color: #FFF;
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 14px;
    box-shadow: 0px 35px 55px -12px rgba(57, 49, 117, 0.1);
    padding: 1em 3em;
    gap: .5em;
`

export const StyledInputEmail = styled.input`
    background-color: #fff;
    border: none;
    color: #848484;
    transition: all .5s;
    font-size: 17px;
    flex-grow: 2;

    &:focus{
        outline: none;
    }
`