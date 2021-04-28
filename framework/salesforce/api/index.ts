import type { CommerceAPIConfig } from '@commerce/api'

import {
  CLIENT_ID,
  ORGANIZATION_ID,
  SITE_ID,
  SHORT_CODE,
} from '../const'

if (!CLIENT_ID) {
  throw new Error(
    `The environment variable NEXT_PUBLIC_SALESFORCE_CLIENT_ID is missing and it's required to access your store`
  )
}

if (!ORGANIZATION_ID) {
  throw new Error(
    `The environment variable NEXT_PUBLIC_SALESFORCE_ORGANIZATION_ID is missing and it's required to access your store`
  )
}

if (!SHORT_CODE) {
  throw new Error(
    `The environment variable NEXT_PUBLIC_SALESFORCE_SHORT_CODE is missing and it's required to access your store`
  )
}

if (!SITE_ID) {
  throw new Error(
    `The environment variable NEXT_PUBLIC_SALESFORCE_SITE_ID is missing and it's required to access your store`
  )
}

export interface SalesforceConfig extends CommerceAPIConfig {}

export class Config {
  private config: SalesforceConfig

  constructor(config: SalesforceConfig) {
    this.config = config
  }

  getConfig(userConfig: Partial<SalesforceConfig> = {}) {
    return Object.entries(userConfig).reduce<SalesforceConfig>(
      (cfg, [key, value]) => Object.assign(cfg, { [key]: value }),
      { ...this.config }
    )
  }

  setConfig(newConfig: Partial<SalesforceConfig>) {
    Object.assign(this.config, newConfig)
  }
}
