import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getStaked, getMasterChefContract } from '../l2l/utils'
import useL2l from './useL2l'
import useBlock from './useBlock'

const useStakedBalance = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account }: { account: string } = useWallet()
  const l2l = useL2l()
  const masterChefContract = getMasterChefContract(l2l)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getStaked(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, pid, l2l])

  useEffect(() => {
    if (account && l2l) {
      fetchBalance()
    }
  }, [account, pid, setBalance, block, l2l])

  return balance
}

export default useStakedBalance
