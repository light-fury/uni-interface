import { Connector } from '@web3-react/types'
import {
  coinbaseWallet,
  coinbaseWalletHooks,
  ConnectionType,
  fortmatic,
  fortmaticHooks,
  gnosisSafe,
  gnosisSafeHooks,
  infura,
  infuraHooks,
  injected,
  injectedHooks,
  walletConnect,
  walletConnectHooks,
} from 'connectors'

export function getConnectionTypeForConnector(connector: Connector) {
  switch (connector) {
    case injected:
      return ConnectionType.INJECTED
    case coinbaseWallet:
      return ConnectionType.COINBASE_WALLET
    case walletConnect:
      return ConnectionType.WALLET_CONNECT
    case fortmatic:
      return ConnectionType.FORTMATIC
    case infura:
      return ConnectionType.INFURA
    case gnosisSafe:
      return ConnectionType.GNOSIS_SAFE
    default:
      throw Error('unsupported connector')
  }
}

export function getConnectorForConnectionType(connectionType: ConnectionType) {
  switch (connectionType) {
    case ConnectionType.INJECTED:
      return injected
    case ConnectionType.COINBASE_WALLET:
      return coinbaseWallet
    case ConnectionType.WALLET_CONNECT:
      return walletConnect
    case ConnectionType.FORTMATIC:
      return fortmatic
    case ConnectionType.INFURA:
      return infura
    case ConnectionType.GNOSIS_SAFE:
      return gnosisSafe
  }
}

export function getHooksForConnectionType(connectionType: ConnectionType) {
  switch (connectionType) {
    case ConnectionType.INJECTED:
      return injectedHooks
    case ConnectionType.COINBASE_WALLET:
      return coinbaseWalletHooks
    case ConnectionType.WALLET_CONNECT:
      return walletConnectHooks
    case ConnectionType.FORTMATIC:
      return fortmaticHooks
    case ConnectionType.INFURA:
      return infuraHooks
    case ConnectionType.GNOSIS_SAFE:
      return gnosisSafeHooks
  }
}
