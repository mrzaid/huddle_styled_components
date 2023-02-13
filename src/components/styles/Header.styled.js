import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  background-color: ${({ bg }) => bg};
  padding: 40px 0;
  h1 {
    color: red;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  } ;
`;
export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 40px 0 30px;
  } ;
`;
export const Image = styled.img`
  width: 375px;
  margin-left: 40px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;
