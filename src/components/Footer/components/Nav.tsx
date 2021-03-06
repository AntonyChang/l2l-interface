import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href="https://etherscan.io/address/0x23F7bE5A23c55286C1f8729a55b2eC612D51eC10#code"
      >
        MasterChef Contract
      </StyledLink>
      {/*<StyledLink
        target="_blank"
        href="https://uniswap.info/pair/0xce84867c3c02b05dc570d0135103d3fb9cc19433"
      >
        L2lSwap L2L-ETH
      </StyledLink> */}
      <StyledLink target="_blank" href="https://facebook.com/2local2">
        Facebook
      </StyledLink>
      <StyledLink target="_blank" href="https://github.com/2local/Token/tree/master">
        Github
      </StyledLink>
      <StyledLink target="_blank" href="https://twitter.com/2local1">
        Twitter
      </StyledLink>
      <StyledLink target="_blank" href="https://vk.com/2local">
       VK
      </StyledLink>
      <StyledLink target="_blank" href="https://reddit.com/r/2local_1">
       Reddit
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

export default Nav
