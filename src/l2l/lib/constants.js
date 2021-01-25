import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}



export const contractAddresses = {
  l2l: {
    1: '0x98c3CF2806068e2f7B7b8CCf40a9F6214c886821',
  },
  masterChef: {
    1: '0x23F7bE5A23c55286C1f8729a55b2eC612D51eC10',
  },
  weth: {
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
  xL2l: {
    1: '0xBAc80e80E95C615Dd8B588a5952F64e89fb48cdc'
  }
}


export const supportedPools = [
  // Perm Menu
  {
    pid: 0,
    lpAddresses: {
      1: '0xac5846f156c3c64648c50a9eca35d6cdcd2094f8',
    },
    tokenAddresses: {
      1: '0x98c3CF2806068e2f7B7b8CCf40a9F6214c886821',
    },
    name: 'L2l Party!',
    symbol: 'L2L-V2-ETH SLP',
    tokenSymbol: 'L2L',
    icon: '💰',
  }
  
]
