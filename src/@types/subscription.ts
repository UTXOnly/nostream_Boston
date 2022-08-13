import { Pubkey } from './base'
import { EventId } from './event'

export type SubscriptionId = string

export interface SubscriptionFilter {
  ids?: EventId[]
  kinds?: number[]
  since?: number
  until?: number
  authors?: Pubkey[]
  limit?: number
  [key: `#${string}`]: string[]
}