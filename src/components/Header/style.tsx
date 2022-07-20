import styled from 'styled-components'

export const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2em 8em;
    position: absolute;
    top: 0;
    left: 0;
`
export const StyledLogo = styled.img`
    margin-right: 4em;
    cursor: pointer;
`
export const StyledGroup = styled.div`
    display: flex;
    justify-content: space-betwee;
    align-items: center;
`

export const StyledMenuItems = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2em;
`

export const StyledMenuItem = styled.nav<{ type?: string }>`
    color: ${props => props.color ? props.color : `#353535`};
    font-size: 16px;
    font-weight: 300;
    line-height: 30px;
    cursor: pointer;
    transition: all .5s;
    user-select: none;
    &:active{
        transform: scale(.85);
    }

    ${(props) => 
        props.type && 
        props.type === 'button' && 
        `
        background-color: #fff;
        border-radius: 8px;
        padding: .8em 2em;
        `
    }

    &::after{
        content: '';
        height: 1px;
        background-color: ${props => props.color ? props.color : `#353535`};
    }
`