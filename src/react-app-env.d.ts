/// <reference types="react-scripts" />

interface Window {
    ethereum?: {
        isMetaMask?: boolean
        isTrust?: boolean
        on?: (...args: any[]) => void
        removeListener?: (...args: any[]) => void
        autoRefreshOnNetworkChange?: boolean
        request: (...args: any[]) => Promise
    }
    web3?: {
        currentProvider?: any
    }
    Error: {
        message: string
        code: string
    }
}