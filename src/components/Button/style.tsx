import styled from "styled-components";

export const StyledButton = styled.button<{variant?: string}>`
    ${props => {
        switch(props.variant){
            case 'primary':
                return `
                    background-color: #5B46F6;
                    &:hover{
                        box-shadow: 0px 3px 20px rgba(91, 70, 246, .6);
                    }
                `
            case 'secondary':
                return `
                    background-color: #468CF6;
                    &:hover{
                        box-shadow: 0px 3px 20px rgba(70, 140, 246, .6);
                    }
                `
            default:
                return `
                    background-color: #5B46F6;
                    &:hover{
                        box-shadow: 0px 3px 20px rgba(91, 70, 246, .6);
                    }
                `
        }
    }};
    border-radius: 8px;
    border: none;
    color: #fff;
    padding: 1em 2em;
    cursor: pointer;
    transition: all .5s;
    box-shadow: 0px 0px 0px rgba(255,255,255,0);

`