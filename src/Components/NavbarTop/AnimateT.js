import React from "react";
import styled, { keyframes } from "styled-components";

export const AnimateT = () =>{
    return(
        <Display>t</Display>
    )
}

const animation = keyframes`
0%{opacity: 1; transform: translate(10px, -30px); }
5%{opacity: 1; transform: translate(10px, -5px); }
10%{opacity: 1; transform: translate(0, -15px) skew(0, -45deg) rotate(-45deg); }
15%{opacity: 1; transform: translate(-5px, 15px) rotate(-90deg); }
20%{opacity: 1; transform: translate(-5px, 15px) rotate(-90deg); }
25%{opacity: 1; transform: translate(0, 0) skew(-45deg, 45deg);}
30%{opacity: 1; transform: translate(0, 0);}
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
