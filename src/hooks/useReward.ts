import { useCallback } from 'react'

import useL2l from './useL2l'
import { useWallet } from 'use-wallet'

import { harvest, getMasterChefContract } from '../l2l/utils'

const useReward = (pid: number) => {
  const { account } = useWallet()
  const l2l = useL2l()
  const masterChefContract = getMasterChefContract(l2l)

  const handleReward = useCallback(async () => {
    const txHash = await harvest(masterChefContract, pid, account)
    console.log(txHash)
    return txHash
  }, [account, pid, l2l])

  return { onReward: handleReward }
}

export default useReward
