import styled from 'styled-components'

export const StyledHeroWrapper = styled.div<{padding?: boolean}>`
    display: flex;
    width: 100%;
    height: 100vh;
    padding: ${props => props.padding ? '2em 8em' : '0'};
`

export const StyledSide = styled.div<{position?: string, backgroundColor?: string, size?: number}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${props => props.backgroundColor};
    ${props => {
        if(props.position === 'left'){
            return `
            width: ${props.size ? `${props.size}%` : 'auto'};
                padding-left: 8em;
                order: 1;
            `
        } else{
            return `
                width: ${props.size ? `${props.size}%` : 'auto'};
                border: none;
                border-top-left-radius: 24px;
                border-bottom-left-radius: 24px;
                order: 2;
            `
        }
    }}
`