import { dRpcUrl } from './rpc'

export default {
  name: 'arbitrum',
  rpc: dRpcUrl('arbitrum'),
  coingecko: {
    platformId: 'arbitrum-one',
  },
  trustWalletNetwork: 'ethereum',
  addresses: {
    multicaller: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
  },
}
