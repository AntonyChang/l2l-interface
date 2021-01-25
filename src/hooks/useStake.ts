import { useCallback } from 'react'

import useL2l from './useL2l'
import { useWallet } from 'use-wallet'

import { stake, getMasterChefContract } from '../l2l/utils'

const useStake = (pid: number) => {
  const { account } = useWallet()
  const l2l = useL2l()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(
        getMasterChefContract(l2l),
        pid,
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, pid, l2l],
  )

  return { onStake: handleStake }
}

export default useStake
