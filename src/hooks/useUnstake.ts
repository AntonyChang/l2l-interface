import { useCallback } from 'react'

import useL2l from './useL2l'
import { useWallet } from 'use-wallet'

import { unstake, getMasterChefContract } from '../l2l/utils'

const useUnstake = (pid: number) => {
  const { account } = useWallet()
  const l2l = useL2l()
  const masterChefContract = getMasterChefContract(l2l)

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(masterChefContract, pid, amount, account)
      console.log(txHash)
    },
    [account, pid, l2l],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
