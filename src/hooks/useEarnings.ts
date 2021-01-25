import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract } from '../l2l/utils'
import useL2l from './useL2l'
import useBlock from './useBlock'

const useEarnings = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet()
  const l2l = useL2l()
  const masterChefContract = getMasterChefContract(l2l)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getEarned(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, masterChefContract, l2l])

  useEffect(() => {
    if (account && masterChefContract && l2l) {
      fetchBalance()
    }
  }, [account, block, masterChefContract, setBalance, l2l])

  return balance
}

export default useEarnings
