import styled  from "styled-components";

export const StyledCard=styled.div<{layout}>`
display: flex;
align-items: center;
background-color: white;
border-radius: 15px;
box-shadow: 0 0 10px rgba(0,0,0,0.15);
margin: 40px 0;
padding:60px;
flex-direction: ${({layout})=>layout || 'row'};

img{
    width: 80% ;
}
&>div{
    flex: 1;
}

@media screen(max-width:${({theme})theme.breakpoints.mobile}) {
    flex-direction:column;
}


`