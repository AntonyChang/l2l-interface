import { useCallback } from 'react'

import useL2l from './useL2l'
import { useWallet } from 'use-wallet'
import { provider } from 'web3-core'
import { Contract } from 'web3-eth-contract'

import { approve, getMasterChefContract } from '../l2l/utils'

const useApprove = (lpContract: Contract) => {
  const { account }: { account: string; ethereum: provider } = useWallet()
  const l2l = useL2l()
  const masterChefContract = getMasterChefContract(l2l)

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, masterChefContract, account)
      return tx
    } catch (e) {
      return false
    }
  }, [account, lpContract, masterChefContract])

  return { onApprove: handleApprove }
}

export default useApprove
