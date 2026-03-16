import { createContext } from 'react'
import type { NftsContextType } from './types'

// Context для хранения и управление NFT в любом месте
export const NftsContext = createContext<NftsContextType | null>(null)
