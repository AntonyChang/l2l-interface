import React, { createContext, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'

import { L2l } from '../../l2l'

export interface L2lContext {
  l2l?: typeof L2l
}

export const Context = createContext<L2lContext>({
  l2l: undefined,
})

declare global {
  interface Window {
    l2lsauce: any
  }
}

const L2lProvider: React.FC = ({ children }) => {
  const { ethereum }: { ethereum: any } = useWallet()
  const [l2l, setL2l] = useState<any>()

  // @ts-ignore
  window.l2l = l2l
  // @ts-ignore


  useEffect(() => {
    if (ethereum) {
      const chainId = Number(ethereum.chainId)
      const l2lLib = new L2l(ethereum, chainId, false, {
        defaultAccount: ethereum.selectedAddress,
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '6000000',
        defaultGasPrice: '1000000000000',
        accounts: [],
        ethereumNodeTimeout: 10000,
      })
      setL2l(l2lLib)
      window.l2lsauce = l2lLib
    }
  }, [ethereum])

  return <Context.Provider value={{ l2l }}>{children}</Context.Provider>
}

export default L2lProvider
