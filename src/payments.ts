import { QuickbooksArgs } from './@types/global';
import { Capture, Card, Charge, Refund, VoidObject } from './@types/payment';
import Quickbooks from './quickbooks';

class QuickbooksPayments extends Quickbooks {
  constructor(opts: QuickbooksArgs) {
    super();
    opts.baseUrl = 'https://sandbox.api.intuit.com/quickbooks/v4/';
    this.createClient(opts);
  }
  getAllCards(customerId: string): Promise<Card[]> {
    return this.client.get('customers/' + customerId + '/cards');
  }
  getCard(customerId: string, cardId: string): Promise<Card> {
    return this.client.get('customers/' + customerId + '/cards/' + cardId);
  }
  createCard(customerId: string, card: Card): Promise<Card> {
    return this.client.post('customers/' + customerId + '/cards', {
      json: card,
    });
  }
  createCardFromToken(customerId: string, token: string): Promise<Card> {
    return this.client.post(
      'customers/' + customerId + '/cards/createFromToken',
      {
        json: {
          value: token,
        },
      }
    );
  }
  deleteCard(customerId: string, cardId: string): Promise<void> {
    return this.client.delete('customers/' + customerId + '/cards/' + cardId);
  }
  createCharge(charge: Charge): Promise<Charge> {
    return this.client.post('payments/charges', { json: charge });
  }
  getRefund(chargeId: string, refundId: string): Promise<Refund> {
    return this.client.get(
      'payments/charges/' + chargeId + '/refunds/' + refundId
    );
  }
  getCharge(chargeId: string): Promise<Charge> {
    return this.client.get('payments/charges/' + chargeId);
  }
  createRefund(chargeId: string, refund: Capture): Promise<Refund> {
    return this.client.post('payments/charges/' + chargeId + '/refunds', {
      json: refund,
    });
  }
  captureFunds(chargeId: string, capture: Capture): Promise<Charge> {
    return this.client.post('payments/charges/' + chargeId + '/capture', {
      json: capture,
    });
  }
  void(chargeId: string): Promise<VoidObject> {
    return this.client.post('payments/txn-requests/' + chargeId + '/void');
  }
}

export default QuickbooksPayments;
