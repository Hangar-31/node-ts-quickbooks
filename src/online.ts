import { DeepPartial, QuickbooksArgs } from './@types/global';
import {
  Account,
  Bill,
  BillPayment,
  Budget,
  Class,
  CompanyCurrency,
  CompanyInfo,
  CreditMemo,
  Customer,
  CustomerType,
  Department,
  Deposit,
  Employee,
  Estimate,
  ExchangeRate,
  Invoice,
  Item,
  JournalCode,
  JournalEntry,
  Payment,
  PaymentMethod,
  Purchase,
  PurchaseOrder,
  RefundReceipt,
  Report,
  SalesReceipt,
  TaxAgency,
  TaxCode,
  TaxRate,
  TaxService,
  Term,
  TimeActivity,
  Transfer,
  Vendor,
  VendorCredit,
} from './@types/online';
import Quickbooks from './quickbooks';

type QuickbooksOnlineArgs = QuickbooksArgs & { minorVersion: string };

export default class QuickbooksOnline extends Quickbooks {
  constructor(opts: QuickbooksOnlineArgs) {
    super();
    opts.baseUrl =
      'https://sandbox-quickbooks.api.intuit.com/v3/company/' +
      opts.realmId +
      '/';
    opts.defaults = {
      searchParams: { minorversion: opts.minorVersion || '59' },
    };
    this.createClient(opts);
  }

  createAccount = (account: DeepPartial<Account>): Promise<Account> => {
    return this.client.post('account', { json: account });
  };
  // createAttachable(attachable: Attachable): Promise<Attachable> => {
  //   return this.client.post('attachable', { json: attachable });
  // }
  createBill = (bill: DeepPartial<Bill>): Promise<Bill> => {
    return this.client.post('bill', { json: bill });
  };
  createBillPayment = (
    billPayment: DeepPartial<BillPayment>
  ): Promise<BillPayment> => {
    return this.client.post('billpayment', { json: billPayment });
  };
  createClass = (klass: DeepPartial<Class>): Promise<Class> => {
    return this.client.post('class', { json: klass });
  };
  createCreditMemo = (
    creditMemo: DeepPartial<CreditMemo>
  ): Promise<CreditMemo> => {
    return this.client.post('creditmemo', { json: creditMemo });
  };
  createCustomer = (customer: DeepPartial<Customer>): Promise<Customer> => {
    return this.client.post('customer', { json: customer });
  };
  createDepartment = (
    department: DeepPartial<Department>
  ): Promise<Department> => {
    return this.client.post('department', { json: department });
  };
  createDeposit = (deposit: DeepPartial<Deposit>): Promise<Deposit> => {
    return this.client.post('deposit', { json: deposit });
  };
  createEmployee = (employee: DeepPartial<Employee>): Promise<Employee> => {
    return this.client.post('employee', { json: employee });
  };
  createEstimate = (estimate: DeepPartial<Estimate>): Promise<Estimate> => {
    return this.client.post('estimate', { json: estimate });
  };
  createInvoice = (invoice: DeepPartial<Invoice>): Promise<Invoice> => {
    return this.client.post('invoice', { json: invoice });
  };
  createItem = (item: DeepPartial<Item>): Promise<Item> => {
    return this.client.post('item', { json: item });
  };
  createJournalCode = (
    journalCode: DeepPartial<JournalCode>
  ): Promise<JournalCode> => {
    return this.client.post('journalcode', { json: journalCode });
  };
  createJournalEntry = (
    journalEntry: DeepPartial<JournalEntry>
  ): Promise<JournalEntry> => {
    return this.client.post('journalentry', { json: journalEntry });
  };
  createPayment = (payment: DeepPartial<Payment>): Promise<Payment> => {
    return this.client.post('payment', { json: payment });
  };
  createPaymentMethod = (
    paymentMethod: DeepPartial<PaymentMethod>
  ): Promise<PaymentMethod> => {
    return this.client.post('paymentmethod', { json: paymentMethod });
  };
  createPurchase = (purchase: DeepPartial<Purchase>): Promise<Purchase> => {
    return this.client.post('purchase', { json: purchase });
  };
  createPurchaseOrder = (
    purchaseOrder: DeepPartial<PurchaseOrder>
  ): Promise<PurchaseOrder> => {
    return this.client.post('purchaseorder', { json: purchaseOrder });
  };
  createRefundReceipt = (
    refundReceipt: DeepPartial<RefundReceipt>
  ): Promise<RefundReceipt> => {
    return this.client.post('refundreceipt', { json: refundReceipt });
  };
  createSalesReceipt = (
    salesReceipt: DeepPartial<SalesReceipt>
  ): Promise<SalesReceipt> => {
    return this.client.post('salesreceipt', { json: salesReceipt });
  };
  createTaxAgency = (taxAgency: DeepPartial<TaxAgency>): Promise<TaxAgency> => {
    return this.client.post('taxagency', { json: taxAgency });
  };
  createTaxService = (
    taxService: DeepPartial<TaxService>
  ): Promise<TaxService> => {
    return this.client.post('taxservice', { json: taxService });
  };
  createTerm = (term: DeepPartial<Term>): Promise<Term> => {
    return this.client.post('term', { json: term });
  };
  createTimeActivity = (
    timeActivity: DeepPartial<TimeActivity>
  ): Promise<TimeActivity> => {
    return this.client.post('timeactivity', { json: timeActivity });
  };
  createTransfer = (transfer: DeepPartial<Transfer>): Promise<Transfer> => {
    return this.client.post('transfer', { json: transfer });
  };
  createVendor = (vendor: DeepPartial<Vendor>): Promise<Vendor> => {
    return this.client.post('vendor', { json: vendor });
  };
  createVendorCredit = (
    vendorCredit: DeepPartial<VendorCredit>
  ): Promise<VendorCredit> => {
    return this.client.post('vendorcredit', { json: vendorCredit });
  };
  getAccount = (id: string): Promise<Account> => {
    return this.client.get('account/' + id);
  };
  // getAttachable(id: string): Promise<Attachable> => {
  //   return this.client.get('attachable/' + id);
  // }
  getBill = (id: string): Promise<Bill> => {
    return this.client.get('bill/' + id);
  };
  getBillPayment = (id: string): Promise<BillPayment> => {
    return this.client.get('billpayment/' + id);
  };
  getClass = (id: string): Promise<Class> => {
    return this.client.get('class/' + id);
  };
  getCompanyInfo = (id: string): Promise<CompanyInfo> => {
    return this.client.get('companyinfo/' + id);
  };
  getCompanyCurrency = (id: string): Promise<CompanyCurrency> => {
    return this.client.get('companycurrency/' + id);
  };
  getCreditMemo = (id: string): Promise<CreditMemo> => {
    return this.client.get('creditmemo/' + id);
  };
  getCustomer = (id: string): Promise<Customer> => {
    return this.client.get('customer/' + id);
  };
  getCustomerType = (id: string): Promise<CustomerType> => {
    return this.client.get('customertype/' + id);
  };
  getDepartment = (id: string): Promise<Department> => {
    return this.client.get('department/' + id);
  };
  getDeposit = (id: string): Promise<Deposit> => {
    return this.client.get('deposit/' + id);
  };
  getEmployee = (id: string): Promise<Employee> => {
    return this.client.get('employee/' + id);
  };
  getEstimate = (id: string): Promise<Estimate> => {
    return this.client.get('estimate/' + id);
  };
  getExchangeRate = (options: {
    currencycode: string;
    asofdate?: string;
  }): Promise<ExchangeRate> => {
    return this.client.get('exchangerate', { searchParams: options });
  };
  getEstimatePdf = (id: string): Promise<Estimate> => {
    return this.client.get('estimate/' + id);
  };
  sendEstimatePdf = (id: string, sendTo?: string): Promise<Estimate> => {
    return this.client.post('estimate/' + id + '/send', {
      searchParams: { sendTo },
    });
  };
  getInvoice = (id: string): Promise<Invoice> => {
    return this.client.get('invoice/' + id);
  };
  getInvoicePdf = (id: string): Promise<Invoice> => {
    return this.client.get('invoice/' + id);
  };
  sendInvoicePdf = (
    id: string,
    json: DeepPartial<Invoice> & {
      DeliveryAddress: { Address: string };
      SyncToken: number;
    }
  ): Promise<Invoice> => {
    return this.client.post('invoice/' + id + '/send', {
      json,
    });
  };
  getItem = (id: string): Promise<Item> => {
    return this.client.get('item/' + id);
  };
  getJournalCode = (id: string): Promise<JournalCode> => {
    return this.client.get('journalcode/' + id);
  };
  getJournalEntry = (id: string): Promise<JournalEntry> => {
    return this.client.get('journalentry/' + id);
  };
  getPayment = (id: string): Promise<Payment> => {
    return this.client.get('payment/' + id);
  };
  getPaymentMethod = (id: string): Promise<PaymentMethod> => {
    return this.client.get('paymentmethod/' + id);
  };
  getPurchase = (id: string): Promise<PurchaseOrder> => {
    return this.client.get('purchase/' + id);
  };
  getPurchaseOrder = (id: string): Promise<PurchaseOrder> => {
    return this.client.get('purchaseorder/' + id);
  };
  getRefundReceipt = (id: string): Promise<RefundReceipt> => {
    return this.client.get('refundreceipt/' + id);
  };
  getReports = (id: string): Promise<Report[]> => {
    return this.client.get('reports/' + id);
  };
  getSalesReceipt = (id: string): Promise<SalesReceipt> => {
    return this.client.get('salesreceipt/' + id);
  };
  getSalesReceiptPdf = (id: string): Promise<SalesReceipt> => {
    return this.client.get('salesreceipt/' + id);
  };
  sendSalesReceiptPdf = (
    id: string,
    sendTo?: string
  ): Promise<SalesReceipt> => {
    return this.client.post('salesreceipt/' + id + '/send', {
      searchParams: { sendTo },
    });
  };
  getTaxAgency = (id: string): Promise<TaxAgency> => {
    return this.client.get('taxagency/' + id);
  };
  getTaxCode = (id: string): Promise<TaxCode> => {
    return this.client.get('taxcode/' + id);
  };
  getTaxRate = (id: string): Promise<TaxRate> => {
    return this.client.get('taxrate/' + id);
  };
  getTerm = (id: string): Promise<Term> => {
    return this.client.get('term/' + id);
  };
  getTimeActivity = (id: string): Promise<TimeActivity> => {
    return this.client.get('timeactivity/' + id);
  };
  getTransfer = (id: string): Promise<Transfer> => {
    return this.client.get('transfer/' + id);
  };
  getVendor = (id: string): Promise<Vendor> => {
    return this.client.get('vendor/' + id);
  };
  getVendorCredit = (id: string): Promise<VendorCredit> => {
    return this.client.get('vendorcredit/' + id);
  };
  updateAccount = (account: DeepPartial<Account>): Promise<Account> => {
    return this.client.post('account', { json: account });
  };
  // updateAttachable(attachable: Attachable): Promise<Attachable> => {
  //   return this.client.post('attachable', { json: attachable });
  // }
  updateBill = (bill: DeepPartial<Bill>): Promise<Bill> => {
    return this.client.post('bill', { json: bill });
  };
  updateBillPayment = (
    billPayment: DeepPartial<BillPayment>
  ): Promise<BillPayment> => {
    return this.client.post('billpayment', { json: billPayment });
  };
  updateClass = (klass: DeepPartial<Class>): Promise<Class> => {
    return this.client.post('class', { json: klass });
  };
  updateCompanyInfo = (
    companyInfo: DeepPartial<CompanyInfo>
  ): Promise<CompanyInfo> => {
    return this.client.post('companyinfo', { json: companyInfo });
  };
  updateCreditMemo = (
    creditMemo: DeepPartial<CreditMemo>
  ): Promise<CreditMemo> => {
    return this.client.post('creditmemo', { json: creditMemo });
  };
  updateCustomer = (customer: DeepPartial<Customer>): Promise<Customer> => {
    return this.client.post('customer', { json: customer });
  };
  updateDepartment = (
    department: DeepPartial<Department>
  ): Promise<Department> => {
    return this.client.post('department', { json: department });
  };
  updateDeposit = (deposit: DeepPartial<Deposit>): Promise<Deposit> => {
    return this.client.post('deposit', { json: deposit });
  };
  updateEmployee = (employee: DeepPartial<Employee>): Promise<Employee> => {
    return this.client.post('employee', { json: employee });
  };
  updateEstimate = (estimate: DeepPartial<Estimate>): Promise<Estimate> => {
    return this.client.post('estimate', { json: estimate });
  };
  updateInvoice = (invoice: DeepPartial<Invoice>): Promise<Invoice> => {
    return this.client.post('invoice', { json: invoice });
  };
  updateItem = (item: DeepPartial<Item>): Promise<Item> => {
    return this.client.post('item', { json: item });
  };
  updateJournalCode = (
    journalCode: DeepPartial<JournalCode>
  ): Promise<JournalCode> => {
    return this.client.post('journalcode', { json: journalCode });
  };
  updateJournalEntry = (
    journalEntry: DeepPartial<JournalEntry>
  ): Promise<JournalEntry> => {
    return this.client.post('journalentry', { json: journalEntry });
  };
  updatePayment = (payment: DeepPartial<Payment>): Promise<Payment> => {
    return this.client.post('payment', { json: payment });
  };
  updatePaymentMethod = (
    paymentMethod: DeepPartial<PaymentMethod>
  ): Promise<PaymentMethod> => {
    return this.client.post('paymentmethod', { json: paymentMethod });
  };
  // updatePreferences(preferences: Preferences): Promise<Preferences> => {
  //   return this.client.post('preferences', { json: preferences });
  // }
  updatePurchase = (purchase: DeepPartial<Purchase>): Promise<Purchase> => {
    return this.client.post('purchase', { json: purchase });
  };
  updatePurchaseOrder = (
    purchaseOrder: DeepPartial<PurchaseOrder>
  ): Promise<PurchaseOrder> => {
    return this.client.post('purchaseorder', { json: purchaseOrder });
  };
  updateRefundReceipt = (
    refundReceipt: DeepPartial<RefundReceipt>
  ): Promise<RefundReceipt> => {
    return this.client.post('refundreceipt', { json: refundReceipt });
  };
  updateSalesReceipt = (
    salesReceipt: DeepPartial<SalesReceipt>
  ): Promise<SalesReceipt> => {
    return this.client.post('salesreceipt', { json: salesReceipt });
  };
  updateTaxAgency = (taxAgency: DeepPartial<TaxAgency>): Promise<TaxAgency> => {
    return this.client.post('taxagency', { json: taxAgency });
  };
  updateTaxCode = (taxCode: DeepPartial<TaxCode>): Promise<TaxCode> => {
    return this.client.post('taxcode', { json: taxCode });
  };
  updateTaxRate = (taxRate: DeepPartial<TaxRate>): Promise<TaxRate> => {
    return this.client.post('taxrate', { json: taxRate });
  };
  updateTerm = (term: DeepPartial<Term>): Promise<Term> => {
    return this.client.post('term', { json: term });
  };
  updateTimeActivity = (
    timeActivity: DeepPartial<TimeActivity>
  ): Promise<TimeActivity> => {
    return this.client.post('timeactivity', { json: timeActivity });
  };
  updateTransfer = (transfer: DeepPartial<Transfer>): Promise<Transfer> => {
    return this.client.post('transfer', { json: transfer });
  };
  updateVendor = (vendor: DeepPartial<Vendor>): Promise<Vendor> => {
    return this.client.post('vendor', { json: vendor });
  };
  updateVendorCredit = (
    vendorCredit: DeepPartial<VendorCredit>
  ): Promise<VendorCredit> => {
    return this.client.post('vendorcredit', { json: vendorCredit });
  };
  updateExchangeRate = (exchangeRate: DeepPartial<number>): Promise<number> => {
    return this.client.post('exchangerate', { json: exchangeRate });
  };
  // deleteAttachable(idOrEntity: string | Attachable): Promise<Attachable> => {
  //   return this.client.deleteEntity('attachable', {  idOrEntity });
  // }
  deleteCustomer = (idOrEntity: string | Customer): Promise<Customer> => {
    return this.client.deleteEntity('customer', idOrEntity);
  };
  deleteClass = (idOrEntity: string | Class): Promise<Class> => {
    return this.client.deleteEntity('class', idOrEntity);
  };
  deleteDepartment = (idOrEntity: string | Department): Promise<Department> => {
    return this.client.deleteEntity('department', idOrEntity);
  };
  deleteEmployee = (idOrEntity: string | Employee): Promise<Employee> => {
    return this.client.deleteEntity('employee', idOrEntity);
  };
  deleteItem = (idOrEntity: string | Item): Promise<Item> => {
    return this.client.deleteEntity('item', idOrEntity);
  };
  deletePaymentMethod = (
    idOrEntity: string | PaymentMethod
  ): Promise<PaymentMethod> => {
    return this.client.deleteEntity('paymentmethod', idOrEntity);
  };
  deleteTerm = (idOrEntity: string | Term): Promise<Term> => {
    return this.client.deleteEntity('term', idOrEntity);
  };
  deleteVendor = (idOrEntity: string | Vendor): Promise<Vendor> => {
    return this.client.deleteEntity('vendor', idOrEntity);
  };
  deleteBill = (idOrEntity: string | Bill): Promise<Bill> => {
    return this.client.deleteEntity('bill', idOrEntity);
  };
  deleteBillPayment = (
    idOrEntity: string | BillPayment
  ): Promise<BillPayment> => {
    return this.client.deleteEntity('billpayment', idOrEntity);
  };
  deleteCreditMemo = (idOrEntity: string | CreditMemo): Promise<CreditMemo> => {
    return this.client.deleteEntity('creditmemo', idOrEntity);
  };
  deleteDeposit = (idOrEntity: string | Deposit): Promise<Deposit> => {
    return this.client.deleteEntity('deposit', idOrEntity);
  };
  deleteEstimate = (idOrEntity: string | Estimate): Promise<Estimate> => {
    return this.client.deleteEntity('estimate', idOrEntity);
  };
  deleteInvoice = (idOrEntity: string | Invoice): Promise<Invoice> => {
    return this.client.deleteEntity('invoice', idOrEntity);
  };
  deleteJournalCode = (
    idOrEntity: string | JournalCode
  ): Promise<JournalCode> => {
    return this.client.deleteEntity('journalcode', idOrEntity);
  };
  deleteJournalEntry = (
    idOrEntity: string | JournalEntry
  ): Promise<JournalEntry> => {
    return this.client.deleteEntity('journalentry', idOrEntity);
  };
  deletePayment = (idOrEntity: string | Payment): Promise<Payment> => {
    return this.client.deleteEntity('payment', idOrEntity);
  };
  deletePurchase = (idOrEntity: string | Purchase): Promise<Purchase> => {
    return this.client.deleteEntity('purchase', idOrEntity);
  };
  deletePurchaseOrder = (
    idOrEntity: string | PurchaseOrder
  ): Promise<PurchaseOrder> => {
    return this.client.deleteEntity('purchaseorder', idOrEntity);
  };
  deleteRefundReceipt = (
    idOrEntity: string | RefundReceipt
  ): Promise<RefundReceipt> => {
    return this.client.delete('refundreceipt', idOrEntity);
  };
  deleteSalesReceipt = (
    idOrEntity: string | SalesReceipt
  ): Promise<SalesReceipt> => {
    return this.client.deleteEntity('salesreceipt', idOrEntity);
  };
  deleteTimeActivity = (
    idOrEntity: string | TimeActivity
  ): Promise<TimeActivity> => {
    return this.client.deleteEntity('timeactivity', idOrEntity);
  };
  deleteTransfer = (idOrEntity: string | Transfer): Promise<Transfer> => {
    return this.client.deleteEntity('transfer', idOrEntity);
  };
  deleteVendorCredit = (
    idOrEntity: string | VendorCredit
  ): Promise<VendorCredit> => {
    return this.client.deleteEntity('vendorcredit', idOrEntity);
  };
  findAccounts = (statement: string): Promise<Account[]> => {
    return this.client.get('query', { searchParams: { query: statement } });
  };
  // findAttachables(statement: string): Promise<Attachable[]> => {
  //   return this.client.get('query', {searchParams: { query: statement }});
  // }
  findBills = (statement: string): Promise<Bill[]> => {
    return this.client.get('query', { searchParams: { query: statement } });
  };
  findBillPayments = (statement: string): Promise<BillPayment[]> => {
    return this.client.get('query', { searchParams: { query: statement } });
  };
  findBudgets = (statement: string): Promise<Budget[]> => {
    return this.client.get('query', { searchParams: { query: statement } });
  };
  findClasses = (statement: string): Promise<Class[]> => {
    return this.client.get('query', { searchParams: { query: statement } });
  };
  findCompanyInfos = (statement: string): Promise<CompanyInfo[]> => {
    return this.client.get('query', { searchParams: { query: statement } });
  };
  findCompanyCurrencies = (statement: string): Promise<CompanyCurrency[]> => {
    return this.client.get('query', { searchParams: { query: statement } });
  };
  findCreditMemos = (statement: string): Promise<CreditMemo[]> => {
    return this.client.get('query', { searchParams: { query: statement } });
  };
  findCustomers = (
    statement: string
  ): Promise<{
    Customer: Customer[];
    startPosition: number;
    maxResults: number;
  }> => {
    return this.client.get('query', { searchParams: { query: statement } });
  };
  findCustomerTypes = (statement: string): Promise<CustomerType[]> => {
    return this.client.get('query', { searchParams: { query: statement } });
  };
  findDepartments = (statement: string): Promise<Department[]> => {
    return this.client.get('query', { searchParams: { query: statement } });
  };
  findDeposits = (statement: string): Promise<Deposit[]> => {
    return this.client.get('query', { searchParams: { query: statement } });
  };
  findEmployees = (statement: string): Promise<Employee[]> => {
    return this.client.get('query', { searchParams: { query: statement } });
  };
  findEstimates = (statement: string): Promise<Estimate[]> => {
    return this.client.get('query', { searchParams: { query: statement } });
  };
  findInvoices = (
    statement: string,
    includeLink?: boolean
  ): Promise<{ QueryResponse: { Invoice: Invoice[] } }> => {
    const opts = {
      searchParams: { include: '', query: statement },
    };
    if (includeLink) opts.searchParams.include = 'invoiceLink';
    return this.client.get('query', opts);
  };
  findItems = (
    statement: string
  ): Promise<{ Item: Item[]; startPosition: number; maxResults: number }> => {
    return this.client.get('query', { searchParams: { query: statement } });
  };
  findJournalCodes = (statement: string): Promise<JournalCode[]> => {
    return this.client.get('query', { searchParams: { query: statement } });
  };
  findJournalEntries = (statement: string): Promise<JournalEntry[]> => {
    return this.client.get('query', { searchParams: { query: statement } });
  };
  findPayments = (statement: string): Promise<Payment[]> => {
    return this.client.get('query', { searchParams: { query: statement } });
  };
  findPaymentMethods = (statement: string): Promise<PaymentMethod[]> => {
    return this.client.get('query', { searchParams: { query: statement } });
  };
  // findPreferenceses(statement: string): Promise<Preferences[]> => {
  //   return this.client.get('query', { searchParams: { query: statement } });
  // }
  findPurchases = (statement: string): Promise<Purchase[]> => {
    return this.client.get('query', { searchParams: { query: statement } });
  };
  findPurchaseOrders = (statement: string): Promise<PurchaseOrder[]> => {
    return this.client.get('query', { searchParams: { query: statement } });
  };
  findRefundReceipts = (statement: string): Promise<RefundReceipt[]> => {
    return this.client.get('query', { searchParams: { query: statement } });
  };
  findSalesReceipts = (statement: string): Promise<SalesReceipt[]> => {
    return this.client.get('query', { searchParams: { query: statement } });
  };
  findTaxAgencies = (statement: string): Promise<TaxAgency[]> => {
    return this.client.get('query', { searchParams: { query: statement } });
  };
  findTaxCodes = (statement: string): Promise<TaxCode[]> => {
    return this.client.get('query', { searchParams: { query: statement } });
  };
  findTaxRates = (statement: string): Promise<TaxRate[]> => {
    return this.client.get('query', { searchParams: { query: statement } });
  };
  findTerms = (statement: string): Promise<Term[]> => {
    return this.client.get('query', { searchParams: { query: statement } });
  };
  findTimeActivities = (statement: string): Promise<TimeActivity[]> => {
    return this.client.get('query', { searchParams: { query: statement } });
  };
  findTransfers = (statement: string): Promise<Transfer[]> => {
    return this.client.get('query', { searchParams: { query: statement } });
  };
  findVendors = (statement: string): Promise<Vendor[]> => {
    return this.client.get('query', { searchParams: { query: statement } });
  };
  findVendorCredits = (statement: string): Promise<VendorCredit[]> => {
    return this.client.get('query', { searchParams: { query: statement } });
  };
  findExchangeRates = (statement: string): Promise<number[]> => {
    return this.client.get('query', { searchParams: { query: statement } });
  };
  reportBalanceSheet = (options: Record<string, any>): Promise<Report> => {
    return this.client.get('reports/BalanceSheet', { searchParams: options });
  };
  reportProfitAndLoss = (options: Record<string, any>): Promise<Report> => {
    return this.client.get('reports/ProfitAndLoss', { searchParams: options });
  };
  reportProfitAndLossDetail = (
    options: Record<string, any>
  ): Promise<Report> => {
    return this.client.get('reports/ProfitAndLossDetail', {
      searchParams: options,
    });
  };
  reportTrialBalance = (options: Record<string, any>): Promise<Report> => {
    return this.client.get('reports/TrialBalance', { searchParams: options });
  };
  reportTrialBalanceFR = (options: Record<string, any>): Promise<Report> => {
    return this.client.get('reports/TrialBalanceFR', {
      searchParams: options,
    });
  };
  reportCashFlow = (options: Record<string, any>): Promise<Report> => {
    return this.client.get('reports/CashFlow', { searchParams: options });
  };
  reportInventoryValuationSummary = (
    options: Record<string, any>
  ): Promise<Report> => {
    return this.client.get('reports/InventoryValuationSummary', {
      searchParams: options,
    });
  };
  reportCustomerSales = (options: Record<string, any>): Promise<Report> => {
    return this.client.get('reports/CustomerSales', { searchParams: options });
  };
  reportItemSales = (options: Record<string, any>): Promise<Report> => {
    return this.client.get('reports/ItemSales', { searchParams: options });
  };
  reportCustomerIncome = (options: Record<string, any>): Promise<Report> => {
    return this.client.get('reports/CustomerIncome', {
      searchParams: options,
    });
  };
  reportCustomerBalance = (options: Record<string, any>): Promise<Report> => {
    return this.client.get('reports/CustomerBalance', {
      searchParams: options,
    });
  };
  reportCustomerBalanceDetail = (
    options: Record<string, any>
  ): Promise<Report> => {
    return this.client.get('reports/CustomerBalanceDetail', {
      searchParams: options,
    });
  };
  reportAgedReceivables = (options: Record<string, any>): Promise<Report> => {
    return this.client.get('reports/AgedReceivables', {
      searchParams: options,
    });
  };
  reportAgedReceivableDetail = (
    options: Record<string, any>
  ): Promise<Report> => {
    return this.client.get('reports/AgedReceivableDetail', {
      searchParams: options,
    });
  };
  reportVendorBalance = (options: Record<string, any>): Promise<Report> => {
    return this.client.get('reports/VendorBalance', { searchParams: options });
  };
  reportVendorBalanceDetail = (
    options: Record<string, any>
  ): Promise<Report> => {
    return this.client.get('reports/VendorBalanceDetail', {
      searchParams: options,
    });
  };
  reportAgedPayables = (options: Record<string, any>): Promise<Report> => {
    return this.client.get('reports/AgedPayables', { searchParams: options });
  };
  reportAgedPayableDetail = (options: Record<string, any>): Promise<Report> => {
    return this.client.get('reports/AgedPayableDetail', {
      searchParams: options,
    });
  };
  reportVendorExpense = (options: Record<string, any>): Promise<Report> => {
    return this.client.get('reports/VendorExpenses', {
      searchParams: options,
    });
  };
  reportTransactionList = (options: Record<string, any>): Promise<Report> => {
    return this.client.get('reports/TransactionList', {
      searchParams: options,
    });
  };
  reportGeneralLedger = (options: Record<string, any>): Promise<Report> => {
    return this.client.get('reports/GeneralLedger', { searchParams: options });
  };
  reportTaxSummary = (options: Record<string, any>): Promise<Report> => {
    return this.client.get('reports/TaxSummary', { searchParams: options });
  };
  reportDepartmentSales = (options: Record<string, any>): Promise<Report> => {
    return this.client.get('reports/DepartmentSales', {
      searchParams: options,
    });
  };
  reportClassSales = (options: Record<string, any>): Promise<Report> => {
    return this.client.get('reports/ClassSales', { searchParams: options });
  };
  reportAccountList = (options: Record<string, any>): Promise<Report> => {
    return this.client.get('reports/AccountList', { searchParams: options });
  };
  reportJournalReport = (options: Record<string, any>): Promise<Report> => {
    return this.client.get('reports/JournalReport', { searchParams: options });
  };
}
