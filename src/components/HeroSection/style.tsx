import { motion } from 'framer-motion'
import styled from 'styled-components'

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

    @media (max-width: 1024px){
        width: 100%;
        max-width: 800px;
        padding-left: 0;
        border-radius: 24px;
    }
`


export const StyledHeroWrapper = styled.div<{padding?: boolean}>`
    display: flex;
    width: 100%;
    height: 100vh;
    padding: ${props => props.padding ? '2em 8em' : '0'};

    @media (max-width: 1024px){
        height: 100%;
        padding: ${props => props.padding ? '4em 20px' : '0'};
        flex-direction: column;
        align-items: center;
        padding: 8em 0 2em 0;
        gap: 16px;
    }
`