import {useCallback} from 'react'

import useL2l from './useL2l'
import {useWallet} from 'use-wallet'
import {provider} from 'web3-core'
import {
  approve,
  getL2lContract,
  getXL2lStakingContract
} from '../l2l/utils'

const useApproveStaking = () => {
  const {account}: { account: string; ethereum: provider } = useWallet()
  const l2l = useL2l()
  const lpContract = getL2lContract(l2l)
  const contract = getXL2lStakingContract(l2l)

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, contract, account)
      return tx
    } catch (e) {
      return false
    }
  }, [account, lpContract, contract])

  return {onApprove: handleApprove}
}

export default useApproveStaking
