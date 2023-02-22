import React from "react";
import styled, { keyframes } from "styled-components";

export const AnimateR = () =>{
    return(
        <Display>r</Display>
    )
}

const animation = keyframes`
0%{opacity: 1; transform: translate(0, 0); }
5%{opacity: 1; transform: scaleY(0.5) translate(0, 10px); }
10%{opacity: 1; transform: scaleY(1);}
15%{opacity: 1; transform: translate(0, 0); }
100%{opacity: 1; transform: translate(0, 0);}
`

const Display = styled.span`
    display: inline-block;
    color: black;
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 5s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    font-weight: bold;
`
