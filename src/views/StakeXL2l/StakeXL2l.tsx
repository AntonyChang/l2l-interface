import React, {useEffect, useMemo, useState} from 'react'
import styled from 'styled-components'
import {useWallet} from 'use-wallet'
import {provider} from 'web3-core'
import Spacer from '../../components/Spacer'
import useL2l from '../../hooks/useL2l'
import {getContract} from '../../utils/erc20'
import UnstakeXL2l from './components/UnstakeXL2l'
import StakeL2l from "./components/StakeL2l";

import {contractAddresses} from '../../l2l/lib/constants'
import {getXL2lSupply} from "../../l2l/utils";
import BigNumber from "bignumber.js";
import {getBalanceNumber} from "../../utils/formatBalance";

const StakeXL2l: React.FC = () => {
  const {
    tokenAddress,
  } = {
    tokenAddress: contractAddresses.xL2l[1],
  }

  const [totalSupply, setTotalSupply] = useState<BigNumber>()

  const l2l = useL2l()
  const {ethereum} = useWallet()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    async function fetchTotalSupply() {
      const supply = await getXL2lSupply(l2l)
      setTotalSupply(supply)
    }
    if (l2l) {
      fetchTotalSupply()
    }
  }, [l2l, setTotalSupply])



  const lpContract = useMemo(() => {
    debugger
    return getContract(ethereum as provider, tokenAddress)
  }, [ethereum, tokenAddress])

  return (
    <>
      <StyledFarm>
        <StyledCardsWrapper>
          <StyledCardWrapper>
            <UnstakeXL2l
              lpContract={lpContract}
            />
          </StyledCardWrapper>
          <Spacer/>
          <StyledCardWrapper>
            <StakeL2l
            />
          </StyledCardWrapper>
        </StyledCardsWrapper>
        <Spacer size="lg"/>
        <StyledCardsWrapper>
          <StyledCardWrapper>
            <StyledInfo>
              ℹ️️ You will earn a portion of the swaps fees based on the amount
              of xL2l held relative the weight of the staking. xL2l can be minted
              by staking L2l. To redeem L2l staked plus swap fees convert xL2l
              back to L2l. {totalSupply ? `There are currently ${getBalanceNumber(totalSupply)} xL2L in existence.` : '' }
            </StyledInfo>
          </StyledCardWrapper>
        </StyledCardsWrapper>
        <Spacer size="lg"/>
      </StyledFarm>
    </>
  )
}

const StyledFarm = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const StyledCardsWrapper = styled.div`
  display: flex;
  width: 600px;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`

const StyledCardWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 80%;
  }
`

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[400]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
`

export default StakeXL2l
