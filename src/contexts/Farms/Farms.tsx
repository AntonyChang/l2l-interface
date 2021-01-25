import React, { useCallback, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'
import useL2l from '../../hooks/useL2l'

import { bnToDec } from '../../utils'
import { getMasterChefContract, getEarned } from '../../l2l/utils'
import { getFarms } from '../../l2l/utils'

import Context from './context'
import { Farm } from './types'

const Farms: React.FC = ({ children }) => {
  const [unharvested, setUnharvested] = useState(0)

  const l2l = useL2l()
  const { account } = useWallet()

  const farms = getFarms(l2l)

  return (
    <Context.Provider
      value={{
        farms,
        unharvested,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Farms
