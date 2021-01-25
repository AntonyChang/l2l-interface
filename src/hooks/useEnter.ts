import {useCallback} from 'react'

import useL2l from './useL2l'
import {useWallet} from 'use-wallet'

import {enter, getXL2lStakingContract} from '../l2l/utils'

const useEnter = () => {
  const {account} = useWallet()
  const l2l = useL2l()

  const handle = useCallback(
    async (amount: string) => {
      const txHash = await enter(
        getXL2lStakingContract(l2l),
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, l2l],
  )

  return {onEnter: handle}
}

export default useEnter
