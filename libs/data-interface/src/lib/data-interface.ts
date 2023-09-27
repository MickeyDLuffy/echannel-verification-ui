export interface KeycloakConfigModel {
  issuer: string;
  url: string;
  realm: string;
  authTokenEndpoint?: string;
  clientId: string;
  client_secret?: string;
  scope: string;
  dummyClientSecret?: string;
  responseType?: string;
  showDebugInformation?: boolean;
}
export interface AppConfigModel {
  production: boolean;
  baseUrl: string;
  keyCloakConfig: KeycloakConfigModel;
}

export interface EchannelVerificationModel {
  created_on: Date | string;
  business_key: string;
  priority: string;
  source_bu: string;
  dcp_reference: string;
  account_name: string;
  transaction_currency: string;
  transaction_amount: number;
  locked_by: string;
  debit_account_number: string;
  account_currency: string;
  beneficiary_name: string;
  cust_info_mkr: string;
  account_info_mkr: string;
  outcome: string;
  extension: string;
  contact_person: string;
  customer_called_on: string;
  comment: string;
}
