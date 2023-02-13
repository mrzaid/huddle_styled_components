import styled from "styled-components";

// export const StyledHeader = styled.header`
// background-color: ${(props)=>props.bg)}
// background-color: ${({bg})=>bg)}
// padding: 40px 0;
// h1{
//     color:red
// }

// `;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile});
`;
export const Logo = styled.img``;
