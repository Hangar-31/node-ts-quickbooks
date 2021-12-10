export interface AuthResponse {
  token_type: string;
  expires_in: number;
  refresh_token: string;
  x_refresh_token_expires_in: number;
  access_token: string;
}
enum CardType {
  VISA,
  MC,
  AMEX,
  DISC,
  DINERS,
  JCB,
}
export interface Card {
  readonly id: string;
  number: string;
  expMonth: string;
  expYear: string;
  cvc: string;
  readonly updated?: string;
  readonly cardType: CardType;
  name?: string;
  default?: boolean;
  commercialCardCode?: string;
  address?: {
    city?: string;
    streetAddress?: string;
    country?: string;
    postalCode?: string;
    region?: string;
  };
  isBusiness: boolean;
  readonly isLevel3Eligible: boolean;
  readonly created: string;
  entityType?: string;
  entityId?: string;
  readonly zeroDollarVerification: {
    readonly transactionId?: string;
    readonly type?: string;
    status?: string;
  };
}

export enum ChargeTypeEnum {
  ConventionFees,
  GiftShop,
  Golf,
  HealthClub,
  Hotel,
  Restaurant,
  Salon,
  Tennis,
}

export enum SpecialProgramEnum {
  AdvanceDeposit,
  AssuredReservation,
  DelayedCharge,
  ExpressService,
  NormalCharge,
  NoShowCharge,
}

export type Lodging = {
  lengthOfStay?: number;
  checkInDate?: Date;
  roomRate?: number;
  specialProgram?: SpecialProgramEnum;
  chargeType?: ChargeTypeEnum;
  folioID?: string;
  extraCharges?: string[];
  checkOutDate?: Date;
  totalAuthAmount?: number;
};

export type Restaurant = {
  beverageAmount?: number;
  serverID?: string;
  taxAmount?: number;
  foodAmount?: number;
  tipAmount?: number;
};
export type DeviceInfo = {
  id: string;
  macAddress?: string;
  encrypted?: boolean;
  ipAddress?: string;
  longitude?: string;
  phoneNumber?: string;
  latitude?: string;
  type?: string;
};
export type PaymentContext = {
  mobile: boolean;
  isEcommerce: boolean;
  tax?: number;
  deviceInfo?: DeviceInfo;
  recurring?: boolean;
  restaurant?: Restaurant;
  lodging?: Lodging;
};

export enum RefundTypeEnum {
  REFUND,
  VOID,
}

export enum RefundChargeStatusEnum {
  ISSUED,
  DECLINED,
  SETTLED,
  VOIDED,
  SUCCEEDED,
}

export enum ChargeStatusEnum {
  AUTHORIZED,
  DECLINED,
  CAPTURED,
  CANCELLED,
  SETTLED,
  REFUNDED,
}
enum ValidationEnum {
  Pass,
  Fail,
  NotAvailable,
}
export interface Refund {
  id: string;
  description?: string;
  amount?: number;
  context?: PaymentContext;
  readonly status: RefundChargeStatusEnum;
  readonly created: string;
  type: RefundTypeEnum;
}
export interface Charge {
  id: string;
  currency: string;
  amount: number;
  context: PaymentContext;
  card?: Card;
  capture?: boolean;
  description?: string;
  authCode?: string;
  token?: string;
  refundDetail?: Refund[];
  readonly status: ChargeStatusEnum;
  readonly created: string;
  readonly captureDetail: {
    amount: number;
    description?: string;
    context?: PaymentContext;
    readonly created: string;
  };
  readonly avsZip: ValidationEnum;
  readonly cardSecurityCodeMatch: ValidationEnum;
  readonly avsStreet: ValidationEnum;
}
export interface Capture {
  amount: number;
  description?: string;
  context: PaymentContext;
}

export enum RefundStatusEnum {
  ISSUED,
  DECLINED,
}
export interface VoidObject {
  readonly id: string;
  readonly status: RefundStatusEnum;
  readonly created: Date;
  amount: number;
  context: {
    mobile: boolean;
    reoccuring: boolean;
  };
  type: 'VOID';
}
