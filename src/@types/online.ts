export interface Account {
  Id: string;
  SyncToken: number;
  MetaData: MetaData;
  HasAttachment: string;
  Name: string;
  Description: string;
  readonly FullyQualifiedName: string;
  SubAccount: string;
  ParentRef: BaseReference;
  Active: string;
  Classification: string;
  AccountType: string;
  AccountSubType: string;
  AcctNum: string;
  BankNum: string;
  CurrentBalance: number;
  CurrentBalanceWithSubAccounts: number;
  OpeningBalance: number;
  OpeningBalanceDate: Date;
  CurrencyRef: BaseReference;
  TaxAccount: string;
  TaxCodeRef: BaseReference;
}

export interface AccountBasedExpenseLineDetail {
  CustomerRef: BaseReference;
  ClassRef: BaseReference;
  AccountRef: BaseReference;
  BillableStatus: string;
  UnitPrice: number;
  TaxCodeRef: BaseReference;
}

export interface BatchItemRequest {
  operation: string;
  bId: string;
  Account: Account;
  BillPayment: BillPayment;
  Bill: Bill;
  CreditMemo: CreditMemo;
  Customer: Customer;
  Invoice: Invoice;
  Item: Item;
  JournalEntry: JournalEntry;
  Payment: Payment;
  PurchaseOrder: PurchaseOrder;
  Purchase: Purchase;
  RefundReceipt: RefundReceipt;
  SalesReceipt: SalesReceipt;
  DateActivity: DateActivity;
  Vendor: Vendor;
  BatchItemRequest: BatchItemResponse[];
}

export interface BaseReference {
  name: string;
  content: string;
  type: string;
}

export interface BatchItemResponse {
  bId: string;
  Fault: Fault;
  Account: Account;
  BillPayment: BillPayment;
  Bill: Bill;
  CreditMemo: CreditMemo;
  Customer: Customer;
  Invoice: Invoice;
  Item: Item;
  JournalEntry: JournalEntry;
  Payment: Payment;
  PurchaseOrder: PurchaseOrder;
  Purchase: Purchase;
  RefundReceipt: RefundReceipt;
  SalesReceipt: SalesReceipt;
  DateActivity: DateActivity;
  Vendor: Vendor;
  BatchItemResponse: BatchItemResponse[];
}

export interface Bill {
  Id: string;
  SyncToken: number;
  MetaData: MetaData;
  DocNumber: string;
  TxnDate: Date;
  DepartmentRef: BaseReference;
  Line: BillLineItem;
  TxnTaxDetail: TransactionTaxDetail;
  PrivateNote: string;
  LinkedTxn: LinkedTransaction;
  VendorRef: BaseReference;
  PayerRef: BaseReference;
  SalesTermRef: BaseReference;
  AttachableRef: BaseReference;
  APAccountRef: BaseReference;
  DueDate: Date;
  RemitToAddr: PhysicalAddress;
  ShipAddr: PhysicalAddress;
  ExchangeRate: ExchangeRate;
  Balance: number;
  BillEmail: EmailAddress;
  ReplyEmail: EmailAddress;
  TotalAmt: number;
  CurrencyRef: BaseReference;
}
export interface ExchangeRate {
  Id: string;
  SyncToken: number;
  MetaData: MetaData;
  CustomField: CustomField;
  SourceCurrencyCode: string;
  TargetCurrencyCode: string;
  Rate: number;
  AsOfDate: Date;
}

export interface BillPayment {
  Id: string;
  SyncToken: number;
  MetaData: MetaData;
  DocNumber: string;
  TxnDate: Date;
  Line: BillPaymentLineItem;
  PrivateNote: string;
  VendorRef: BaseReference;
  DepartmentRef: BaseReference;
  CurrencyRef: BaseReference;
  ExchangeRate: ExchangeRate;
  APAccountRef: BaseReference;
  PayType: string;
  ProcessBillPayment: string;
  CheckPayment: BillPaymentCheck;
  CreditCardPayment: BillPaymentCreditCard;
  TotalAmt: number;
}

export interface BillLineItem {
  Id: string;
  LineNum: number;
  Description: string;
  Amount: number;
  DetailType: string;
  AccountBasedExpenseLineDetail: AccountBasedExpenseLineDetail;
  ItemBasedExpenseLineDetail: ItemBasedExpenseLineDetail;
}

export interface Attachable {
  Id: string;
  SyncToken: number;
  MetaData: MetaData;
}

export interface BillPaymentCreditCard {
  CCAccountRef: BaseReference;
  CCDetail: CreditCardPayment;
}

export interface BillPaymentCheck {
  BankAccountRef: BaseReference;
  PrintStatus: string;
  CheckDetail: CheckPayment;
  PayeeAddr: PhysicalAddress;
}

export interface BillPaymentLineItem {
  Id: string;
  LineNum: number;
  Description: string;
  Amount: number;
  DetailType: string;
  LinkedTxn: LinkedTransaction;
}

export interface Budget {
  Id: string;
  Name: string;
  BudgetType: string;
  BudgetEntryType: string;
  StartDate: string;
  EndDate: string;
  Active: string;
  SyncToken: number;
  MetaData: MetaData;
  BudgetDetail: BudgetLineItem;
}

export interface BudgetLineItem {
  BudgetDate: Date;
  Amount: string;
  AccountRef: BaseReference;
  CustomerRef: BaseReference;
  ClassRef: BaseReference;
  DepartmentRef: BaseReference;
}

export interface CheckPayment {
  CheckNum: string;
  Status: string;
  NameOnAcct: string;
  AcctNum: string;
  BankName: string;
}

export interface Class {
  Id: string;
  SyncToken: number;
  MetaData: MetaData;
  Name: string;
  SubClass: string;
  ParentRef: BaseReference;
  readonly FullyQualifiedName: string;
  Active: string;
}

export interface CompanyCurrency {
  Id: string;
  SyncToken: number;
  MetaData: MetaData;
  Name: string;
  Code: string;
  Active: string;
}

export interface CompanyInfo {
  Id: string;
  SyncToken: number;
  MetaData: MetaData;
  CompanyName: string;
  LegalName: string;
  CompanyAddr: PhysicalAddress;
  CustomerCommunicationAddr: PhysicalAddress;
  LegalAddr: PhysicalAddress;
  PrimaryPhone: TelephoneNumber;
  CompanyStartDate: Date;
  EmployerId: string;
  FiscalYearStartMonth: string;
  Country: string;
  Email: EmailAddress;
  WebAddr: WebSiteAddress;
  SupportedLanguages: string;
  NameValue: NameValue;
}

export interface CreditCardPayment {
  Number: string;
  Type: string;
  NameOnAcct: string;
  CcExpiryMonth: number;
  CcExpiryYear: number;
  BillAddrStreet: string;
  PostalCode: string;
  CommercialCardCode: string;
  CCTxnMode: string;
  CCTxnType: string;
  PrevCCTransId: string;
}

export interface CreditMemo {
  Id: string;
  SyncToken: number;
  MetaData: MetaData;
  AutoDocNumber: string;
  DocNumber: string;
  TxnDate: Date;
  DepartmentRef: BaseReference;
  Line: Line;
  TxnTaxDetail: TransactionTaxDetail;
  PrivateNote: string;
  CustomField: CustomField;
  CustomerRef: BaseReference;
  CustomerMemo: string;
  BillEmail: EmailAddress;
  BillAddr: PhysicalAddress;
  SalesTermRef: BaseReference;
  DepositToAccountRef: BaseReference;
  PaymentMethodRef: BaseReference;
  CurrencyRef: BaseReference;
  ExchangeRate: ExchangeRate;
  ShipAddr: PhysicalAddress;
  ClassRef: BaseReference;
  HomeTotalAmt: number;
  ApplyTaxAfterDiscount: string;
  PrintStatus: string;
  EmailStatus: string;
  Balance: number;
  RemainingCredit: number;
  TotalAmt: number;
}

export interface Customer {
  Id: string;
  SyncToken: number;
  MetaData: MetaData;
  Title: string;
  GivenName: string;
  MiddleName: string;
  FamilyName: string;
  CompanyName: string;
  DisplayName: string;
  PrintOnCheckName: string;
  Active: string;
  PrimaryPhone: TelephoneNumber;
  AlternatePhone: TelephoneNumber;
  Mobile: TelephoneNumber;
  Fax: TelephoneNumber;
  PrimaryEmailAddr: EmailAddress;
  WebAddr: WebSiteAddress;
  BillAddr: PhysicalAddress;
  ShipAddr: PhysicalAddress;
  Job: string;
  BillWithParent: string;
  ParentRef: BaseReference;
  Level: string;
  SalesTermRef: BaseReference;
  PaymentMethodRef: BaseReference;
  Balance: number;
  OpenBalanceDate: Date;
  BalanceWithJobs: number;
  PreferredDeliveryMethod: string;
  ResaleNum: string;
  Suffix: string;
  FullyQualifiedName: string;
  Taxable: string;
  DefaultTaxCodeRef: BaseReference;
  Notes: string;
  CurrencyRef: BaseReference;
  TaxExemptionReasonId: string;
  PrimaryTaxIdentifier: string;
  CustomerTypeRef: BaseReference;
  IsProject: string;
}

export interface CustomField {
  DefinitionId: number;
  Name: string;
  Type: string;
  StringValue: string;
  BooleanValue: string;
  DateValue: Date;
  NumberValue: number;
}

export interface CustomerType {
  Id: string;
  SyncToken: number;
  MetaData: MetaData;
  Name: string;
  Active: string;
}

export interface DeliveryInfo {
  DeliveryType: string;
  DeliveryDate: Date;
}

export interface Department {
  Id: string;
  SyncToken: number;
  MetaData: MetaData;
  Name: string;
  SubDepartment: string;
  ParentRef: BaseReference;
  readonly FullyQualifiedName: string;
  Active: string;
}

export interface Deposit {
  Id: number;
  SyncToken: number;
  MetaData: MetaData;
  CustomField: CustomField;
  AutoDocNumber: string;
  DocNumber: string;
  TxnDate: Date;
  DepartmentRef: BaseReference;
  CurrencyRef: BaseReference;
  ExchangeRate: ExchangeRate;
  PrivateNote: string;
  TxnStatus: string;
  Line: DepositLineItem;
  TxnTaxDetail: TransactionTaxDetail;
  DepositToAccountRef: BaseReference;
  TotalAmt: number;
}

export interface DepositLineDetail {
  Entity: BaseReference;
  ClassRef: BaseReference;
  AccountRef: BaseReference;
  PaymentMethodRef: BaseReference;
  CheckNum: string;
  TxnType: string;
  CustomField: CustomField;
}

export interface DepositLineItem {
  Id: string;
  LineNum: number;
  Description: string;
  Amount: number;
  LinkedTxn: LinkedTransaction;
  DetailType: string;
  DepositLineDetail: DepositLineDetail;
  CustomField: CustomField;
}

export interface DiscountLineDetail {
  DiscountRef: BaseReference;
  PercentBased: string;
  DiscountPercent: number;
  DiscountAccountRef: BaseReference;
  ClassRef: BaseReference;
  TaxCodeRef: BaseReference;
}

export interface DiscountOverride {
  DiscountRef: BaseReference;
  PercentBased: string;
  DiscountPercent: number;
  DiscountAccountRef: BaseReference;
}

export interface EffectiveTaxRate {
  RateValue: string;
  EffectiveDate: Date;
  EndDate: Date;
}

export interface Employee {
  Id: string;
  SyncToken: number;
  MetaData: MetaData;
  Organization: string;
  Title: string;
  GivenName: string;
  MiddleName: string;
  FamilyName: string;
  Suffix: string;
  DisplayName: string;
  PrintOnCheckName: string;
  Active: string;
  PrimaryPhone: TelephoneNumber;
  Mobile: TelephoneNumber;
  PrimaryEmailAddr: EmailAddress;
  EmployeeNumber: string;
  SSN: string;
  PrimaryAddr: PhysicalAddress;
  BillableDate: string;
  BillRate: number;
  BirthDate: Date;
  Gender: string;
  HiredDate: Date;
  ReleasedDate: Date;
}

export interface EmailAddress {
  Address: string;
}

export interface Entity {
  Type: string;
}

export interface Estimate {
  Id: string;
  SyncToken: number;
  MetaData: MetaData;
  CustomField: CustomField;
  DocNumber: string;
  TxnDate: Date;
  PrivateNote: string;
  DepartmentRef: BaseReference;
  LinkedTxn: LinkedTransaction;
  Line: InvoiceLineItem;
  TxnTaxDetail: TransactionTaxDetail;
  TxnStatus: string;
  CustomerRef: BaseReference;
  CustomerMemo: string;
  BillAddr: PhysicalAddress;
  ShipAddr: PhysicalAddress;
  ClassRef: BaseReference;
  SalesTermRef: BaseReference;
  TotalAmt: number;
  ShipMethodRef: BaseReference;
  ShipDate: Date;
  CurrencyRef: BaseReference;
  ExchangeRate: ExchangeRate;
  DueDate: Date;
  DepositToAccountRef: BaseReference;
  ApplyTaxAfterDiscount: string;
  PrintStatus: string;
  EmailStatus: string;
  BillEmail: EmailAddress;
  ExpirationDate: Date;
  AcceptedBy: string;
  AcceptedDate: Date;
}

export interface Fault {
  code: string;
  element: string;
  Message: string;
  Detail: string;
}

export interface InvoiceGroupLineDetail {
  Id: string;
  GroupItemRef: BaseReference;
  Quantity: number;
  Line: InvoiceLineItem;
}

export interface DescriptionLineDetail {
  Id: string;
  GroupItemRef: BaseReference;
  Quantity: number;
  Line: InvoiceLineItem;
}

export interface Invoice {
  Id: string;
  SyncToken: number;
  MetaData: MetaData;
  CustomField: CustomField;
  AutoDocNumber: string;
  DocNumber: string;
  InvoiceLink: string;
  TxnDate: Date;
  CurrencyRef: BaseReference;
  ExchangeRate: ExchangeRate;
  PrivateNote: string;
  LinkedTxn: LinkedTransaction;
  Line: InvoiceLineItem;
  TxnTaxDetail: TransactionTaxDetail;
  CustomerRef: BaseReference;
  CustomerMemo: string;
  BillAddr: PhysicalAddress;
  ShipAddr: PhysicalAddress;
  address: PhysicalAddress;
  ClassRef: BaseReference;
  SalesTermRef: BaseReference;
  DueDate: Date;
  ShipMethodRef: BaseReference;
  ShipDate: Date;
  TrackingNum: string;
  ARAccountRef: BaseReference;
  TotalAmt: number;
  HomeTotalAmt: number;
  ApplyTaxAfterDiscount: string;
  PrintStatus: string;
  EmailStatus: string;
  Balance: number;
  HomeBalance: number;
  Deposit: number;
  DepartmentRef: BaseReference;
  AllowIPNPayment: string;
  DeliveryInfo: DeliveryInfo;
  BillEmail: EmailAddress;
  AllowOnlinePayment: string;
  AllowOnlineCreditCardPayment: string;
  AllowOnlineACHPayment: string;
  DepositToAccountRef: BaseReference;
  BillEmailCc: EmailAddress;
}

export interface InvoiceLineItem {
  Id: string;
  LineNum: number;
  Description: string;
  Amount: number;
  DetailType: string;
  SALES_LINE_ITEM_DETAIL: SalesItemLineDetail;
  SUB_TOTAL_LINE_DETAIL: SubTotalLineDetail;
  PAYMENT_LINE_DETAIL: PaymentLineDetail;
  DISCOUNT_LINE_DETAIL: DiscountLineDetail;
  INVOICE_GROUP_LINE_DETAIL: InvoiceGroupLineDetail;
  DESCRIPTION_LINE_DETAIL: DescriptionLineDetail;
}

export interface GroupLineDetail {
  Id: string;
  GroupItemRef: BaseReference;
  Quantity: number;
  Line: Line;
}

export interface ItemBasedExpenseLineDetail {
  ItemRef: BaseReference;
  ClassRef: BaseReference;
  UnitPrice: number;
  RatePercent: number;
  PriceLevelRef: BaseReference;
  MarkupInfo: MarkupInfo;
  Qty: number;
  TaxCodeRef: BaseReference;
  CustomerRef: BaseReference;
  BillableStatus: string;
}

export interface ItemGroupDetail {
  ItemGroupLine: ItemGroupLine;
}

export interface ItemGroupLine {
  ItemRef: BaseReference;
  Qty: string;
}

export interface Item {
  Id: string;
  SyncToken: number;
  MetaData: MetaData;
  Name: string;
  Sku: string;
  Description: string;
  Active: string;
  SubItem: string;
  ParentRef: number;
  Level: number;
  PrefVendorRef: BaseReference;
  TaxClassificationRef: BaseReference;
  ClassRef: BaseReference;
  FullyQualifiedName: string;
  Taxable: string;
  SalesTaxIncluded: string;
  UnitPrice: number;
  RatePercent: number;
  Type: string;
  IncomeAccountRef: BaseReference;
  PurchaseDesc: string;
  PurchaseTaxIncluded: string;
  PurchaseCost: number;
  ExpenseAccountRef: BaseReference;
  AssetAccountRef: BaseReference;
  TrackQtyOnHand: string;
  QtyOnHand: number;
  SalesTaxCodeRef: BaseReference;
  PurchaseTaxCodeRef: BaseReference;
  InvStartDate: Date;
  CustomField: CustomField;
  PrintGroupedItems: string;
  ItemGroupDetail: ItemGroupDetail;
}

export interface JournalEntryLineDetail {
  PostingType: string;
  Entity: Entity;
  AccountRef: BaseReference;
  ClassRef: BaseReference;
  DepartmentRef: BaseReference;
  TaxCodeRef: BaseReference;
  TaxApplicableOn: string;
  TaxAmount: number;
  BillableStatus: string;
}

export interface JournalEntry {
  Id: string;
  SyncToken: number;
  MetaData: MetaData;
  DocNumber: string;
  TxnDate: Date;
  ExchangeRate: ExchangeRate;
  PrivateNote: string;
  Line: Line;
  TxnTaxDetail: TransactionTaxDetail;
  CurrencyRef: BaseReference;
  TotalAmt: number;
  HomeTotalAmt: number;
  Adjustment: string;
}

export enum JournalCodeType {
  Expenses,
  Sales,
  Bank,
  Nouveaux,
  Wages,
  Cash,
  Others,
}

export interface JournalCode {
  Id: string;
  Name: string;
  SyncToken: number;
  Description: string;
  CustomField: CustomField;
  Type: JournalCodeType;
  MetaData: MetaData;
}

export interface LineEx {
  NameValue: NameValue;
}

export interface Line {
  Id: string;
  LineNum: number;
  Description: string;
  Amount: number;
  DetailType: string;
  LinkedTxn: LinkedTransaction;
  LineEx: LineEx;
  SalesItemLineDetail: SalesItemLineDetail;
  SubTotalLineDetail: SubTotalLineDetail;
  PaymentLineDetail: PaymentLineDetail;
  DiscountLineDetail: DiscountOverride;
  JournalEntryLineDetail: JournalEntryLineDetail;
  GroupLineDetail: GroupLineDetail;
}

export interface MarkupInfo {
  PercentBased: string;
  Value: number;
  Percent: number;
  PriceLevelRef: BaseReference;
}

export interface LinkedTransaction {
  TxnId: string;
  TxnType: string;
  TxnLineId: string;
}

export interface MetaData {
  CreateDate: Date;
  LastUpdatedDate: Date;
}

export interface OtherContactInfo {
  Type: string;
  Telephone: TelephoneNumber;
}

export interface NameValue {
  Name: string;
  Value: string;
}

export interface Payment {
  Id: string;
  SyncToken: number;
  MetaData: MetaData;
  TxnDate: Date;
  PrivateNote: string;
  TxnStatus: string;
  Line: Line;
  CustomerRef: BaseReference;
  ARAccountRef: BaseReference;
  DepositToAccountRef: BaseReference;
  PaymentMethodRef: BaseReference;
  PaymentRefNum: string;
  CreditCardPayment: CreditCardPayment;
  TotalAmt: number;
  UnappliedAmt: number;
  ProcessPayment: string;
  CurrencyRef: BaseReference;
  ExchangeRate: ExchangeRate;
}

export interface PaymentMethod {
  Id: string;
  SyncToken: number;
  MetaData: MetaData;
  Name: string;
  Type: string;
  Active: string;
  Amount: number;
}

export interface PaymentLineDetail {
  ItemRef: BaseReference;
  ClassRef: BaseReference;
  Balance: number;
  Discount: DiscountOverride;
}

export interface PhysicalAddress {
  Id: string;
  Line1: string;
  Line2: string;
  Line3: string;
  Line4: string;
  Line5: string;
  City: string;
  Country: string;
  CountrySubDivisionCode: string;
  PostalCode: string;
  Note: string;
  Lat: string;
  Long: string;
}

export interface Purchase {
  Id: string;
  SyncToken: number;
  MetaData: MetaData;
  DocNumber: string;
  TxnDate: Date;
  PrivateNote: string;
  Line: PurchaseLineItem;
  AccountRef: BaseReference;
  TxnTaxDetail: TransactionTaxDetail;
  PaymentType: string;
  EntityRef: BaseReference;
  RemitToAddr: PhysicalAddress;
  TotalAmt: number;
  PrintStatus: string;
  DepartmentRef: BaseReference;
  CurrencyRef: BaseReference;
  ExchangeRate: ExchangeRate;
  LinkedTxn: LinkedTransaction;
  Credit: string;
}

export interface PurchaseLineItem {
  Id: string;
  LineNum: number;
  Description: string;
  Amount: number;
  DetailType: string;
  Received: number;
  ACCOUNT_BASED_EXPENSE_LINE_DETAIL: AccountBasedExpenseLineDetail;
  ITEM_BASED_EXPENSE_LINE_DETAIL: ItemBasedExpenseLineDetail;
  GROUP_LINE_DETAIL: GroupLineDetail;
}

export interface PurchaseOrder {
  Id: string;
  SyncToken: number;
  MetaData: MetaData;
  DocNumber: string;
  TxnDate: Date;
  CustomField: CustomField;
  PrivateNote: string;
  Memo: string;
  LinkedTxn: LinkedTransaction;
  Line: PurchaseLineItem;
  AttachableRef: BaseReference;
  VendorRef: BaseReference;
  APAccountRef: BaseReference;
  POEmail: EmailAddress;
  ClassRef: BaseReference;
  SalesTermRef: BaseReference;
  TotalAmt: number;
  DueDate: Date;
  VendorAddr: PhysicalAddress;
  ShipAddr: PhysicalAddress;
  ShipMethodRef: BaseReference;
  POStatus: string;
  TxnTaxDetail: TransactionTaxDetail;
  CurrencyRef: BaseReference;
  ExchangeRate: ExchangeRate;
  TaxCodeRef: BaseReference;
}

export interface RefundReceipt {
  Id: string;
  SyncToken: number;
  MetaData: MetaData;
  AutoDocNumber: string;
  DocNumber: string;
  Line: Line;
  CustomerRef: BaseReference;
  DepartmentRef: BaseReference;
  BillEmail: EmailAddress;
  BillAddr: PhysicalAddress;
  ShipAddr: PhysicalAddress;
  PONumber: string;
  ShipMethodRef: string;
  ShipDate: Date;
  TrackingNum: string;
  PaymentMethodRef: BaseReference;
  PaymentRefNum: string;
  DepositToAccountRef: BaseReference;
  CustomerMemo: string;
  PrivateNote: string;
  TxnTaxDetail: TransactionTaxDetail;
  TxnDate: Date;
  CustomField: CustomField;
  CurrencyRef: BaseReference;
  ClassRef: BaseReference;
  ApplyTaxAfterDiscount: string;
  PrintStatus: string;
  Balance: number;
  ExchangeRate: ExchangeRate;
  LinkedTxn: LinkedTransaction;
  TotalAmt: number;
  HomeTotalAmt: number;
}

export interface PurchaseTaxRateList {
  TaxRateDetail: TaxRateDetail;
}

export interface SalesItemLineDetail {
  ItemRef: BaseReference;
  ClassRef: BaseReference;
  UnitPrice: number;
  RatePercent: number;
  PriceLevelRef: BaseReference;
  Qty: number;
  TaxCodeRef: BaseReference;
  ServiceDate: Date;
}

export interface SalesReceipt {
  Id: string;
  SyncToken: number;
  MetaData: MetaData;
  AutoDocNumber: string;
  DocNumber: string;
  TxnDate: Date;
  Line: Line;
  CustomerRef: BaseReference;
  DepartmentRef: BaseReference;
  BillEmail: EmailAddress;
  BillAddr: PhysicalAddress;
  DeliveryInfo: DeliveryInfo;
  ShipAddr: PhysicalAddress;
  PONumber: string;
  ShipMethodRef: BaseReference;
  ShipDate: Date;
  TrackingNum: string;
  PaymentMethodRef: BaseReference;
  PaymentRefNum: string;
  DepositToAccountRef: BaseReference;
  CustomerMemo: string;
  PrivateNote: string;
  TxnTaxDetail: TransactionTaxDetail;
  CustomField: CustomField;
  CurrencyRef: BaseReference;
  ClassRef: BaseReference;
  ApplyTaxAfterDiscount: string;
  PrintStatus: string;
  Balance: number;
  LinkedTxn: LinkedTransaction;
  EmailStatus: string;
  ExchangeRate: ExchangeRate;
  TotalAmt: number;
  HomeTotalAmt: number;
}

export interface SalesTaxRateList {
  TaxRateDetail: TaxRateDetail;
}

export interface SubTotalLineDetail {
  ItemRef: BaseReference;
  ClassRef: BaseReference;
  UnitPrice: number;
  Qty: number;
  TaxCodeRef: BaseReference;
}

export interface TaxAgency {
  Id: string;
  SyncToken: number;
  MetaData: MetaData;
  TaxTrackedOnPurchases: string;
  TaxTrackedOnSales: string;
  DisplayName: string;
}

export interface TaxCode {
  Id: string;
  SyncToken: number;
  MetaData: MetaData;
  Name: string;
  Description: string;
  Active: string;
  Taxable: string;
  TaxGroup: string;
  SalesTaxRateList: SalesTaxRateList;
  PurchaseTaxRateList: PurchaseTaxRateList;
}

export interface TaxLine {
  Id: string;
  LineNum: number;
  Description: string;
  Amount: number;
  DetailType: string;
  TaxLineDetail: TaxLineDetail;
}

export interface TaxRate {
  Id: string;
  SyncToken: number;
  MetaData: MetaData;
  Name: string;
  Description: string;
  Active: string;
  RateValue: number;
  AgencyRef: BaseReference;
  TaxReturnLineRef: BaseReference;
  SpecialTaxType: string;
  DisplayType: string;
  EffectiveTaxRate: EffectiveTaxRate;
}

export interface TaxLineDetail {
  PercentBased: string;
  NetAmountTaxable: number;
  TaxInclusiveAmount: number;
  OverrideDeltaAmount: number;
  TaxPercent: number;
  TaxRateRef: BaseReference;
}

export interface TaxRateDetail {
  TaxRateRef: BaseReference;
  TaxTypeApplicable: string;
  TaxOrder: string;
}

export interface TaxService {
  TaxCodeId: string;
  TaxCode: string;
  TaxRateDetails: TaxRateDetailLine;
}

export interface TaxRateDetailLine {
  TaxRateId: string;
  TaxRateName: string;
  RateValue: string;
  TaxAgencyId: string;
  TaxApplicableOn: string;
}

export interface TelephoneNumber {
  FreeFormNumber: string;
}

export interface Term {
  Id: string;
  SyncToken: number;
  MetaData: MetaData;
  Name: string;
  Active: string;
  Type: string;
  DiscountPercent: number;
  DueDays: number;
  DiscountDays: number;
  DayOfMonthDue: number;
  DueNextMonthDays: number;
  DiscountDayOfMonth: number;
  AttachableRef: BaseReference;
}

export interface TimeActivity {
  Id: string;
  SyncToken: number;
  MetaData: MetaData;
  TxnDate: string;
  NameOf: string;
  EmployeeRef: BaseReference;
  VendorRef: BaseReference;
  CustomerRef: BaseReference;
  ItemRef: BaseReference;
  ClassRef: BaseReference;
  BillableStatus: string;
  Taxable: string;
  HourlyRate: string;
  Minutes: number;
  Hours: number;
  BreakMinutes: number;
  BreakHours: number;
  Description: string;
  AttachableRef: BaseReference;
  DepartmentRef: BaseReference;
  StartTime: Date;
  EndTime: Date;
  TimeZone: string;
}

export interface DateActivity {
  Id: string;
  SyncToken: number;
  MetaData: MetaData;
  TxnDate: string;
  NameOf: string;
  EmployeeRef: BaseReference;
  VendorRef: BaseReference;
  CustomerRef: BaseReference;
  ItemRef: BaseReference;
  ClassRef: BaseReference;
  BillableStatus: string;
  Taxable: string;
  HourlyRate: string;
  Minutes: number;
  Hours: number;
  BreakMinutes: number;
  BreakHours: number;
  Description: string;
  AttachableRef: BaseReference;
  DepartmentRef: BaseReference;
  StartDate: Date;
  EndDate: Date;
  DateZone: string;
}

export interface TransactionTaxDetail {
  TxnTaxCodeRef: BaseReference;
  TotalTax: number;
  TaxLine: TaxLine;
}

export interface Transfer {
  Id: string;
  SyncToken: number;
  MetaData: MetaData;
  TxnDate: Date;
  CurrencyRef: BaseReference;
  PrivateNote: string;
  account_ref: BaseReference;
  ToAccountRef: BaseReference;
  Amount: number;
}

export interface Vendor {
  Id: string;
  SyncToken: number;
  MetaData: MetaData;
  AttachableRef: BaseReference;
  Title: string;
  GivenName: string;
  MiddleName: string;
  FamilyName: string;
  Suffix: string;
  CompanyName: string;
  DisplayName: string;
  PrintOnCheckName: string;
  Active: string;
  PrimaryPhone: TelephoneNumber;
  AlternatePhone: TelephoneNumber;
  Mobile: TelephoneNumber;
  Fax: TelephoneNumber;
  PrimaryEmailAddr: EmailAddress;
  WebAddr: WebSiteAddress;
  BillAddr: PhysicalAddress;
  OtherContactInfo: OtherContactInfo;
  TaxIdentifier: string;
  TermRef: BaseReference;
  Balance: number;
  AcctNum: string;
  Vendor1099: string;
  CurrencyRef: BaseReference;
  BillRate: number;
}

export interface WebSiteAddress {
  URI: string;
}

export interface VendorCredit {
  Id: string;
  SyncToken: number;
  MetaData: MetaData;
  DocNumber: string;
  TxnDate: Date;
  PrivateNote: string;
  Line: PurchaseLineItem;
  DepartmentRef: BaseReference;
  APAccountRef: BaseReference;
  VendorRef: BaseReference;
  TotalAmt: number;
  CurrencyRef: BaseReference;
  ExchangeRate: ExchangeRate;
}

export interface Report {
  Header: Record<string, any>;
  Rows: {
    Row: Record<string, any>[];
  };
  Columns: {
    Column: Record<string, any>[];
  };
}
