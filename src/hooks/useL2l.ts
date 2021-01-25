import { useContext } from 'react'
import { Context } from '../contexts/L2lProvider'

const useL2l = () => {
  const { l2l } = useContext(Context)
  return l2l
}

export default useL2l
