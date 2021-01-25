import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract, getFarms } from '../l2l/utils'
import useL2l from './useL2l'
import useBlock from './useBlock'

const useAllEarnings = () => {
  const [balances, setBalance] = useState([] as Array<BigNumber>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const l2l = useL2l()
  const farms = getFarms(l2l)
  const masterChefContract = getMasterChefContract(l2l)
  const block = useBlock()

  const fetchAllBalances = useCallback(async () => {
    const balances: Array<BigNumber> = await Promise.all(
      farms.map(({ pid }: { pid: number }) =>
        getEarned(masterChefContract, pid, account),
      ),
    )
    setBalance(balances)
  }, [account, masterChefContract, l2l])

  useEffect(() => {
    if (account && masterChefContract && l2l) {
      fetchAllBalances()
    }
  }, [account, block, masterChefContract, setBalance, l2l])

  return balances
}

export default useAllEarnings
