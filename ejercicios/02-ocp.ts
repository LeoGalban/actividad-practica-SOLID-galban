// Contrato común: todo medio de pago sabe pagar un monto
interface PaymentMethod {
  pay(amount: number): void;
}

class CardPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Pagando $${amount} con tarjeta`);
  }
}

class CashPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Pagando $${amount} en efectivo`);
  }
}

// Medio nuevo: se agrega con una clase nueva, sin tocar PaymentProcessor
class TransferPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Pagando $${amount} con transferencia`);
  }
}

// No tiene switch: delega en el medio de pago que recibe
class PaymentProcessor {
  pay(method: PaymentMethod, amount: number): void {
    method.pay(amount);
  }
}

new PaymentProcessor().pay(new CardPayment(), 100);
