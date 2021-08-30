interface AuthResponse {
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

interface Card {
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
    posticalCode?: string;
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

enum ChargeTypeEnum {
  ConventionFees,
  GiftShop,
  Golf,
  HealthClub,
  Hotel,
  Restaurant,
  Salon,
  Tennis,
}

enum SpecialProgramEnum {
  AdvanceDeposit,
  AssuredReservation,
  DelayedCharge,
  ExpressService,
  NormalCharge,
  NoShowCharge,
}

type Lodging = {
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

type Restaurant = {
  beverageAmount?: number;
  serverID?: string;
  taxAmount?: number;
  foodAmount?: number;
  tipAmount?: number;
};
type DeviceInfo = {
  id: string;
  macAddress?: string;
  encrypted?: boolean;
  ipAddress?: string;
  longitude?: string;
  phoneNumber?: string;
  latitude?: string;
  type?: string;
};
type PaymentContext = {
  mobile: boolean;
  isEcommerce: boolean;
  tax?: number;
  deviceInfo?: DeviceInfo;
  recurring?: boolean;
  restaurant?: Restaurant;
  lodging: Lodging;
};
enum RefundTypeEnum {
  REFUND,
  VOID,
}

enum RefundChargeStatusEnum {
  ISSUED,
  DECLINED,
  SETTLED,
  VOIDED,
  SUCCEEDED,
}

enum ChargeStatusEnum {
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
interface Refund {
  id: string;
  description?: string;
  amount?: number;
  context?: PaymentContext;
  readonly status: RefundChargeStatusEnum;
  readonly created: string;
  type: RefundTypeEnum;
}

interface Charge {
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

interface Capture {
  amount: number;
  description?: string;
  context: PaymentContext;
}

enum RefundStatusEnum {
  ISSUED,
  DECLINED,
}

interface VoidObject {
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
